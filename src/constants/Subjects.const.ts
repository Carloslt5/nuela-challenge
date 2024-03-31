import { Subject } from "../types/Subjects.types";
import { CourseGroup, CourseType } from "./Couses.const";

export const SubjectData = [
  Subject.Matematicas,
  Subject.Fisica,
  Subject.Quimica,
  Subject.Biologia,
  Subject.Historia,
  Subject.Geografia,
  Subject.Literatura,
  Subject.Ingles,
  Subject.EducacionFisica,
  Subject.Arte,
  Subject.Musica,
  Subject.Tecnologia,
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
