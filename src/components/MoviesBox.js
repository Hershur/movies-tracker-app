const Loader = ()=> {
    return (
        Array.from(Array(4).keys()).map(x => (
            <div key={x} className="bg-[#20283E] h-[30em] rounded-lg p-4 flex[1_1_21%] box-border animate-pulse">
                <div className="h-5/6 rounded-lg bg-slate-700">

                </div>

                <div className="mt-8 p-2 bg-slate-700 rounded-lg">
                    
                </div>
            </div>
        ))
    );
};

const MoviesBox = ({ tvShows, notFoundText })=> {
    return (
        <>
            <div className="mt-10 mb-5">
                {tvShows?.length} Items
            </div>

            <div className="grid grid-cols-[24%_24%_24%_24%] justify-center items-center gap-4 flex-wrap">
                {
                    !tvShows ?

                    <Loader /> :

                    tvShows?.length < 1 ?

                    <div className="flex justify-center items-center m-8">{notFoundText}</div> :

                    tvShows?.map(x => (
                        <div key={x.id} className="bg-[#20283E] h-[32em] rounded-lg p-4 flex[1_1_21%] box-border">
                            <div className="h-5/6 rounded-lg">
                                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={x.name}  />
                            </div>

                            <div className="mt-5 p-2">
                                <span>{x.name}</span><br/>
                                <span className="font-extrabold text-[#7B6EF6]">{x.vote_average} </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default MoviesBox;