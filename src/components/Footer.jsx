import { GitHub, LinkedIn, MailOutline, Room, AlternateEmail ,Favorite} from '@mui/icons-material';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color:#EEEEEE;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left:6%;
`;
const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`    
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items:center;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>OEP</Logo>
                <Description>
                     Online Exam Panel is India's No 1 Online platform . It is used by 500K+ users.We are hoping that this will help you in your journey to enhance your skills . Our Idea behind this is to make a such website which will help aspirants to evaluate himself...Thanks 
                </Description>
                <SocialContainer>
                    <SocialIcon >
                        <a href="https://www.linkedin.com/in/md-afsar-429269291/"><LinkedIn /></a>
                    </SocialIcon>
                    <SocialIcon >
                        <a href="https://github.com/MDAFSARALI"><GitHub /></a>
                    </SocialIcon>
                    <SocialIcon >
                        <a href="mailto:afsarmd.official@gmail.com"><AlternateEmail /></a>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    Made with Love By Indian <Favorite/>
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    afsarmd.official@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer