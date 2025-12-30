import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // later you can add API logic here
    navigate("/login");
  };

  return (
    <MobileContainer>
      <h1>Create your PopX account</h1>

      <input placeholder="Full Name*" />
      <input placeholder="Phone number*" />
      <input placeholder="Email address*" />
      <input type="password" placeholder="Password*" />
      <input placeholder="Company name" />

      <p>Are you an Agency?</p>
      <label>
        <input type="radio" name="agency" /> Yes
      </label>
      <label>
        <input type="radio" name="agency" /> No
      </label>

      <button onClick={handleRegister}>
        Create Account
      </button>
    </MobileContainer>
  );
};

export default Register;
