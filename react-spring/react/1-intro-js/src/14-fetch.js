const httpClient = fetch("https://jsonplaceholder.typicode.com/users")

// httpClient.then(response => {
//     //console.log(response);
//     response.json().then( data => {
//         console.log(data);
//     });
// })

httpClient.then( response => {
    return response.json();
}).then( data => {
    console.log(data);
})