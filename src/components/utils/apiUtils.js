
import axios from "axios";

function getUserPosts(){
    return axios.get('https://node-instaclone-api.onrender.com/data')
    .then( res => {
       if ( res.status === 200 && res.data){
        return res.data
       }
       throw new Error('not able to fetch post')
    })
}

export{
    getUserPosts
}