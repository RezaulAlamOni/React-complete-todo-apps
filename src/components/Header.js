import style from '../styles/style.module.css';
const header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.header_h1}>Manage Your Todo List</h1>
        </div>
    )
}

export default header;
