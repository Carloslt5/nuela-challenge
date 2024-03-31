import { CourseProviderWrapper } from "./contexts/courses.context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <CourseProviderWrapper>
      <AppRoutes />
    </CourseProviderWrapper>
  );
}

export default App;
