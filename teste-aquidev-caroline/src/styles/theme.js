import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "amarelo.500",
        },
      },
    },
  },
  colors: {
    amarelo: {
      500: "#FFFF00",
    },
  },
});
