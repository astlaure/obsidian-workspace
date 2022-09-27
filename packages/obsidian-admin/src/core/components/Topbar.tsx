import React from 'react';
import { css } from '@linaria/core';

const styles = css`
  display: flex;
  justify-content: space-between;
  background: #333333;
  color: #fff;
  height: 2rem;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 1rem;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 0.25rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: var(--font-size-sm);
      padding: 0 0.5rem;

      &:hover {
        color: #888;
      }
    }
  }
`;

function Topbar() {
  return (
    <div className={styles}>
      <ul>
        <li><a href="#">Website</a></li>
      </ul>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Topbar;
