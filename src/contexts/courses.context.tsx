import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import courseService from "../services/course.services";
import { Course } from "../types/Courses.types";

interface CourseContextType {
  courses: Course[];
  loadCourses: () => Promise<void>;
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export const CourseContext = createContext<CourseContextType>({
  courses: [],
  loadCourses: async () => {},
  setCourses: () => {},
});

export function CourseProviderWrapper({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);

  const loadCourses = useCallback(async () => {
    const data = await courseService.getCourses();
    setCourses(data);
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const value = { courses, loadCourses, setCourses };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}
