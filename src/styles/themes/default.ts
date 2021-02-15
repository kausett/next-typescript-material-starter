// for more information on MUI creation of theme. visit https://material-ui.com/guides/server-rendering/
import {Theme, createMuiTheme} from '@material-ui/core'

// const theme = createMuiTheme({
//
// })


export const theme = {
    primary: '#f2f2f2',
    ...createMuiTheme()
}
