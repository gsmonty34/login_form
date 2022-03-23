import Logout_page from './Logout_page';
import Login_form from './Login_form';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login_form />} />
      <Route path='/welcome' element={<Logout_page />} />
    </Routes>
  );
}

export default App;
