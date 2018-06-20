let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?api_key=a8d5b03f58011439084f80bc8e0a1603&language=fr",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

        $.ajax(settings).done(function(response) {
            $("title1").text(response.results[0].original_title);
            $(".link1").attr("href", response.results[0].homepage);
            $('.picture1').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[0].poster_path);

            $("title2").text(response.results[1].original_title);
            $(".link2").attr("href", response.results[1].homepage);
            $('.picture2').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[1].poster_path);

            $("title3").text(response.results[2].original_title);
            $(".link3").attr("href", response.results[2].homepage);
            $('.picture3').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[2].poster_path);

            $("title4").text(response.results[3].original_title);
            $(".link4").attr("href", response.results[3].homepage);
            $('.picture4').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[3].poster_path);

            $("title5").text(response.results[4].original_title);
            $(".link5").attr("href", response.results[4].homepage);
            $('.picture5').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[4].poster_path);

            $("title6").text(response.results[5].original_title);
            $(".link6").attr("href", response.results[5].homepage);
            $('.picture6').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[5].poster_path);

            $("title7").text(response.results[6].original_title);
            $(".link7").attr("href", response.results[6].homepage);
            $('.picture7').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[6].poster_path);

            $("title8").text(response.results[7].original_title);
            $(".link8").attr("href", response.results[7].homepage);
            $('.picture8').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[7].poster_path);

            $("title9").text(response.results[8].original_title);
            $(".link9").attr("href", response.results[8].homepage);
            $('.picture9').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[8].poster_path);

            $("title10").text(response.results[9].original_title);
            $(".link10").attr("href", response.results[9].homepage);
            $('.picture10').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[9].poster_path);

            $("title11").text(response.results[10].original_title);
            $(".link11").attr("href", response.results[10].homepage);
            $('.picture11').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[10].poster_path);

            $("title12").text(response.results[11].original_title);
            $(".link12").attr("href", response.results[11].homepage);
            $('.picture12').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[11].poster_path);

            $("title13").text(response.results[12].original_title);
            $(".link13").attr("href", response.results[12].homepage);
            $('.picture13').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[12].poster_path);

            $("title14").text(response.results[13].original_title);
            $(".link14").attr("href", response.results[13].homepage);
            $('.picture14').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[13].poster_path);

            $("title15").text(response.results[14].original_title);
            $(".link15").attr("href", response.results[14].homepage);
            $('.picture15').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[14].poster_path);

            $("title16").text(response.results[15].original_title);
            $(".link16").attr("href", response.results[15].homepage);
            $('.picture16').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[15].poster_path);

            $("title17").text(response.results[16].original_title);
            $(".link17").attr("href", response.results[16].homepage);
            $('.picture17').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[16].poster_path);

            $("title18").text(response.results[17].original_title);
            $(".link18").attr("href", response.results[17].homepage);
            $('.picture18').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[17].poster_path);

            $("title19").text(response.results[18].original_title);
            $(".link19").attr("href", response.results[18].homepage);
            $('.picture19').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[18].poster_path);

            $("title20").text(response.results[19].original_title);
            $(".link20").attr("href", response.results[19].homepage);
            $('.picture20').attr("src", "https://image.tmdb.org/t/p/w500/" + response.results[19].poster_path);
        });

