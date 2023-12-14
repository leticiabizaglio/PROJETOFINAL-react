"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/loading";
import style from "../casa/page.module.css"
import Divisory from "../components/divisory/Divisory";


export default function Casa() {
  const [casas, setCasas] = useState([]);
  const [dados, setDados] = useState([]);
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/casas/${id}`;
    try {
      await axios.delete(url);
      setCasas(casas.filter((casa) => casa.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/casa/${id}`);
  };

  useEffect(() => {
    async function fetchCasas() {
      try {
        const response = await axios.get("/api/casas");
        setCasas(response.data.data);
        setDados(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCasas();
  }, []);

  return (
    <div  className={style.global}>
      <Header />
      <Divisory />
      <h1 className={style.h1}>HARRY POTTER</h1>
      <div className={style.container}>
        <h1 className={style.h2}>Casas</h1>

        {dados.length ? (
          <div  className={style.td}>
            {casas.map((casa) => (
              <div key={casa.id}>
                <div className={style.card}>
                <div className={style.imagem}>
                <img
                    src={casa.imagem}
                    alt={casa.imagem}
                    width={200}
                    height={200}
                  />
                </div>
                <div className={style.conteudo}>
                  <p>
                    <strong>ID:</strong> {casa.id}
                  </p>
                  <p>
                    <strong>Nome:</strong> {casa.nome}
                  </p>
                  
                  <p>
                    <strong>Origem:</strong> {casa.origem}
                  </p>
                </div>
                

                <div className={style.botao}>
                  <button className={style.botao} onClick={() => deletar(casa.id)}>
                    <FaTrash /> Deletar
                  </button>
                  <button className={style.botao} onClick={() => update(casa.id)}>
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
