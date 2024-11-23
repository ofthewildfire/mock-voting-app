const MainPage = () => {
  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    color: "#212529",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#6c63ff",
    marginBottom: "10px",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    marginBottom: "20px",
  };

  const sectionHeadingStyle = {
    fontSize: "1.5rem",
    marginTop: "30px",
    color: "#ff6f61",
  };

  const rulesListStyle = {
    textAlign: "left",
    margin: "0 auto",
    padding: "0",
    maxWidth: "600px",
    listStyleType: "disc",
    listStylePosition: "inside",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>📚 Welcome to the Book Arena! 📚</h1>
      <p style={subheadingStyle}>
        <strong>16 Books. 4-Hour Rounds. One Champion.</strong>
      </p>
      <p>
        Here in the <strong>Book Arena</strong>, only the strongest stories
        survive. Each week, 16 books enter the arena, battling it out through
        community votes to become the <strong>Book of the Week</strong>. Are you
        ready to join the fight and decide the victor?
      </p>
      <h2 style={sectionHeadingStyle}>How It Works:</h2>
      <ul style={rulesListStyle}>
        <li>
          <strong>Nominate the Contenders:</strong> The top 16 books are chosen
          from your suggestions.
        </li>
        <li>
          <strong>Vote Your Champion:</strong> Every 4 hours, rounds of voting
          eliminate the weakest competitors.
        </li>
        <li>
          <strong>Sudden Death Showdown:</strong> The final two books face off
          in an intense, Hunger Games-style vote-off.
        </li>
      </ul>
      <h2 style={sectionHeadingStyle}>🕐 Vote Now – The Clock is Ticking!</h2>
      <p>
        The fate of the arena lies in your hands. Rally your district (okay,
        your friends) and get voting before time runs out! Will your favorite
        survive to claim victory? Or will it meet a tragic end in the dust of
        forgotten pages?
      </p>
      <p>
        <strong>
          💥 May the best book win, and may the odds be ever in your favor. 💥
        </strong>
      </p>
    </div>
  );
};

export default MainPage;
