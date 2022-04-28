import "@fontsource/readex-pro"
import { extendTheme, Theme } from '@chakra-ui/react'

/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
 export declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]> | T[P];
};

const theme: DeepPartial<Theme>  = {
  fonts: {
    heading: 'Readex Pro, sans-serif',
    body: 'Readex Pro, sans-serif'
  },
  colors: {
    black: "273945"
  }
}

export default extendTheme(theme)