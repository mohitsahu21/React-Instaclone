import Post from "./Post";
import {useEffect, useState} from "react"
import { getUserPosts } from "./utils/apiUtils";

function Posts(){

    const [userPosts,setUserPosts] = useState([]);

    useEffect( ()=> {
        getUserPosts()
        .then( data => {
            console.log(data.data)
           setUserPosts(data.data)
        } ).catch(err => {
            alert(err.message)})
    },[])

   return <div id="posts-container" >
    {
        userPosts.map(post => <Post key={Posts.id} post={post} /> )
    }
    
     


   </div>

}

export default Posts;