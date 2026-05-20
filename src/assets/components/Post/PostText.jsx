import Button from "../Button/Button";
import postStyle from './Post.module.css';

const PostText = () => {
    return (
        <div className={postStyle.post}>
            <h2 className={postStyle['pt-8']}>Titolo del post</h2>
            <p  className={postStyle['pt-8']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti velit vitae sunt, similique enim exercitationem quod! Ducimus veniam cupiditate magnam alias esse, excepturi aliquam est neque veritatis necessitatibus dolores!
            </p>
            <Button/>
        </div>
    )
}

export default PostText;