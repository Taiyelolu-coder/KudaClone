import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import Image from "../assets/Save.png"
import { Link } from "react-router-dom";

const Save =()=>{
    return(
        <Container>
            <Wrapper>
            <TextBox>
                <h1>Save money as you spend it, seriously.</h1>
            <p>You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
            <Link to="/">
            <nav>
                <span>See all our Savings
                <FaChevronRight />
                </span>
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

export default Save

const Container = styled.div`
/* border: 1px solid black; */
display: flex;
max-width: 1280px;
margin-left: auto;
margin-right: auto;
align-items: center;
justify-content: center;
padding: 0px 10px;
`
const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: start;
/* width: 400px; */
@media (max-width: 800px){
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
}

h1{
    font-size: 35px;
    font-weight: 800;
    color: #40196d;
    width: 400px;
    @media (max-width: 800px){
    /* text-align: center; */
    font-size: 26px;
    }
}

p{
    font-size: 15px;
    font-weight: 400;
    width: 350px;
    @media (max-width: 800px){
    font-size: 13px;
    text-align: center;
    }
}
nav{
    color: #40196d;
    font-size: 15px;
    font-weight: 600;
    @media (max-width: 800px){
    font-size: 14px;
    }
}
`

const Wrapper = styled.div`
/* border: 1px solid green; */
display: flex;
justify-content: space-between;
width: 85%;
padding: 0px 10px;
@media (max-width: 800px){
    display: flex;
    flex-wrap: wrap;
}
`
const ImageBox = styled.div`
/* width: 50%; */
@media (max-width: 800px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    } 
    
img{
    /* border: 1px solid pink; */
    @media (max-width: 800px){
        width: 520px;
        margin: auto;
    }
}    `