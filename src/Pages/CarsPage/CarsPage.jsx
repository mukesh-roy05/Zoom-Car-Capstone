import { Box, Flex, Image, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios"; // Ensure axios is imported
import { useCookies } from "react-cookie";
import URL from '../../configs/config';

export const CarsPage = () => {
  const navigate = useNavigate();
  const address = useSelector((state) => state.Lreducer.address);
  const DateTime = useSelector((state) => state.DTreducer);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [data, setData] = useState({});

  console.log(data);
  console.log(cookies.City);

  useEffect(() => {
    // Use axios to get data from the API
    axios
      .get(`${URL}/cars`) 
      .then((res) => {
        
        console.log("API Response:", res.data);
        if (res.data && res.data.data && res.data.data[0] && res.data.data[0].Cars) {
          setData(res.data.data[0].Cars[0]); // Ensure you're accessing the right structure
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      })
      .catch((err) => console.error("API call failed:", err));
  }, []);

  const handleBook = () => {
    alert("Booking Confirmed 😊");
    removeCookie("Address");
    removeCookie("startDT");
    removeCookie("returnDT");
    navigate("/");
  };

  return (
    <Box>
      <Box w="58%" m={"auto"} mt={"10px"}>
        <Flex justifyContent="space-between">
          <Button
            onClick={() => navigate("/searchLocation")}
            bg="white"
            w={"50%"}
            border="1px solid green"
            mb={2}
          >
            {address || cookies.Address}
          </Button>
          <Button
            w={"45%"}
            onClick={() => navigate("/DateAndTime")}
            mb={2}
            bg="white"
            border={"1px solid green"}
          >
            {DateTime.sDateAndTime || cookies.startDT}
            <BsArrowRight style={{ marginLeft: "20px", marginRight: "20px" }} />
            {DateTime.rDateAndTime || cookies.returnDT}
          </Button>
        </Flex>
      </Box>
      <Box w="60%" m="auto" p={3}>
        {Object.keys(data).map((elem) => {
          if (elem === cookies.City) {
            return data[elem].map((e) => (
              <Box mb={3} key={e.id}>
                <Flex justifyContent="space-between" border="1px solid black" p={3}>
                  <Box w="60%" p={4}>
                    <Box fontSize="large" fontWeight="bold">
                      {e.name}
                    </Box>
                    <Box>{e.type}</Box>
                    <Flex>
                      <Box mr={2} mt={1}>
                        <AiFillStar />
                      </Box>
                      <Box>{e.rating}</Box>
                    </Flex>
                    <Box color="green" fontWeight="bold">
                      {e.price}
                    </Box>
                    <Box mt={10}>
                      <Button bg="green" color="white" onClick={handleBook}>
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                  <Box w="40%">
                    <Image style={{ width: "95%" }} src={e.image} />
                  </Box>
                </Flex>
              </Box>
            ));
          }
          return null; // Ensure there's a return statement
        })}
      </Box>
    </Box>
  );
};
