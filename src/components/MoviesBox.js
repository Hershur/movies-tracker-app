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

const MoviesBox = ({ popularTVShows })=> {
    return (
        <div className="grid grid-cols-[24%_24%_24%_24%] justify-center items-center gap-4 flex-wrap">
            {
                popularTVShows.length < 1 ?

                <Loader /> :

                popularTVShows.map(x => (
                    <div key={x.id} className="bg-[#20283E] h-[30em] rounded-lg p-4 flex[1_1_21%] box-border">
                        <div className="h-5/6 rounded-lg">
                            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={x.name}  />
                        </div>

                        <div className="mt-8 p-2">
                            {x.name}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default MoviesBox;