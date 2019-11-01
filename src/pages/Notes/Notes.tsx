import { Count, Edit, Input, Save } from '@Components';
import { COLORS } from '@Constants';
import { NotesContext } from '@Contexts';
import { useNotes } from '@Hooks';
import { INote } from '@Interfaces';
import { Switch } from '@material-ui/core';
import { Theme, withStyles } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import { strToHexColor } from '@Tools';
import React, { useEffect } from 'react';

import './Notes.scss';

export interface INote {
  value: string;
  isEditing: boolean;
  status: boolean;
}

export interface IProps {}

const Notes: React.FunctionComponent<IProps> = (props: IProps) => {
  const [notes, updateNotes] = useNotes([
    {
      value: '',
      status: false,
      isEditing: true,
    },
  ]);

  const useStyles = makeStyles((theme: any) =>
    createStyles({
      editing: {
        backgroundColor: COLORS.RED.EDITING,
      },
      done: {
        backgroundColor: COLORS.RED.DONE,
      },
    }),
  );

  const classes = useStyles();

  const PurpleSwitch = withStyles({
    switchBase: {
      'color': '#dd2c00',
      '&$checked': {
        color: '#dd2c00',
      },
      '&$checked + $track': {
        backgroundColor: '#dd2c00',
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const changeValue = (value: string, index: number) => {
    updateNotes({ value, index, type: 'changeValue' });
  };

  const onEdit = (index: number) => {
    updateNotes({ index, type: 'edit' });
  };

  const onSave = (index: number) => {
    updateNotes({ index, type: 'save' });
  };

  const onChangeStatus = (index: number) => {
    updateNotes({ index, type: 'toggleStatus' });
  };

  return (
    <NotesContext.Provider value={notes}>
      <div className={'notes'}>
        {notes &&
          !!notes.length &&
          notes.map((note: INote, index: number) => (
            <div
              key={index}
              className={`notes__item ${
                note.isEditing ? classes.editing : classes.done
              }`}
            >
              <Input
                className="notes__item__input"
                isEditing={note.isEditing}
                value={note.value}
                onChange={(value: string): void => changeValue(value, index)}
              />
              <div className="notes__item__controls">
                <PurpleSwitch
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
                  isDisabled={!note.value}
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
