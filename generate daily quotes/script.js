const api_url="https://api.quotable.io/random";
const quote =document.getElementById("quote");
const author=document.getElementById("author");
async function getquote(){
    const response1=await fetch("https://api.quotable.io/random");
    let data=await response1.json();
    console.log(response1);
    quote.innerHTML=data.content;
    author.innerHTML=data.author; 

}
