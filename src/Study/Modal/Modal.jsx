import { useCallback } from 'react';
import { Main } from '../Main/Main'
import styles from '../Modal/Modal.module.css'




export function Modal(props) {
  const closeModal = useCallback(() => {
        props.setShow(false)
    }, []);
    
    
  
  if(props.show) {
      return (
        <div className={styles.modal} onClick={closeModal} >
          {props.lists.map((item) => {
            return(
            <div key={item.name} className={styles.modal_inner} onClick={(e)=>e.stopPropagation() }>
              <div className={styles.modal_header}></div>
              <div className={styles.modal_introduction}>
                <h2>{item.name}</h2>
                <p>{item.introduction}</p>
              </div>
              <button 
              className={styles.modal_close_btn}
              onClick= {closeModal}
              >
                とじる
              </button>
            </div>

            )
          })}
        </div>
      )
    } else {
      return null;
    }
}

