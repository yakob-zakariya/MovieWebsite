// selecting HTML elements
const genresContainer = document.getElementById('geners');
const btnSearch = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const popularMovieContainer = document.querySelector('#popular-container');
const topRatedContainer = document.querySelector('#top-rated-container');
const upComingContainer = document.querySelector('#up-coming');
const nowPlayingContainer= document.querySelector('#now-playing');
const defaultContainer = document.querySelector('.main');
const homeBtn = document.querySelector('.home-btn');
const searchContainer = document.querySelector('#searchContainer');

// option for api authentication
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDRkNGEyZDcxZDRjZDhhNmU0MmRmNDNlMTBkMWMyOCIsInN1YiI6IjY0OWRkNGU1MDkxZTYyMDEyZDllNGVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jLJfLoAOZZq27kc2uOaaqcZpKvk0m1MkbuSTQEeV8FY'
    }
  };

// function to display the generas from the api
  const displayGenera= function(){
// to fetch the generas  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response =>{
        let  html = '';
        for(let genre of response.genres){
            html += `<li><a class="dropdown-item" href="#">${genre.name}</a></li>`;            
        }
        genresContainer.innerHTML = html;
    })
    .catch(err => console.error(err));
  }
// function to display the default viwes
const defaulDisply = ()=>{
    
    // empty search results container
    searchContainer.innerHTML = '';
    // to fetch popular movies 
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let html = `<h1 class="text-center">popular movies</h1>`;
        for(let i =0;i<12;i++){
        html += `<div class='col-md-3 col-lg-2 text-center'>
        <div class="card">
        <img src='https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.results[i].title}</h5>
          <p class="card-text">IMD: ${response.results[i].vote_average}</p>
          <button class="btn btn-primary popular-detail-btn">See Detail</button>
        </div>
        </div>
      </div>`;
    }
      popularMovieContainer.innerHTML = html;
      const buttons = document.querySelectorAll('.popular-detail-btn');
      buttons.forEach((value,index)=>{
        value.addEventListener('click',()=>{
            console.log(response.results[index].overview);
            console.log(response.results[index].title)
        })
      })
    })
    .catch(err => console.error(err));


    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let html = `<h1 class="text-center">Top Rated movies</h1>`;
        for(let i =0;i<12;i++){
        html += `<div class='col-md-3 col-lg-2 text-center'>
        <div class="card">
        <img src='https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.results[i].title}</h5>
          <p class="card-text">IMD: ${response.results[i].vote_average}</p>
          <button class="btn btn-primary top-rated-detail-btn">See Detail</button>
        </div>
        </div>
      </div>`;
    }
      topRatedContainer.innerHTML = html;
      const buttons = document.querySelectorAll('.top-rated-detail-btn');
      buttons.forEach((value,index)=>{
        value.addEventListener('click',()=>{
            console.log(response.results[index].overview);
            console.log(response.results[index].title)
        })
      })
    })
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let html = `<h1 class="text-center">Up Coming Movies</h1>`;
        for(let i =0;i<6;i++){
        html += `<div class='col-md-3 col-lg-2 text-center'>
        <div class="card">
        <img src='https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.results[i].title}</h5>
          <p class="card-text">IMD: ${response.results[i].vote_average}</p>
          <button class="btn btn-primary up-coming-detail-btn">See Details</button>
        </div>
        </div>
      </div>`;
    }
      upComingContainer.innerHTML = html;
      const buttons = document.querySelectorAll('.up-coming-detail-btn');
      buttons.forEach((value,index)=>{
        value.addEventListener('click',()=>{
            console.log(response.results[index].overview);
            console.log(response.results[index].title)
        })
      })
    })
    .catch(err => console.error(err));

// now playing movies
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let html = `<h1 class="text-center">Now playing movies</h1>`;
        for(let i =0;i<6;i++){
        html += `<div class='col-md-3 col-lg-2 text-center'>
        <div class="card">
        <img src='https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.results[i].title}</h5>
          <p class="card-text">IMD: ${response.results[i].vote_average}</p>
          <button class="btn btn-primary now-playing-detail-btn">See Detail</button>
        </div>
        </div>
      </div>`;
    }
      nowPlayingContainer.innerHTML = html;
      const buttons = document.querySelectorAll('.now-plying-detail-btn');
      buttons.forEach((value,index)=>{
        value.addEventListener('click',()=>{
            console.log(response.results[index].overview);
            console.log(response.results[index].title)
        })
      })
    })
    .catch(err => console.error(err));
}

displayGenera();
defaulDisply();

homeBtn.addEventListener('click',()=>{
    defaultContainer.style.display = 'block';
    defaulDisply();
});

btnSearch.addEventListener('click',()=>{
    defaultContainer.style.display = 'none';
    let searchQuery = ''
    for(let x of searchInput.value.split(' ')){
       searchQuery += `${x}+`;
    }
    const lastQuery = searchQuery.slice(0,searchQuery.length -1);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${lastQuery}&api_key=c44d4a2d71d4cd8a6e42df43e10d1c28`)
    .then(response => response.json())
    .then(response => {
        
        let html = `<h1 class="text-center">Search Results</h1>`;
        for(let i =0;i<response.results.length;i++){
        if(response.results[i].poster_path){
        html += `<div class='col-md-3 col-lg-2 text-center'>
        <div class="card">
        <img src='https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.results[i].title}</h5>
          <p class="card-text">IMD: ${response.results[i].vote_average}</p>
          <button class="btn btn-primary search-detail-btn">See Detail</button>
        </div>
        </div>
      </div>`}
    }
    searchContainer.innerHTML = html;
    const buttons = document.querySelectorAll('.search-detail-btn');
      buttons.forEach((value,index)=>{
        value.addEventListener('click',()=>{
            console.log(response.results[index].overview);
            console.log(response.results[index].title)
        })
      })
    }).catch(err => console.error(err));
})
