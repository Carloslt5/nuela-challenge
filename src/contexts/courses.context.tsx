import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import courseService from "../services/course.services";
import { Course } from "../types/Courses.types";

interface CourseContextType {
  courses: Course[];
  totalHours: number;
  loadCourses: () => Promise<void>;
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  deleteCourseByID: (id: string) => void;
}

export const CourseContext = createContext<CourseContextType>({
  courses: [],
  totalHours: 0,
  loadCourses: async () => {},
  setCourses: () => {},
  deleteCourseByID: () => {},
});

export function CourseProviderWrapper({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalHours, setHours] = useState<number>(0);

  const loadCourses = useCallback(async () => {
    const data = await courseService.getCourses();
    setCourses(data);
  }, []);

  const sumHours = useCallback((courses: Course[]) => {
    let totalHours = 0;
    courses.forEach((course) => {
      const hours = parseInt(course.horas_semanales);
      totalHours += hours;
    });
    setHours(totalHours);
  }, []);

  const deleteCourseByID = (id: string) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
  };

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  useEffect(() => {
    sumHours(courses);
  }, [courses, sumHours]);

  const value = { courses, loadCourses, setCourses, totalHours, deleteCourseByID };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}
