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

export enum CourseType {
  PrimeroESO = "1º ESO",
  SegundoESO = "2º ESO",
  TerceroESO = "3º ESO",
  CuartoESO = "4º ESO",
  PrimeroBachillerato = "1º bachillerato",
  SegundoBachillerato = "2º bachillerato",
  Laboratorio = "Laboratorio",
  Gimnasio = "Gimnasio",
}

export enum CourseGroup {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

export enum CourseHours {
  One = "1",
  OneAndHalf = "1,5",
  Two = "2",
  TwoAndHalf = "2,5",
  Three = "3",
  ThreeAndHalf = "3,5",
  Four = "4",
  FourAndHalf = "4,5",
  Five = "5",
}
