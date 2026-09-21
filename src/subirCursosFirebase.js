import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import courses from "./courses.js";

export async function subirCursosFirebase() {
  try {
    for (const course of courses) {
      const { id, ...datosCurso } = course;

      await setDoc(doc(db, "Cursos", id), datosCurso);

      console.log(`Curso subido: ${course.title}`);
    }

    console.log("TODOS LOS CURSOS FUERON SUBIDOS A FIREBASE");
  } catch (error) {
    console.error("Error al subir los cursos:", error);
  }
}
