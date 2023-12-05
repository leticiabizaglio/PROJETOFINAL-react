"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from 'next/image';

export default function Personagem() {
    const [personagem, setPersonagem] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `/api/personagens/${id}`;
        try {
            await axios.delete(url);
            setPersonagem(personagem.filter((personagem) => personagem.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const update = async (id) => {
        router.push(`/personagem/${id}`);
    };

    useEffect(() => {
        async function fetchPersonagem() {
            try {
                const response = await axios.get("/api/personagens?nome=Harry");
                setPersonagem(response.data.data);
                setDados(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchPersonagem();
    }, []);

    return (
        <div>
            <h1>HARRY POTTER</h1>
            <div>
                <h1>Personagens</h1>

                {dados.length ? (
                    <div>
                        {personagem.map((personagem) => (
                            <div key={personagem.id} >
                                <div>
                                    <p>
                                        <strong>ID:</strong> {personagem.id}
                                    </p>
                                    <p>
                                        <strong>Nome:</strong> {personagem.nome}
                                    </p>

                                    <img src={personagem.imagem} alt={personagem.nome} width={200} height={200} />


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

                                <div >
                               
                                    <button
                                        onClick={() => deletar(personagem.id)}
                                    >
                                        <FaTrash /> Deletar
                                    </button>
                                    <button
                                        onClick={() => update(personagem.id)}
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