const http = new EasyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts")
// .then(data => console.log(data))
// .catch(err => console.log(err));

//create data
const data = {
    "title": "Custom Post",
    "body": "Custom data"
};

// //Create Post
// http.post("https://jsonplaceholder.typicode.com/posts",data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/5",data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/5")
.then(data => console.log(data))
.catch(err => console.log(err));
