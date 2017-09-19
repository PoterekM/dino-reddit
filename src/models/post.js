class Post {
  constructor(userName, title, content, date) {
    this.userName = userName;
    this.title = title;
    this.content = content;
    this.date = new Date().toLocaleString();
  }
}

export default Post;
