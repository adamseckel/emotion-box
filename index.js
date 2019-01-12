import styled from '@emotion/styled'

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  center: 'center',
}

const alignMap = {
  ...justifyMap,
  stretch: 'stretch',
}

const justifyContent = ({ justify = 'center' }) => justifyMap[justify]
const alignItems = ({ align = 'center' }) => alignMap[align]

const Box = styled('div')`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  flex-grow: ${props => (props.grow ? 1 : 0)};
  width: ${props => (props.inline ? 'auto' : '100%')};
  position: relative;
`

export const Row = styled(Box)`
  flex-direction: row;
`

export const Column = styled(Box)`
  flex-direction: column;
`

export default Box
