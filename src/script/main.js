const main = () => {
    const topRatedMovie = document.getElementById("top-rated-movie");
    let hpmovies = [];
    console.log(searchBar);

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredmovie = hpmovies.results.filter((movie) => {
            return (
                movie.title.toLowerCase().includes(searchString) || movie.original_title.toLowerCase().includes(searchString)
            );
        });
        displayTopRatedMovie(filteredmovie);
    });


    const getTopRatedMovie = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a3cd4619e00843d8e599c767aedbbb24')
            hpmovies = await res.json();
            displayTopRatedMovie(hpmovies.results);
            console.log(hpmovies.results);
            
        } catch (err) {
            console.error(err);
        }
    };

    const displayTopRatedMovie = (movie) => {
        const htmlString = movie
            .map((movie) => {
                return `
                
                <div class="movie-card">
                    <img
                        src="http://image.tmdb.org/t/p/w500${movie.poster_path}"
                        alt="Nike Red"
                        width="260"
                        height="180"
                        class="image-movie"
                    />
                    <div class="movie-detail pt-3">
                        <div>
                            <p class="label-detail mb-1">${movie.release_date}</p>
                            <p class="title-detail text-truncate">${movie.title}</p>
                        </div>
                        <button
                            class="btn btn-fav"
                            aria-label="Button Favorite"
                            onclick="classList.toggle('active')"
                        >
                            <svg fill="currentColor">
                            <path
                                d="M11.5909 6.09528L12.1213 6.6256L12.6516 6.09528C14.4453 4.30157 17.3535 4.30157 19.1472 6.0953C20.941 7.88902 20.941 10.7972 19.1473 12.591L12.2207 19.5176C12.1658 19.5725 12.0768 19.5725 12.022 19.5176L5.10555 12.6012L5.10485 12.6005L5.0953 12.591C5.09519 12.5909 5.09508 12.5907 5.09497 12.5906C3.30157 10.7969 3.30168 7.88891 5.0953 6.0953C6.88902 4.30158 9.79721 4.30157 11.5909 6.09528Z"
                                stroke="currentColor"
                                stroke-width="2"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
    
            `;
            })
            .join('');
        topRatedMovie.innerHTML = htmlString;
    };
    
    getTopRatedMovie();
};
export default main;