"use client";
import { useState } from "react";
import PopUp from "../components/popUp/PopUp";

function Page(){
    const [showPopUp, setShowPopUp] = useState(false);
    const [ popUpmessage, setPopUpMessage] = useState('');
    const [popUpType, setPopUpType] = useState('');

    function handleShowPopUp(type, message, time){
        setPopUpMessage(message);
        setPopUpType(type);
        setShowPopUp(true);
        setTimeout(()=>{
            setShowPopUp(false);
        }, time)
    }

    return(
        <div>
            <button onClick={() => handleShowPopUp('success', 'PopUp de sucesso', 4000)}>Cadastrado com sucesso</button>
            <button onClick={() => handleShowPopUp('error', 'PopUp de erro', 4000)}>Erro ao cadastrar</button>
            {showPopUp && <PopUp message={popUpmessage} typeColor={popUpType}/>}
        </div>
    )
}

export default Page;