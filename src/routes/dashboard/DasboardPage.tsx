import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { HiDocumentAdd } from "react-icons/hi";
import { supabase } from "../../supabaseClient";
import SupabaseTables from "../../models/SupabaseTables";

const DasboardPage: React.FC = () => {
  var current_section = useAppSelector(
    (state) =>
      state.section.sections?.filter(
        (el) => "/page/" + el.name === window.location.pathname
      )[0]
  );

  const addNote = async () => {
    try {
      const { data, error } = await supabase
        .from(SupabaseTables.NOTES)
        .insert({ section_id: current_section?.id });

      if (error) throw error;

      //TODO: finish
    } catch (err) {
      //TODO: display popup with error
    }
  };

  if (!current_section) {
    return <div>Error</div>;
  }

  return (
    <div>
      <header className=" min-h-96">
        <img
          src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="background"
          className="w-full h-96 object-cover"
        />
        <div className="flex items-center px-12 py-8">
          <div className=" text-3xl mr-2">{current_section.name}</div>
          <div className="cursor-pointer">
            <HiDocumentAdd size={40} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default DasboardPage;
