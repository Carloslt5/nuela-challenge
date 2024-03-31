import { CourseGroup, CourseType } from "../types/Courses.types";
import { Subject, SubjectType } from "../types/Subjects.types";

export const AllSubjects = [
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

export const AllSubjectsType = [SubjectType.Obligatoria, SubjectType.Optativa];

export const AllSpace = {
  [CourseType.PrimeroESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.SegundoESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.TerceroESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.CuartoESO]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.PrimeroBachillerato]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.SegundoBachillerato]: [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D],
  [CourseType.Laboratorio]: [CourseType.Laboratorio],
  [CourseType.Gimnasio]: [CourseType.Gimnasio],
};
