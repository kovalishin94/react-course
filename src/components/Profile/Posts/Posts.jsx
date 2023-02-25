import Post from './Post/Post.jsx'

const Posts = () => {
    return (
        <div className='posts'>Posts
            <Post message='lorem' likes='19'/>
            <Post message='Hello world!' likes='6'/>
        </div>
    )
}

export default Posts