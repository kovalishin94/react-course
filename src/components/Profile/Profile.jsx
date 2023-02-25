import cls from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={cls.content} id='content'>
            <div className='ava'>ava+description</div>
            <Posts/>
            <div className='newpost'>New post</div>
        </div>
    )
}

export default Profile