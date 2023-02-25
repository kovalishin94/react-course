import cls from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={cls.containerMess}>
            <div className={cls.dialogs}>
                <div className={cls.item}>Dialog</div>
                <div className={cls.item}>Dialog</div>
                <div className={cls.item}>Dialog</div>
                <div className={cls.item}>Dialog</div>
                <div className={cls.item}>Dialog</div>
            </div>
            <div className={cls.messages}>
                <div className={cls.message}>1</div>
                <div className={cls.message}>2</div>
                <div className={cls.message}>3</div>
                <div className={cls.message}>4</div>
                <div className={cls.message}>5</div>
            </div>
        </div>
    )
}

export default Dialogs