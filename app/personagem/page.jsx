"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
import Loading from "../components/loading/loading";
import Link from "next/link";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import style from "./page.module.css";

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
      console.error("Error fetching data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/personagem/${id}`);
  };

  useEffect(() => {
    async function fetchPersonagem() {
      try {
        const response = await axios.get(
          `/api/personagens?nome${setPersonagem.nome}`
        );
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
    const resultado = dados.filter((personagem) =>
      personagem.nome.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setPersonagem(resultado);
  };

  return (
    <div>
      <Header />
      <h1>HARRY POTTER</h1>
      <div>
        <h1>Personagens</h1>
        <div>
          <input
            type="text"
            value={inputFilter}
            onChange={handlePersonagem}
          ></input>
          <button onClick={handlePesquisa}>Pesquisar</button>
        </div>

        {dados.length ? (
          <div>
            {personagem.map((personagem) => (
              <div key={personagem.id} className={style.container}
              onClick={() => redirecionar(` ${personagem.id}`)}>
                <div className={style.global}>
                  {/* aqui começa a caixa de detalhes de um modelo */}
                    <div className={style.subContainer}>
                      <div className={style.imgFrame}>
                      </div>
                      <div className={style.titleContainer}>
                        <h1 className={style.title}>{personagem.nome}</h1>
                        {/* <p className={style.description}>
                          Ola eu sou um modelo
                        </p> */}
                      </div>
                    </div>
                </div>
                <div>
                  <button onClick={() => deletar(personagem.id)}>
                    <FaTrash /> Deletar
                  </button>
                  <button onClick={() => update(personagem.id)}>
                    <FaEdit /> Atualizar
                  </button>
                </div>
              </div>
            ))}
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
