import styles from "./popup.module.css";

const PopUp = ({message,typeColor}) => {
    let color= '';
    if(typeColor === 'success'){
        color = styles.sucesso;
    }else if(typeColor === 'error'){
        color = styles.erro;
    }
    return(
        <div className={color}>
            <p>{message}</p>

        </div>
    )

}
export default PopUp