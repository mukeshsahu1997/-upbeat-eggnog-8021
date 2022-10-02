import { useState, useEffect } from "react";
import{Link} from "react-router-dom"

import "./latestNews.css"

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};


const LatestNews = () => {
  const [data, setData] = useState([]);
  const [visible,setVisible]=useState(10)

const showMore=()=>{
    setVisible((prevValue)=>prevValue+10

    )
}
  useEffect(() => {
    getData(`https://floating-woodland-86359.herokuapp.com/api/articles`).then((res) => {
      setData(res);
      console.log(res)
    });
  
  });




  return (
    <>

    
   

      <div style={{width:"50%" ,padding:"10px", backgroundColor:"#f5f5f5",}}>
           
        {data.slice(0,visible).map((news) => (
           
          <div
            key={news.title}
            style={{
              display: "flex",
              backgroundColor:"white",
             alignItems:"center",
           
             marginTop:"5px",
             borderRadius:"10px",
             padding:"10px"
            }}
          >
            
            <img style={{width:"150px",height:"100px"}} src={news.urlToImage} alt="news-pic" />
            {/* <p> {news.title}</p> */}
            <a href={news.url}>{news.title}</a>
         
          </div>
        ))}

        <button className="showMore" onClick={showMore}>More News</button>
      </div>
     
    </>
  );
};

export default LatestNews;
