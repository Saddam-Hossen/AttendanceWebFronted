import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Error from "../pages/Error";
import RegistrationForm from "../pages/RegistrationForm";
import EmployeeList from "../pages/EmployeeList";
import AttendanceAdd from "../pages/AttendanceAdd";
import GlobalSetting from "../pages/GlobalSetting";
import LocalSetting from "../pages/LocalSetting";
import Position from "../pages/Position";
import UserAtAGlance from "../pages/UserAtAGlance";
import DownloadAllEmployeeAttendanceData from "../pages/DownloadAllEmployeeAttendanceData";
import UpdateAttendanceAdd from "../pages/UpdateAttendanceAdd";
import Summary from "../pages/Summary";
import ProtectedRoute from "../pages/ProtectedRoute"; // Import ProtectedRoute
import Component from "../Developer/Component";
import Menu from "../Developer/Menu";
import Page from "../Developer/Page";
import Role from "../Owner/Role";
import Permission from "../Owner/Permission";
import AssignPermission from "../Owner/AssignPermission";
import UpdatePermission from "../Owner/UpdatePermission";
import { RoleProvider } from "../context/RoleContext";  // Import RoleProvider
import SinglePage from "../layouts/SinglePage";
import { ThemeProvider } from "../context/ThemeContext"; // Import ThemeProvider
import UserAtAGlanceSingle from "../pages/UserAtAGlanceSingle";
function App() {
  return (
  
    <Router>
       <ThemeProvider> {/* Wrap the app with ThemeProvider */}

        <RoleProvider> 
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/error" element={<ProtectedRoute><Error /></ProtectedRoute>} />
        <Route path="/reg" element={<ProtectedRoute><RegistrationForm /></ProtectedRoute>} />
        <Route path="/EmployeeList" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />
        <Route path="/AttendanceAdd" element={<ProtectedRoute><AttendanceAdd /></ProtectedRoute>} />
        <Route path="/GlobalSetting" element={<ProtectedRoute><GlobalSetting /></ProtectedRoute>} />
        <Route path="/LocalSetting" element={<ProtectedRoute><LocalSetting /></ProtectedRoute>} />
        <Route path="/Position" element={<ProtectedRoute><Position /></ProtectedRoute>} />
        <Route path="/UserAtAGlance" element={<ProtectedRoute><UserAtAGlance /></ProtectedRoute>} />
        <Route path="/DownloadAllEmployeeAttendanceData" element={<ProtectedRoute><DownloadAllEmployeeAttendanceData /></ProtectedRoute>} />
        <Route path="/UpdateAttendanceAdd" element={<ProtectedRoute><UpdateAttendanceAdd /></ProtectedRoute>} />
        <Route path="/Summary" element={<ProtectedRoute><Summary /></ProtectedRoute>} />
        <Route path="/Component" element={<ProtectedRoute><Component /></ProtectedRoute>} />
        <Route path="/Menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
        <Route path="/Page" element={<ProtectedRoute><Page /></ProtectedRoute>} />  
        <Route path="/Role" element={<ProtectedRoute><Role /></ProtectedRoute>} />  
        <Route path="/Permission" element={<ProtectedRoute><Permission /></ProtectedRoute>} />
        <Route path="/AssignPermission" element={<ProtectedRoute><AssignPermission /></ProtectedRoute>} />
        <Route path="/UpdatePermission" element={<ProtectedRoute><UpdatePermission /></ProtectedRoute>} />
        <Route path="/SinglePage" element={<ProtectedRoute><SinglePage /></ProtectedRoute>} />
        <Route path="/UserAtAGlanceSingle" element={<ProtectedRoute><UserAtAGlanceSingle /></ProtectedRoute>} />

      </Routes>
      </RoleProvider>
      </ThemeProvider> {/* Close ThemeProvider */}
    </Router>
    
  );
}

export default App;
