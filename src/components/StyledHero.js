import styled from 'styled-components'
import defaultImg from '../images/room-3.jpeg';

const StyledHero = styled.header `
    background-image: url(${props => props.img});
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 97%;
    margin: 0 auto;
`

export default StyledHero;