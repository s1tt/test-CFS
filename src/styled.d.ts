// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      textColorPrimary: string;
      textColorSecondary: string;
    };
  }
}
