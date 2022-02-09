import { Outlet } from "react-router-dom"
import { Box, SxProps, Theme } from "@mui/material"
import AppBar from "./AppBar"
import Content from "./Content"
import SideBar from "./SideBar"

const MainLayout = () => {
    return (
        <>
            <AppBar />
            <Box sx={flexWrapperSx}>
                <SideBar />
                <Content>
                    <Outlet />
                </Content>
            </Box>
        </>
    )
}

export default MainLayout

const flexWrapperSx: SxProps<Theme> = (theme) => ({
    display: "flex",
    height: `calc(100vh - 60px)`,
})
