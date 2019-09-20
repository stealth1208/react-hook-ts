import cs from 'classnames';
import * as React from 'react';
import './Save.scss';

interface ISaveProps {
  className?: string;
  isEditing: boolean;
  onClick(): void;
}

const Save: React.FunctionComponent<ISaveProps> = ({
  className,
  onClick,
  isEditing,
  ...props
}: ISaveProps) => {
  return (
    <div
      {...props}
      className={cs('save-btn', `${className}`, {
        editing: isEditing,
      })}
      onClick={onClick}
    />
  );
};

export default Save;
