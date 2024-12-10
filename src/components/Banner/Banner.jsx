import { Box } from "@mui/material";
import React from "react";
import banner1 from "../../assets/images/baner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <Box sx={{ position: "relative", height: "600px" }}>
      <Navbar />
      <Box
        sx={{
          width: "98%",
          position: "absolute",
          top: " 0px",
          right: "0px",
          height: "600px",
          clipPath: "polygon(100% -67%, 0% 163%, 100% 100% )"
        }}
      >
        <img
          src={banner1}
          height={600}
          width={"100%"}
        //   style={{ clipPath: "polygon(100% -68%, 0% 166%, 100% 100% )" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0px",
          right: "0px",
          height: "600px",
          clipPath: "polygon(0% 0%, 0% 166%, 71% 0%)"
        }}
      >
        <img
          src={banner2}
          height={600}
          width={"100%"}
        //   style={{ clipPath: "polygon(0% 0%, 0% 166%, 71% 0%)" }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
