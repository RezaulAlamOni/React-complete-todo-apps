import style from '../styles/style.module.css';

const Form = ({todo, setTodo, todoLists, setTodoList}) => {

    const inputHandle = (e) => {
        setTodo(e.target.value);
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        setTodoList([...todoLists, todo]);
        setTodo('');
    }

    return <div className={style.container}>
        <form onSubmit={onSubmitHandle}>
            <label>Todo Name</label>
            <input type="text" onChange={inputHandle} name="todo" value={todo} placeholder="Enter Todo Name"/>
            <button className={style.submit_button} type="submit">Add</button>
        </form>
    </div>
}
export default Form;
