var settings = {
    "async": true,
    "crossDomain": true,
    //"url": "https://api.themoviedb.org/3/authentication/token/new?api_key=bc2aec4e7428ce69a684f62d618e55f4",
    "url": "https://api.themoviedb.org/3/movie/550?api_key=bc2aec4e7428ce69a684f62d618e55f4&language=fr",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(settings).done(function(response) {
    console.log(response);
    $('.thumb').attr("src", "https://image.tmdb.org/t/p/w500/" + response.poster_path);
    $("h1").text(response.original_title);
    $(".button").attr("href", response.homepage);
});
