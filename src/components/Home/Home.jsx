import HomeCss from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Home() {
  {/*finction movies*/}
  const [loading,setloading]=useState([false]);
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>
    {
      setloading(false);
    },800)
    },[])
  const [Movies,SetMovies] = useState([])
  async function getTrendingMovies() {
 const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjdlMmQ1OGVkYzFhY2Q3ZjYwOTIzNWNlN2NiMjk3ZiIsInN1YiI6IjY1MGY0ZDM2ZjI5ZDY2MDExY2ZjZTE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hWQXQsVVkwOSbzvAYz3RcSZpUTzbULgcYa7cfQ1ccos",
      }
    });
    SetMovies(data.results)
  }
  useEffect(function() {
    getTrendingMovies()
  },[])

  return <>
  {loading?
   <CircleLoader
   color={"#000000"}
   loading={loading}
   size={30}
   data-testid="loader"
   className={HomeCss.lodaing}
 />
  :
  <div className="container">
    <h2 className={HomeCss.font}>This is Trending Movie</h2>
  <div className="row">
    {Movies.map(function(movie,idx){return <div className="col-md-6 g-4" key={idx}>
   <div className={HomeCss.Cartona}>
       <div className={HomeCss.CartonaThum}>
           <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt="" className="w-100" />
       </div>
       <div className={HomeCss.cartonabody}>
           <span className="cartonatitle">{movie.title}</span>
              <p>
                  <span>{movie.release_date}</span>
                  <span className={HomeCss.red}>{movie.adult===false? "+18":"" }</span> 
              </p>
              <div className={HomeCss.start}>
                <span>{movie.vote_average}</span>
              <i className="fa-solid fa-star"/>
              </div>
              <p className={HomeCss.carddescription}> {movie.overview}</p>
       </div>
   </div>
 </div>})}
  </div>
</div>
}
      {/*UiDEsign*/}
     
    </>
;
}

export default Home;
