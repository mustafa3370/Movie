import axios from "axios"
import { useEffect, useState } from 'react';
import SeriesCss from "./Series.module.css";
import CircleLoader from "react-spinners/CircleLoader";
function Series() {

const [Series,setSeries]=useState([])
async function getSeries() {
 const {data} = await axios.get("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjdlMmQ1OGVkYzFhY2Q3ZjYwOTIzNWNlN2NiMjk3ZiIsInN1YiI6IjY1MGY0ZDM2ZjI5ZDY2MDExY2ZjZTE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hWQXQsVVkwOSbzvAYz3RcSZpUTzbULgcYa7cfQ1ccos",
            Accept:"application/json"
        }
    });
    setSeries(data.results)
}
useEffect(function() {
 getSeries();   
},[])
const [loading,setloading]=useState([false]);
useEffect(()=>{
setloading(true);
setTimeout(()=>
{
  setloading(false);
},800)
},[])
    return <>
    {loading?
     <CircleLoader
     color={"#000000"}
     loading={loading}
     size={30}
     data-testid="loader"
     className={SeriesCss.lodaing}
   />
    :
    
    <div className="container">
       <h2 className={SeriesCss.font}>This is Trending Series</h2>
    <div className="row">
      {Series.map(function(Series,idx){return <div className="col-md-6 g-4" key={idx}>
     <div className={SeriesCss.Cartona}>
         <div className={SeriesCss.CartonaThum}>
             <img src={'https://image.tmdb.org/t/p/original/' + Series.poster_path} alt="" className="w-100" />
         </div>
         <div className={SeriesCss.cartonabody}>
             <span className="cartonatitle">{Series.original_name}</span>
                <p>
                    <span>{Series.release_date}</span>
                    {Series.adult===true? <span className={SeriesCss.red}></span> :"" }
                </p>
                <div className={SeriesCss.start}>
                  <span>{Series.vote_average}</span>
                <i className="fa-solid fa-star"/>
                </div>
                <p className={SeriesCss.carddescription}> {Series.overview}</p>
         </div>
     </div>
   </div>})}
    </div>
  </div>
    }
   
      {/*UiDEsign*/}
     
    </>
}

export default Series
