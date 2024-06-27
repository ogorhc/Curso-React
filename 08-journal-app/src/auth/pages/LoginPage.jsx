import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginEmailPassword } from '../../store/auth';

const initialState = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm(initialState);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword({ email, password }));
    console.log({ email, password });
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='email'
              value={email}
              onChange={onInputChange}
              label='Correo'
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='password'
              value={password}
              onChange={onInputChange}
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
            ></TextField>
          </Grid>
          <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
