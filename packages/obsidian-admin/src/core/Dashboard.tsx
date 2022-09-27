import React from 'react';
import { css } from '@linaria/core';

const styles = css`
  button {
    color: red;
    font-size: 2rem;
    font-weight: 400;
  }

  .text {
    font-style: italic;
  }
`;

function Dashboard() {
  return (
    <div className={styles}>
      <h1>Dashboard</h1>
      <p className="text">Hello world</p>
      <button>hello</button>
    </div>
  );
}

export default Dashboard;
