import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";
import { RequireToken } from './components/Auth/Auth.jsx'
import Dashboard from "./components/dashboard/dashboard.jsx";
import Home from "./components/home.jsx";
import Employee from "./components/employee.jsx";
import Profile from "./components/profile.jsx";
import AddEmployee from "./components/addEmployee/addEmployee.jsx";
import EditEmployee from './components/editEmployee/editEmployee.jsx';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path='/' element={
            <RequireToken>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/create' element={<AddEmployee />} />
                <Route path='/employeeedit/:id' element={<EditEmployee />} />
              </Routes>
            </RequireToken>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
