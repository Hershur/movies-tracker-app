import Header from "../../components/Header";
import MoviesBox from "../../components/MoviesBox";


const Viewed = ()=> {
    const viewedTVShows = JSON.parse(window.localStorage.getItem('viewedTVShows')) || []; 


    return (
        <>
            <div className="bg-[#121829] w-full h-[100vh] overflow-auto text-white">
                <Header />

                <div className="w-5/6 m-auto pb-8">
                    <h1 className="text-4xl mt-5 mb-5 font-bold">Viewed</h1>

                    <MoviesBox 
                        tvShows={viewedTVShows}
                        notFoundText="No viewed tv shows"
                    /> 
                </div>

            </div>
        </>
    );
};

export default Viewed;