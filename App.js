async function myFunction()
{
    let res = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
    let response = await res.json();
    let div = document.getElementById("movieList");
    let ul = document.createElement("ul");
    response.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${val.Poster}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3>${val.Title}</h3>
            <div>Vote:${i}</div>
            <span><i class="fa-light fa-heart"></i></span>
            <div>Rating: ${i+2}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}
function sortbydate()
{
    var array = [{ date: "Mar 12 2022 10:00:00 AM"}, { date: "Mar 8 2012 08:00:00 AM"}, { date: "Sept 12 2014 1:09:00 PM"}, { date: "Aug 8 2012 08:00:00 AM"},{ date: "May 1 2019 1:11:00 PM"}];
    console.log("before sorting"+array);
    array.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      console.log("after sorting"+array);
}

sortbydate();

function sortByrating()
{
//  do sorting here
}
function searchByName(event)
{
    console.log(event);
    // document.querySelector(".search").addEventListener("click",()=>{
        
    // });
}
