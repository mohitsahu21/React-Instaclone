

function Post({post :{name,location,postimage,likes,description,date}}){
  return <div className="post-card">
      <div className="post-header">
           <div>
              <div className="post-title">{name}</div>
              <div className="post-location"> {location}</div>
           </div>
           <div className="post-action">...</div>
      </div>
      <div className="post-image">
          <img src={postimage} /> 
      </div>
      <div className="post-footer">
         
           <div className="like-icon">

              
                 <img src="https://www.pngitem.com/pimgs/m/49-497821_instagram-like-icon-png-image-free-download-searchpng.png"/>
                
                <img src="https://www.pngkit.com/png/detail/188-1882778_icon-icon-icon-icon-instagram-share-icon-png.png"/>

                <span className="post-date">{date} </span>
           </div>

        <div className="post-likes"> 
             {likes} likes
        </div>
        <div className="post-description">
            {description}
        </div>

      </div>

    
  </div>

}

export default Post;