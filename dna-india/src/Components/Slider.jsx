import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import{ChevronRightIcon,ChevronLeftIcon} from "@chakra-ui/icons"
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';


const getData = async (page) => {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=1&_page=${page}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 1. create prev, next button and also page number
// 2. maintain page state
// 3. now add page as a dependency; so that anytime page changes;
// posts value also changes
// 4. update you getData to work in a way that it also takes page number
// and return relevant page data

export default function Slider() {
 
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // on mount phase and ANYTIME "PAGE"  state changes;
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async (page = 1) => {
    try {
      
      const data = await getData(page);
      setPosts(data);
      
    } catch (err) {
     
      console.log(err);
    }
  };

  const handlePageChange = (changeBy) => {
    setPage(page + changeBy);
  };

 

  return (
    <Box width="80%">
    
      <Flex justifyContent="space-between" >
      <ul>
        {posts.map((postItem) => (
          <li style={{color:"white"}} key={postItem.id}>
            {postItem.title}
          </li>
        ))}
      </ul>
      <Box>
      <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
     <SkipPreviousRoundedIcon style={{color:"white"}}/>
      </button>
     
      <button onClick={() => handlePageChange(1)}><SkipNextRoundedIcon style={{color:"white"}}/> </button>
        

      </Box>
     

      </Flex>
      
    </Box>
  );
}