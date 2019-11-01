import * as React from 'react';

interface ICountProps {
  count: number;
}

const Count: React.FunctionComponent<ICountProps> = (props: ICountProps) => {
  return <div>{props.count}</div>;
};

export default Count;
