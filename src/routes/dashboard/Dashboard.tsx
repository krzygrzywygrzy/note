import React from "react";
import AuthWrapper from "../../components/layout/AuthWrapper";
import DashboardMenu from "./DashboardMenu";
import EmptyDashboard from "./EmptyDashboard";

type Props = {
  section_name?: string;
};

const Dashboard: React.FC<Props> = ({ section_name }) => {
  return (
    <AuthWrapper>
      <div className="h-full flex">
        <div>
          <DashboardMenu />
        </div>
        <div className="w-full">
          {section_name ? <div>notes</div> : <EmptyDashboard />}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Dashboard;
