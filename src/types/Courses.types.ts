import { Subject } from "./Subjects.types";

export interface Course {
  id?: string;
  espacio_regular: string;
  grupo: string;
  horas_semanales: string;
  nombre: string;
  tipo: string;
  curso: Subject | "";
}
