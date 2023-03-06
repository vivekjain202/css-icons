import styled from "styled-components";

export const MenuIconHorizontalIcon = styled.div`
  width: 40px;
  height: 8px;
  background: black;
  border-radius: 3px;
  box-shadow: 0px -15px 0 black, 0px 15px 0 black;
`;

export const MenuIconHorizontal = {
  name: 'Menu Horizontal',
  id: 'menu_horizontal',
  component: MenuIconHorizontalIcon,
  html: `<div class='menu'></div>`,
  css: `
    .menu {
      width: 40px;
      height: 8px;
      background: black;
      border-radius: 3px;
      box-shadow: 0px -15px 0 black, 0px 15px 0 black;
    }
  `
}