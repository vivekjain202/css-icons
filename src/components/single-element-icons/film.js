import styled from "styled-components";

const FilmIcon = styled.div`
    width: 60px;
    height: 48px;
    position: relative;
    background: black;
    border-radius: 5px;

    &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 1px;
        background: white;
        top: 6px;
        left: 7px;
        box-shadow: 0 14px 0 0 white, 0 28px 0 0 white,
          37px 0 0 0 white, 37px 14px 0 0 white, 37px 28px 0 0 white;
    }

    &::after {
        content: '';
        position: absolute;
        background: white;
        height: 13px;
        width: 18px;
        top: 6px;
        left: 21px;
        border-radius: 3px;
        box-shadow: 0 23px 0 0 white;
    }
`

export const Film = {
    name: 'Film',
    id: 'film',
    component: FilmIcon,
    html: `<div class='film'></div>`,
    css: `
        .film {
            width: 60px;
            height: 48px;
            position: relative;
            background: black;
            border-radius: 5px;
        }

        .film::before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 1px;
            background: white;
            top: 6px;
            left: 7px;
            box-shadow: 0 14px 0 0 white, 0 28px 0 0 white,
              37px 0 0 0 white, 37px 14px 0 0 white, 37px 28px 0 0 white;
        }

        .film::after {
            content: '';
            position: absolute;
            background: white;
            height: 13px;
            width: 18px;
            top: 6px;
            left: 21px;
            border-radius: 3px;
            box-shadow: 0 23px 0 0 white;
        }
    `
}