import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 12px;
`;

export const UserButton = styled.button`
  padding: 8px 16px;
  margin: 0; /* Usunięcie wszelkich marginesów */
  border-radius: 4px;
  border: none;
  background-color: grey;
  color: white;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: orangered;
  }
`;

export const UserInfo = styled.div`
  margin-left: 16px;
  font-weight: 500;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  margin: 0;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
