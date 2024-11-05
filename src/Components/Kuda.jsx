import Image from "../assets/kuda.png"
import styled from "styled-components"
const Kuda = ()=>{
    return(
        <Container>
            <Wrapper>
                <Logo>
                    <img src={Image} alt="" />
                </Logo>
                <Text>
                    <h4>Personal</h4>
                    <p>Discover Personal</p>
                    <p>Transfer & Spend</p>                  
                    <p>Save</p>
                    <p>Investments</p>
                    <p>Kuda Card</p>
                </Text>
                <Text>
                    <h4>Business</h4>
                    <p>Discover Business</p>
                    <p>Business Registration</p>                  
                    <p>softPOS</p>
                    <p>Invoicing</p>
                    <p>POS Machine</p>                  
                    <p>Business Loan</p>
                    <p>Business API</p>
                    <p>Join Kuda Business</p>
                </Text>
                <Text>
                    <h4>Personal</h4>
                    <p>Blog</p>                   
                    <p>Press</p>
                    <p>Join Our Team</p>
                    <p>About Us</p>
                </Text>
                <Text>
                    <h4>Help</h4>
                    <p>Scam Awareness</p>
                    <p>FAQs</p>                  
                    <p>Security</p>
                    <p>Contact Us</p>
                    <p>Self help</p>
                </Text>
                <Text>
                    <h4>Transparency</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>                   
                    <p>Information Security Policy</p>
                    <p>cookie Policy</p>
                    <p>Whistleblowing Policy</p>
                </Text>
            </Wrapper>
        </Container>
    )
}

export default Kuda

const Container = styled.div`
margin: auto;
max-width: 1280px;
`

const Wrapper = styled.div`
display: flex;
gap: 50px;
justify-content: center;
/* align-items: center; */
margin: auto;
width: 85%;
`

const Logo = styled.div`
img{
    width: 100px;
}`

const Text = styled.div`
h4{
    color: #40196d;
    font-weight: 800;
}

p{
    font-size: 14px;
}
`

// const Container = styled.div``