
function CreatePost(){

   
  return (
    <div>
      <form >
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location"  />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image"  />

        <button type="submit">Post</button>
      </form>
    </div>
  );
} 


export default CreatePost;