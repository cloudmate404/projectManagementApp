import { Routes, Route, Link } from "react-router-dom";
import { DashHeader } from "./components/dashHeader/DashHeader";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NewProject } from "./pages/newProject/NewProject";
import { NewTask } from "./pages/newTask/NewTask";
import { NewTeam } from "./pages/newTeam/NewTeam";
import { Profile } from "./pages/profile/Profile";
import { ProjectDetails } from "./pages/projectDetails/ProjectDetails";
import { Projects } from "./pages/projects/Projects";
import { Tasks } from "./pages/tasks/Tasks";
import { TeamDetails } from "./pages/teamDetails/TeamDetails";
import { Teams } from "./pages/teams/Teams";
import "./style/index.css";

function App() {
  return (
    <div className="app">
      {/* <DashHeader /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":projectId" element={<NewProject />} />
          <Route path="=projectDetails" element={<ProjectDetails />} />
        </Route>
        <Route path="tasks">
          <Route index element={<Tasks />} />
          <Route path=":taskId" element={<NewTask />} />
        </Route>
        <Route path="teams">
          <Route index element={<Teams />} />
          <Route path=":teamId" element={<NewTeam />} />
          <Route path="=teamDetails" element={<TeamDetails />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
