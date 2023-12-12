import { GiSnitchQuidditchBall } from "react-icons/gi";
import React from "react";
import style from "./divisory.module.css";

const Divisory = () => {
    return (
        <div className={style.container}>
            <div className={style.line}></div>
                <GiSnitchQuidditchBall className={style.icon} />
                <div className={style.line}></div>
        </div>
    );
}
export default Divisory;