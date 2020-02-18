/* 
EasyHTTP Library for making http requests 
*/

class EasyHTTP{
    
    //HTTP GET request
    get(url){
        return new Promise((resolve , reject) => {
            fetch(url)
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err));
        });
        
    }

    //HTTP POST request
    post(url , data){
        return new Promise((resolve , reject) => {
            fetch(url , {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        
    }

    //HTTP PUT request
    put(url , data){
        return new Promise((resolve , reject) => {
            fetch(url , {
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
        
    }

    //HTTP delete request

    delete(url){
        return new Promise((resolve , reject) => {
            fetch(url , {
                method:"DELETE"
                
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted'))
            .catch(err => reject(err));
        });
        
    }
}