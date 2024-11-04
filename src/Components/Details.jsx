import styled from "styled-components"
import Image from "../assets/Details.png"
const Details =()=> {
    return(
        <Container>
            <Wrapper>
            <ImageBox>
              <img src={Image} alt="" />
            </ImageBox>
            <TextBox>
            <h1>It's your money, we just help you manage it.</h1>
            <p>Save it, spend it, send it. It's up to you. Whatever you choose to do with your money, we'll make sure it's done better and free of charge. We take responsibility for that.</p>
            </TextBox>
            </Wrapper>
        </Container>
    )
}
export default Details

const Container = styled.div`
display: flex;
max-width: 1280px;
margin-left: auto;
margin-right: auto;
align-items: center;
justify-content: center;
padding: 0px 10px;

`
const ImageBox = styled.div`
/* border: 1px solid black; */
width: 50%;
margin: auto;
@media (max-width: 800px){
    width: 500px;
    /* margin-right: 100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
img{
    @media (max-width: 800px){
        width: 500px;
        margin: auto;
        /* border: 1px solid red; */
    }
}
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
text-align: start;
margin: auto;
/* border: 1px solid green; */

h1{
    font-size: 33px;
    font-weight: 800;
    color:#40196d;
    @media (max-width: 800px) {
      font-size: 26px;
      text-align: center;
      width: 400px;
    }
}

p{
    font-size: 15px;
    font-weight: 400;
    width: 400px;
    @media (max-width: 800px){
        font-size: 13px;
        width: 350px;
        text-align: center;
        font-weight: 400;
    }
}
@media (max-width: 800px){
    display: flex;
    align-items: center;
}
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
max-width: 85%;
gap: 10px;
/* border: 1px solid black; */
padding: 0px 10px;
margin: auto;
@media (max-width: 800px) {
  /* width: 600px ; */
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  /* justify-content: center; */
}
`