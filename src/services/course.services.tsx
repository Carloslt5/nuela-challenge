import { supabase } from "../libs/supabase";
import { Course } from "../types/Courses.types";

class CourseService {
  async getCourses(): Promise<Course[]> {
    const { data, error } = await supabase.from("cursos").select("*");
    if (error) {
      return [];
    }
    return data;
  }
}
const courseService = new CourseService();
export default courseService;
