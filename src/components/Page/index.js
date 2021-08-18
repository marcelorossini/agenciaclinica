// NextJS
import { useState, useEffect } from 'react'

// Style
import { Container } from './style'

const Page = props => {
  const [viewHeight, setViewHeight] = useState()

  useEffect(() => {
    if (!window) return
    // Pega ViewHeight da pagina
    const getViewHeight = () => {
      setViewHeight(window.innerHeight * 0.01)
    }
    // Ao carregar
    getViewHeight()

    // Ao redimensionar
    window.addEventListener('resize', getViewHeight, { passive: true })
    return () => {
      window.removeEventListener('resize', getViewHeight)
    }
  }, [])

  return (
    <Container viewHeight={viewHeight} {...props}>
      {props.children}
    </Container>
  )
}
export default Page