# emotion-box 📦

I've been copy-pasting some version of this file into every React project I've worked on for the past year...  

Figured it was time to make it it's own module 🤷‍♂️

Uses `react-emotion` for css-in-js and returns HOC's for abstracting flexbox layouts

## Install
```
yarn add emotion-box
```
```
import Box, {Row, Column} from 'emotion-box'
```

## Usage
```
<Row justify="start" align="start"> ... </Row>
<Column> ... </Column>
<Box> ... </Box>
```
