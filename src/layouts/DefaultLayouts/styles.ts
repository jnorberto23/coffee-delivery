import styled from 'styled-components'

export const LayoutContainer = styled.div`
  flex: 1;
  max-width: 74rem;
  height:auto;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`