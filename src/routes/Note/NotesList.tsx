import React, { useEffect } from "react";
import { thunkGetNotes } from "../../store/actions/notesActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = {
  section_id: number;
};

const NotesList: React.FC<Props> = ({ section_id }) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);
  useEffect(() => {
    dispatch(thunkGetNotes(section_id));
  });

  if (notes.loading) {
    return <div>Loading...</div>;
  }

  if (notes.error) {
    return <div>Error: {notes.error}</div>;
  }

  return notes.notes ? (
    <div>
      {notes.notes.map((note) => {
        return <div key={note.id!}>{note.type}</div>;
      })}
    </div>
  ) : (
    <></>
  );
};

export default NotesList;
