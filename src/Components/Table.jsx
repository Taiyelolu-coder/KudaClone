import styled from "styled-components"
import Kuda from "../assets/kuda.png"



const Table =() =>{
    return(
        <Container>
            <Wrapper>
                <h1>Choose the freedom you need</h1>
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
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                        <tr>
                            <td>Card delivery</td>
                            <td>Up to ₦50 plus V.A.T</td>
                            <td>25 free transfers every month</td>
                        </tr>
                    </tbody>
                </Tables>
            </Wrapper>
        </Container>
    )
}

export default Table

const Container = styled.div``
const Wrapper = styled.div``
const Tables = styled.div`
img{
    width: 90px;
}`