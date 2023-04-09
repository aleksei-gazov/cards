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
import {Navigate, NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {useAppDispatch, useAppSelector} from "../store/store";
import {authThunks} from "../store/auth-slice";


type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .email(),
    password: yup
        .string()
        .required("Password is required")
        .min(7, "Password must be at least 7 characters"),
    confirmPassword: yup
        .string()
        .required("Password is required")
        .oneOf([yup.ref('password')], 'Passwords must match')
})


export const Registration = () => {

    const isRegistered = useAppSelector(state => state.auth.isRegistered)
    const dispatch = useAppDispatch()

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(({email, password}) => {
        console.log({email, password})
        dispatch(authThunks.registerThunk({email, password}))
    })

    if (isRegistered) {
        return <Navigate to={'/login'}/>
    }

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
                    <form onSubmit={onSubmit}>
                        <FormGroup sx={{alignItems:"center", fontSize:"16px", fontWeight:"500"}}>
                            <FormControl sx={{m: 1, width: '35ch', }} variant="standard" fullWidth>
                                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                                <Input
                                    id="standard-adornment-email"
                                    type={'email'}
                                    {...register('email')}
                                />
                                <p style={{color:"red", fontSize:"12px"}}>
                                    {errors.email?.message}
                                </p>
                            </FormControl>
                            <FormControl sx={{m: 1, width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
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
                                <p style={{color:"red", fontSize:"12px"}}>{errors.password?.message}</p>
                            </FormControl>
                            <FormControl sx={{m: 1, width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment--confirm-password">Confirm password</InputLabel>
                                <Input
                                    id="standard-adornment--confirm-password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    {...register('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                            >
                                                {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <p style={{color:"red", fontSize:"12px"}}>{errors.confirmPassword?.message}</p>
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