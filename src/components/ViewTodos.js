import  style from  '../styles/style.module.css' ;

const ViewTodos = ({todoLists, setTodoList}) => {

    const deleteTodo = (index) => {
        const newTodoList = todoLists.filter((todo, i) => i !== index);
        setTodoList(newTodoList);
    }
    const doneTodo = (index) => {
        const newTodoList = todoLists.filter((todo, i) => i === index);
        setTodoList(newTodoList);
    }

    return (
        <div className={style.all_todo_list}>
            <h1>View All Todos</h1>
            <table>
                <thead>
                <tr>
                    <th>Todo Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {todoLists.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo}</td>
                        <td>
                            <button className={style.delete_button} onClick={ () => deleteTodo(index)}>Delete</button>
                            <button className={style.submit_button} onClick={ () => doneTodo(index)}>Done</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}
export default ViewTodos;
