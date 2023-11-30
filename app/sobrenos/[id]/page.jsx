"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./sobrenos.module.css"; // Importe o CSS existente
import Link from "next/link";

export default function UpDateSobrenos({ params }) { 
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [idade, setIdade] = useState("");
  const [escola, setEscola] = useState("");
  const [casa, setCasa] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchSobrenosDetails() {
      try {
        const response = await axios.get(`/api/sobrenos/${id}`);
        const sobrenos = response.data;
        setNome(sobrenos.nome);
        setImagem(sobrenos.imagem);
        setIdade(sobrenos.idade);
        setEscola(sobrenos.escola);
        setCasa(sobrenos.casa);
        setEmail(sobrenos.email);
      } catch (error) {
        console.error("Error fetching sobrenos details:", error);
      }
    }

    if (id) {
        fetchSobrenosDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/sobrenos/${id}`, {nome, imagem, idade, escola, casa, email});
      router.push(`/sobrenos/`);
    } catch (error){
      console.log("Error updating sobrenos:", error);
    }
  }


  return (
    <div className={styles.container}>

      <div className={styles.actions}>
        <Link href={`/sobrenos`}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Sobre nós
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Sobre nós</h1>

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