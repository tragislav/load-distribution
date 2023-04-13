import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="main" element={<div>MAIN PAGE</div>} />
      </Route>
    </Routes>
  );
}

export default App;
