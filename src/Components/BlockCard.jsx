import Image from "../assets/BlockCard.png"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlockCard =()=>{
    return(
        <Container>
            <Wrapper>
            <ImageBox>
                <img src={Image} alt="" />
            </ImageBox>
            <TextBox>
                <h1>Turn off access, turn on safety.</h1>
                <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try.</p>
                <Link to="/">
                <nav>
                    <span>Learn more about Cards
                    <FaChevronRight />
                    </span>
                </nav>
                </Link>
            </TextBox>
            </Wrapper>
        </Container>
    )
}

export default BlockCard

const Container = styled.div`
display: flex;
max-width: 1280px;
margin-left: auto;
margin-right: auto;
align-items: center;
justify-content: center;
padding: 0px 10px;
/* border: 1px solid black; */
`
const ImageBox = styled.div`
width: 50%;
@media (max-width: 800px){
        width: 500px;
        /* border: 1px solid black; */
        align-items: center;
        margin: auto;
    }

    img{
        width: 500px;
        /* border: 1px solid green; */
    }
`


const TextBox = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
text-align: start;
/* border: 1px solid green; */
@media (max-width: 800px){
    /* text-align: center; */
    text-align: center;
    }

h1{
    font-size: 33px;
    font-weight: 800;
    color:#40196d;
    @media (max-width: 800px){
        font-size: 27px;
    }
}

p{
    font-size: 15px;
    font-weight: 400;
    width: 400px;
    @media (max-width: 800px){
        font-size: 14px;
    }

}

nav{
    color:#40196d;
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 800px){
        font-size: 14px;
    }

}
`


const Wrapper = styled.div`
display: flex;
justify-content: space-between;
max-width: 85%;
gap: 100px;
/* border: 1px solid black; */
padding: 0px 10px;
@media (max-width: 800px){
    /* text-align: center; */
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    gap: 20px;
    }`