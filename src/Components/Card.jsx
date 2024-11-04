import styled from "styled-components"

const Card =(props) =>{
    return(
        <Container>
            <Image>
            <img src={props.image} alt="" />
            </Image>
            <p>{props.title}</p>
        </Container>
    )
}


export default Card

const Container= styled.div`
background-color: white;
color:black;
width:350px;
height: 120px;
/* border:1px solid black; */
box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
padding:10px;
@media (max-width: 800px){
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 400px;
    /* border: 1px solid black; */
    height: 80px;
}

img{
    width:20px;
    border-radius: 50%;
}
p{
    font-size: 14px;
    font-weight: 800;
    color:#40196d;
    @media (max-width: 800px){
        font-size: 14px;
    }
}

`

const Image = styled.div`
    background: #d3d3ff;
    width: 40px;
    height: 40px;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
`