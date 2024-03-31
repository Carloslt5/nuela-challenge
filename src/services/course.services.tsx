import { Course } from "../constants/Couses.const";
import { supabase } from "../libs/supabase";

class CourseService {
  async getCourses(): Promise<Course[]> {
    const { data, error } = await supabase.from("cursos").select("*");
    if (error) {
      console.error("Error al obtener los cursos desde Supabase:", error.message);
      return [];
    }
    return data;
  }
}
const courseService = new CourseService();
export default courseService;
