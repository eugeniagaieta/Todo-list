import { TbTrash } from 'react-icons/tb'
import styles from'./task.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export function Task({ task, onComplete, oneDelete }){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            
            <button className={styles.deleteButton} onClick={() => oneDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}