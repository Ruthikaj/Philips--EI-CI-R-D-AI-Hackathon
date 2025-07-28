const url = 'https://api.mistral.ai/v1/conversations';
 
const data = `{
     "inputs": "${symptoms}",
     "stream": false,
     "agent_id": "ag_019830865bc671d9b310073057ba1658"
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
 
const result = await response.text();
