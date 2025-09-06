function addPost() {
  const username = document.getElementById("username").value;
  const content = document.getElementById("postContent").value;

  if (!username || !content) {
    alert("Naam aur post likhna zaroori hai!");
    return;
  }

  const postsDiv = document.getElementById("posts");
  const newPost = document.createElement("div");
  newPost.className = "post";
  newPost.innerHTML = `<strong>${username}</strong><p>${content}</p>`;
  postsDiv.prepend(newPost);

  document.getElementById("postContent").value = "";
}
