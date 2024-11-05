import styled from "styled-components"
import Image from "../assets/join.png"
const JoinKuda = () =>{
    return(
        <Container>
            <Wrapper>
                <TextBox>
            <h2>The money app for Africans</h2>
            <p>Save, spend, send and invest money across borders.</p>
            <button>Join Kuda</button>
            </TextBox>
            <ImageBox>
                <img src={Image} alt="" />
            </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default JoinKuda


const Container = styled.div`
max-width: 1280px;
margin: auto;
/* display: flex;
align-items: center; */
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
/* align-items: center; */
gap: 20px;
background-color: #e9f3f8;
height: 350px;
width: 85%;
margin-bottom: 80px;
margin-top: 80px;
margin-left: 100px;
border:1px solid #d1dce2;
border-radius: 5px;
`
const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
/* line-height: 2ch; */
/* border: 1px solid black; */
text-align: start;
padding: 20px 40px;
/* height: 200px; */
/* gap: 10px; */
@media (max-width: 800px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
h2{
    font-size: 35px;
    font-weight: 900;
    color: #40196d;
    @media (max-width: 800px){
        width: 350px;
        text-align: center;
    }
}

button{
    width: 140px;
  height: 47px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #40196d;;
}
`

const ImageBox = styled.div`
img{
/* width:  */
height: 350px;

@media (max-width: 800px){
    display: none;
}
}`