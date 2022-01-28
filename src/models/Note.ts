import { NotePart } from "./NoteParts";
import NoteTypes from "./NoteTypes";

interface Note {
  type: NoteTypes;
  section_id: number;
  content: any[];
}

export class StandardNote implements Note {
  constructor(section_id: number, content: NotePart[]) {
    this.section_id = section_id;
    this.content = content;
  }
  type: NoteTypes = NoteTypes.STANDARD;
  content: NotePart[];
  section_id: number;
}
