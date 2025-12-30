import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button onClick={() => navigate("/register")}>
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </MobileContainer>
  );
};

export default Welcome;
