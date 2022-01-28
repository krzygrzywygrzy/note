import React from "react";
import { useAppSelector } from "../../store/hooks";
import { useLocation } from "wouter";

const DashboardSections: React.FC = () => {
  const sections = useAppSelector((state) => state.section);
  const [, setLocation] = useLocation();

  if (sections.loading) {
    return <div>loading...</div>;
  }

  if (sections.error) {
    return <div>Error :( while loading your pages</div>;
  }

  if (!sections.sections) {
    return <></>;
  }

  return (
    <section>
      {sections.sections.length > 0 ? (
        <div>
          {sections.sections.map((section) => {
            return (
              <div
                className={`rounded cursor-pointer px-2 py-1 my-1 hover:bg-gray-200 ${
                  "/page/" + section.name === window.location.pathname &&
                  " bg-gray-200"
                }`}
                key={section.id}
                onClick={() => setLocation(`/page/${section.name}`)}
              >
                {section.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div>You dont have any pages</div>
      )}
    </section>
  );
};

export default DashboardSections;
