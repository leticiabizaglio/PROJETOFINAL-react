"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function Sobrenos(){
    const [sobrenos, setSobrenos] = useState([]);
        const [ dados, setDados] = useState([]);
        const router = useRouter();


        const deletar = async (id) => {
            const url = `/api/sobrenos/${id}`;
            try {
                await axios.delete(url);
                setSobrenos(sobrenos.filter((sobrenos) => sobrenos.id !== id));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        const update = async (id) => {
            router.push(`/sobrenos/${id}`);
        };
    
        useEffect(() => {
            async function fetchSobrenos() {
                try {
                    const response = await axios.get("/api/sobrenos");
                    setSobrenos(response.data.data);
                    setDados(response.data.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchSobrenos();
        },[]);
    
        return(
            <div>
                <Header/>
                <h1>HARRY POTTER</h1>
                <div>
                    <h1>Sobre Nós</h1>
    
                    {dados.length ? (
                        <div>
                        {sobrenos.map((sobrenos) => (
                            <div key={sobrenos.id} >
                            <div>
                                <p>
                                    <strong>ID:</strong> {sobrenos.id}
                                </p>
                                <p>
                                    <strong>Nome:</strong> {sobrenos.nome}
                                </p>
                                 <img src={sobrenos.imagem} alt={sobrenos.imagem} width={200} height={200} /> 
                                <p>
                                    <strong>Idade:</strong> {sobrenos.idade}
                                </p>
                                <p>
                                    <strong>Escola:</strong> {sobrenos.escola}
                                </p>
                                <p>
                                    <strong>Casa:</strong> {sobrenos.casa}
                                </p>
                                <p>
                                    <strong>Email:</strong> {sobrenos.email}
                                </p>
                            </div>
    
                                    <div >
                                        <button
                                            onClick={() => deletar(sobrenos.id)}
                                        >
                                            <FaTrash /> Deletar
                                        </button>
                                        <button
                                            onClick={() => update(sobrenos.id)}
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
                    <Footer/>
                </div>
            </div>
        )
    }