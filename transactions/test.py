import json
import requests
x = "Les_Belles_Fleurs"
for i in [{'Organisation': x, 'data': {'WH-8SF49949JV771893F-2AY68533SW000372X': {'summary': 'Payouts batch completed successfully.', 'resource_type': 'payouts', 'total': '10.00', 'create_time': '2023-07-15T15:51:32Z', 'recipient': 'Multiple recipients'}}},{'Organisation': x, 'data': {'WH-8SF12349JV771893F-2AY68533SW000372X': {'summary': 'Payouts batch completed successfully.', 'resource_type': 'payouts', 'total': '10.00', 'create_time': '2023-07-15T15:51:32Z', 'recipient': 'Multiple recipients'}}},{'Organisation': x, 'data': {'WH-8SF12349JV771893F-2AY68533SW000372X': {'summary': 'Payouts batch completed successfully.', 'resource_type': 'payouts', 'total': '50.00', 'create_time': '2023-07-15T15:51:32Z', 'recipient': 'Multiple recipients'}}},{'Organisation': x, 'data': {'WH-4B184081SX879632N-5FE14981RY0797708': {'summary': 'Checkout payment is created and approved by buyer', 'resource_type': 'payment', 'total': '10.00', 'create_time': '2023-07-16T04:05:27Z', 'recipient': ''}}},{'Organisation': x, 'data': {'WH-9FH10587CK602435G-5YH105490G689523T': {'summary': 'Checkout payment is created and approved by buyer', 'resource_type': 'payment', 'total': '10.00', 'create_time': '2023-07-16T04:17:27Z', 'recipient': ''}}}]:
    response = requests.post('https://souffle.biscuitbobby.me/transaction_data', str(i))