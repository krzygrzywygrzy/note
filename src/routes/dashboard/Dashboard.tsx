import React from "react";
import AuthWrapper from "../../components/layout/AuthWrapper";
import DashboardMenu from "./DashboardMenu";

const Dashboard: React.FC = () => {
  return (
    <AuthWrapper>
      <div className="h-full flex">
        <div>
          <DashboardMenu />
        </div>
        <div>actual content</div>
      </div>
    </AuthWrapper>
  );
};

export default Dashboard;
