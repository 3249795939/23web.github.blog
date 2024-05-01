var posts=["2024/05/01/hello-world/","2024/05/01/post-title-with-whitespace/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };