import { Subject } from "./Subjects.types";

export interface Course {
  espacio_regular: string;
  grupo: string;
  horas_semanales: string;
  nombre: string;
  tipo: string;
  curso: Subject | "";
}
