import { NotePart } from "./NoteParts";
import NoteTypes from "./NoteTypes";

export interface Note {
  type: NoteTypes;
  section_id: number;
  content: any[];
  id?: number;
}

export class StandardNote implements Note {
  constructor(section_id: number, content: NotePart[], id: number | undefined) {
    this.section_id = section_id;
    this.content = content;
  }
  type: NoteTypes = NoteTypes.STANDARD;
  content: NotePart[];
  section_id: number;
  id?: number | undefined;
}
