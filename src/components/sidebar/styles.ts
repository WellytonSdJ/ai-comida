import styled from 'styled-components'
import { theme } from '@/styles/Theme';

export const Container = styled.aside`
  background-color: ${theme.colors.red};

  width: 7.75rem;
  /* width: 15rem; */
  height: 100vh;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
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
          &::after {
            content: '';
            position absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          img path{
            fill: ${theme.colors.yellow};
            /* não ta funcionando */
          }

          span {
            color: ${theme.colors.yellow}
          }
        }
      }
    }
  }
`