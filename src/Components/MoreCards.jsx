import styled from "styled-components"
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const MoreCards =(props) =>{
    return(
        <Container>

            <Logo>
                <img src={props.image} alt="" />
            </Logo>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <Link to ="/LearnMore">
            <nav>
                <span>Learn More
                <FaAngleRight />
                </span>
            </nav>
            </Link>
        </Container>
    )
}

export default MoreCards

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width:330px;
height: 250px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
padding-left: 10px;
padding-top: 10px;
padding-right: 10px;
padding-bottom: 30px;

@media (max-width: 800px){
    width: 450px;
    height: 250px;
 
    
}
h2{
    font-weight: 900;
    color: #40196d;
    
}
p{
    font-size: 16px;
    width: 300px;
    @media (max-width: 800px){
        width: 350px;
    }
}

nav{
    color:#40196d;
    font-weight: 600;
}
`
const Logo = styled.div`
background-color: #d3d3ff;
    width: 30px;
    height: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
img{
    width: 18px;
}
`

