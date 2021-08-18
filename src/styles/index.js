import styled from 'styled-components'

export const Page = styled.section`
    width: 100%;
    height: 100vh;
    background: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 40px;
`
