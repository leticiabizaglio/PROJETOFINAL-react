"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./cadastrosobrenos.module.css";
import Link from "next/link";

export default function CadastroSobrenos() {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [idade, setIdade] = useState("");
    const [escola, setEscola] = useState("");
    const [casa, setCasa] = useState("");
    const [email, setEmail] = useState("");
    const [sobrenos, setSobrenos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post("/api/sobrenos", {nome, imagem, idade, escola, casa, email});
            setNome("");
            setImagem("");
            setIdade("");
            setEscola("");
            setCasa("");
            setEmail("");
            router.push(`/sobrenos/`);
        } catch (error){
            console.log("Error creating sobrenos:", error);
        }
}


useEffect(() => {
    async function fetchSobrenos() {
        try {
            const response = await axios.get("/api/sobrenos");
            setSobrenos(response.data);
        } catch (error) {
            console.error("Error fetching sobrenos:", error);
        }
    }
    fetchSobrenos();
}, []);

return(
    <div className={styles.container}>

  <div className={styles.actions}>
    <Link href="/sobrenos">
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
              <label htmlFor="idade" className={styles.label}>
                Idade:
              </label>
              <input
                type="number"
                className={styles.input}
                id="idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="escola" className={styles.label}>
                Escola:
              </label>
              <input
                type="text"
                className={styles.input}
                id="escola"
                value={escola}
                onChange={(e) => setEscola(e.target.value)}
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
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                type="text"
                className={styles.input}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
  </div>
</div>
)
}
