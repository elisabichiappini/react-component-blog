import Post from '../Post/Post';
const Main = () => {
    return (
        <main className="d-flex flex-column align-items-center justify-content-center gap-4 flex-wrap">
            <Post />
            <Post />
            <Post />    
        </main>
    )
}

export default Main;