import { createTheme } from "@material-ui/core/styles";

import { cyan } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: yellow,
  },
});

export default theme;