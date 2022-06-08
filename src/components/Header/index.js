import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location);
return (
    <Wrapper>
      <h1>Our super music app</h1>
      <nav>
       <Link to="/">
       <MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl>
       </Link>
       <Link to="/library">
       <MenuEl isCurrentPage={location.pathname === "/library"}>Library</MenuEl>
       </Link>
       <Link to="/Sound_Test">
       <MenuEl isCurrentPage={location.pathname === "/Sound_Test"}>Sound Test</MenuEl>
       </Link>
       <Link to="/about">
       <MenuEl isCurrentPage={location.pathname === "/about"}>About</MenuEl>
       </Link>
      </nav>
    </Wrapper>
    );
}

const Wrapper = styled.header`
height : 80px;
display : flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
border-bottom: solid 1px;
 & a{
   text-decoration: none;
   color: inherit;
 }
 & a:first-child{
   margin-right: 16px;
 }
`;

const MenuEl = styled.span`
font-size: 18px;
padding-bottom: 2px;
margin-left: 40px;
border-bottom: solid 2px ${(props)=>(props.isCurrentPage ? "": "transparent")};
&:hover{
  border-bottom: solid 2px;
}
`;