import styled from "styled-components"
import ImageBox from  "../assets/HeroImg.png"
import { FaApple } from "react-icons/fa";
import PlayStore from "../assets/google-play-icon.svg"
const Hero = ()=> {
  

  return (
      <Container>
        <Wrapper>
          <TextBox>
            <h1>The money app for Africans.</h1>
            <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
            <Buttons>
            
              <button><FaApple size={30}/><span>Download on the <br /> App Store</span></button>
              
              <button><img style={{width:"20px"}}src={PlayStore} alt="" /><span>GET IT ON <br />Google Play</span> </button>
            </Buttons>
          </TextBox>
          <ImgBox>
            <img src={ImageBox} alt="" />
          </ImgBox>
        </Wrapper>
      </Container>
    )
}
  
  export default Hero


  const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid red; */
  display:flex;
  align-items:center;
  justify-content:center;
  min-height: calc(100vh - 70px);
  padding:0px 10px;
  `

  const Wrapper = styled.div`
  display:flex;
  /* align-items:center; */
  flex-wrap: wrap;
  justify-content:space-between;
  width:85%;
  `


  const TextBox = styled.div`
  max-width: 400px;
  /* width: 50%; */
  display:flex;
  flex-direction:column;
  justify-content: center;
  gap: 1px;
  @media (max-width: 800px) {
   max-width: 100%;
   align-items: center;
   text-align: center;
   margin-top: 30px;
}
  h1{
    /* border: 1px solid red; */
    color: #40196d;
    font-size:48px;
    font-weight: 900;
    line-height: normal;
    width:450px;
    @media (max-width: 800px) {
      font-size: 32px;
      width: 330px;
    }
  }
  p{
    font-weight:600;
    font-size: 17px;
    line-height: 2.5ch;
    /* border: 1px solid green; */
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  `
  const ImgBox = styled.div`
   img{
    /* border: 1px solid black; */
    /* min-width:50%; */
    width: 600px;
    height:auto;
    @media (max-width: 800px) {
      width:500px;
    }

   }
  `

  const Buttons = styled.div`
  display:flex;
  gap:20px;
  button{
    display:flex;
    align-items:center;
    gap:15px;
    background-color: black;
    color: white;
    height:40px;
    width: 140px;
    border-radius:5px;
    font-size: 9px;
    text-align:start;
    border: none;
    /* flex-direction: row; */
  }
  `
  const AppleBtn = styled.div``