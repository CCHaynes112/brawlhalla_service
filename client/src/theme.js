import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#002440',
        },
        secondary: {
            main: '#ed985f',
        },
        error: {
            main: red.A400,
        },
        background: {
            //default: '#f5f5f5',
            default: '#fafafa',
            // paper: '#99DDFF',
        },
        text: {
            primary: "#000000",
            secondary: "#000000"
        },
    },
});

export default theme;