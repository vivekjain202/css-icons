import styled from "styled-components";

export const ProfileIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  background: black;

  &::after {
    content: "";
    width: 30px;
    height: 20px;
    position: absolute;
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 12px 12px 0px 0px;
    top: 20px;
    left: -6.5px;
    background: black;
  }
`;

export const Profile = {
  name: 'Profile',
  id: 'profile',
  component: ProfileIcon,
  html: `<div class='profile'></div>`,
  css: `
    .profile{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid black;
      position: relative;
      background: black;
    }

    .profile::after {
      content: "";
      width: 30px;
      height: 20px;
      position: absolute;
      border: 1px solid black;
      border-bottom: 0px;
      border-radius: 12px 12px 0px 0px;
      top: 20px;
      left: -6.5px;
      background: black;
    }
  `
}

