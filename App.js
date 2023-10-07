// {<i class="fa-solid fa-heart fa-beat" style="color: #f61e1e;"></i>}
let user;
let favourite=[];
let div = document.getElementById("movieList");
let currpage = parseInt(document.getElementById("curr").innerText);
let nextPage = document.getElementById("next");
let prevPage = document.getElementById("prev");
let currentPage = document.getElementById("curr");

async function myFunction()
{
    currentPage.textContent = `Page: ${currpage}`;
    let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${currpage}`);
    let response = await res.json();
    user = response.results;
   
    let ul = document.createElement("ul");
    user.map((val,i)=>{
        // console.log("Hello : ",i)
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" class ="movies_Img"/>
            <h4 class ="movie_title">${val.title}</h4>
            <div class="vote">Vote:${val.vote_count}</div>
            <span>

            <i class="fa-regular fa-heart" onclick="addFavourite(${val.id},${i})"></i>
            
            </span>
            <div class = "rating">Rating: ${val.vote_average}</div>
            <div class = "date">Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}
function sortbydate()
{
    user.sort(function(a,b){
        return new Date(a.release_date) - new Date(b.release_date);
      });
      console.log(user);
      div.innerHTML = "";
      let ul = document.createElement("ul");
      user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" class ="movies_Img"/>
            <h4 class ="movie_title">${val.title}</h4>
            <div class="vote">Vote:${val.vote_count}</div>
            <span>

            <i class="fa-regular fa-heart" onclick="addFavourite(${val.id},${i})"></i>
            
            </span>
            <div class = "rating">Rating: ${val.vote_average}</div>
            <div class = "date">Date: ${val.release_date}</div>`
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
      div.innerHTML = "";
      let ul = document.createElement("ul");
      user.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" class ="movies_Img"/>
            <h4 class ="movie_title">${val.title}</h4>
            <div class="vote">Vote:${val.vote_count}</div>
            <span>

            <i class="fa-regular fa-heart" onclick="addFavourite(${val.id},${i})"></i>
            
            </span>
            <div class = "rating">Rating: ${val.vote_average}</div>
            <div class = "date">Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });

    div.appendChild(ul);
}

async function searchByName()
{
    var userInput = document.querySelector("#search input").value;

   let name = user.filter((value)=>{
        return value.title.toUpperCase().includes(userInput.toUpperCase());
    });
    div.innerHTML = "";
    let ul = document.createElement("ul");
    name.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" class ="movies_Img"/>
            <h4 class ="movie_title">${val.title}</h4>
            <div class="vote">Vote:${val.vote_count}</div>
            <span>

            <i class="fa-regular fa-heart" onclick="addFavourite(${val.id},${i})"></i>
            
            </span>
            <div class = "rating">Rating: ${val.vote_average}</div>
            <div class = "date">Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
  
}

function addFavourite(id,i)
{
    console.log(i);
    let favElement;
    favElement = user.filter(element => {
        return element.id==id;
    });

        let heart = document.querySelectorAll(".fa-regular");
        
        // if (heart[i].classList.contains(".fa-regular")) {
        //     console.log("t: ");
        //     heart[i].classList.remove(".fa-regular")
        //     heart[i].classList.add(".fa-solid");
        //   }
        //   else{
        //     heart[i].classList.remove("fa-solid")
        //     heart[i].classList.add("fa-regular");
        //   }
        console.log(heart[i]);
        heart[i].style.color = "red";
        heart[i].style.fill = "red";
        // <i class="fa-solid fa-heart" style="color: #f61e1e;"></i>
    const [A] = favElement; 
        // console.log(A);
    favourite.push(A);
    // console.log(favourite);
}

function showfav()
{
    console.log(favourite);
    div.innerHTML = "";
    let ul = document.createElement("ul");
    favourite.length && favourite.map((val,i)=>{
        let li = document.createElement("li");
        li.innerHTML= `
            <img src="${"https://image.tmdb.org/t/p/original/"+val.poster_path}" class ="movies_Img"/>
            <h4 class ="movie_title">${val.title}</h4>
            <div class="vote">Vote:${val.vote_count}</div>
            <span>

            <i class="fa-solid fa-heart fa-beat" style="color: #f61e1e;"></i>
            
            </span>
            <div class = "rating">Rating: ${val.vote_average}</div>
            <div class = "date">Date: ${val.release_date}</div>`
        ul.appendChild(li);
    });
    div.appendChild(ul);
}

function showAll()
{
    window.location.reload();
    myFunction();
}

function prevButton()
{
    currpage--;
    currentPage.textContent = `Page: ${currpage}`;
    div.innerHTML = "";
    myFunction();
    if(currpage==1)
    {
        nextPage.disabled=false;
        prevPage.disabled = true;
    }

}
function nextButton()
{
    currpage++;
    currentPage.textContent = `Page: ${currpage}`;
    div.innerHTML = "";
    myFunction();
    if(currpage==500)
    {
        nextPage.disabled=true;
        prevPage.disabled = false;
    }
    if(currpage>=2)
    {
        // nextPage.disabled=false;
        prevPage.disabled = false;
    }
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