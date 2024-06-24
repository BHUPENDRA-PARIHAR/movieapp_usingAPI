var currentPage = 1; 

var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+currentPage;
var searchAPIURL ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


let movies =async(APIURL)=>{
    var data =await fetch(APIURL);


    var finalData = await data.json();
    var finalData = finalData.results;
    displayData(finalData);
    

} 

 
let displayData =(moviesData)=>{
    var finalMovies = '';

    moviesData.forEach((v,i) => {
        finalMovies += `<div class="col-md-3 movie-card">
                        <div class="card">
                        <img src="https://image.tmdb.org/t/p/w1280/${v.poster_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${v.original_title}</h5>
                        <p class="card-text">${v.overview}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                       </div>`;
    });
    document.getElementById('movieapp').innerHTML = finalMovies;
}


movies(APIURL);

let search = (title) =>{
if(title == ''){
    movies(APIURL);
}else
{
    var searchAPIURL ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+title;
    movies(searchAPIURL);
}
}

let previous = () =>{
    if(currentPage > 1){
        currentPage--;
        var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+currentPage;
        movies(APIURL)
    }
}

let next = () =>{
    currentPage++;
    var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+currentPage;
    movies(APIURL)
}