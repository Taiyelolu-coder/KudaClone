import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import {Link} from "react-router-dom"
import Logo from "../assets/kuda.png"
import React from "react";

import { FaCaretRight } from "react-icons/fa";

const SideBar =({toggle, setToggle})=>{
    const test = () =>{
        setToggle(false)
    }
    return(
        <Container>
          
            <LogoNav>
                <img src={Logo} alt="" />
                <IoMdClose />
            </LogoNav>
            <Buttons>
                <JoinKuda>Join Kuda</JoinKuda>
                <SignIn>Sign In</SignIn>
            </Buttons>
            <Links>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Personal</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Business</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Company</span>
                    <FaCaretRight />
                </nav>
               
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Developers</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Contact Us</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Help</span>
                    <FaCaretRight />
                </nav>
              </Link>
            </Links>
            
        </Container>
    )
}

export default SideBar

const Container = styled.div`
min-height: calc(100vh - 80px);
display: flex;
flex-direction: column;
align-items: start;
gap: 30px;
margin: auto;
margin-top: 20px;
padding-left: 10px;
padding-right: 10px;

`
const LogoNav = styled.div`
display: flex;
justify-content: space-between;
gap: 370px;

img{
    width: 80px;
}`

const Links =styled.div`
display: flex;
flex-direction: column;
gap: 40px;
nav{
  display: flex;
  
}
`

const Buttons = styled.div`
display:flex;
gap: 20px;



`
const SignIn = styled.button`
background-color: #cfe9e0;
display: flex;
align-items: center;
justify-content: center;
width: 110px;
height: 40px;
text-align: center;
color: #40196d;
font-size: 13px;
font-weight: 600;
border-radius: 10px;
border: none;
`
const JoinKuda = styled.button`
background-color: #40196d;
display: flex;
align-items: center;
justify-content: center;
width: 110px;
height: 40px;
text-align: center;
color: white;
font-size: 13px;
font-weight: 600;
border-radius: 10px;
border: none;
`
