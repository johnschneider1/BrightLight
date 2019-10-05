import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderButton = styled(NavLink)`
  height: 30px;
  width: 150px;
  border-radius: 20px;
  color: #e60800;
  text-align: center;
  text-decoration: none;
  line-height: 2rem;
  font-size: 1.5rem;
  &:hover {
    background-color: #e60800;
    color: white;
  }
  &:active {
    text-decoration: none;
    background-color: #e60800;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
