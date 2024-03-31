import { CourseGroup, CourseHours, CourseType } from "../types/Courses.types";

export const AllCourses = [
  CourseType.PrimeroESO,
  CourseType.SegundoESO,
  CourseType.TerceroESO,
  CourseType.CuartoESO,
  CourseType.PrimeroBachillerato,
  CourseType.SegundoBachillerato,
];

export const AllGroups = [CourseGroup.A, CourseGroup.B, CourseGroup.C, CourseGroup.D];

export const AllHours = [
  CourseHours.One,
  CourseHours.OneAndHalf,
  CourseHours.Two,
  CourseHours.TwoAndHalf,
  CourseHours.Three,
  CourseHours.ThreeAndHalf,
  CourseHours.Four,
  CourseHours.FourAndHalf,
  CourseHours.Five,
];
