import React from "react";
import DashboardMenu from "./DashboardMenu";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full flex">
      <div>
        <DashboardMenu />
      </div>
      <div>actual content</div>
    </div>
  );
};

export default Dashboard;
