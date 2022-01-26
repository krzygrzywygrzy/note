import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { supabase } from "../../supabaseClient";
import { thunkGetSections } from "../../store/actions/sectionActions";
import DashboardSections from "./DashboardSections";
import { HiFolderAdd, HiCog } from "react-icons/hi";
import Popup from "../../components/popup/Popup";
import DashboardSectionsAdd from "./DashboardSectionsAdd";
import { useLocation } from "wouter";

const DashboardMenu: React.FC = () => {
  const [, setLocation] = useLocation();
  const [showAddSectionPopup, setShowAddSectionPopup] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetSections());
  }, []);

  return (
    <div className="px-4 w-96 h-screen border-r">
      <div className="text-center py-4 text-xl flex items-center">
        <div className="mr-2">
          Welcome {supabase.auth.user()!.user_metadata.name}
        </div>
        <div className="cursor-pointer" onClick={() => setLocation("/account")}>
          <HiCog size={24} />
        </div>
      </div>
      <DashboardSections />
      <div
        className="cursor-pointer flex mt-2"
        onClick={() => setShowAddSectionPopup(true)}
      >
        <HiFolderAdd size={24} />
        <span className="ml-2">Add page</span>
      </div>
      <Popup trigger={showAddSectionPopup}>
        <DashboardSectionsAdd close={() => setShowAddSectionPopup(false)} />
      </Popup>
    </div>
  );
};

export default DashboardMenu;
