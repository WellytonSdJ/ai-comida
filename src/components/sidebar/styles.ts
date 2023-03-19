import styled from 'styled-components'
import { theme } from '@/styles/Theme';

export const Container = styled.aside`
  background-color: ${theme.colors.red};

  width: 7.75rem;
  transition: 0.3s ease;
  height: 100vh;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    width: 15rem;
    transition: 0.3s ease;
  }

  button {
    display: inline;
    visibility: show;

    background: none;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      list-style: none;
      a {
        background: inherit;
        width: : fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        text-decoration: none;

        display: flex;
        align-items: center;
        gap: 2rem;

        img {
          fill: ${theme.colors.white};
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          border-radius: 8px;
          background: ${theme.colors.yellow};
          transition: 0.7s;
        }
      }
    }
  }

  @media (max-width: 768px){

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    padding: 0 0;
    overflow-y: auto;

    button {
    display: none;
    visibility: hidden;
  }

  nav {
    height: 100%;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      li {

        a{
          flex-direction: column;
          padding: 0rem;

          img {
            width: 3.25rem;
            height: 3.25rem;
          }
        }

        span {
        display: none;
      }
      }

      
    }
  }
  

  }


  
`