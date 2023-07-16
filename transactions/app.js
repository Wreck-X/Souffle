const { Actor, HttpAgent, Identity, Principal } = require('@dfinity/agent');
const fetch = require('node-fetch');

async function getItems() {
  const response = await canister.getItems();
  console.log(response);
}



// Create an agent with an anonymous identity
const agent = new HttpAgent({
  identity: new Identity(),
  fetch,
  host: 'http://localhost:4943',
});

// Get the canister Id
const canisterId = Principal.fromText('br5f7-7uaaa-aaaaa-qaaca-cai');

// Create an actor instance
const canister = Actor.createActor(canisterId, { agent });

// Call a method on the canister
const response = getItems();
console.log(response);