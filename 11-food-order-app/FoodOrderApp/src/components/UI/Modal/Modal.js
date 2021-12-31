import { useEffect } from 'react';
import classes from './Modal.module.css';


const Modal = props => {
  if (!props.show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.closeModal()
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, []);

  return (
    <div className={classes.modal} onClick={props.closeModal}>
      <div className={classes['modal-content']} onClick={event => event.stopPropagation()}>
        <div className={classes['modal-header']}>
          <h4 className={classes['modal-title']}>{props.title}</h4>
        </div>
        <div className={classes['modal-body']}>
          {props.children}
        </div>
        <div className={classes['modal-footer']}>
          <button className={classes.button} onClick={props.closeModal}>Close</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;