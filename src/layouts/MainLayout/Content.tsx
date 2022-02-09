import { Box, SxProps, Theme } from "@mui/material"

interface ContentProps {
    children: JSX.Element | JSX.Element[]
}

const Content = ({ children }: ContentProps) => {
    return (
        <Box component="main" sx={mainSx}>
            {children}
        </Box>
    )
}

export default Content

const mainSx: SxProps<Theme> = (theme) => ({
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    padding: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    marginTop: "80px",
    marginBottom: "10px",
})
