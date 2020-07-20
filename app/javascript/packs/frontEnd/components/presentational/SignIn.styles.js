import styled from 'styled-components';

const SignInBox = styled.div`
  background: ${props => props.theme.background};
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  display:flex;
  flex-direction:column;
  justify-content: center;
  padding: 150px 24px;
  border: ${props => `2px solid ${props.theme.primary}`};
  border-radius: 11px;
  align-items: center;
  text-align: center;
  @media only screen and (max-width:720px){
    border: none;
    position:fixed;
    height: 100vh;
    width: 100vw;
  }
  h1{ 
    margin: 0;
    font-weight: 400;
    text-transform: capitalize;
  }
  h2{
    font-weight: 400;
    max-width: 300px;
    font-size: 1.2rem;
  }
  form{
    display:flex;
    flex-direction:column;
    input{
      text-align: center;
      font-size:1.6rem;
      border-radius: 500px;
      margin: 1rem 0;
      padding: 8px 24px;
      &:focus{
        border: ${props => `2px solid ${props.theme.primary}`};
        outline: none;
      }
    }
    input[type="submit"]{
      font-weight: 400;
      border: none;
      padding: 18px 39px;
      margin: 8px;
      border-radius: 500px;
      background: ${props => (props.transparent ? 'transparent' : props.theme.primary || 'orange')};
      font-size: 1.2rem;
      color: white;
      font-weight: 600;
      text-transform: capitalize;
      text-decoration: none;
      margin: 0 auto;
      &:hover {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

const Container = styled.div`
  background: #3b3b3b;
  height: 100vh;
`;

export { SignInBox, Container };
