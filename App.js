let user;
let favourite=[];
let div = document.getElementById("movieList");
async function myFunction()
{
    let res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1');
    let response = await res.json();
    user = response.results;
   
    let ul = document.createElement("ul");
    user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3 style="line-height: 30px;">${val.title}</h3>
            <div id="vote">Vote:${val.vote_count}</div>
            <span><i class="icon-heart-empty" onclick="addFavourite(${val.id})"></i></span>
            <div>Rating: ${val.vote_average}</div>
            <div>Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}
function sortbydate()
{
    user.sort(function(a,b){
        return new Date(a.release_date) - new Date(b.release_date);
      });
      let ul = document.createElement("ul");
      user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3 style="line-height: 30px;">${val.title}</h3>
            <div id="vote">Vote:${val.vote_count}</div>
            <span><i class="icon-heart-empty" onclick="addFavourite(${val.id})"></i></span>
            <div>Rating: ${val.vote_average}</div>
            <div>Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);

}

// sortbydate();

function sortByrating()
{
    user.sort(function(a,b){
        return a.vote_average - b.vote_average;
      });
      let ul = document.createElement("ul");
      user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3 style="line-height: 30px;">${val.title}</h3>
            <div id="vote">Vote:${val.vote_count}</div>
            <span><i class="icon-heart-empty" onclick="addFavourite(${val.id})"></i></span>
            <div>Rating: ${val.vote_average}</div>
            <div>Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}

async function searchByName()
{
    var userInput = document.querySelector("#search input").value;

   let name = user.filter((value)=>{
        return value.title==userInput;
    });
    console.log(name);
    console.log(name.title);
    console.log(name.vote_average);
    console.log(name.vote_count);
    console.log(name.poster_path);

    let ul = document.createElement("ul");
    name.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3 style="line-height: 30px;">${val.title}</h3>
            <div id="vote">Vote:${val.vote_count}</div>
            <span><i class="icon-heart-empty" onclick="addFavourite(event)"></i></span>
            <div>Rating: ${val.vote_average}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
  
}

function addFavourite(id)
{
    console.log(id);
    
    let heart = document.querySelector(".icon-heart-empty");
    heart.style.color = "red";
    let arr;
    arr = user.filter(element => {
        return element.id==id;
    });
    favourite.push(arr);
    // console.log(favourite);
}

function showfav()
{
    console.log(favourite);
    alert("i am favorite");
    let ul = document.createElement("ul");
    favourite?.favourite.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
            height:410px ;
            width: 345px;"/>
            <h3 style="line-height: 30px;">${val.title}</h3>
            <div id="vote">Vote:${val.vote_count}</div>
            <span><i class="icon-heart-empty" onclick="addFavourite(event)"></i></span>
            <div>Rating: ${val.vote_average}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}
// function displayMovieList(movieArray)
// {
//     let ul = document.createElement("ul");
//     movieArray?.movieArray.map((val,i)=>{
//         let li = document.createElement("li");
//         li.innerHTML= `
//             <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" style="object-fit: cover;
//             height:410px ;
//             width: 345px;"/>
//             <h3 style="line-height: 30px;">${val.title}</h3>
//             <div id="vote">Vote:${val.vote_count}</div>
//             <span><i class="icon-heart-empty" onclick="addFavourite(${val.id})"></i></span>
//             <div>Rating: ${val.vote_average}</div>
//             <div>Date: ${val.release_date}</div>`
//         ul.appendChild(li);
//     });
//     div.appendChild(ul);
// }