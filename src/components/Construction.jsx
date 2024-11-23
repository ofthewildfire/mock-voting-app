const Construction = () => {
  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fffbf1",
    color: "#333",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#ff6f61",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const emojiStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
  };

  const trademarkStyle = {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#6c63ff",
  };

  const contactStyle = {
    fontWeight: "bold",
    color: "#6c63ff",
  };

  return (
    <div style={containerStyle}>
      <div style={emojiStyle}>🚧👷‍♀️👷‍♂️</div>
      <h1 style={headingStyle}>Under Construction!</h1>
      <p style={textStyle}>
        Hey there, trailblazer! The arena is still being prepped for the
        ultimate showdown.
      </p>
      <p style={textStyle}>
        Due to heavy power cuts and me navigating some personal challenges,
        things are moving slower than I'd like. But rest assured, I’m working on
        it whenever I can!
      </p>
      <p style={textStyle}>
        If you run into issues or have questions, feel free to reach out via
        WhatsApp or drop me a DM on Discord. Your patience and understanding
        mean the world to me.
      </p>
      <p style={textStyle}>
        Hang tight – your votes and literary face-offs are coming{" "}
        <span style={trademarkStyle}>soon™</span>. Thanks for sticking with me!
      </p>
      <p style={textStyle}>💖 Always rooting for the books, and for you!</p>
    </div>
  );
};

export default Construction;
