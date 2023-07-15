import json
import subprocess

from fastapi import Request, FastAPI

app = FastAPI()

@app.post("/webhooks")
async def root(request: Request):
    webhook_data = await request.body()
    data = webhook_data.decode("utf-8")
    data = json.loads(data)
    x = check_for_success(data)

    try:
        start_dfx()
        subprocess.run(["dfx", "canister", "call", "transactions", "append", f"{x}"])
    except Exception as e:
        try:
            subprocess.run(["dfx", "canister", "call", "transactions", "append", f"{x}"])
        except Exception as e:
            print(Exception)
        print(Exception)

    return 'ok', 200

@app.get("/transaction_data")
async def root(request: Request):
    import subprocess
    completed_process = subprocess.run(["dfx", "canister", "call", "transactions", "getItems"], capture_output=True, text=True)
    if completed_process.returncode == 0:
        data = completed_process.stdout
    else:
        print("Command failed with error code", completed_process.returncode)
        return "I'm a teapot", 418

    data = json.loads(data)

    x = check_for_success(data)

    print(x)
    return 'ok', 200


@app.get("/test")
async def root(request: Request):
    data = '{"id":"WH-8S192554TG600834U-01761363362210947","event_version":"1.0","create_time":"2023-07-15T13:17:59.917Z","resource_type":"sale","event_type":"PAYMENT.SALE.COMPLETED","summary":"Payment completed for $ 10.0 USD","resource":{"amount":{"total":"10.00","currency":"USD","details":{"subtotal":"10.00"}},"payment_mode":"INSTANT_TRANSFER","create_time":"2023-07-15T13:17:51Z","transaction_fee":{"currency":"USD","value":"0.84"},"parent_payment":"PAYID-MSZJWSA19H28640MJ1830002","update_time":"2023-07-15T13:17:51Z","protection_eligibility_type":"ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE","application_context":{"related_qualifiers":[{"id":"3HA731552F654474R","type":"CART"}]},"protection_eligibility":"ELIGIBLE","links":[{"method":"GET","rel":"self","href":"https://api.sandbox.paypal.com/v1/payments/sale/51702746VX892953R"},{"method":"POST","rel":"refund","href":"https://api.sandbox.paypal.com/v1/payments/sale/51702746VX892953R/refund"},{"method":"GET","rel":"parent_payment","href":"https://api.sandbox.paypal.com/v1/payments/payment/PAYID-MSZJWSA19H28640MJ1830002"}],"id":"51702746VX892953R","state":"completed","invoice_number":""},"links":[{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-8S192554TG600834U-01761363362210947","rel":"self","method":"GET"},{"href":"https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-8S192554TG600834U-01761363362210947/resend","rel":"resend","method":"POST"}]}'
    data = json.loads(data)

    x = {"Organisation":'test',
         'data':{
             data["id"]: {
             'summary': data["summary"],
             'resource_type': data["resource_type"],
             'total': data["resource"]["amount"]["total"],
             'create_time': data["resource"]["create_time"],
             'recipient': ''}
            }
         }
    return x

def check_for_success(data):
    try:
        if data["event_type"] == "PAYMENT.SALE.COMPLETED":
            x = {"Organisation": 'test',
                 'data': {
                     data["id"]: {
                         'summary': data["summary"],
                         'resource_type': data["resource_type"],
                         'total': data["resource"]["amount"]["total"],
                         'create_time': data["resource"]["create_time"],
                         'recipient': ''}
                    }
                 }
        elif data["event_type"] == "PAYMENT.PAYOUTSBATCH.SUCCESS":
            x = {"Organisation": 'test',
                 'data': {
                     data["id"]: {
                         'summary': data["summary"],
                         'resource_type': data["resource_type"],
                         'total': data["resource"]['batch_header']["amount"]["value"],
                         'create_time': data["resource"]["time_create"],
                         'recipient': 'Multiple recipients'}
                    }
                 }
        elif data["event_type"] == "PAYMENT.PAYOUTS-ITEM.SUCCEEDED":
            x = {"Organisation": 'test',
                 'data': {
                     data["id"]: {
                         'summary': data["summary"],
                         'resource_type': data["resource_type"],
                         'total': data["resource"]['payout_item']["amount"]["value"],
                         'create_time': data["resource"]["time_processed"],
                         'recipient': data["resource"]['payout_item']["receiver"]}
                    }
                 }
        else:
            raise Exception

    except Exception as e:
        print(e)
        return e

    return x

def start_dfx():
    subprocess.run(["dfx", "start", "--background"])
    subprocess.run(["dfx", "deploy"])

