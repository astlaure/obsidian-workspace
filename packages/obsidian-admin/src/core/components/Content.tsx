import React from 'react';
import { css } from '@linaria/core';
import classNames from 'classnames';

const styles = css`
  margin-left: 300px;
  margin-top: 2rem;
  overflow: auto;
`;

interface Props {
  children: React.ReactNode;
}

function Content(props: Props) {
  const { children } = props;
  return (
    <div className={classNames(styles, 'container')}>
      {children}
    </div>
  );
}

export default Content;
