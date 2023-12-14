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


export default function sobreNos() {
  const [sobreNos, setsobreNos] = useState([]);
  const [dados, setDados] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/sobrenos/${id}`;
    try {
      await axios.delete(url);
      setsobreNos(sobreNos.filter((sobreNos) => sobreNos.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/sobrenos/${id}`);
  };

  useEffect(() => {
    async function fetchsobreNos() {
      try {
        const response = await axios.get(`/api/sobrenos?nome${setsobreNos.nome}`);
        setsobreNos(response.data.data);
        setDados(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchsobreNos();
  }, []);

  const handlesobreNos = (e) => {
    setInputFilter(e.target.value);
  };

  const handlePesquisa = () => {
    const resultado = dados.filter((person) =>
      person.nome.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setsobreNos(resultado);
  };

  return (
    <div className={style.global}>
      <Header />
      
      <Divisory /><h1 className={style.h1}>Harry Potter</h1>
      <div className={style.container}>
        <h1 className={style.h2}>Sobre Nós</h1>
  
        <div className={style.filtro}>
          <input
            className={style.input}
            type="text"
            value={inputFilter}
            onChange={handlesobreNos}
          ></input>
          <button className={style.button} onClick={handlePesquisa}>Pesquisar</button>
        </div>
        {dados.length ? (
          <div className={style.td}>
            {sobreNos.map((sobreNos) => (
              <div key={sobreNos.id}>
                <div className={style.card}>

                  <div className={style.imagem}>
                    <img
                      src={sobreNos.imagem}
                      alt={sobreNos.imagem}
                      width={200}
                      height={200}
                    />
                  

                <div className={style.conteudo}>
                  <p>
                    <strong>ID:</strong> {sobreNos.id}
                  </p>
                  <p>
                    <strong>Nome:</strong> {sobreNos.nome}
                  </p>
                  <p>
                    <strong>Imagem:</strong> {sobreNos.imagem}
                  </p>
                  <p>
                    <strong>Idade:</strong> {sobreNos.idade}
                  </p>
                  <p>
                    <strong>Escola:</strong> {sobreNos.escola}
                  </p>
                  <p>
                    <strong>Casa:</strong> {sobreNos.casa}
                  </p>
                  <p>
                    <strong>Email:</strong> {sobreNos.email}
                  </p>
                  </div>
                  </div>

                  <div className={style.bnt}>
                    <button className={style.botao} onClick={() => deletar(sobreNos.id)}>
                      <FaTrash /> Deletar
                    </button>
                    <button className={style.botao} onClick={() => update(sobreNos.id)}>
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
