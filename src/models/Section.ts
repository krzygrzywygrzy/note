import { Note } from "./Note";

type Section = {
  id: number;
  created_at: Date;
  user_id: number;
  name: string;
  notes: Note[];
};

export default Section;
