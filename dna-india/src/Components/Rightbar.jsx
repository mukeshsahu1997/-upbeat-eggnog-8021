import React from "react"
import {Box,Flex,Button} from "@chakra-ui/react"
import "./Rightbar.css"


function Rightbar(){
    return(
        <>

        <Box width="24%" p="10px">
           {/* Treding news */}
            <Flex justifyContent="space-between">
               <h4 style={{fontWeight:"bold"}}>TRENDING NEWS TOPICS</h4>
               <h6 className="more">More</h6>
            </Flex>
          
            <hr className="hr" />

            <button className="rb" style={{backgroundColor:"rgb(242,221,107)",}}> Narendra Modi </button>
            <button  className="rb" style={{backgroundColor:"rgb(85,100,201)"}}>Brahmastra</button>
            <button  className="rb" style={{backgroundColor:"rgb(185,147,184)"}}>Iphone</button>

            {/* Popular stories */}
            <Flex justifyContent="space-between" marginTop="30px">
               <h4 style={{fontWeight:"bold"}}>POPULAR STORIES</h4>
               <h6 className="more">More</h6>
            </Flex>
            <hr className="hr" />

            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/28/2541999-ashok-gehlot-2.jpg" alt="" width="100px"  /> <h2 className="h2">Gandhis still keen on Gehlot contesting party prez polls, but looks for options...</h2>
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/27/2541739-untitled-design-2022-09-27t061940.961.png" alt="" width="100px"/> <h2 className="h2">THIS business supports Wipro’s stance  here’s why</h2>
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/29/2542320-denmark-jersey.jpg" alt="" width="100px" /> <h2 className="h2">Denmark football team to wear toned down jerseys to protest against hosts Qatar ...</h2> 
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/28/2542111-fotojet-11.jpg" alt="" width="100px"/> <h2 className="h2">Shubman Gill smashes maiden county cricket century for Glamorgan </h2>
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/28/2541850-space-pollution.jpg" alt="" width="100px"/> <h2 className="h2">List of countries that are polluting space the most released</h2>
            </Flex>

            {/* Most viewed */}

            <Flex justifyContent="space-between" marginTop="30px">
               <h4 style={{fontWeight:"bold"}}>MOST VIEWED</h4>
               <h6 className="more">More</h6>
            </Flex>
            <hr className="hr" />

            <Flex justifyContent="space-between" margin="auto">
                <Box>
                    <img src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/31/2526478-kiara-advani.jpg" alt=""  width="120px"/> <h2 className="h2">Kiara Advani birthday: <br /> 6 times...</h2>
                </Box>
                <Box>
                    <img src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/30/2526300-sonu-thumbnail.jpg" alt=""  width="120px"/> <h2 className="h2">Happy Birthday  <br /> Sonu Sood</h2>
                </Box>
               
            </Flex>

            <Flex justifyContent="space-between" margin="auto" marginTop="10px">
                <Box>
                    <img src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/08/06/2528097-ibrahim.jpg" alt=""  width="120px"/> <h2 className="h2">Viral Photos of the <br /> Day: Sussa...</h2>
                </Box>
                <Box>
                    <img src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/08/09/2528875-rakhi-final.jpg" alt=""  width="120px"/> <h2 className="h2">Raksha Bandhan  <br /> 2022: Shah Rukh...</h2>
                </Box>
            </Flex>

            {/* Speed Readers */}

            <Flex justifyContent="space-between" marginTop="30px">
               <h4 style={{fontWeight:"bold"}}>SPEED READS</h4>
               <h6 className="more">More</h6>
            </Flex>
            <hr className="hr" />

            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/29/2542377-2534159-microsoft.jpg" alt="" width="100px"  /> <h2 className="h2">Microsoft Windows 11 users can now install Android apps on their...</h2>
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/29/2542361-exam-entrance.jpg" alt="" width="100px"/> <h2 className="h2">UP Police Recruitment 2022 notification released for </h2>
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/29/2542336-sc.jpg" alt="" width="100px" /> <h2 className="h2">All women, married or unmarried, entitled to safe and legal abortion', says SC</h2> 
            </Flex>
            <Flex justifyContent="space-between" marginTop="10px">
                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/30/2542502-jamia.jpg" alt="" width="100px"/> <h2 className="h2">Jamia student shot at inside Delhi hospital after brawl at </h2>
            </Flex>
           




        </Box>
        </>
    )
}

export default Rightbar;