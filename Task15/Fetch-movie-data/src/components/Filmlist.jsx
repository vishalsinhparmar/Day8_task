import { useEffect, useState } from "react";

const FilmList = ()=>{
    const [search,setSearch] = useState("");
    console.log("serach",search)
    const [movies,setMovies] = useState([]);
    console.log("movies",movies)
    const [loading,setLoading] = useState(true);
    const handleSearch = (e)=>{
         setSearch(e.target.value)
    }
    const fetchMovieslist = async (query)=>{
            try{
                   setLoading(true)
               const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=90718d10`);
               const movies = await res.json();
            //    console.log("movies",movies);
               if(movies.Response === "True"){
                  setLoading(false)
                  setMovies(movies.Search);
               }
            }catch(err){
                 console.log('error happen in the FilmLIst',err.message)
            }
    };
  
    const handleKeydown = (e)=>{
         if(e.key === "Enter" && search.trim()){
             fetchMovieslist(search)
         }
    }
    useEffect(()=>{
        fetchMovieslist("guardians")
    },[])
     return (
        <>
           <div className="p-5">

                <div className="w-full flex items-center justify-center py-4">
                     <input type="text"
                             onChange={handleSearch}
                             name="value"
                             value={search}
                             onKeyDown={handleKeydown}
                             placeholder="Search"
                             className="w-1/3 p-4 border-2 rounded-4xl "

                     />
                </div>
                 {
                    loading ? (
                        <div className="flex items-center justify-center w-full">
                            
                                

<div role="status " className="flex items-center justify-center">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>


                             {/* <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"> Loadning </svg> */}
                           
                        </div>
                    ):(
                         !loading && movies.length>0 ?(
                               <div className=" grid grid-cols-3 justify-center items-center justify-self-stretch  p-4 border-2 border-black rounded-2xl gap-5">
                                     {
                                        movies.map((movies,index)=>(
                                             <div key={index} className="bg-black shadow-2xl rounded-3xl p-4  h-[450px]  text-white hover:bg-black cursor-pointer flex justify-between flex-col transition duration-100 ease-in-out hover:scale-105">
                                                  <h1 className="mt-2 text-2xl font-medium text-gray-300 text-center">{movies.Title}</h1>
                                                  <div className=" p-4  overflow-hidden">
                                                       <img src={movies.Poster} alt="Poster" className="object-cover rounded-lg shadow-md h-60 w-full "/>
                                                  </div>

                                                  <p className="mt-2 text-lg font-medium text-gray-600 text-center">Year:{movies.Year}</p>
                                             </div>
                                        ))
                                     }
                               </div>
                         ):(
                            <p>not movies found</p>
                         )
                    )
                 }
           </div>
        </>
     )
};

export default FilmList;