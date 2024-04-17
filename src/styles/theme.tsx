import DesignTokens from "./design-tokens.json";

export interface Theme {
  boxes?: {
    large: string;
    medium: string;
    small: string;
  };
  breakpoints?: {
    large: string;
    medium: string;
    small: string;
    extraLarge: string;
    extraSmall: string;
    featuredSwap: string;
  };
  mediaQueries?: {
    large: string;
    medium: string;
    small: string;
    extraLarge: string;
    extraSmall: string;
    featuredSwap: string;
  };
  typography?: {
    fontFamily?: string;
    fontSize?: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
  };
  boxShadows?: {
    large: string;
    medium: string;
    small: string;
    textMedium: string;
  };
  spacing?: {
    "1": string;
    xxs: string;
    xs: string;
    sm: string;
    m: string;
    l: string;
    xl: string;
    "2xl": string;
  };
  transitions?: {
    delay: {
      slow: string;
    };
    duration?: {
      normal: string;
      slow: string;
    };
    timing: string;
  };
  colors: {
    white?: string;
    black?: string;
    grey?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    red?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    green?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    yellow?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    blue?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    teal?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    purple?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    orange?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    pink?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    errorDark?: string;
    errorLight?: string;
    errorContrast?: string;
    errorMain?: string;
    infoContrast?: string;
    infoDark?: string;
    infoLight?: string;
    infoMain?: string;
    primaryContrast?: string;
    primaryDark?: string;
    primaryLight?: string;
    primaryMain?: string;
    secondaryContrast?: string;
    secondaryDark?: string;
    secondaryLight?: string;
    secondaryMain?: string;
    successContrast?: string;
    successDark?: string;
    successLight?: string;
    successMain?: string;
    warningContrast?: string;
    warningDark?: string;
    warningLight?: string;
    warningMain?: string;
    textDisabled?: string;
    textPrimary?: string;
    textSecondary?: string;
  };
}

