import  style from  '../styles/style.module.css' ;

const ViewTodos = ({todoLists, setTodoList, completedTodoLists ,setCompletedTodoLists}) => {

    const deleteTodo = (index) => {
        const newTodoList = todoLists.filter((todo, i) => i !== index);
        setTodoList(newTodoList);
    }
    const doneTodo = (index) => {
        const newTodoList = todoLists.filter((todo, i) => i === index);
        const newTodoList1 = todoLists.filter((todo, i) => i !== index);
        setTodoList(newTodoList1);
        setCompletedTodoLists([...completedTodoLists,newTodoList]);
    }

    return (
        <div className={style.all_todo_list}>
            <h1>All Todos</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Todo Name</th>
                    <th className={style.th2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {todoLists.map((todo, index) => (
                    <tr key={index} className={(index%2 == 0) ? style.tr1 : style.tr2}>
                        <td>{index+1}</td>
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
