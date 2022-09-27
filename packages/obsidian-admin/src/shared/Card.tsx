import React from 'react';
import { css } from '@linaria/core';

const styles = css`
  border: 1px solid #dddddd;
  padding: 1.5rem 1rem;
  border-radius: 5px;
`;

interface Props {
  children: React.ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return (
    <div className={styles}>
      {children}
    </div>
  );
}

export default Card;
