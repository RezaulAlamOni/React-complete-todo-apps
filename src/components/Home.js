import Header from "./Header";
import {useState} from "react";
import Form from "./Form";

import style from '../styles/style.module.css';
import ViewTodos from "./ViewTodos";

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
            <ViewTodos todoLists={todoLists}
                       setTodoList={setTodoList}
                       setCompletedTodoLists={setCompletedTodoLists}
            />
        </div>
    );
}
export default Home;
