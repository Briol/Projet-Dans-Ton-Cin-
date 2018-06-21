function errorCB ()
{
    console.log('non')
}

theMovieDb.movies.getPopular({},
    function (data) {
        let popularFilmObject = JSON.parse(data)
        for (element in popularFilmObject.results) {
            $('<div/>', {'class': 'card'}).appendTo(
                $('div.inner')).append($('<img/>', {
                'src': 'https://image.tmdb.org/t/p/w500' + popularFilmObject.results[element].poster_path,
            }))
        }
    }, errorCB)