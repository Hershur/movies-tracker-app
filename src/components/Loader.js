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

export default Loader;