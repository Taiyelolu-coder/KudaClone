import Image1 from "../assets/valar.svg"
import Image2 from "../assets/entree.svg"
import Image3 from "../assets/sbi.svg"
import Image4 from "../assets/target.svg"
import Image5 from "../assets/visa.svg"
import styled from "styled-components"
const Partners =()=>{
    return(
        <Container>
            <h1>Our Partners</h1>
            <Logo>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
            </Logo>
        </Container>
    )
}

export default Partners

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 70px;
background: #fff9f9;
margin-top: 100px ;
padding-top: 90px;
padding-bottom: 90px;
h1{
    color: #40196d;
    font-weight: 800;
}

`
const Logo = styled.div`
display: flex;
/* justify-content: space-between; */
gap: 80px;
@media (max-width: 800px){
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto; */
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
img{
    width: 130px;
    @media (max-width: 800px){
        width: 100px;
        
    }
}
`