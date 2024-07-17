myPosts = document.getElementsByClassName("blogs")[0];
const renderPosts = async () => {
  const url = "http://localhost:3000/posts";
  const res = await fetch(url);
    const posts = await res.json();
    
    let template = '';
    posts.forEach(post => {
        template += `
        <div class = "posts">
        <h2>${post.title}</h2>
        <p>${post.likes} Likes </p>
        <p>${post.body.slice(0, 200)}</p>
        <a href = "/details.html">Read More</a>
        </div>
        `;
    })
myPosts.innerHTML = template;
};

document.addEventListener("DOMContentLoaded", () => renderPosts());
