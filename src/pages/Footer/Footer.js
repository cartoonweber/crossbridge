import React from 'react';
import "./style.scss"
import { Box, TextField, MenuItem, InputAdornment } from '@material-ui/core';
import { FaTelegramPlane } from 'react-icons/fa'
import { IoEarth, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
    return (
        <Box sx={{ width: "100%", background : "white" }}>
            <Box className="footer">
                <Box>
                    <Box>Terms of Use</Box>
                    <Box style={{ fontSize: "14px", marginTop: "20px" }}>© 2019 - 2021 Binance.org. All rights reserved.</Box>
                </Box>
                <Box className="icons">
                    <Box className="footericon"><FaTelegramPlane /></Box>
                    <Box className="footericon"><IoLogoTwitter /></Box>
                    <Box className="select">
                        <TextField
                            select
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IoEarth style={{ fontSize: "25px", color: "rgb(30, 32, 38)" }} />&nbsp;
                                    </InputAdornment>
                                ),
                            }}
                            value={10}
                            variant="outlined"
                        >
                        <MenuItem value={10}>English</MenuItem>
                        </TextField>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
