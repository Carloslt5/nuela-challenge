import { CourseGroup, CourseType } from "./Couses.const";

export const Subject = [
  "Matemáticas",
  "Física",
  "Química",
  "Biología",
  "Historia",
  "Geografía",
  "Literatura",
  "Inglés",
  "Educación Física",
  "Arte",
  "Música",
  "Tecnología",
];

export const SubjectType = ["Obligatoria", "Optativa"];

export const SubjectSpace = {
  [CourseType.PrimeroESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.SegundoESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.TerceroESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.CuartoESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.PrimeroBachillerato]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.SegundoBachillerato]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  Laboratorio: "Laboratorio",
  Gimnasio: "Gimnasio",
};
