console.log("api...")

res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())

resp = await res
console.log(resp)

// rest2 = fetch('https://jsonplaceholder.typicode.com/todos/1')
// resp_json = await rest2
// resp_json.json()
