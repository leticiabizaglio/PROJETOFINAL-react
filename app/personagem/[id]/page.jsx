"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./personagem.module.css"; // Importe o CSS existente
import Link from "next/link";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export default function UpDatePersonagem({ params }) {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [casa, setCasa] = useState("");
  const [patrono, setPatrono] = useState("");
  const [varinha, setVarinha] = useState("");
  const [ator, setAtor] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchPersonagemDetails() {
      try {
        const response = await axios.get(`/api/personagens/${id}`);
        const personagem = response.data;
        setNome(personagem.nome);
        setImagem(personagem.imagem);
        setCasa(personagem.casa);
        setPatrono(personagem.patrono);
        setVarinha(personagem.varinha);
        setAtor(personagem.ator);
      } catch (error) {
        console.error("Error fetching personagem details:", error);
      }
    }

    if (id) {
        fetchPersonagemDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/personagens/${id}`, {nome, imagem, casa, patrono, varinha, ator});
      router.push(`/personagens/`);
    } catch (error){
      console.log("Error updating personagens:", error);
    }
  }


  return (
    <div className={styles.pai}>
      <Header/>
    <div className={styles.container}>

      <div className={styles.actions}>
        <Link href={`/personagem`}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Personagens
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Personagem</h1>

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
              Atualizar
            </button>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  )
}