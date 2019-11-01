import cs from 'classnames';
import * as React from 'react';
import './Save.scss';

interface ISaveProps {
  className?: string;
  isEditing: boolean;
  isDisabled: boolean;
  onClick(): void;
}

const Save: React.FunctionComponent<ISaveProps> = ({
  className,
  onClick,
  isEditing,
  isDisabled = false,
  ...props
}: ISaveProps) => {
  return (
    <div
      // {...props}
      className={cs('save-btn', `${className}`, {
        editing: isEditing,
        disabled: isDisabled,
      })}
      onClick={onClick}
    />
  );
};

export default Save;
