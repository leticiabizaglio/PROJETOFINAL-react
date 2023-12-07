"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./cadastropersonagem.module.css";
import Link from "next/link";
import PopUp from "@/app/components/popUp/PopUp";

export default function CadastroPersonagem() {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [casa, setCasa] = useState("");
    const [patrono, setPatrono] = useState("");
    const [varinha, setVarinha] = useState("");
    const [ator, setAtor] = useState("");
    const [personagens, setPersonagens] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [ popUpmessage, setPopUpMessage] = useState('');
    const [popUpType, setPopUpType] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("/api/personagem", {nome, imagem, casa, patrono, varinha, ator});
            setNome("");
            setImagem("");
            setCasa("");
            setPatrono("");
            setVarinha("");
            setAtor("");
            handleShowPopUp("success", "Personagem criado com sucesso!", 4000);
            router.push(`/personagem/`);
        } catch (error){
            handleShowPopUp("error", "Erro ao criar personagem!", 4000);
        }
    };

    useEffect(() => {
        async function fetchPersonagens() {
            try {
                const response = await axios.get("/api/personagens");
                setPersonagens(response.data);
            } catch (error) {
                console.error("Error fetching personagens:", error);
            }
        }

        fetchPersonagens();
    }, []);
    function handleShowPopUp(type, message, time){
      setPopUpMessage(message);
      setPopUpType(type);
      setShowPopUp(true);
      setTimeout(()=>{
          setShowPopUp(false);
      }, 4000)
  }

    return(
        <div className={styles.container}>

      <div className={styles.actions}>
        <Link href="/personagem">
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Personagens
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Cadastrar Personagem</h1>

        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                Nome:
              </label>
              <input
                type="text"
                className={styles.input}
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="imagem" className={styles.label}>
                Imagem:
              </label>
              <input
                type="text"
                className={styles.input}
                id="imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="casa" className={styles.label}>
                Casa:
              </label>
              <input
                type="text"
                className={styles.input}
                id="casa"
                value={casa}
                onChange={(e) => setCasa(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="patrono" className={styles.label}>
                Patrono:
              </label>
              <input
                type="text"
                className={styles.input}
                id="patrono"
                value={patrono}
                onChange={(e) => setPatrono(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="varinha" className={styles.label}>
                Varinha:
              </label>
              <input
                type="text"
                className={styles.input}
                id="varinha"
                value={varinha}
                onChange={(e) => setVarinha(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="ator" className={styles.label}>
                Ator:
              </label>
              <input
                type="text"
                className={styles.input}
                id="ator"
                value={ator}
                onChange={(e) => setAtor(e.target.value)}
                required
              />
            </div>

      
          <button
            type="submit"
            className={`${styles.button} ${styles.submitButton}`}
          >
            Cadastrar
          </button>
        </form>
      { showPopUp ? (
        <PopUp message={popUpmessage} type={popUpType} />
      ): null}
      </div>
    </div>
    )
}