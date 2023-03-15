import styled from 'styled-components'
import { theme } from '@/styles/Theme';

export const Container = styled.aside`
  background-color: ${theme.colors.red};

  width: 7.75rem;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flexdirection: column;
  align-items: center;

  height: 100vh;
  /* width: 30%; */
  /* padding-left: 15px; */
  /* margin-left: 15px; */
  /* float: left; */
`