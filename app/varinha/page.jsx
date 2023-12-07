"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

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
                setVarinha(response.data.data);
                setDados(response.data.data);
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
                        <div key={varinha.id} >
                        <div>
                            <p>
                                <strong>ID:</strong> {varinha.id}
                            </p>
                            <img src={varinha.imagem} alt={varinha.nome} width={200} height={200} />
                            <p>
                                <strong>Dono(a):</strong> {varinha.dono}
                            </p>
                            <p>
                                <strong>Origem:</strong> {varinha.origem}
                            </p>
                            
                
                        </div>

                                <div >
                                    <button
                                        onClick={() => deletar(varinha.id)}
                                    >
                                        <FaTrash /> Deletar
                                    </button>
                                    <button
                                        onClick={() => update(varinha.id)}
                                    >
                                        <FaEdit /> Atualizar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Carregado...</p>
                )}
            </div>
        </div>
    )
}