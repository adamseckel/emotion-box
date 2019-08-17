import styled from '@emotion/styled'

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  center: 'center',
  'space-evenly': 'space-evenly',
}

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
}

const justifyContent = ({ justify = 'center' }: { justify: Justify }) =>
  justifyMap[justify]

const alignItems = ({ align = 'center' }: { align: Align }) => alignMap[align]

type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export interface Props {
  wrap: boolean
  grow: boolean
  inline: boolean
  justify: Justify
  align: Align
}

const Box = styled('div')<Props>`
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
