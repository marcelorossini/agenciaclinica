// NextJS
import { useEffect, useRef, useState } from 'react'

// Helpers
import { SpinnerIos } from 'styled-icons/fluentui-system-filled'

// Styles
import { Container, Wrapper } from './style'

const onResize = typeof window === 'object' ? require('resize-event') : () => false

const Loading = props => {
  const refLoading = useRef()
  const [sizeAndPosition, setSizeAndPosition] = useState({})

  useEffect(() => {
    if (!refLoading.current) return
    const element = refLoading.current.parentNode

    onResize(element, () => {
      setSizeAndPosition({
        width: element.offsetWidth,
        height: element.offsetHeight,
        top: element.offsetTop,
        left: element.offsetLeft
      })
    })
  }, [])

  return (
    <Container ref={refLoading} sizeAndPosition={sizeAndPosition} active={props.active || null}>
      <LoadingSpinner />
    </Container>
  )
}
export default Loading

export const LoadingSpinner = props => {
  return (
    <Wrapper {...props}>
      <SpinnerIos/>
    </Wrapper>
  )
}
