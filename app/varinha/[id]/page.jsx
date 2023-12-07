"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./varinha.modules.css"; // Importe o CSS existente
import Link from "next/link";

export default function UpDateCasa({ params }) { 
  const [dono, setDono] = useState("");
  const [origem, setOrigem] = useState("");
  const [imagem, setImagem] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchVarinhasDetails() {
      try {
        const response = await axios.get(`/api/varinhas/${id}`);
        const varinha = response.data;
        setDono(varinha.dono);
        setImagem(varinha.imagem);
        setOrigem(varinha.origem);
      } catch (error) {
        console.error("Error fetching varinha details:", error);
      }
    }

    if (id) {
        fetchVarinhasDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/varinhas/${id}`, {dono, origem, imagem});
      router.push(`/varinhas/`);
    } catch (error){
      console.log("Error updating varinhas:", error);
    }
  }


  return (
    <div className={styles.container}>

      <div className={styles.actions}>
        <Link href={`/varinha`}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Varinhas
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Varinha</h1>

        {id ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="dono" className={styles.label}>
                Dono:
              </label>
              <input
                type="text"
                className={styles.input}
                id="dono"
                value={descricao}
                onChange={(e) => setDono(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="origem" className={styles.label}>
                Origem:
              </label>
              <input
                type="text"
                className={styles.input}
                id="origem"
                value={origem}
                onChange={(e) => setOrigem(e.target.value)}
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

            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
            >
              Atualizar
            </button>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  )
}