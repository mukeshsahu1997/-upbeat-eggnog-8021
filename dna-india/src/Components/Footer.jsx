import React from "react";
import {Box,Flex} from "@chakra-ui/react";
import {} from "@mui/icons-material";
import {NavLink} from "react-router-dom"
import {SocialIcon} from 'react-social-icons'
import "./Footer.css"



function Footer(){
    const links = [
       
         { image:"https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",path:"/india", title: "India" },
         { image:"https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",path: "/entertainment", title: "Entertainment" },
         { image:"https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",path: "/sports", title: "Sports" },
        
         { image:"https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",path: "/business", title: "Business" },
         { image:"https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",path: "/world", title: "World" },
       
        
      ];

    return(
        <Box bg="#1c1c1c" padding="10px" fontFamily= " Roboto Slab">
            <Flex padding="10px" justifyContent="space-between" width="70%" alignItems="center">
                <img width="90px"   src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />

                {links.map((link) => (
            
            <NavLink
                style={{color:"grey" ,textTransform:"uppercase",fontSize:"14px" }}
                key={link.path}
                to={link.path}
                end
            >
               {link.title}   
            </NavLink>
          ))}

            </Flex>

            <hr style={{border:".5px solid gray"}} />

            <Flex color="gray" padding="10px" justifyContent="space-between" width="70%" height="80px" alignItems="center">
                <Box marginTop="20px" marginBottom="20px" >
                    <h1 style={{color:"grey" ,fontWeight:"400" ,fontSize:"19px",}}>FOLLOW US ON</h1>
                    <Flex padding="10px">
                        <SocialIcon style={{height:"30px",width:"30px" ,marginLeft:"5px"}} url="https://facebook.com/dnaindia"/>
                        <SocialIcon style={{height:"30px",width:"30px",marginLeft:"5px"}} url="https://twitter.com/dna"/>
                        <SocialIcon style={{height:"30px",width:"30px",marginLeft:"5px"}} url="https://youtube.com/channel/UCIRAYFbJmrP--jyrC9MAIWQ/videos"/>

                       
                    </Flex>
                </Box>

                {/* style={{fontSize:"14px"}} */}
                <h1 >ABOUT DNA</h1>
                <h1>CONTACT US</h1>
                <h1>INVESTORS</h1>
                <h1>ADVERTISE</h1>
                <h1>PRIVACY POLICY</h1>
            </Flex>

            <hr style={{border:".5px solid gray"}} />

            
            <Flex color="gray" padding="10px" justifyContent="space-between" width="90%" height="80px" alignItems="center">
               
                <h1 style={{color:"grey" ,fontWeight:"400" ,fontSize:"19px",marginRight:"40px"}}>PARTNER SITE</h1>
                   
               
                <h1>ZEE NEWS</h1>
                <h1>HINDI NEWS</h1>
                <h1>MARATHI NEWS</h1>
                <h1>ADVERTISE</h1>
                <h1>BENGALI NEWS</h1>
                <h1>TAMIL NEWS</h1>
                <h1>MALAYALAM NEWS</h1>
                <h1>BUSINESS NEWS</h1>
                <h1>WION</h1>
            </Flex>

            <hr style={{border:".5px solid gray"}} />

            <p style={{color:"gray",fontSize:"12px",marginBottom:"10px" ,marginTop:"10px"}}>©1998-2022 Diligent Media Corporation Limited, All Rights Reserved.</p>

        </Box>
    )
}

export default Footer;