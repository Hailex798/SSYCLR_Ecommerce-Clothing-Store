import React from 'react'
import styled from "styled-components"
import FeaturedProducts from '../components/FeaturedProducts';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
  return (
    <Wrapper>
      <HeroSection 
      name="A Soùvenīr"
      data="Step into the realm of refined elegance. Our minimalist clothing brand epitomizes suaveness.
      This is not just clothing; it's an ode to the sophisticated soul."
      extra="Elevate your style with timeless minimalism."
      img="home"/>
      <FeaturedProducts />
      <Services />
      <Trusted />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: ${({theme}) => theme.colors.pureBlack};
  // background-color: #F4F1DE;
`

export default Home;