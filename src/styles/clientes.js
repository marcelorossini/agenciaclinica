import styled from 'styled-components'

export const Grid = styled.div`
    width: 100%;
    height: 100vh;
    padding: 32px;
    display: grid;
    grid-template-rows: repeat(3, auto) 1fr auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    color: #ffffff;
`

export const Image = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 100%;
    margin: 0 auto;
`

export const Name = styled.h1`
    
`

export const Description = styled.p`
    
`

export const WrapperButtons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    flex: 1;
    width: 100%;
    background: #ffffff;
    margin-bottom: 20px;
    font-size: 18px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
        margin-bottom: 0px;
    }

    & > svg {
        height: 20px;
        margin-right: 6px;
    }
`

export const Footer = styled.h3`
    
`
