import styled from "styled-components";

export const CreditCardIcon = styled.div`
  width: 50px;
  height: 40px;
  border-radius: 3px;
  background: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    width: 50px;
    height: 5px;
    background: white;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 0px;
    height: 0px;
    border: 4px solid white;
    border-radius: 2px;
  }
`;

export const CreditCard = {
  name: 'Credit Card',
  id: 'credit_card',
  component: CreditCardIcon,
  html: `<div class='creditCard'></div>`,
  css: `
    .creditCard {
      width: 50px;
      height: 40px;
      border-radius: 3px;
      background: black;
      position: relative;
    }

    .creditCard::before {
      content: "";
      position: absolute;
      top: 10px;
      width: 50px;
      height: 5px;
      background: white;
    }

    .creditCard::after {
      content: "";
      position: absolute;
      bottom: 5px;
      right: 5px;
      width: 0px;
      height: 0px;
      border: 4px solid white;
      border-radius: 2px;
    }
  `
}