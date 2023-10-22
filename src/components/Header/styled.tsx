import styled from "styled-components";

const Nav = styled.header`
    background-color: #ffffff;
    color: #000000;
    font-size: 30px;
    font-weight: 700;
    padding: 20px;
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: 400;
    }

    li a {
        color: #000000;
        text-decoration: none;
    }

    a:hover {
        transition: all 0.3s ease-in-out;
        color: #113AD9;
    }
`;

export default Nav;