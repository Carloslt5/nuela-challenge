// import { supabase } from "../libs/supabase";
import { Course } from "../types/Courses.types";
import cursosData from "../data/cursos.json";

class CourseService {
  // GET with supabase
  // async getCourses(): Promise<Course[]> {

  //   if (!supabase) {
  //     console.warn('Supabase client is not defined. Cannot fetch data.');
  //     return [];
  //   }

  //   const { data, error } = await supabase.from("cursos").select("*");
  //   if (error) {
  //     console.error('Error fetching data:', error.message);
  //     return [];
  //   }
  //   return data;
  // }

  // GET local JSON
  async getCourses(): Promise<Course[]> {
    return cursosData as Course[];
  }
}

const courseService = new CourseService();
export default courseService;
