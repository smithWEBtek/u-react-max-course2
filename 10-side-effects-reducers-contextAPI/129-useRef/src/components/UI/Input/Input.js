import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

// second arg after props, available:  ref
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activateFocus = () => {
    inputRef.current.focus();
  }

  // a translation object between the internal functionalities and
  // the outside world (the parent component)
  // 
  useImperativeHandle(ref, () => {
    console.log('ref: ', ref)
    return {
      focus: activateFocus
    }
  })

  return <div
    className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
      }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
})

export default Input;
