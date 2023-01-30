import style from '../styles/style.module.css';

const Form = () => {
  return <div className={style.container}>
    <form>
        <label>Todo Name</label>
        <input type="text" name="todo" placeholder="Enter Todo Name"/>
        <button className={style.submit_button} type="submit">Add Todo</button>
    </form>
  </div>
}
export default Form;
