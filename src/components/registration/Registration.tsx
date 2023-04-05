import React, {useState} from 'react';
import {
    FormControl,
    FormGroup,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import SuperButton from "../../comman/components/c2-SuperButton/SuperButton";
import {NavLink} from "react-router-dom";


export const Registration = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
            <Grid container
                  justifyContent={"center"}
                  textAlign={"center"}
                  alignItems={"center"}
            >
                <Paper sx={{padding: "35px", marginTop: 8}}>
                    <Typography marginBottom={"30px"} component="h1" sx={{fontSize:"26px", fontWeight:"600"}}>
                        Sign up
                    </Typography>
                    <form>
                        <FormGroup sx={{alignItems:"center", fontSize:"16px", fontWeight:"500"}}>
                            <FormControl sx={{m: 1, width: '35ch', }} variant="standard" fullWidth>
                                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                                <Input
                                    id="standard-adornment-email"
                                    type={'email'}
                                />
                            </FormControl>
                            <FormControl sx={{m: 1, width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl sx={{m: 1, width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment--confirm-password">Confirm password</InputLabel>
                                <Input
                                    id="standard-adornment--confirm-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <SuperButton type={"submit"}
                                         style={{
                                             borderRadius: "30px",
                                             marginTop: "60px",
                                             width: "100%",
                                             padding: "17px 0",
                                             fontSize:"16px",
                                             fontWeight:"500"
                                         }}
                            >
                                Sign Up
                            </SuperButton>
                            <Typography fontSize={"14px"} fontWeight={"500"} color={"#0000008a"} variant={"caption"} margin={"30px 0 10px"}>Already have an account?</Typography>
                            <NavLink to={'/login'} style={{fontSize:"16px", fontWeight:"600"}}>Sign In</NavLink>
                        </FormGroup>
                    </form>
                </Paper>
            </Grid>
    );
}