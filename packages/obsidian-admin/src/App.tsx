import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './core/Dashboard';
import Login from './auth/Login';
import Layout from './core/components/Layout';
import PageTable from './pages/PageTable';

function App() {
  return (
    <BrowserRouter basename={(window as any).obsidian?.basename || ''}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="pages" element={<PageTable />} />
              <Route path="" element={<Dashboard />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