const baseTheme: Theme = {
  boxes: {
    large: DesignTokens.boxLg,
    medium: DesignTokens.boxMd,
    small: DesignTokens.boxSm,
  },
  breakpoints: {
    large: DesignTokens.breakpointWidthLg,
    medium: DesignTokens.breakpointWidthMd,
    small: DesignTokens.breakpointWidthSm,
    extraLarge: DesignTokens.breakpointWidthXl,
    extraSmall: DesignTokens.breakpointWidthXs,
    featuredSwap: DesignTokens.breakpointWidthFeaturedSwap,
  },
  mediaQueries: {
    large: DesignTokens.breakpointMediaQueryLg,
    medium: DesignTokens.breakpointMediaQueryMd,
    small: DesignTokens.breakpointMediaQuerySm,
    extraLarge: DesignTokens.breakpointMediaQueryXl,
    extraSmall: DesignTokens.breakpointMediaQueryXs,
    featuredSwap: DesignTokens.breakpointMediaQueryFeaturedSwap,
  },
  typography: {
    fontFamily: DesignTokens.fontFamilyPublicSans,
    fontSize: {
      xs: DesignTokens.fontSizeXs,
      sm: DesignTokens.fontSizeSm,
      base: DesignTokens.fontSizeBase,
      lg: DesignTokens.fontSizeLg,
      xl: DesignTokens.fontSizeXl,
      "2xl": DesignTokens.fontSize2Xl,
      "3xl": DesignTokens.fontSize3Xl,
      "4xl": DesignTokens.fontSize4Xl,
      "5xl": DesignTokens.fontSize5Xl,
      "6xl": DesignTokens.fontSize6Xl,
      "7xl": DesignTokens.fontSize7Xl,
      "8xl": DesignTokens.fontSize8Xl,
      "9xl": DesignTokens.fontSize9Xl,
    },
  },
  boxShadows: {
    large: DesignTokens.shadowBoxLg,
    medium: DesignTokens.shadowBoxMd,
    small: DesignTokens.shadowBoxSm,
    textMedium: DesignTokens.shadowTextMedium,
  },
  spacing: {
    "1": DesignTokens.spacing1,
    xxs: DesignTokens.spacingXxs,
    xs: DesignTokens.spacingXs,
    sm: DesignTokens.spacingS,
    m: DesignTokens.spacingM,
    l: DesignTokens.spacingL,
    xl: DesignTokens.spacingXl,
    "2xl": DesignTokens.spacingXxl,
  },
  transitions: {
    delay: {
      slow: DesignTokens.transitionDelaySlow,
    },
    duration: {
      normal: DesignTokens.transitionDurationNormal,
      slow: DesignTokens.transitionDurationSlow,
    },
    timing: DesignTokens.transitionTimingDefault,
  },
  colors: {
    white: DesignTokens.colorCommonWhite,
    black: DesignTokens.colorCommonBlack,
    grey: {
      50: DesignTokens.colorPalletteGrey50,
      100: DesignTokens.colorPalletteGrey100,
      200: DesignTokens.colorPalletteGrey200,
      300: DesignTokens.colorPalletteGrey300,
      400: DesignTokens.colorPalletteGrey400,
      500: DesignTokens.colorPalletteGrey500,
      600: DesignTokens.colorPalletteGrey600,
    },
    red: {
      50: DesignTokens.colorPalletteRed50,
      100: DesignTokens.colorPalletteRed100,
      200: DesignTokens.colorPalletteRed200,
      300: DesignTokens.colorPalletteRed300,
      400: DesignTokens.colorPalletteRed400,
      500: DesignTokens.colorPalletteRed500,
      600: DesignTokens.colorPalletteRed600,
    },
    green: {
      50: DesignTokens.colorPalletteGreen50,
      100: DesignTokens.colorPalletteGreen100,
      200: DesignTokens.colorPalletteGreen200,
      300: DesignTokens.colorPalletteGreen300,
      400: DesignTokens.colorPalletteGreen400,
      500: DesignTokens.colorPalletteGreen500,
      600: DesignTokens.colorPalletteGreen600,
    },
    yellow: {
      50: DesignTokens.colorPalletteYellow50,
      100: DesignTokens.colorPalletteYellow100,
      200: DesignTokens.colorPalletteYellow200,
      300: DesignTokens.colorPalletteYellow300,
      400: DesignTokens.colorPalletteYellow400,
      500: DesignTokens.colorPalletteYellow500,
      600: DesignTokens.colorPalletteYellow600,
    },
    blue: {
      50: DesignTokens.colorPalletteBlue50,
      100: DesignTokens.colorPalletteBlue100,
      200: DesignTokens.colorPalletteBlue200,
      300: DesignTokens.colorPalletteBlue300,
      400: DesignTokens.colorPalletteBlue400,
      500: DesignTokens.colorPalletteBlue500,
      600: DesignTokens.colorPalletteBlue600,
    },
    teal: {
      50: DesignTokens.colorPalletteTeal50,
      100: DesignTokens.colorPalletteTeal100,
      200: DesignTokens.colorPalletteTeal200,
      300: DesignTokens.colorPalletteTeal300,
      400: DesignTokens.colorPalletteTeal400,
      500: DesignTokens.colorPalletteTeal500,
      600: DesignTokens.colorPalletteTeal600,
    },
    pink: {
      50: DesignTokens.colorPallettePink50,
      100: DesignTokens.colorPallettePink100,
      200: DesignTokens.colorPallettePink200,
      300: DesignTokens.colorPallettePink300,
      400: DesignTokens.colorPallettePink400,
      500: DesignTokens.colorPallettePink500,
      600: DesignTokens.colorPallettePink600,
    },
    purple: {
      50: DesignTokens.colorPallettePurple50,
      100: DesignTokens.colorPallettePurple100,
      200: DesignTokens.colorPallettePurple200,
      300: DesignTokens.colorPallettePurple300,
      400: DesignTokens.colorPallettePurple400,
      500: DesignTokens.colorPallettePurple500,
      600: DesignTokens.colorPallettePurple600,
    },
    orange: {
      50: DesignTokens.colorPalletteOrange50,
      100: DesignTokens.colorPalletteOrange100,
      200: DesignTokens.colorPalletteOrange200,
      300: DesignTokens.colorPalletteOrange300,
      400: DesignTokens.colorPalletteOrange400,
      500: DesignTokens.colorPalletteOrange500,
      600: DesignTokens.colorPalletteOrange600,
    },
  },
};

const darkTheme: Theme = {
  colors: {
    errorDark: DesignTokens.colorDarkErrorDark,
    errorLight: DesignTokens.colorDarkErrorLight,
    errorContrast: DesignTokens.colorDarkErrorContrast,
    errorMain: DesignTokens.colorDarkErrorMain,
    infoContrast: DesignTokens.colorDarkInfoContrast,
    infoDark: DesignTokens.colorDarkInfoDark,
    infoLight: DesignTokens.colorDarkInfoLight,
    infoMain: DesignTokens.colorDarkInfoMain,
    primaryContrast: DesignTokens.colorDarkPrimaryContrast,
    primaryDark: DesignTokens.colorDarkPrimaryDark,
    primaryLight: DesignTokens.colorDarkPrimaryLight,
    primaryMain: DesignTokens.colorDarkPrimaryMain,
    secondaryContrast: DesignTokens.colorDarkSecondaryContrast,
    secondaryDark: DesignTokens.colorDarkSecondaryDark,
    secondaryLight: DesignTokens.colorDarkSecondaryLight,
    secondaryMain: DesignTokens.colorDarkSecondaryMain,
    successContrast: DesignTokens.colorDarkSuccessContrast,
    successDark: DesignTokens.colorDarkSuccessDark,
    successLight: DesignTokens.colorDarkSuccessLight,
    successMain: DesignTokens.colorDarkSuccessMain,
    warningContrast: DesignTokens.colorDarkWarningContrast,
    warningDark: DesignTokens.colorDarkWarningDark,
    warningLight: DesignTokens.colorDarkWarningLight,
    warningMain: DesignTokens.colorDarkWarningMain,
    textDisabled: DesignTokens.colorDarkTextDisabled,
    textPrimary: DesignTokens.colorDarkTextPrimary,
    textSecondary: DesignTokens.colorDarkTextSecondary,
  },
};

