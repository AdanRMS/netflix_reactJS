const API_KEY= 'caa28a338e1ac0204662c7aa4dd99eb8';
const API_BASE= 'https://api.themoviedb.org/3';

/*
     Originais NetFlix
     Recomendados (trending)
     Em alta (top rated)
     Ação
     Comédia
     Terror
*/

const basicFatch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFatch(`/discover/tv?with_network=213&lenguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items:  await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFatch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFatch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFatch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFatch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }
}