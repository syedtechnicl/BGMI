import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Announcement = () => {
  return (
    <>
      <marquee behavior="scroll" direction="left" style={{ color: "red" }}>
        <p style={{ paddingTop: "10px", margin: "0" }}>
          My name is Habeeb Khan. For BGMI game participation, WhatsApp me at
          7899991563. && Call : 7019387787 My name is Habeeb Khan. For BGMI game
          participation, WhatsApp me at 7899991563. && Call : 7019387787 My name
          is Habeeb Khan. For BGMI game participation, WhatsApp me at
          7899991563. && Call : 7019387787
        </p>
      </marquee>

      <SimpleGrid columns={[1, 2]} spacing={1}>
        <Box>
          <Text p={15} fontSize="2xl" id="about">
            ABOUT
          </Text>
          <Text p={3} lineHeight={2} fontStyle={"italic"}>
            Hey there! I'm <span style={{ color: "red" }}> [Habeeb Khan],</span>{" "}
            an avid gamer and enthusiast of all things gaming-related. Whether
            it's exploring vast open worlds, mastering intricate strategies, or
            immersing myself in captivating narratives, gaming has always been
            my passion. *What I Do:* As a dedicated gamer, I love diving into
            various genres, from action-packed shooters to thought-provoking
            RPGs and everything in between. I enjoy sharing my experiences,
            insights, and tips with fellow gamers, fostering a sense of
            community and camaraderie. *My Mission:* Through my contributions to
            this gaming website, I aim to provide engaging content, including
            reviews, guides, and articles that entertain, inform, and inspire. I
            believe in the power of gaming to bring people together, spark
            creativity, and challenge perspectives. *Join Me:* Whether you're a
            seasoned gamer seeking expert advice or a newcomer eager to discover
            the wonders of gaming, I invite you to join me on this exciting
            journey. Let's explore virtual worlds, conquer epic challenges, and
            forge unforgettable memories together in the boundless realm of
            gaming.
          </Text>
        </Box>
        <Box>
          <Img
            p={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBH_hJ0oOa23kLufg-y-5Zzw0N_yO3r1bY-Q&usqp=CAU"
            alt="No IMG"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Announcement;
