import React, { useEffect, useState } from 'react';
import { css } from '@linaria/core';

const styles = css`
  table {
    border-collapse: collapse;
    width: 100%;

    td, th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    tr:nth-child(even){background-color: #f2f2f2;}

    tr:hover {background-color: #ddd;}

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
  }
`;

function PageTable() {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    //
  }, []);

  return (
    <div className={styles}>
      <h1>Pages</h1>
      <a href="#">Create page</a>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>language</th>
            <th>template</th>
            <th>published</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map(page => (
            <tr key={page.id}>
              <td>page.id</td>
              <td>page.title</td>
              <td>page.url</td>
              <td>page.language</td>
              <td>page.template</td>
              <td>page.published</td>
              <td>
                <a href="#">update</a>
                <a href="#">delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageTable;
