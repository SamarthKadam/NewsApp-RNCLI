export const AllNews=()=>{
    return `https://newsapi.org/v2/top-headlines?country=in&apiKey=133657eb75dd49f89487b83170831397`;
}
export const getNews=(type)=>{
    return `https://newsapi.org/v2/everything?q=${type}&apiKey=133657eb75dd49f89487b83170831397`
}