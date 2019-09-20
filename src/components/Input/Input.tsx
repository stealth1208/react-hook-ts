import cs from 'classnames';
import React from 'react';
import './Input.scss';

interface IInputProps {
  value: string;
  isEditing: boolean;
  className?: string;
  onChange(value: string): void;
}

const Input: React.FunctionComponent<IInputProps> = ({
  isEditing,
  value,
  className,
  onChange,
  ...props
}: IInputProps) => {
  return (
    <div className={cs('text-input', `${className}`)}>
      <input
        {...props}
        type="text"
        autoFocus={isEditing}
        disabled={!isEditing}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
