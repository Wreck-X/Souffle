import json
from fastapi import Request, FastAPI
from fastapi.responses import JSONResponse
from ic import Identity, Agent, Client
from ic.canister import Canister
from fastapi.middleware.cors import CORSMiddleware
from makeTransactions import Donate

identity = Identity()
client = Client(url="http://localhost:4943")
agent = Agent(identity, client)

with open('.dfx/local/canister_ids.json') as x:
    y = json.load(x)
    canister_id =y['transactions']['local']

canister = Canister(agent, canister_id)

app = FastAPI()

origins = ["*"]  # Replace * with the actual domain from which you want to allow requests

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/webhooks")
async def root(request: Request):
    webhook_data = await request.body()
    data = webhook_data.decode("utf-8")
    data = json.loads(data)
    element = json_check(data)
    canister.append(str(element))
    return 'ok', 200


@app.post("/PayPal")
async def root(request: Request):
    req_data = await request.body()
    req_data = json.loads(req_data)
    redirect = Donate(req_data['amount'])
    return redirect , 200



@app.get("/transaction_data")
async def root(request: Request):
    response = canister.getItems()[0]
    result = {}
    for json_str in response:
        json_obj = json.loads(json_str.replace("'", "\""))
        org_name = json_obj['Organisation']
        data = json_obj['data']
        if org_name not in result:
            result[org_name] = []
        result[org_name].append(data)
    result_json = json.dumps(result)
    return result_json, 200


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

def json_check(data):
    try:
        if data["event_type"] == "PAYMENTS.PAYMENT.CREATED":
            data = {"Organisation": 'test',
                 'data': {
                     data["id"]: {
                         'summary': data["summary"],
                         'resource_type': data["resource_type"],
                         'total': data["resource"]["transactions"][0]["amount"]["total"],
                         'create_time': data["resource"]["create_time"],
                         'recipient': ''}
                    }
                 }
        elif data["event_type"] == "PAYMENT.SALE.COMPLETED":
            data = {"Organisation": 'test',
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
            data = {"Organisation": 'test',
                 'data': {
                     data["id"]: {
                         'summary': data["summary"],
                         'resource_type': data["resource_type"],
                         'total': data["resource"]['batch_header']["amount"]["value"],
                         'create_time': data["resource"]["batch_header"]["time_created"],
                         'recipient': 'Multiple recipients'}
                 }
                 }

        elif data["event_type"] == "PAYMENT.PAYOUTS-ITEM.SUCCEEDED":
            data = {"Organisation": 'test',
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
            print('invalid event_type')

    except Exception as e:
        print(e)
        print(Exception)
        raise e

    return data

def properjson():
    pass