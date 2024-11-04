import Hamburger from "./SideBar";
import styled from "styled-components"
import { TiArrowSortedDown } from "react-icons/ti";
import LogoImg from "../assets/kuda.png"
import FlagImg from "../assets/Nigeria_Flag.jpg"
import { IoReorderTwoOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import {useState} from "react"


const Header = ()=> {


  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
      setToggle(!toggle)
  }

  // console.log(toggle);
  return (
    <>
      <Container>
        <LogoNav>
          <Logo>
            <img src={LogoImg} alt="" />
          </Logo>
          <Navigations>
            <Link to="/Personal">
            <nav>
              <span>Personal</span>
              <TiArrowSortedDown size={20}/>
            </nav>
            </Link>
            <Link to="/Business">
            <nav>
              <span>Business</span>
              <TiArrowSortedDown size={20}/>
            </nav></Link>
            <Link to="/Company">
            <nav>
              <span>Company</span>
              <TiArrowSortedDown size={20}/>
            </nav>
            </Link>
            <Link to="/Help">
            <nav>
              <span>Help</span>
              <TiArrowSortedDown size={20}/>
            </nav>
            </Link>
          </Navigations>
        </LogoNav>

        <Buttons>
          <SignIn>Sign In</SignIn>
          <JoinBtn>Join Kuda</JoinBtn>
          <Flag>
            <img src={FlagImg} alt="" />
          </Flag>
          <SideNav onClick={handleToggle}>
          <IoReorderTwoOutline />
          </SideNav>
        </Buttons>

      </Container>
      
        {toggle === false ? null : <Hamburger toggle =
        {toggle} setToggle={setToggle}/>}
    </>
  )
}
  
  export default Header
  
  const Container = styled.div `
    /* border:1px solid black; */
  display: flex;
  justify-content:space-between;
  align-items:center;
  height:70px;
  padding: 0 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `
  const LogoNav = styled.div`
  
  display:flex;
  align-items:center;
  /* justify-content:center; */
  /* gap:80px; */
  `
  const Logo = styled.div`
  margin: 0px 80px 0px 50px;
  img{
    width:90px;
    
  }`
  const Navigations =styled.div`
  display:flex;
  gap: 45px;
  nav{
  font-size:16px;
  font-weight:600;
  color:#5e025e;
  margin-top: 0px 20px;
 
  }

  span{
    margin-right:10px;
    font-size:13px;
    font-weight:600;
  
    /* align-items:center;
    justify-content: center;
    text-align:center; */
  }
  @media (max-width: 800px) {
    display: none;
}
  `
  const Buttons = styled.div`
  display: flex;
  align-items:center;
  @media (max-width: 800px) {
    margin-right: 30px;
}
  `

  
  const SignIn = styled.button`
  outline: none;
  font-size: 16px;
  font-weight:600;
  color:#40196d;
  background-color: transparent;
  border:none;

  @media (max-width: 800px) {
    display: none;
}
  `
  const JoinBtn = styled.button`
  width: 140px;
  height: 47px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: 700;
  background-color: #5e025e;
  margin: 0px 25px;
  @media (max-width: 800px) {
    display: none;
}`

  const Flag = styled.button`
  background-color: #a4e3c6;
  outline: none;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  img{
    width:18px;
    height:16px;
    border-radius: 15%;
    /* text-align:center; */
  }`

const SideNav = styled.div`
display:none;
font-size:30px;
margin-left: -30px;

@media (max-width: 800px){
  display:flex;
  align-items: center;
  cursor:pointer;
}
`