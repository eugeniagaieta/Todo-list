import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from'../../assets/Logo.svg';
import styles from'./header.module.css';
import { useState } from 'react';


export function Header ({onAddTask}){
    const [title, setTitle] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        onAddTask(title)
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className={styles.header}>
            <img src={todoLogo}/>

            <form onSubmit={handleSubmit} className={styles.newTaskForm} >
                <input placeholder='add a new task' type='text' value={title} onChange={onChangeTitle}/>
                <button>
                    create
                <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}