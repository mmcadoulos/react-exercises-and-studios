function HobbyIntroduction() {
  const funFacts = [
    "It's the original language of the New Testament",
    "It was the lingua franca of the Mediterranean for a millennia",
    "It's fun lol",
  ];

  const listFacts = (facts) => {
    return facts.map((fact) => <li key={facts.index}>{fact}</li>);
  };

  return (
    <div>
      <h2>Fun Facts About Ancient Greek</h2>
      <ol>{listFacts(funFacts)}</ol>
    </div>
  );
}

export default HobbyIntroduction;
