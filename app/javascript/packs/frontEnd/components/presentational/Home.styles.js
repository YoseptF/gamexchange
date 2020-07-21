import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;
  background-image: ${props => `url(${props.image || 'https://via.placeholder.com/1280'})`}
`;

const links = css`
  cursor: pointer;
  padding: 18px;
  margin: 8px;
  border-radius: 500px;
  background: ${props => (props.transparent ? 'transparent' : props.theme.primary || 'orange')};
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  &:hover{
    color: rgba(0,0,0,0.4);
  }
`;

const Button = styled(Link)`
  ${links}
`;

const HeroMessage = styled.div`
  width: 44vmax;
  max-width: 520px;
  position: absolute;
  left: 25%;
  top: 50%;
  transform:translate(-25%,-50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p{
    margin: 2rem 0;
    font-size: 2vh;
  }
  a{
    font-size: 1.5vh;
  }
  h1{
    font-size: 3vh;
  }
`;

const Nav = styled.nav`
  width: 90vw;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vw 5vw;
  z-index: 10;
  a{
    text-decoration: none;
    -webkit-text-stroke: 0.5px black;
  } 
  
  .logoCombo{
    height: 10vh;
    display: flex;
    align-items: center;
    color: white;
    font-size: 2rem;
    h1{
      -webkit-text-stroke: 1px black;
    }
    img{
      height: 100%;
      margin-right: 1rem;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width:700px){
    display: none;
  }
`;

const MenuItem = styled.li`
padding: 18px;

  ${props => props.rounded && css`
    background: rgba(0,0,0,0.2);
    border-radius: 500px;
    `}
    
    a{
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: capitalize;
    &:hover{
      color: rgba(255,255,255,0.7);
    }
  }
`;

const Section = styled.section`
  background: ${props => props.theme.background};
  padding-top: 5vmax;
  width: 100vw;
  display: flex;
  flex-direction:column;
  align-items: center;
  @media only screen and (max-width:700px){
    text-align: center;
  }
  h1{
    font-size: 2.2rem;
    font-weight: 400;
  }
  h2{
    text-transform: uppercase;
    color: ${props => props.theme.subtitles || 'grey'};
    margin-bottom: 0;
    font-size: 1.2rem;
  }
`;

const Data = styled.section`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  width:100vw;
  .image{
    width: 50%;
    min-height: 40vh;
    flex-shrink: 0;
    background: ${props => `url(${props.image}) no-repeat center/cover`};
  }
  .dataBox{
    padding: 50px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
      font-weight: bold;
    }
    p{
      color: ${props => props.theme.subtitles || 'grey'}
    }
  }
  @media only screen and (orientation: portrait){
    flex-direction: column;
    .image{
      width: 100%;
    }
    .dataBox{
      display: grid;
      place-items: center; 
      h1,p{ text-align: center;}
      h1{ 
        font-size: 3rem;
      }
      p{font-size: 2rem;}
    }
  }
  a{
    ${links}
  }
`;

const Testimonials = styled.div`
  width:100vw;
  display: flex;
  overflow: hidden;
  @media only screen and (orientation:portrait){
    padding-bottom: 300px;
  }
`;

const Testimonial = styled.div`
  display:flex;
  width: 100%;
  height: auto;
  padding: 1rem;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  box-shadow: 2px -3px 23px 10px rgba(0,0,0,0.42);
  @media only screen and (max-width:700px){
    width: 100vmin;
    padding: 0;
  }
  img{
    flex-shrink:0;
    max-width: 150px;
    border-radius: 100%;
    border: 5px solid white;
  }
  h1{
    margin:0;
    font-size: 3vh;
  }
  p{
    font-size: 2vh;
  }
`;

const CarouselControls = styled.div`
  i{
    font-size: 2.5rem;
    color: ${props => props.theme.primary};
    cursor:pointer;
    margin: 1rem;
    &:hover{color: ${props => props.theme.subtitles}}
  }
`;

export {
  Hero, Button, HeroMessage, Nav, Menu, MenuItem,
  Section, Data, Testimonial, Testimonials, CarouselControls,
};
