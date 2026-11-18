function About({ image, about, name }) {
  return (
    <aside className="about">
      <img src={image} alt={`Portrait of the author of ${name}`} />
      <p>{about}</p>
    </aside>
  );
}

export default About;