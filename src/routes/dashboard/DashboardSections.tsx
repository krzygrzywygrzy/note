import React from "react";
import { useAppSelector } from "../../store/hooks";

const DashboardSections: React.FC = () => {
  const sections = useAppSelector((state) => state.section);

  return <div></div>;
};

export default DashboardSections;