const lightTheme: Theme = {
  colors: {
    errorDark: DesignTokens.colorLightErrorDark,
    errorLight: DesignTokens.colorLightErrorLight,
    errorContrast: DesignTokens.colorLightErrorContrast,
    errorMain: DesignTokens.colorLightErrorMain,
    infoContrast: DesignTokens.colorLightInfoContrast,
    infoDark: DesignTokens.colorLightInfoDark,
    infoLight: DesignTokens.colorLightInfoLight,
    infoMain: DesignTokens.colorLightInfoMain,
    primaryContrast: DesignTokens.colorLightPrimaryContrast,
    primaryDark: DesignTokens.colorLightPrimaryDark,
    primaryLight: DesignTokens.colorLightPrimaryLight,
    primaryMain: DesignTokens.colorLightPrimaryMain,
    secondaryContrast: DesignTokens.colorLightSecondaryContrast,
    secondaryDark: DesignTokens.colorLightSecondaryDark,
    secondaryLight: DesignTokens.colorLightSecondaryLight,
    secondaryMain: DesignTokens.colorLightSecondaryMain,
    successContrast: DesignTokens.colorLightSuccessContrast,
    successDark: DesignTokens.colorLightSuccessDark,
    successLight: DesignTokens.colorLightSuccessLight,
    successMain: DesignTokens.colorLightSuccessMain,
    warningContrast: DesignTokens.colorLightWarningContrast,
    warningDark: DesignTokens.colorLightWarningDark,
    warningLight: DesignTokens.colorLightWarningLight,
    warningMain: DesignTokens.colorLightWarningMain,
    textDisabled: DesignTokens.colorLightTextDisabled,
    textPrimary: DesignTokens.colorLightTextPrimary,
    textSecondary: DesignTokens.colorLightTextSecondary,
  },
};

const pcgTheme: Theme = {
  colors: {
    errorContrast: DesignTokens.colorPcgErrorContrast,
    errorDark: DesignTokens.colorPcgErrorDark,
    errorLight: DesignTokens.colorPcgErrorLight,
    errorMain: DesignTokens.colorPcgErrorMain,
    infoContrast: DesignTokens.colorPcgInfoContrast,
    infoDark: DesignTokens.colorPcgInfoDark,
    infoLight: DesignTokens.colorPcgInfoLight,
    infoMain: DesignTokens.colorPcgInfoMain,
    primaryContrast: DesignTokens.colorPcgPrimaryContrast,
    primaryDark: DesignTokens.colorPcgPrimaryDark,
    primaryLight: DesignTokens.colorPcgPrimaryLight,
    primaryMain: DesignTokens.colorPcgPrimaryMain,
    secondaryContrast: DesignTokens.colorPcgSecondaryContrast,
    secondaryDark: DesignTokens.colorPcgSecondaryDark,
    secondaryLight: DesignTokens.colorPcgSecondaryLight,
    secondaryMain: DesignTokens.colorPcgSecondaryMain,
    successContrast: DesignTokens.colorPcgSuccessContrast,
    successDark: DesignTokens.colorPcgSuccessDark,
    successLight: DesignTokens.colorPcgSuccessLight,
    successMain: DesignTokens.colorPcgSuccessMain,
    warningContrast: DesignTokens.colorPcgWarningContrast,
    warningDark: DesignTokens.colorPcgWarningDark,
    warningLight: DesignTokens.colorPcgWarningLight,
    warningMain: DesignTokens.colorPcgWarningMain,
  },
};

const mergedLightTheme = { ...baseTheme, ...lightTheme };
const mergedDarkTheme = { ...baseTheme, ...darkTheme };
const mergedPcgTheme = { ...baseTheme, ...pcgTheme };

export { mergedLightTheme, mergedDarkTheme, mergedPcgTheme };
