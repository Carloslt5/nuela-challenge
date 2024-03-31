import { ReactNode, createContext, useCallback, useState } from "react";
import courseService from "../services/course.services";
import { Course } from "../types/Courses.types";

interface CourseContextType {
  courses: Course[];
  loadCourses: () => Promise<void>;
}

export const CourseContext = createContext<CourseContextType>({
  courses: [],
  loadCourses: async () => {},
});

export function CourseProviderWrapper({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);

  const loadCourses = useCallback(async () => {
    const data = await courseService.getCourses();
    setCourses(data);
  }, []);

  const value = { courses, loadCourses };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}
