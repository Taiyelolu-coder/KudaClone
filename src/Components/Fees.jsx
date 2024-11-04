import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import Image from "../assets/Fees.png"
import { Link } from "react-router-dom";
const Fees = () =>{
    return(
        <Container>
            <Wrapper>
            <ImageBox>
                <img src={Image} alt="" />
            </ImageBox>
            <TextBox>
                <h1>Fees as clear as glass.</h1>
                <p>We're serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                <Link to="/">
                <nav>
                    <span>See all our fees</span>
                    <FaChevronRight />
                </nav>
                </Link>
            </TextBox>
            </Wrapper>
        </Container>
    )
}


export default Fees


const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-left: auto;
margin-right: auto;
max-width: 1280px;
padding: 0px 10px;
/* border: 1px solid black; */

`

const Wrapper = styled.div`
    display: flex;
    justify-content:space-between;
    width: 85%;
    gap:100px;
    /* border: 1px solid red; */
    padding: 10px;
    @media (max-width: 800px){
        /* display: flex; */
        flex-wrap: wrap-reverse;
        justify-content: center;
        align-items: center;
    }
`


const ImageBox = styled.div`
width:50%;
/* border: 1px solid green; */


img{
    /* border: 1px solid yellow; */
    /* width: 600px; */
    height: auto;
    @media (max-width: 800px){
        width: 400px;

    }
}
`


const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
/* gap: 30px; */
text-align: start;
width: 50%;
/* border: 1px solid black; */
@media (max-width: 800px){
    align-items: center;
    text-align: center;
    margin: auto;
}
h1{
    font-size:35px;
    font-weight: 900;
    color:#40196d;
    line-height: 2ch;
    @media (max-width: 800px){
        font-size: 27px;
        text-align: center;
    }
}

p{
    font-size: 15px;
    line-height:2.5ch;
    font-weight: 400;
    width: 330px;
    text-align: start;
    @media (max-width: 800px){
        font-size: 14px;
        text-align: center;
        width: 500px;
    }
}
nav{
    color:#40196d;
    font-size: 16px;
    font-weight: 600;
}
`

