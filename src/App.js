import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import RequireAuth from './components/HOCs/RequireAuth';
import MainTable from './pages/MainTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="main"
          element={
            <RequireAuth>
              <MainTable />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
