export const AllNews=()=>{
    return `https://newsapi.org/v2/top-headlines?country=in&apiKey=5168839b926d49db9fb9cef9792190e7`;
}
export const getNews=(type)=>{
    return `https://newsapi.org/v2/everything?q=${type}&apiKey=5168839b926d49db9fb9cef9792190e7`
}