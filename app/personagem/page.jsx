"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
import Loading from "../components/loading/loading";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import style from "./page.module.css";
import Divisory from "../components/divisory/Divisory";


export default function Personagem() {
  const [personagem, setPersonagem] = useState([]);
  const [dados, setDados] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/personagens/${id}`;
    try {
      await axios.delete(url);
      setPersonagem(personagem.filter((personagem) => personagem.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/personagem/${id}`);
  };

  useEffect(() => {
    async function fetchPersonagem() {
      try {
        const response = await axios.get(`/api/personagens?nome${setPersonagem.nome}`);
        setPersonagem(response.data.data);
        setDados(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPersonagem();
  }, []);

  const handlePersonagem = (e) => {
    setInputFilter(e.target.value);
  };

  const handlePesquisa = () => {
    const resultado = dados.filter((person) =>
      person.nome.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setPersonagem(resultado);
  };

  return (
    <div className={style.global}>
      <Header />
      
      <Divisory /><h1 className={style.h1}>Harry Potter</h1>
      <div className={style.container}>
        <h1 className={style.h2}>Personagens</h1>
  
        <div className={style.filtro}>
          <input
            className={style.input}
            type="text"
            value={inputFilter}
            onChange={handlePersonagem}
          ></input>
          <button className={style.button} onClick={handlePesquisa}>Pesquisar</button>
        </div>
        {dados.length ? (
          <div className={style.td}>
            {personagem.map((personagem) => (
              <div key={personagem.id}>
                <div className={style.card}>

                  <div className={style.imagem}>
                    <img
                      src={personagem.imagem}
                      alt={personagem.imagem}
                      width={200}
                      height={200}
                    />
                  

                <div className={style.conteudo}>
                  <p>
                    <strong>ID:</strong> {personagem.id}
                  </p>
                  <p>
                    <strong>Nome:</strong> {personagem.nome}
                  </p>
                  <p>
                    <strong>Casa:</strong> {personagem.casa}
                  </p>
                  <p>
                    <strong>Patrono:</strong> {personagem.patrono}
                  </p>
                  <p>
                    <strong>Varinha:</strong> {personagem.varinha}
                  </p>
                  <p>
                    <strong>Ator:</strong> {personagem.ator}
                  </p>
                  </div>
                  </div>

                  <div className={style.bnt}>
                    <button className={style.botao} onClick={() => deletar(personagem.id)}>
                      <FaTrash /> Deletar
                    </button>
                    <button className={style.botao} onClick={() => update(personagem.id)}>
                      <FaEdit /> Atualizar
                    </button>
                  </div>
                </div>

              </div>

            ))}
             <Divisory />
          </div>
        ) : (
          <p>
            <Loading></Loading>
          </p>
        )}
        <Footer />
      </div>
    </div>
  );
}
