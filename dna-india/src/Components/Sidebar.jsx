import React from "react";
// import {Box} from "@chakra-ui/react";
import styles from "./Sidebar.module.css";
import {NavLink} from "react-router-dom"

{/* <Route path="/" element={<LatestNesws/>}></Route>
<Route path="/photos" element={<Photos/>}></Route>
<Route path="/indaus" element={<IndAus/>}></Route>
<Route path="/video" element={<Video/>}></Route>
<Route path="/explainers" element={<Explainers/>}></Route>
<Route path="/india" element={<India/>}></Route>
<Route path="/entertainment" element={<Entertainment/>}></Route>
<Route path="/sports" element={<Sports/>}></Route>
<Route path="/viralnews" element={<Viralnews/>}></Route>
<Route path="/lifistyle" element={<Lifestyle/>}></Route>
<Route path="/education" element={<Education/>}></Route>
<Route path="/business" element={<Business/>}></Route>
<Route path="/world" element={<World/>}></Route> */}

const links = [
    { image:"https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg",path: "/", title: "LatestNesws" },
    { image:"https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg",path: "/photos", title: "Photos" },
    { image:"https://english.cdn.zeenews.com/static/public/icons/icons-cricket.svg",path: "/indaus", title: "Ind Vs Aus" },
    { image:"https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg",path: "/video", title: "Videos" },
    { image:"https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg",path: "/explainer", title: "Explainers" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",path:"/india", title: "India" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",path: "/entertainment", title: "Entertainment" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",path: "/sports", title: "Sports" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg",path: "/viralnews", title: "Viralnews" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg",path: "/lifistyle", title: "Lifistyle" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-education.svg",path: "/education", title: "Education" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",path: "/business", title: "Business" },
     { image:"https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",path: "/world", title: "World" },
   
    
  ];

function Sidebar(){
    return(
        <div
        style={{
           
        backgroundColor:"#f5f5f5",    
        textAlign:"left",
       
       
        
        width: "25%",
      
      
      
      }}
    >
        
        {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
        >
            <div style={{padding:"10px", display:"flex",justifyContent:"center", alignItems:"left"}}>
           
            <img style={{alignItems:"left",marginRight:"10px"}}  src={link.image} alt= {link.title}    /> {link.title}  
          
            </div>
        
           
           
          
        </NavLink>
      ))}

        
     
    </div>
  );
    
}

export default Sidebar;