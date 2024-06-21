import { useContext } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { CourseContext } from "../contexts/courses.context";
import { Course } from "../types/Courses.types";

export const useCourse = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const navigate = useNavigate();

  const courseForm = useForm<Course>({
    defaultValues: {
      curso: "",
      espacio_regular: "",
      grupo: "",
      horas_semanales: "",
      nombre: "",
      tipo: "",
    },
  });
  
  const { register, handleSubmit } = courseForm;

  const onSubmit = (data: Course) => {
    setCourses([...courses, data]);
    courseForm.reset();
    navigate("/profile");
  };

  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
