import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Casa() {
    const [casas, setCasas] = useState([]);
    const [dados, setDados] = useState({});
    const router = useRouter();


    const deletar = async (id) => {
        const url = `/api/casas/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((casa) => casa.id !== id));
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
                setDados(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCasas();
    },[]);

    return(
        <div className={styles.container}></div>
    )
}