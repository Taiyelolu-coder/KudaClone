import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import Image from "../assets/Help.png"
import { Link } from "react-router-dom";

const Help = () =>{
    return(
        <Container>
            <Wrapper>
            <TextBox>
                <h1>We're always happy to help you.</h1>
                <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy.</p>
                <Link to="/">
                <nav>
                    <span>Get Help</span>
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


export default Help

const Container = styled.div`
display: flex;
/* border: 1px solid black; */
justify-content: center;
align-items: center;
max-width: 1280px;
margin-left: auto;
margin-right: auto;
`

const Wrapper = styled.div`
display: flex;
width: 85%;
/* border: 1px solid green; */
justify-content: space-between;
padding: 10px;
gap: 90px;
@media (max-width: 800px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0px;
        margin-top:30px;
    }

`
const ImageBox = styled.div`
img{
    width: 700px;
    height: auto;

@media (max-width: 800px){
    width:600px;
    margin-left: 40px;
}
}`


const TextBox = styled.div`
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 800px){
    text-align: center;
}

h1{
    color: #40196d;
    font-weight: 800;
    font-size: 35px;
    width: 500px;
    @media (max-width: 800px){
        font-size: 27px;
        width: 400px;
    }
}

p{
    font-size: 15px;
    font-weight: 400;
    line-height: 2.2ch;
    @media (max-width: 800px){
        font-size: 14px;
    }
}

nav{
    color: #40196d;
    font-size: 14px;
    font-weight: 600;
}
`