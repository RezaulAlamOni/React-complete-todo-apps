import Header from "./Header";
import {useState} from "react";
import Form from "./Form";

import style from '../styles/style.module.css';
import ViewTodos from "./ViewTodos";
import ViewCompletesTodos from "./ViewCompletesTodos";

const Home = () => {

    const [todo, setTodo] = useState('');
    const [todoLists, setTodoList] = useState([]);
    const [completedTodoLists, setCompletedTodoLists] = useState([]);
    return (
        <div className={style.home}>
            <Header/>
            <Form todo={todo}
                  setTodo={setTodo}
                  todoLists={todoLists}
                  setTodoList={setTodoList}
            />
            <div className={style.view_todos_inline_grid}>
                <ViewTodos todoLists={todoLists}
                           setTodoList={setTodoList}
                           completedTodoLists={completedTodoLists}
                           setCompletedTodoLists={setCompletedTodoLists}
                />
                <ViewCompletesTodos completedTodoLists={completedTodoLists} setCompletedTodoLists={setCompletedTodoLists}/>
            </div>



        </div>
    );
}
export default Home;
