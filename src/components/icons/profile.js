import styled from "styled-components";

export const Profile = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 20px;
    position: absolute;
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 10px 10px 0px 0px;
    top: 20px;
    left: -5.5px;
  }
`;