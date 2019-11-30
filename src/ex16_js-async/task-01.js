function fetchAnalog(url, option={method: "GET", headers: {}, body:{}}) {
    const request = new XMLHttpRequest();   
    if (option.method === "GET") {
        request.open(option.method, url, true)
        request.send()
        return new Promise((resolve, reject) => {
            if (request.status === 200){
                resolve(request.statusText)
            } else {
                reject(request.responseText)
            }
        })  
    }
    request.open(option.method, url, true)
    if (option.headers) {
        for (let key in option.headers) {
            request.setRequestHeader(key, option.headers[key])
        }
    }
    request.send(json.stringify(body))
    return new Promise((resolve, reject) => {
        if (request.status === 200){
            resolve(request.statusText)
        } else {
            reject(request.responseText)
        }
    })  
}