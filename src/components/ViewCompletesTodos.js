import  style from  '../styles/style.module.css' ;

const ViewViewCompletedTodos = ({completedTodoLists,setCompletedTodoLists}) => {

    const deleteTodo = (index) => {
        const newTodoList = completedTodoLists.filter((todo, i) => i !== index);
        setCompletedTodoLists(newTodoList);
    }

    return (
        <div className={style.completed_todo_list}>
            <h1>Completed Todos</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Todo Name</th>
                    <th className={style.th3}>Action</th>
                </tr>
                </thead>
                <tbody>
                {completedTodoLists.map((todo, index) => (
                    <tr key={index} className={(index%2 == 0) ? style.tr1 : style.tr2}>
                        <td>{index+1}</td>
                        <td>{todo}</td>
                        <td>
                            <button className={style.delete_button} onClick={ () => deleteTodo(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default ViewViewCompletedTodos;

