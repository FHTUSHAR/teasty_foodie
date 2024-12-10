import { Box, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/menu.png";

const Navbar = () => {
  return (
    <Box
      
      // backgroundColor={"#8d5d4c"}
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      zIndex={2}
      // top={26}
      
      sx={{backdropFilter:"blur(30px)"}}
    >
      <Box width={"80%"} display={"flex"} justifyContent={"space-between"} alignItems={'center'} height={65}>
        <Box display={"flex"} gap={5} >
          <Typography color="white" fontSize={16}>
            Home
          </Typography>
          <Typography color="white" fontSize={16}>
            Menu
          </Typography>
          <Typography color="white" fontSize={16}>
            Contact
          </Typography>
        </Box>
        {/* <Box
          height={100}
          width={100}
          borderRadius={"50%"}
          backgroundColor={"#8d5d4c"}
          overflow={'hidden'}
        >
          <img src={img} height={95}  width={100} />
        </Box> */}
        <Box >
          <Typography color="white" fontSize={16}>
            Sign In
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
