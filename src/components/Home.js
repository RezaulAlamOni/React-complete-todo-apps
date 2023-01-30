import Header from "./Header";
import {useState} from "react";
import Form from "./Form";

import style from '../styles/style.module.css';

const Home = () => {

    const [todo, setTodo] = useState('');
    const [todoLists, setTodoList] = useState([]);
    return (
        <div className={style.home}>
            <Header/>
            <Form todo={todo}
                  setTodo={setTodo}
                  todoLists={todoLists}
                  setTodoList={setTodoList}
            />
        </div>
    );
}
export default Home;
