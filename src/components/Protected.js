import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ id, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/signin");
  }, [id, navigate]);

  return children;
};

export default Protected;
