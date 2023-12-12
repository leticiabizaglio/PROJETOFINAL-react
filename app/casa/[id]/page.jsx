"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./casa.module.css"; // Importe o CSS existente
import Link from "next/link";

export default function UpDateCasa({ params }) { 
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [origem, setOrigem] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchCasaDetails() {
      try {
        const response = await axios.get(`/api/casas/${id}`);
        const casa = response.data;
        setNome(casa.nome);
        setImagem(casa.imagem);
        setOrigem(casa.origem);
      } catch (error) {
        console.error("Error fetching casa details:", error);
      }
    }

    if (id) {
      fetchCasaDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/casas/${id}`, {nome, imagem, origem});
      router.push(`/casas/`);
    } catch (error){
      console.log("Error updating casas:", error);
    }
  }


  return (
    <div className={styles.container}>

      <div className={styles.actions}>
        <Link href={`/casa`}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Casas
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Casa</h1>

        {id ? (
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