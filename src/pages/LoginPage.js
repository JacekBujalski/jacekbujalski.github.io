import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  formWrapper: {
    backgroundColor: "#424242",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  text: {
    fontFamily: "Arbutus Slab",
    fontSize: "1.5rem",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    color: "#fff",
  },
  inputs: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    fontSize: "1.1rem",
    fontFamily: "Arbutus Slab",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: "none",
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        className={classes.formWrapper}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1 className={classes.text}> Zaloguj się </h1>
          <form className={classes.form} noValidate autoComplete="off">
            <OutlinedInput
              className={classes.inputs}
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="username"
              placeholder="Nazwa Użytkownika"
              name="username"
            />
            <OutlinedInput
              className={classes.inputs}
              color="secondary"
              fullWidth
              required
              placeholder="Hasło"
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Zaloguj
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}