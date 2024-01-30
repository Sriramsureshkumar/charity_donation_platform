import React, { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminSignup from "../components/AdminSignup";

function AdminLs(props) {
  const [adminlogin, setAdminLogin] = useState(true);

  return (
    <div>
      {adminlogin === true ? (
        <div>
          <AdminLogin setAdminLogin={setAdminLogin} />
        </div>
      ) : (
        <div>
          <AdminSignup setAdminLogin={setAdminLogin} />
        </div>
      )}
    </div>
  );
}

export default AdminLs;
