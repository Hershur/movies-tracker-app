import { useSelector } from "react-redux";
import Header from "../../components/Header";
import MoviesBox from "../../components/MoviesBox";
import useGetPopularTVShows from "../../hooks/useGetPopularTVShows";


const Home = ()=> {
    // eslint-disable-next-line no-unused-vars
    const tvShows = useGetPopularTVShows();
    const popularTVShows = useSelector((state) => state.movies.popularTVShows);


    return (
        <>
            <div className="bg-[#121829] w-full h-[100vh] overflow-auto text-white">
                <Header />

                <div className="w-5/6 m-auto pb-8">
                    <h1 className="text-4xl mt-5 mb-5 font-bold">Movies</h1>

                    <div>
                        <input 
                            placeholder="Search TV Shows"
                            type="text" 
                            className="p-2 text-[#3A4259] rounded-lg border-2 bg-[#121829] border-[#11263D] w-80" 
                        />
                    </div>

                    <div className="mt-10 mb-5">
                        {popularTVShows.length} Items
                    </div>

                    <MoviesBox 
                        popularTVShows={popularTVShows}
                    />
                </div>

            </div>
        </>
    );
};

export default Home;