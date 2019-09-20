import cs from 'classnames';
import * as React from 'react';
import './Edit.scss';

interface IEditProps {
  isEditing: boolean;
  className?: string;
  onClick(): void;
}

const Edit: React.FunctionComponent<IEditProps> = ({
  onClick,
  className,
  ...props
}: IEditProps) => {
  return (
    <span
      {...props}
      className={cs('edit-btn', `${className}`)}
      onClick={onClick}
    />
  );
};

export default Edit;
