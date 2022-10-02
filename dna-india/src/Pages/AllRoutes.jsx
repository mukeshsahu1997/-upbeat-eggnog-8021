import {Routes,Route} from "react-router-dom";
import LatestNesws from "./LatestNews";
import Photos from "./Photos";
import IndAus from "./IndAus";
import Video from "./Videos";
import Explainers from "./Explainers";
import India from "./India";
import Entertainment from "./Entertainment";
import Sports from "./Sports";
import Viralnews from "./Viralnews";
import Lifestyle from "./Lifestyle";
import Education from "./Education";
import Business from "./Business";
import World from "./World";

function Allroutes(){
    return(
        <Routes>
        <Route path="/" element={<LatestNesws/>}></Route>
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
        <Route path="/world" element={<World/>}></Route>
       

        

        
        </Routes>
    )
}

export default Allroutes;