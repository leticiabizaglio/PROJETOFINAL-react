import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Varinha() {
    const [varinhas, setVarinhas] = useState([]);
    const [dados, setDados] = useState({});
    const router = useRouter();


    const deletar = async (id) => {
        const url = `/api/varinhas/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((varinha) => varinha.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const update = async (id) => {
        router.push(`/varinhas/${id}`);
    };

    useEffect(() => {
        async function fetchVarinha() {
            try {
                const response = await axios.get("/api/varinhas");
                setVarinhas(response.data);
                setDados(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchVarinha();
    },[]);

    return(
        <div className={styles.container}></div>
    )
}