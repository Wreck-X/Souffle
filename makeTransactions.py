import requests
import json
import time

# Set up the API credentials and URLs
client_id = 'Ab5GX8vPqKXDLfGHDIZJbSo-UTU3-h6VPUox8rdOcGTOosMUHuLmoiXQru_ycYC376STYx-FJ9HtDSaK'
client_secret = 'EPS5KUzVEZ_pRf-PRRh1B1IHGeNpExUMZ1Ia-NHUJ00VAFqD2EB3GJuzkpO819You8ukhbnzmxT320b6'
base_url = 'https://api.sandbox.paypal.com'

auth_url = base_url + '/v1/oauth2/token'
auth_headers = {'Accept': 'application/json', 'Accept-Language': 'en_US'}
auth_payload = {'grant_type': 'client_credentials'}
auth_response = requests.post(auth_url, headers=auth_headers, auth=(client_id, client_secret), data=auth_payload)
auth_data = json.loads(auth_response.text)
access_token = auth_data['access_token']

# Set up the donation details
def Donate():
    donation_data = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "transactions": [
            {
                "amount": {
                    "total": "10.00",
                    "currency": "USD"
                },
                "description": "Donation to My Cause"
            }
        ],
        "redirect_urls": {
            "return_url": "https://example.com/success",
            "cancel_url": "https://example.com/cancel"
        }
    }

    # Make the donation request
    donation_url = base_url + '/v1/payments/payment'
    donation_headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access_token}
    donation_response = requests.post(donation_url, headers=donation_headers, data=json.dumps(donation_data))
    donation_data = json.loads(donation_response.text)
    donation_id = donation_data['id']
    donation_approval_url = next(link['href'] for link in donation_data['links'] if link['rel'] == 'approval_url')

    # Redirect the user to PayPal for donation approval
    print('Please visit the following URL to make a donation:', donation_approval_url)

    # After the user approves the donation on PayPal and returns to your website
    execute_donation_url = base_url + '/v1/payments/payment/' + donation_id + '/execute'
    donor_payer_id = input('Enter the PayerID from the donation approval URL: ')
    execute_donation_data = {'payer_id': donor_payer_id}
    execute_donation_response = requests.post(execute_donation_url, headers=donation_headers, data=json.dumps(execute_donation_data))
    execute_donation_data = json.loads(execute_donation_response.text)
    print(execute_donation_data)
    if execute_donation_data['state'] == 'approved':
        
        print('Donation successfully completed.')
    else:
        print('Donation execution failed.')


def Pay():
    email = input("Enter recipient email: ")
    sender_batch_id = 'PAYOUT_' + str(int(time.time()))
    payout_data = {
        "sender_batch_header": {
            "sender_batch_id": sender_batch_id,
            "email_subject": "Payment from Shop Owner"
        },
        "items": [
            {
                "recipient_type": "EMAIL",
                "amount": {
                    "value": "10.00",
                    "currency": "USD"
                },
                "note": "On the house!",
                "receiver": email
            }
        ]
    }

    # Make the payout request
    payout_url = base_url + '/v1/payments/payouts'
    payout_headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access_token}
    payout_response = requests.post(payout_url, headers=payout_headers, data=json.dumps(payout_data))
    payout_data = json.loads(payout_response.text)
    print(payout_data)

    # Check the payout response
    if payout_response.status_code == 201:
        print('Payout successfully initiated.')
        payout_batch_id = payout_data['batch_header']['payout_batch_id']
        print('Payout Batch ID:', payout_batch_id)
    else:
        print('Payout initiation failed.')
        print('Error:', payout_data)

def CancelPayout(payout_item_id):
    cancel_url = base_url + f'/v1/payments/payouts-item/{payout_item_id}/cancel'
    cancel_headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access_token}
    cancel_response = requests.post(cancel_url, headers=cancel_headers)
    print(cancel_response.text)
    # Check the cancellation response
    if cancel_response.status_code == 200:
        print('Payout item successfully canceled.')
    else:
        cancel_data = json.loads(cancel_response.text)
        print('Payout item cancellation failed.')
        print('Error:', cancel_data)




if __name__ == '__main__':
    print("1. Receive")
    print("2. Spend")
    print("3. Cancel Last batch")
    choice = input("Enter your choice: ")
    if choice == '1':
        Donate()
    elif choice == '2':
        Pay()
    elif choice == '3':
        CancelPayout("MXU9SD55VXUSA")
    else:
        print("Invalid choice")