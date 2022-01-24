import React from "react";
import { supabase } from "../../supabaseClient";

const DashboardMenu: React.FC = () => {
  return (
    <div className="mr-4 w-96 h-screen border-r">
      <div className="text-center py-4 text-xl">
        Welcome {supabase.auth.user()!.user_metadata.name}{" "}
        {supabase.auth.user()!.user_metadata.surname}
      </div>
    </div>
  );
};

export default DashboardMenu;
