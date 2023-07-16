async function makeTransaction(amount) {
  console.log("Making transaction...");
  const apiUrl = "https://souffle.biscuitbobby.me/PayPal/";
  const requestData = {
    // "id": ID,
    amount: amount,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const responseData = await response.json();

    console.log(responseData);
    return responseData[0];
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export default makeTransaction;
