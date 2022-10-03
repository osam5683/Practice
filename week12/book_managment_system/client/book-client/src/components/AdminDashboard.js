import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    async function verifyAuth() {
      try {
        let { data } = await axios.get("/api/auth", {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        });
        if (data.payload.role !== "user") {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
    verifyAuth();
  }, []);
  return <h1>AdminDashboard</h1>;
}

export default AdminDashboard;
