import React from "react";
import DashboardMenu from "../dashboard/DashboardMenu";

type Props = {
  id?: number;
};

const Note: React.FC<Props> = ({ id }) => {
  return (
    <div className="flex">
      <DashboardMenu />
    </div>
  );
};

export default Note;
