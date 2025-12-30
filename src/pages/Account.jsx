import MobileContainer from "../components/MobileContainer";

const Account = () => {
  return (
    <MobileContainer>
      <h1>Account Settings</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          width="60"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <strong>Marry Doe</strong>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </MobileContainer>
  );
};

export default Account;
