import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const About = () => {
  // const {heading} = useProductContext();
  // const {heading} = React.useContext(AppContext);
  //useContext is a general/default hook

  return (
    <Wrapper>
      <>
        <HeroSection
          name="Welcome to Minimalism"
          data="To the epitome of understated elegance and timeless simplicity. Discover a world where less truly means more, where every stitch, every fabric, and every design element has been meticulously curated to exude an air of sophistication and refined taste. Welcome to our minimalist clothing brand, where the essence of aesthetics finds its true home."
          extra="This is not just clothing; it's an embodiment of a refined lifestyle."
          img="about"
        />
      </>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.pureBlack};
`;

export default About;
