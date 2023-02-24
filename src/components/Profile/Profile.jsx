import cls from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={cls.content} id='content'>
            <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612784644_38-p-skachat-golubie-abstraktnie-foni-44.jpg" alt="..." width='400' />
            <div className='ava'>ava+description</div>
            <Posts/>
            <div className='newpost'>New post</div>
        </div>
    )
}

export default Profile