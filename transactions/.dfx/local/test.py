from ic import Identity, Agent, Client
from ic.canister import Canister

# Create an Identity instance
identity = Identity()

# Create a Client and an Agent instance
client = Client(url="http://localhost:4943")
agent = Agent(identity, client)

# Create a Canister instance
canister = Canister(agent, "br5f7-7uaaa-aaaaa-qaaca-cai")

# Call a method on the canister
response = canister.getItems()
print(response)
