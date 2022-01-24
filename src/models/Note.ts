import NoteTypes from "./NoteTypes";

export interface Note {
    type: NoteTypes;
    content: any[];
}

export class StandardNote implements Note {
    constructor(content: any[]) {
        this.content = content;
    }
    type: NoteTypes = NoteTypes.STANDARD;
    content: any[];

}

