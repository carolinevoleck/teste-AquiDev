import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "amarelo.500",
        },
        formMain:{
          width:"100%",
          bg:"amarelo.500",
          color:"white",
          _hover:{
            bg:"white",
            color:"amarelo.500",
            border:"3px solid #FFFF00"
          }
        },
        formSecondary:{
          width:"100%",
          bg:"white",
          color:"amarelo.500",
          _hover:{
            fontWeight:"normal",
            color:"black",
            textDecoration:"underline",
            border:"1px solid grey"
          }

        }
      },
    },
  },
  colors: {
    amarelo: {
      500: "#FFFF00",
    },
  },
});
