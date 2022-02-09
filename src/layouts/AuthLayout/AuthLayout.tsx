import { Outlet } from "react-router-dom"
import { Box, SxProps, Theme } from "@mui/material"

const AuthLayout = () => {
    return (
        <Box sx={rootSx}>
            <Outlet />
        </Box>
    )
}

const rootSx: SxProps<Theme> = (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, rgba(145,232,238,1) 100%)`,
})

export default AuthLayout
