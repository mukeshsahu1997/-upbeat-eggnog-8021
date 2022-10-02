import React from "react";
import {Box,Button,Flex} from "@chakra-ui/react";
import Slider from "./Slider";



    

    // ["Time to hear out young workers in Congress: Shashi Tharoor",
    // "Petrol pump owner escapes kidnapping attempt in Varanasi after staffers intervene",
    // "Video of a herd of deer enjoying the clear water at a Switzerland lake will take your breath away",
    // "Premier League: Arsenal secure 3-1 win over Tottenham Hotspur to go top of the table",
    // "HS Prannoy sets sight on World Tour Finals: Need to be consistent",
    // "Petrol pump owner escapes kidnapping attempt in Varanasi after staff intervene ",
    // "Missing Kerala BJP worker's body found plastered in wall",
    // "Man’s incredible mimicry of Bollywood actors during Navrati is a laugh riot",
    // "Will build schools, hospitals if voted to power: Kejriwal's Gujarat pitch",
    // "Bumrah has gone to NCA, waiting for official confirmation on fitness: Rahul Dravid"
    // ]

    
   


function Topnews(){
    return(
        <Box bg="rgb(49,49,49)"  align="left" marginTop="10px" marginBottom="10px" >
            <Flex alignItems="center" >
            <Button bg="rgb(170,170,170)" height="45px" width="150px" marginRight="10px">Top News</Button>
            
          
            <Slider/>
           
           
            </Flex>
        </Box>
    )
}

export default Topnews;