import React, { ReactNode, FC, ReactElement, MouseEvent } from 'react';

type onEvent = (event: MouseEvent<HTMLButtonElement>) => void;
type Props = {
  filter: string,
  stateFilter: string,
  children: ReactNode,
  onClick: onEvent
};
const Link:FC<Props> = ({ filter, stateFilter, children, onClick }): ReactElement => {
  const active = filter === stateFilter;
  const style = {
    marginLeft: '4px'
  };
  return (
    <button
       onClick={onClick}
       disabled={active}
       style={style}
    >
      {children}
    </button>
  );
};

export default Link;
