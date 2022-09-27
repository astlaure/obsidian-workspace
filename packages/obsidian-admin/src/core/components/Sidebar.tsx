import React from 'react';
import { css } from '@linaria/core';

const styles = css`
  width: 300px;
  position: fixed;
  top: 2rem;
  left: 0;
  bottom: 0;
  border-right: 1px solid #333333;

  .title {
    text-align: center;
  }
`;

function Sidebar() {
  return (
    <aside className={styles}>
      <h3 className="title">Valkyrie</h3>
      <div>
        <ul>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blueprints</a></li>
          <li><a href="#">Websites</a></li>
          <li><a href="#">Options</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
