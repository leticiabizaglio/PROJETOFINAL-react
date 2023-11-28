"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import styles from "./casa.module.css"; // Importe o CSS existente
import Link from "next/link";

export default function UpdateStudent({ params }) { 
  const { id } = params;

  useEffect(() => {
    async function fetchStudentDetails() {
      try {
        const response = await axios.get(`/api/students/${id}`);
        const student = response.data;
        setName(student.name);
        setAge(student.age);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    }

    if (id) {
      fetchStudentDetails();
    }
  }, [id]);


  return (
    <div className={styles.container}>

      

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Estudante</h1>

        {id ? (
          <div className={styles.actions}>
          <Link href={`/students`}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Voltar para Alunos
            </button>
               

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Estudante</h1>
        </div>
          </Link>
        </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}