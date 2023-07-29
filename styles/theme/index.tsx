import { extendTheme } from '@chakra-ui/react';

// 

const breakpoints = {
  sm: "32em",
  md: "76.8em",
  lg: "85.375em",
  xl: "144em",
};

export const theme = extendTheme({
  breakpoints,
  components: {
    Image: {
      variants: {
        primary: {
          objectFit: 'none',
        },
      },
    },
    Textarea: {
      variants: {
        primary: {
          bg: '#fff',
          color: 'black',
          fontWeight: 'medium',
          height: '200px',

          _hover: {
            bg: '#EAEAEA',
          },
          _placeholder: {
            color: 'black',
          },
          _focus: {
            bg: '#EAEAEA',
          },
        },
        secondary: {
          bg: '#EAEAEA',
          fontSize: '13px',
          color: 'black',
          _hover: {
            bg: '#EAEAEA',
          },
          _placeholder: {
            color: 'black',
          },
          _focus: {
            bg: '#EAEAEA',
          },
        },
      },
    },
    Text: {
      variants: {
        primary: {
          fontSize: '22px',
          fontWeight: 'bold',
        },
        authText: {
          fontWeight: 'bold',
          mt: '50px',
        },
        authLinkText: {
          my: '20px',
          fontSize: '16px',
          color: '#969091',
          fontWeight: 'bold',
        },
        popInputLabel: {
          fontSize: '16px',
          mt: '20px',
          fontWeight: 'bold',
        },
        statsText: {
          fontSize: '14px',
        },
        statsPercentage: {
          fontSize: '24px',
          fontWeight: 'bold',
        },
        modalTitle: {
          position: 'absolute',
          fontSize: '14px',
          color: 'white',
          left: '20px',
          top: '20px',
          fontWeight: 'bold',
        },
        journeyTitle: {
          position: 'absolute',
          fontSize: '14px',
          color: 'white',
          left: '20px',
          top: '10px',
          fontWeight: 'bold',
        },
      },
    },
    Button: {
      variants: {
        primary: {
          bg: 'primary.100',
          my: '20px',
          p: ' 10px 60px',
          borderRadius: '50px',
          fontSize: '14px',
          color: 'white',

          _hover: {
            bg: 'primary.100',
          },
        },
        saveButton: {
          bg: 'primary.100',
          borderRadius: '25px',
          color: 'white',
          padding: '26px 28px',
          marginLeft: '15px',
          marginTop: '40px',

          _hover: {
            bg: 'primary.100',
          },
        },
        cancelButton: {
          bg: '#eaeaea',
          borderRadius: '25px',
          color: 'white',
          padding: '26px 28px',
          marginTop: '40px',

          _hover: {
            bg: '#eaeaea',
          },
        },
        filterButton: {
          bg: 'primary.100',
          my: '20px',
          p: ' 5px 20px',
          borderRadius: '10px',
          fontSize: '14px',
          color: 'white',
          _hover: {
            bg: 'primary.100',
          },
        },
        navButton: {
          bg: 'primary.100',
          p: ' 25px 40px',
          borderRadius: '25px',
          fontSize: '14px',
          color: 'white',

          _hover: {
            bg: 'primary.100',
          },
        },
        journeyButton: {
          bg: 'primary.100',
          fontSize: '16px',
          display: 'block',
          mx: 'auto',
          opacity: '0.8',
          w: '180px',
          borderRadius: '16px',
          color: 'whitesmoke',
          mt: '13px',
          _hover: {
            opacity: '1',
            bg: 'primary.100',
          },
        },
        editButton: {
          position: 'absolute',
          right: '5px',
          p: '5px',
          m: '0',
          gap: '5px',
          fontSize: '12px',
          h: 'auto',
          bg: 'primary.100',
          boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
          top: '10px',
          _hover: {
            bg: 'primary.100',
          },
        },
        keywordButton: {
          bg: 'primary.100',
          padding: '14px 18px',
          color: 'white',
          fontSize: '12px',
          borderRadius: '25px',
          gap: '10px',
          mt: '7px',
        },
        authButton: {
          bg: 'primary.100',
          my: '20px',
          p: '10px 60px',
          borderRadius: '50px',
          fontSize: '14px',
          color: 'white',
        },
      },
    },
    Input: {
      variants: {
        primary: {
          field: {
            bg: 'fieldsBg.100',
            color: 'black',
            fontWeight: 'medium',
            height: '60px',
            mt: '20px',
            _hover: {
              bg: 'gray.100',
            },
            _placeholder: {
              color: '#333',
            },
            _focus: {
              boxShadow: '0 0 0 1px #333',
              bg: 'gray.100',
            },
          },
        },
        secondary: {
          field: {
            bg: '#EAEAEA',
            color: 'black',
            height: '40px',
            fontWeight: 'bold',
            fontSize: '13px',
            mt: '5px',
            _hover: {
              bg: 'gray.100',
            },
            _placeholder: {
              color: '#333',
            },
            _focus: {
              boxShadow: 'none',
              bg: '#EAEAEA',
              border: 'none',
            },
          },
        },
        tertiary: {
          field: {
            bg: '#fff',
            color: 'black',
            fontWeight: 'bold',
            height: '70px',
            _hover: {
              bg: 'gray.100',
            },
            _placeholder: {
              color: '#333',
            },
            _focus: {
              boxShadow: '0 0 0 1px #333',
              bg: 'gray.100',
            },
          },
        },
        searchBar: {
          field: {
            bg: 'white',
            color: '#000000',
            borderRadius: '25px',
            height: '50px',
            _hover: {
              bg: 'white',
            },
            _placeholder: {
              color: '#333',
            },
            _focus: {
              boxShadow: 'none',
              bg: 'white',
            },
          },
        },
        fileUpload: {
          field: {
            bg: 'white',
            w: '190px',
            mt: '13px',
            _hover: { bg: 'white' },
            _active: { bg: 'white' },
            _focus: { bg: 'white' },
          },
        },
      },
    },
  },
  colors: {
    primary: {
      100: '#FB2E86',
      200: '#FB2448',
      300: '#F2F0FF',
      400: '000000'
    },
    success: {
      100: '#19D16F'
    },
    secondaryBlue: {
      100: '#151875',
      200: '#2F1AC4',
      300: '#3F509E'
    },
    purple: {
      100: '#7E33E0',
      200: '#9F63B5',
      300: '#E0D3F5'
    },
    skyBlue: {
      100: '#F3F9FF',
      200: '#F1F0FF'
    },
    textColor: {
      100: '#8A8FB9'
    }
  },
});
