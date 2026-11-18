import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <section className="articles">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </section>
  );
}

export default ArticleList;
