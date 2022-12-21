import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Home page is just for redirection
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/movies");
  }, [navigate]);

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default Home;
