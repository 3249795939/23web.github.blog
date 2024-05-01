var posts=["2024/05/01/post-title-with-whitespace/","2024/05/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };