import { Edit, Input, Save } from '@Components';
import { NotesContext } from '@Contexts';
import { Switch } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Notes.scss';

export interface INote {
  value: string;
  isEditing: boolean;
  status: boolean;
}

export interface IProps {}

const Notes: React.FunctionComponent<IProps> = (props: IProps) => {
  const [notes, setNotes] = useState([
    {
      value: '',
      isEditing: true,
      status: false,
    },
  ]);

  const changeValue = (value: string, index: number) => {
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
  };

  const onEdit = (index: number) => {
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
  };

  const onSave = (index: number) => {
    if (!notes[notes.length - 1].value) {
      onEdit(notes.length - 1);
      return;
    }
    setNotes((notes: INote[]): INote[] => {
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
    });
  };

  const onChangeStatus = (index: number) => {
    if (!notes[index].isEditing) {
      return;
    }
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
  };

  console.log('notes', notes);
  return (
    <NotesContext.Provider value={notes}>
      <div className="notes">
        {!!notes.length &&
          notes.map((note: INote, index: number) => (
            <div key={index} className="notes__item">
              <Input
                className="notes__item__input"
                isEditing={note.isEditing}
                value={note.value}
                onChange={(value: string): void => changeValue(value, index)}
              />
              <div className="notes__item__controls">
                <Switch
                  checked={note.status}
                  onChange={(): void => onChangeStatus(index)}
                />
                <Edit
                  className="notes__item__edit"
                  isEditing={note.isEditing}
                  onClick={(): void => onEdit(index)}
                />
                <Save
                  className="notes__item__save"
                  isEditing={note.isEditing}
                  onClick={(): void => onSave(index)}
                />
              </div>
            </div>
          ))}
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;
