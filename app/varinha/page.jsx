"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/loading";
import style from "./page.module.css";
import Divisory from "../components/divisory/Divisory";

export default function Varinha() {
  const [varinha, setVarinha] = useState([]);
  const [dados, setDados] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/varinhas/${id}`;
    try {
      await axios.delete(url);
      setVarinha(varinha.filter((varinha) => varinha.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const update = async (id) => {
    router.push(`/varinha/${id}`);
  };

  useEffect(() => {
    async function fetchVarinha() {
      try {
        const response = await axios.get("/api/varinhas");
        setVarinha(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchVarinha();
  }, []);

  const handleVarinha = (e) => {
    setInputFilter(e.target.value);
  };

  const handlePesquisa = () => {
    const resultado = dados.filter(varinha => varinha.dono.toLowerCase().includes(inputFilter.toLowerCase()));
    setVarinha(resultado);
  }

  return (
    <div className={style.global}>
      <Header />
      <Divisory />
      <h1 className={style.h1}>Harry Potter</h1>
      <div className={style.container}>
        <h1 className={style.h2}>Varinhas</h1>
        <div className={style.filtro}>
          <input className={style.input} type="text" value={inputFilter} onChange={handleVarinha}></input>
          <button className={style.button} onClick={handlePesquisa}>Pesquisa</button>
        </div>

        {dados.length ? (
          <div className={style.td}>
            {varinha.map((varinha) => (
              <div key={varinha.id}>
                <div className={style.card}>
                  <div className={style.imagem}>
                    <img

                      src={varinha.imagem}
                      alt={varinha.imagem}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={style.conteudo}>
                    <p>
                      <strong>ID:</strong> {varinha.id}
                    </p>
                    <p>
                      <strong>Dono:</strong> {varinha.dono}
                    </p>
                    <p>
                      <strong>Origem:</strong> {varinha.origem}
                    </p>

                  </div>

                  <div className={style.botao}>
                    <button className={style.botao} onClick={() => deletar(varinha.id)}>
                      <FaTrash /> Deletar
                    </button>
                    <button className={style.botao} onClick={() => update(varinha.id)}>
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
  )
}