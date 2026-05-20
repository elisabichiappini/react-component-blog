import postStyle from './Post.module.css';

const PostImage = () => {
    return (
        <figure>
            <img className={postStyle['post-image']} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Post image" />
        </figure>

    )
}

export default PostImage;