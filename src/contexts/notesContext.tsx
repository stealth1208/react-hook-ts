import React from 'react';
import { INote } from '../pages/Notes/Notes';
interface INoteContext {
  values: INote[];
}
const NotesContext = React.createContext<INote[] | null>(null);
export default NotesContext;
