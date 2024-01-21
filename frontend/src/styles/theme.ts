import { TypographyBold, TypographySize } from "./style.types"

const theme = {
    colors : {
        main : {
            primary : '#9772AE',
            secondary : '#e0e0ff'
        },
        background : {
            dark : {
                black : "#000000",
                primary : "#242424",
                secondary : "#363636",
                tetiary : '#d3d3d3'
            },
            light : {
                white : '#ffffff',
                primary : '#EDEDF3',
                secondary : '#d9d9d9',
                tetiary : '#e3e3e3'
            }
        },
        text : {
            light : {
                white : '#ffffff',
                primary : '#e3e3e3',
                secondary : '#dedede'
            },
            dark : {
                black : "#000000",
                primary : "#6d6d6d",
                secondary : "#8a8a8a",
                tetiary : '#A4A3A3'
            }
        },
        border : {
            light : {
                white : '#ffffff',
                primary : "#E8E8E8",
                secondary : '#636363'
            },
            dark : {
                black : "#000000",
                primary : "#242424",
                secondary : "#696969"
            }
        },
        buttons : {
            red : '#EA5252',
            green : '#4BB03B'
        }
    },

    colors2 : {
        main : {
            primary : "#9772AE"
        },

        gray : {
            gray1 : "#3A3D3F",
            gray2 : "#5B5F61",
            gray3 : "#999D9F",
            gray4 : "#B9BCBD",
            gray5 : "#D4D9DC",
            gray6 : "#DADADA",
            gray7 : "#F3F3F3",
            gray8 : "#F5F6F7",
            gray9 : "#FAFAFB",
        },

        blue : {
            blue1 : "#041957",
            blue2 : "#1D3B95",
            blue3 : "#4169E1",
            blue4 : "#ACC1FF",
            blue5 : "#DDE6FF",
            blue6 : "#EBF0FF",
            blue7 : "#F5F7FF",
            blue8 : "#FAFBFF",
            blue9 : "#F4F5F9",
        },

        green : {
            green1 : "#005200",
            green2 : "#029202",
            green3 : "#6BC36B",
            green4 : "#ABE8AB",
            green5 : "#DFF4DF",
        },

        red : {
            red1 : "#730404",
            red2 : "#A70000",
            red3 : "#E45353",
            red4 : "#F0A0A0",
            red5 : "#FFDCDC",
        },

        orange : {
            orange1 : "#77410E",
            orange2 : "#B66F1D",
            orange3 : "#EEAB46",
            orange4 : "#FFCBA6",
            orange5 : "#FFEBD9",
        },

        violet : {
            violet1 : "#4B1166",
            violet2 : "#8523B2",
            violet3 : "#B946EE",
            violet4 : "#DCACF2",
            violet5 : "#EEE0F5",
        },

        shades : {
            white : "#ffffff",
            black : "#000000"
        }
    },

    typography: {
        size: { xs: TypographySize.xs, sm: TypographySize.sm, sm2: TypographySize.sm2, md: TypographySize.md, 
            md2 : TypographySize.md2, lg: TypographySize.lg, lg2 : TypographySize.lg,
            xl: TypographySize.xl, xxl: TypographySize.xxl, xl3: TypographySize.xl3 },
        bold: { sm: TypographyBold.sm, md: TypographyBold.md, lg: TypographyBold.lg },
      },

    spacing: {
        xs: "6px",
        sm: "12px",
        md: "18px",
        lg: "30px",
    },

    borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "25px",
    },

    breakpoints: {
        xs: "600px",
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
    },
}

export default theme