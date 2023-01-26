import styled from "styled-components";

export const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid black;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    width: 3px;
    height: 14px;
    background: black;
    bottom: -9px;
    right: -5px;
    transform: rotate(-45deg);
  }
`

export const Search = {
  name: 'Search',
  id: 'search',
  component: SearchIcon,
  html: `<div class='search'></div>`,
  css: `
    .search {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid black;
      position: relative;
    }

    .search::after{
      content: '';
      position: absolute;
      width: 3px;
      height: 14px;
      background: black;
      bottom: -9px;
      right: -5px;
      transform: rotate(-45deg);
    }
  `
}