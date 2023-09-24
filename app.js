function Post(author, likes) {
    const result={};
    this.author=author;
    this.likes=likes;
    return result;    
}
const post= new Post('Росбанк',100);