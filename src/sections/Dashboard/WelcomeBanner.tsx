import React from 'react'
import styled from 'styled-components'
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import discordbanner from "./banner1.jpg";
import discordbanner1 from "./banner2.jpg";


const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);
  background-size: 300% 300%;
  animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }


  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Carousel
    touch={true}
    controls={false} // Set controls to false to disable next and previous buttons

    prevIcon={<svg width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M2.31 33a8 8 0 010-8l9.88-17.115a8 8 0 016.929-4H38.88a8 8 0 016.928 4L55.691 25a8 8 0 010 8l-9.882 17.115a8 8 0 01-6.928 4H19.12a8 8 0 01-6.928-4L2.309 33z" fill="#5B6368"></path><path data-v-1163a730="" d="M31.762 35.339l-2.102 1.947L20.714 29l8.946-8.286 2.102 1.947L24.934 29l6.828 6.339z" fill="#fff"></path><path data-v-1163a730="" d="M23.476 27.62h13.81v2.761h-13.81v-2.762z" fill="#fff"></path></svg>}
    nextIcon={<svg style={{ transform: "rotate(180deg)", }} width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path d="M2.31 33a8 8 0 010-8l9.88-17.115a8 8 0 016.929-4H38.88a8 8 0 016.928 4L55.691 25a8 8 0 010 8l-9.882 17.115a8 8 0 01-6.928 4H19.12a8 8 0 01-6.928-4L2.309 33z" fill="#5B6368"></path><path data-v-1163a730="" d="M31.762 35.339l-2.102 1.947L20.714 29l8.946-8.286 2.102 1.947L24.934 29l6.828 6.339z" fill="#fff"></path><path data-v-1163a730="" d="M23.476 27.62h13.81v2.761h-13.81v-2.762z" fill="#fff"></path></svg>}
  >
    <Carousel.Item>
      <a
        style={{ cursor: "pointer", textDecoration: "none", }}
        href="https://discord.gg/rbxchance"
        target="_blank"
        rel="noreferrer" 
    >
        <img
          style={{ width: "100%", border: "1px solid rgb(51 59 66)", borderRadius: "10px", }}
          className="d-block w-100"
          src={discordbanner}
        />
      </a>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ width: "100%", border: "1px solid rgb(51 59 66)", borderRadius: "10px", }}
        className="d-block w-100"
        src={discordbanner1}
      />
    </Carousel.Item>
  </Carousel>
  
)
}
