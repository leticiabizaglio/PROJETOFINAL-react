"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/loading";
import style from "./page.module.css";

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
    },[]);

    const handleVarinha = (e) => {
        setInputFilter(e.target.value);
    };

    const handlePesquisa = () => {
        const resultado = dados.filter(varinha => varinha.dono.toLowerCase().includes(inputFilter.toLowerCase()));
        setVarinha(resultado);
    }

    return(
        <div classname={style.global}>
            <Header/>
            <h1>Harry Potter</h1>
            <div className={style.container}>
                <h1>Varinhas</h1>
                <div className={style.filtro}>
                    <input type="text" value={inputFilter} onChange={handleVarinha}></input>
                    <button onClick={handlePesquisa}>Pesquisa</button>
                </div>

                {dados.length ? (
          <div>
            {varinha.map((varinha) => (
              <div key={varinha.id}>
                <div>
                  <p>
                    <strong>ID:</strong> {varinha.id}
                  </p>
                  <p>
                    <strong>Dono:</strong> {varinha.dono}
                  </p>
                  <p>
                    <strong>Origem:</strong> {varinha.origem}
                  </p>
                  <img
                    src={varinha.imagem}
                    alt={varinha.imagem}
                    width={200}
                    height={200}
                  />
                </div>

                <div className={style.botao}>
                  <button onClick={() => deletar(varinha.id)}>
                    <FaTrash /> Deletar
                  </button>
                  <button onClick={() => update(varinha.id)}>
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
    )
}