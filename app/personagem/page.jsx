import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Personagem() {
    const [personagens, setPersoneagens] = useState([]);
    const [dados, setDados] = useState({});
    const router = useRouter();


    const deletar = async (id) => {
        const url = `/api/personagens/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((personagem) => personagem.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const update = async (id) => {
        router.push(`/personagens/${id}`);
    };

    useEffect(() => {
        async function fetchPersonagens() {
            try {
                const response = await axios.get("/api/personagens");
                setPersoneagens(response.data);
                setDados(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPersonagens();
    },[]);

    return(
        <div className={styles.container}></div>
    )
}