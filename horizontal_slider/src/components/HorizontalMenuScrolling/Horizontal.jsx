import React from 'react';
import style from './Horizontal.module.css';

const Horizontal = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.item}>horizontal effect 1</div>
                <div className={style.item}>horizontal effect 2</div>
                <div className={style.item}>horizontal effect 3</div>
                <div className={style.item}>horizontal effect 4</div>
                <div className={style.item}>horizontal effect 5</div>
            </div>
        </>
    );
};

export default Horizontal;
