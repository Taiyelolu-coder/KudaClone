import styled from "styled-components"

import Card from "../Components/Card"
import Hero from "../Components/Hero"
import OpenAccount from "../Components/OpenAccount";
import Details from "../Components/Details";
import Icon1 from "../assets/creditcard.jpg"
import Icon2 from "../assets/time.jpg"
import Icon3 from "../assets/organisation.jpg"
import Icon4 from "../assets/send.jpg"
import Icon5 from "../assets/piggy.jpg"
import Save from "../Components/Save";
import BlockCard from "../Components/BlockCard";
import Fees from "../Components/Fees";
import Help from "../Components/Help";
import Sponsors from "../Components/Sponsors";
import Partners from "../Components/Partners";
import MoreCards from "../Components/MoreCards";
import Briefcase from "../assets/briefcase.jpg"
import Send from "../assets/send.jpg"
import Pouch from "../assets/pouch.jpg"
import Table from "../Components/Table";
import BlogPost from "../Components/BlogPost";
import JoinKuda from "../Components/JoinKuda";
import Kuda from "../Components/Kuda";
import Copyright from "../Components/Copyright";

const Home = () => {

    return (
      <Container>
       
       <Hero />
       <CardContent>
       <Card image={Icon1} title="Order a Kuda card on the app with pickup and delivery options."/>
       <Card  image={Icon2} title="Enjoy cashless payment options online and offline."/>
       <Card image={Icon3} title="Order a Kuda card on the app with pickup and delivery options."/>
       <Card  image={Icon4} title="Enjoy cashless payment options online and offline."/> 
       <Card image={Icon5} title="Order a Kuda card on the app with pickup and delivery options."/>
       </CardContent>
       <OpenAccount />
       <Details />
       <Save />
       <BlockCard />
       <Help />
       <Fees />
       <Sponsors />
       <Partners />
       <Table />
       <BlogPost/>
       
       <MoreCardSection>
        
        <h1>More for you</h1>
        <MoreCard>
       <MoreCards image={Briefcase} heading="Kuda Business" text="Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more." />
       <MoreCards image={Send} heading="Transfer & Spend" text="Send money for free to any Nigerian account with 25 free transfers every month."/>
       <MoreCards image={Pouch} heading="Loans" text="Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments." />
       </MoreCard>
       </MoreCardSection>
       <JoinKuda/>
       <Kuda />
       <Copyright />
      </Container>
    )
  }
  
  export default Home
  

const Container = styled.div``
const CardContent = styled.div`
/* background-color: pink; */
display:flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
gap: 25px;
margin: 150px;
padding: 30px;
@media (max-width: 800px){
width: auto;
align-items: center;
margin: auto;
}
`
const MoreCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 50px ;
gap: 25px;

@media (max-width: 800px){
  flex-wrap: wrap;
}
`

const MoreCardSection = styled.div`
/* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px){
    margin: auto;
    
  }
  h1{
    font-weight: 900;
    font-size: 35px;
    color: #40196d;
  }
`