let user;
async function myFunction()
{
    let res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1');
    let response = await res.json();
    user = response.results;
    let div = document.getElementById("movieList");
    let ul = document.createElement("ul");
    user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3>${val.title}</h3>
            <div>Vote:${val.vote_count}</div>
            <span><i class="fa-light fa-heart"></i></span>
            <div>Rating: ${val.vote_average}</div>`
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

// sortbydate();

function sortByrating()
{
//  do sorting here
}

async function searchByName()
{
    var userInput = document.querySelector("#search input").value;

    console.log(user);
    user.filter((value)=>{
        return value.title==userInput;
    });
    console.log(user);

    
    // alert(userInput);
  
}
