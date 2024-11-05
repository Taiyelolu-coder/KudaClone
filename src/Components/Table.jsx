import styled from "styled-components"
import Kuda from "../assets/kuda.png"
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { AiTwotoneCheckCircle } from "react-icons/ai";


const Table =() =>{
    return(
        <Container>
            <Wrapper>
                <h2>Choose the freedom you need</h2>
              <Info>  
                <Tables>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Other Banks</th>
                            <th><img src={Kuda} alt="" /></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Transfer Fee</td>
                            <td><AiTwotoneMinusCircle/>Up to ₦50 plus V.A.T</td>
                            <td><AiTwotoneCheckCircle/>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td><AiTwotoneMinusCircle/>Up to ₦50 plus V.A.T</td>
                            <td><AiTwotoneCheckCircle/>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card Maintenance Fee</td>
                            <td><AiTwotoneMinusCircle/>😣</td>
                            <td><AiTwotoneCheckCircle/>No</td>
                        </tr>
                        <tr>
                            <td>Alerts</td>
                            <td><AiTwotoneMinusCircle/>Charge for SMS alerts</td>
                            <td><AiTwotoneCheckCircle/>Free instant notification</td>
                        </tr>
                        <tr>
                            <td>Annual Interest</td>
                            <td><AiTwotoneMinusCircle/>4%</td>
                            <td><AiTwotoneCheckCircle/>Up to 15%</td>
                        </tr>
                        <tr>
                            <td>Bill Payment Fee</td>
                            <td><AiTwotoneMinusCircle/>Up to ₦100 per bill</td>
                            <td><AiTwotoneCheckCircle/>No</td>
                        </tr>
                        <tr>
                            <td>Instant Reversal</td>
                            <td><AiTwotoneMinusCircle/>😏</td>
                            <td><AiTwotoneCheckCircle/>Yes</td>
                        </tr>
                        <tr>
                            <td>Maintenance</td>
                            <td><AiTwotoneMinusCircle/>Yes</td>
                            <td><AiTwotoneCheckCircle/>No</td>
                        </tr>
                    </tbody>
                </Tables>
               </Info> 
            </Wrapper>
        </Container>
    )
}

export default Table

const Container = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 20px ;

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Info = styled.div`
text-align: center;
margin-bottom: 30px;

h2{
    font-size: 40px;
    margin: 50px 0;
    color: #40196d;

}

@media (max-width: 800px){
    h2{
        font-size: 27px;
    }
};
`
const Tables = styled.div`
width: 100%;
margin: 20px 0;
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

th{
    font-size: 26px;
    color: #40196d;
    border-bottom: 1px solid #ddd;
    padding: 16px;
    text-align: left;
    width: 320px;
}

td{
    border-bottom: 1px solid #ddd;
    padding: 16px;
    text-align: left;
    width: 320px;
}
img{
    width: 100px;
}
@media (max-width: 800px){
    width: 80%;
    margin: 0 auto;

    th{
        font-size: 20px;
    }
}

`