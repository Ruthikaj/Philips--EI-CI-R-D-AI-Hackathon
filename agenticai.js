const url = 'https://api.mistral.ai/v1/chat/completions';
 
const data = `{
    "model": "mistral-large-latest",
    "messages": [
       {
        "role": "system",
        "content": "You are medical assitant aI which needs to triage patient vitals and assign doctors and bed, provide me in listed form includes only necessary details in bullet point"
      },
       {
        "role": "user",
        "content": "High heart rate and low temprature spo2"
      }
    ]
  }`;
 
const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer hgMktD7XhwMOh3btHZNquehUH2Fp46dD',
    },
    body: data,
});
 
const text = await response.text();
