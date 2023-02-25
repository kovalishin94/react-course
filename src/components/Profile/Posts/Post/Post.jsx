import cls from './Post.module.css'

const Post = (props) => {
    return (
        <div className={cls.item}>
            <img src="https://avatars.mds.yandex.net/i?id=be8b5eb2dfca25ea100bb07962cf96f6948d605a-7760813-images-thumbs&n=13" alt="" />
            <div>
                {props.message}
            </div>
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post