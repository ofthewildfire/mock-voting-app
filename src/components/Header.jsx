const Header = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "linear-gradient(90deg, #6c63ff, #ff6f61)",
    color: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "0",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    fontWeight: "300",
    margin: "10px 0 0 0",
    fontStyle: "italic",
    color: "rgba(255, 255, 255, 0.8)",
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Mock Voting App</h1>
      <p style={subheadingStyle}>Where books battle!</p>
    </header>
  );
};

export default Header;
