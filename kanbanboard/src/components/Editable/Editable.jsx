import React from 'react'
import style from './Editable.module.css';


const Editable = (props) => {
    return (
        <div className={style.editable}>
            <p>{props.text || "Add Item"}</p>
            <div className={style.editable_edit}>
                <input type="text" placeholder={props.placeholder} />
                <div className={style.editable_footer}>
                    <button type='submit'> {props.buttonText || "Add"} </button>
                    {" x"}
                </div>
            </div>
        </div>
    )
}

export default Editable