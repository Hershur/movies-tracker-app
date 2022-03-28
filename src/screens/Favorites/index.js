import Header from "../../components/Header";
import { useSelector } from "react-redux";
import TVShowsBox from "../../components/TVShowsBox";
import useGetFavoriteTVShows from "../../hooks/useGetFavoriteTVShows";


const Favourites = ()=> {
    // eslint-disable-next-line no-unused-vars
    const favorites = useGetFavoriteTVShows(); 
    const favoriteTVShows = useSelector((state) => state.movies.favoriteTVShows);

    return (
        <>
            <div className="bg-[#121829] w-full h-[100vh] overflow-auto text-white">
                <Header />

                <div className="w-5/6 m-auto pb-8">
                    <h1 className="text-4xl mt-5 mb-5 font-bold">Favorites</h1>

                    <TVShowsBox 
                        tvShows={favoriteTVShows}
                        notFoundText="No favorite tv shows"
                    /> 
                </div>

            </div>
        </>
    );
};

export default Favourites;