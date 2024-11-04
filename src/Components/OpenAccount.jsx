import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import Image from "../assets/Openaccount.png"
import { Link } from "react-router-dom";
const OpenAccount =()=>{
    return(
        <Container>
            <Wrapper>
            <TextBox>
                 <Heading>
                    <h1>Your phone +</h1> 
                    <h1>our app +</h1>
                    <h1>a debit card =</h1>
                    <h1>a simpler life.</h1>
                 </Heading>
                <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                <Link to="/">
                <nav>
                <span>Open An Account in Minutes </span>
                <FaChevronRight />
                </nav>
                </Link>
            </TextBox>
                <ImageBox>
                    <img src={Image} alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}
export default OpenAccount


const Container = styled.div`
/* border: 1px solid black; */
/* display:flex; */

align-items:center;
justify-content: center;
max-width: 1280px;
padding:0px 10px;
/* margin-top: 100px; */
margin-left: 250px;
margin-right: auto;
/* height:80vh ; */
@media (max-width: 800px){
    width: 100%;
    margin: auto;
}

`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
/* flex-wrap: wrap; */
justify-content: space-between;
width: 85%;
gap: 70px;
@media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
}`


const TextBox = styled.div`
/* border: 1px solid purple; */
max-width: 400px;
display: flex;
flex-direction: column;
margin-top: 100px;
margin-bottom:100px;
@media (max-width: 800px) {
   max-width: 90%;
   align-items: center;
   /* justify-content:center; */
   text-align: center;
   /* width: 350px; */
   gap: 20px;
   margin:auto;
}
h1{
    color:#40196d;
    font-size: 35px;
    width: 500px;
    font-weight: 800;
    line-height: 2ch;
    @media (max-width: 800px) {
      font-size: 28px;
      width: 500px;
      line-height: 1.3ch;
    }
}
p{
    font-weight:500;
    font-size: 15px;
    /* text-align: center; */
    width: 350px;
    @media (max-width: 800px) {
        font-size: 13px;
    }
}
nav{
    color: #40196d;
    font-size: 15px;
    font-weight: 600;
    @media (max-width: 800px) {
        font-size: 14px;
    }
}
`


const ImageBox = styled.div`
/* border: 1px solid red; */
@media (max-width: 800px) {
    max-width: 100%;
    align-items: center;
    /* margin: auto; */
}
img{
    @media (max-width: 800px){
    width: 600px;
    align-items: center;
    /* height:auto;  */
    /* margin-left: 50px; */
}
}`
const Heading = styled.div`
line-height:2.3ch;`