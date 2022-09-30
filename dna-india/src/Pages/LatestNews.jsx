import { useState, useEffect } from "react";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
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
    getData(`https://newsapi.org/v2/everything?q=apple&from=2022-09-28&to=2022-09-28&sortBy=popularity&apiKey=bb8089aa73d54c63956f570f4d2c380e`).then((res) => {
      setData(res.articles);
      console.log(res)
    });
  
  });




  return (
    <>

    
   

      <div style={{width:"50%" ,padding:"10px", backgroundColor:"#f5f5f5",}}>
           
        {data.slice(0,visible).map((news) => (
           
          <div
            key={news.source.id}
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
            <p> {news.title}</p>
         
          </div>
        ))}

        <button className="showMore" onClick={showMore}>More News</button>
      </div>
     
    </>
  );
};

export default LatestNews;
