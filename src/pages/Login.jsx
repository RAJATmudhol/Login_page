import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // later add auth validation
    navigate("/account");
  };

  return (
    <MobileContainer>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />

      <button onClick={handleLogin}>
        Login
      </button>
    </MobileContainer>
  );
};

export default Login;
