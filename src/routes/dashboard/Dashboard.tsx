import React from "react";
import AuthWrapper from "../../components/layout/AuthWrapper";
import DashboardMenu from "./DashboardMenu";

type Props = {
  section_name?: string;
};

const Dashboard: React.FC<Props> = () => {
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
