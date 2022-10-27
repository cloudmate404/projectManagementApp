import { Complete } from "../../components/complete/Complete";
import { InProgress } from "../../components/inProgress/InProgress";
import { DashHeader } from "../../components/dashHeader/DashHeader";
import { ProposedProjects } from "../../components/proposedProjects/ProposedProjects";
import { Review } from "../../components/review/Review";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <DashHeader />
        <div className="stages">
          <ProposedProjects />
          <InProgress />
          <Review />
          <Complete />
        </div>
      </div>
    </div>
  );
};
