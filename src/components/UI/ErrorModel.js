import React from 'react';
import classes from './ErrorModel.module.css';
const ErrorModel = (props) => {
    
    return(
        <div className={classes.backdrop} onClick={props.click}>
        <div className={classes.parent}>
            <header className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
               <button className={classes.button} onClick={props.click}>Okay</button>
            </footer>
        </div>
        </div>
    )
}
export default ErrorModel;