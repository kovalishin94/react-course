import cls from './Profile.module.css';

const Profile = () => {
    return (
        <div className={cls.content} id='content'>
            <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612784644_38-p-skachat-golubie-abstraktnie-foni-44.jpg" alt="..." width='400' />
            <div className='ava'>ava+description</div>
            <div className='posts'>Posts
                <div className={cls.item}>1</div>
                <div className={cls.item}>2</div>
                <div className={cls.item}>3</div>
                <div className={cls.item}>4</div>
                <div className={cls.item}>5</div>
            </div>
            <div className='newpost'>New post</div>
        </div>
    )
}

export default Profile