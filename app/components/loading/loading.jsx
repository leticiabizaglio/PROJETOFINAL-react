import React from 'react';
import style from './loading.module.css';

const Loading = () => {
    return (
        <div className={style.global}>
            <div className={style.image}>
                <img src="https://petitchougfx.files.wordpress.com/2018/05/courteousrecklessafricanelephant-max-1mb.gif" alt="Loading..."></img>
            </div>
        </div>
    )
}
export default Loading;