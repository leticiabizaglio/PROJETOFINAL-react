"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Casa() {
    const [casas, setCasas] = useState([]);
    const [dados, setDados] = useState({});
    const router = useRouter();

    const deletar = async (id) => {
        const url = `/api/casas/${id}`;
        try {
            await axios.delete(url);
            setCasas(casas.filter((casa) => casa.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const update = async (id) => {
        router.push(`/casas/${id}`);
    };

    useEffect(() => {
        async function fetchCasas() {
            try {
                const response = await axios.get("/api/casas");
                setCasas(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCasas();
    },[]);

    return(
        <div>
            <h1>HARRY POTTER</h1>
            <div>
                <h1>Casas</h1>

                {dados.length ? (
                    <div>
                    {casas.map((casa) => (
                        <div key={casa.id} >
                        <div>
                            <p>
                                <strong>ID:</strong> {casa.id}
                            </p>
                            <p>
                                <strong>Nome:</strong> {casa.nome}
                            </p>
                            <p>
                                <strong>Imagem:</strong> {casa.imagem}
                            </p>
                            <p>
                                <strong>Origem:</strong> {casa.origem}
                            </p>
                        </div>

                                <div >
                                    <button
                                        onClick={() => deletar(casa.id)}
                                    >
                                        <FaTrash /> Deletar
                                    </button>
                                    <button
                                        onClick={() => update(casa.id)}
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