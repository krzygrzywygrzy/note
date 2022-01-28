import React, { useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { StandardNote } from "../../models/Note";
import SupabaseTables from "../../models/SupabaseTables";
import { supabase } from "../../supabaseClient";
import { useLocation } from "wouter";

type Props = {
  section_id: number;
};

const AddNote: React.FC<Props> = ({ section_id }) => {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addNote = async () => {
    try {
      setLoading(true);
      const { error, data } = await supabase
        .from(SupabaseTables.NOTES)
        .insert(new StandardNote(section_id, []))
        .single();
      if (error) throw error;
      setLocation(`/note/${data.id}`);
    } catch (err: any) {
      setError(err.error_description || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div
        className="cursor-pointer text-white bg-black px-4 py-2 flex rounded"
        onClick={addNote}
      >
        <HiDocumentAdd size={24} />{" "}
        <div className="ml-2">
          {loading ? <div>Loading...</div> : <div>Add note</div>}
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default AddNote;
