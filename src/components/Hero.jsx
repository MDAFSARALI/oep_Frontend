import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {Favorite} from '@mui/icons-material';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden; 

`

const Wrapper = styled.div`
height:100%;
display:flex;

`



const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #00adb5;
background-image: url("https://img.freepik.com/free-vector/seamless-rounded-square-grid-pattern-background-vector-design-from-diagonal-squares_1164-1576.jpg?t=st=1726989535~exp=1726993135~hmac=e83a753b058b1b2e244c20ec2f6877b96334ed00953521c372b6be21d144264b&w=740");
`



const ImgContainer = styled.div`
height:100%;
flex:1;
`

const Image = styled.img`
height:80%;
`



const Title = styled.h1`
font-size:70px;
color:#EEEEEE;
margin-left:5%;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Description = styled.p`
    margin:30px 0px;
    font-size:32px;
    font-weight:600;
    letter-spacing:3px;
    color:#EEEEEE;
    margin-left:5%;
`
const Button = styled.button`
    padding:15px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    color:#EEEEEE;
    background-color:#7be349;
    border:none;
    border-radius:15px;
    margin-left:5%;
    &:hover {
        background-color: #75DB75;
      }
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <InfoContainer>
                        <Title>
                        Online Exam Panel
                        </Title>
                        <Description>
                        Create, send and analyze your tests,exam and assessments for free with OEP
                        </Description>
                        <Button>
                            <Link to="/register" style={{ textDecoration: "none", color:"#EEEEEE"}}>
                            Get Started for Free <Favorite/>
                            </Link>
                        </Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/9sCCj2b/exam.png" />
                    </ImgContainer>
                </Slide>
            </Wrapper>
        </Container>
    )
}

export default Hero