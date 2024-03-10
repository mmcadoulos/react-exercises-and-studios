export default function HobbyLinks() {
  let hobbyLinks = [
    "http://bit.ly/ranieri-roberts-approach",
    "https://sites.google.com/educarex.es/logos",
  ];

  return (
    <div>
      <h3>Helpful Hobby Links</h3>
      <li><a href={hobbyLinks[0]}>Reading list</a></li>
      <li><a href={hobbyLinks[1]}>Resources for ΛΟΓΟΣ</a></li>
    </div>
  );
}
