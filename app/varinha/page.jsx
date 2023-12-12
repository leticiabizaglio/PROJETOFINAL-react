"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/loading";

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
        <div>
            <Header/>
            <h1>HARRY POTTER</h1>
            <div>
                <h1>Varinhas</h1>
                <div>
                    <input type="text" value={inputFilter} onChange={handleVarinha}></input>
                    <button onClick={handlePesquisa}>Pesquisar</button>
                </div>

                {dados.length ? (
                    <div>
                    {varinha.map((varinha) => (
                       <div className={style.global}>
                       {/* aqui começa a caixa de detalhes de um modelo */}
                       <div className={style.container} onClick={() => redirecionar("Felipe")}>
                         <div className={style.subContainer}>
                 
                           <div className={style.imgFrame}>
                           </div>
                           <div className={style.titleContainer}>
                             <h1 className={style.title}>Title1</h1>
                             <p className={style.description}>Ola eu sou um modelo</p>
                           </div>
                         </div>
                       </div>
                     </div>
                        ))}
                    </div>
                ) : (
                    <p><Loading></Loading></p>
                )}
                <Footer/>
            </div>
        </div>
    )
}