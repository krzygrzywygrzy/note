import React, { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

const DashboardSections: React.FC = () => {
  const sections = useAppSelector((state) => state.section);

  if (sections.loading) {
    return <div>loading...</div>;
  }

  if (sections.error) {
    return <div>Error :( while loading your sections</div>;
  }

  if (!sections.sections) {
    return <></>;
  }

  return (
    <section>
      {sections.sections.length > 0 ? (
        <div>TODO: display sections</div>
      ) : (
        <div>You dont have any sections</div>
      )}
    </section>
  );
};

export default DashboardSections;
