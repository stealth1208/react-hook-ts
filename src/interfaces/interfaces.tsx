export interface INote {
  value: string;
  isEditing: boolean;
  status: boolean;
}

export interface INoteAction {
  type: 'changeValue' | 'edit' | 'save' | 'delete';
}
