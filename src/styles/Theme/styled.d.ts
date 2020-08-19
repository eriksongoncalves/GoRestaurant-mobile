import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      inactiveTab: string;
      buttonIconSecondaryBg: string;
      bgCard: string;
      cardText: string;
      sectionTitle: string;
      categorySelected: string;

      white: string;
      greenDark: string;
      greenLight: string;
    };
  }
}
