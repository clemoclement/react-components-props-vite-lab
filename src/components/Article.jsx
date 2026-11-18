function Article({ title, date, preview, minutes }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <small>
        {date} &middot; {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
