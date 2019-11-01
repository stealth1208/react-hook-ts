import { INote } from '@Interfaces';
import React, { useEffect, useState } from 'react';

enum NoteAction {
  EDIT = 'edit',
  CHANGE_VALUE = 'changeValue',
  SAVE = 'save',
  DELETE = 'delete',
  INIT = 'init',
  TOGGLE_STATUS = 'toggleStatus',
}

interface IParams {
  type: string;
  index: number;
  value?: string;
  // init: INote[];
}

export default function useNotes(init: INote[]): any {
  const [notes, setNotes] = useState(init);

  const updateNotes = ({ type, index, value = '' }: IParams) => {
    if (type === NoteAction.CHANGE_VALUE) {
      setNotes((notes: INote[]) => {
        return notes.map((note: INote, idx: number) => {
          if (idx === index) {
            note = {
              ...note,
              value,
            };
          }
          return note;
        });
      });
    }

    if (type === NoteAction.EDIT) {
      setNotes((notes: INote[]) => {
        return notes.map((note: INote, idx: number) => {
          if (idx === index) {
            note = {
              ...note,
              isEditing: true,
            };
          } else {
            note = {
              ...note,
              isEditing: false,
            };
          }
          return note;
        });
      });
    }

    if (type === NoteAction.SAVE) {
      setNotes((notes: INote[]): INote[] => {
        // Save last item
        if (index === notes.length - 1) {
          const temp = notes.map((note: INote) => {
            note = {
              ...note,
              isEditing: false,
            };
            return note;
          });

          return [
            ...temp,
            {
              value: '',
              isEditing: true,
              status: false,
            },
          ];
        } else {
          // Save editing item then back to last item
          return notes.map((note: INote, idx: number) => {
            if (idx === notes.length - 1) {
              note = {
                ...note,
                isEditing: true,
              };
            } else {
              note = {
                ...note,
                isEditing: false,
              };
            }
            return note;
          });
        }
      });
    }

    if (type === NoteAction.TOGGLE_STATUS) {
      if (!notes[index].isEditing) {
        return;
      }
      console.log('notes111', notes);
      setNotes((notes: INote[]) => {
        return notes.map((note: INote, idx: number) => {
          if (idx === index) {
            note = {
              ...note,
              status: !note.status,
            };
          }
          return note;
        });
      });
    }
  };

  return [notes, updateNotes];
}
