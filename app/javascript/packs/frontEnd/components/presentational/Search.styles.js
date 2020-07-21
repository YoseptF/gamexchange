import styled from 'styled-components';

const Search = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15vh;
  justify-content: center;

  .pagination{
    flex: 0 0 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    &> div a{
      padding: 1rem;
      background: ${props => props.theme.primary};
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      &:hover{
        filter: brightness(70%);
      }
    }
    a[data-value="${props => props.currentTab}"]{
      filter: brightness(80%);
    }
  }
`;
const SearchItem = styled.div`
  cursor: pointer;
  flex: 1 1 435px;
  margin: 28px;
  &:hover{
    box-shadow: 2px -3px 23px 10px rgba(0,0,0,0.42);
  }

  img{
    width: 100%;
  }
  .infoBox{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{font-size:1rem;}
  }
`;

const LightBox = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 96vw;
  height: 90vh;
  margin: 2vw;
  z-index: 10;
  box-shadow: 2px -3px 23px 10px rgba(0,0,0,0.42);
  background: ${props => (props.theme.background)};

  .container{
    position: relative;
    width: 100%;
    height: 100%;
    display:flex;

    i{
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 2rem;
      cursor: pointer;
      z-index: 11;
    }
    &>.left{
      flex: 0 0 50%;
      position: relative;
      background: ${props => `url(${props.image}) no-repeat center/cover`};
      .leftInfo{
        position: absolute;
        width: 65%;
        left: 50%;
        top:80%;
        transform: translate(-50%,-80%);
        display: flex;
        align-items:center;
        justify-content: space-between;
        h1{font-size: 1rem;}
      }
    }
    .rigth{
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 0 0 50%;
      .favorite{
        position: absolute;
        bottom: 0;
        left:0;
        height: 15%;
        width:100%;
        display: grid;
        place-items: center;
        background: ${props => props.theme.primary};
      }
    }
    @media only screen and (orientation: portrait){
      touch-action: none;
      flex-direction: column;
      .left{
        width: 100%;
      }
    }
  }
`;

export { Search, SearchItem, LightBox };
