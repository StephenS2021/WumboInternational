const commentsService = {
    getComments(){
        return fetch("http://localhost:8000")
        .then(result => 
            result.json())
    },
    postComments(username, content){
        return fetch("http://localhost:8000/comments",{
            method:'POST', 
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({username, content})
        })
        .then(result =>{
            return result.json()
        })

    }

}
export default commentsService