// import React from "react";
// import blogData from "../data/blog";

// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//       You're on your own from here! Follow the deliverables; test things out in
//       the browser as you write your code; and good luck!
//     </div>
//   );
// }

// export default App;


import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

// import blog from "./blog";
// import Header from "./components/Header";
// import About from "./components/About";
// import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="app">
      <Header name={blog.name} />
      <main className="layout">
        <About image={blog.image} about={blog.about} name={blog.name} />
        <ArticleList posts={blog.posts} />
      </main>
    </div>
  );
}

export default App;
