import React, { useState } from 'react';
import {
  TextField, RadioGroup, Radio, FormControlLabel,
  Checkbox, Button, Select, MenuItem, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, Grid2,
  Rating, Typography, Divider, Paper, FormControl, FormLabel
} from '@mui/material';


function App() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    favoriteLanguage: '',
    acceptTerms: false,
    stars: 0, 
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.acceptTerms) {
      console.log(data);  
      setDialogOpen(true); 
    }
  };

  const handleClear = () => {
    setData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      favoriteLanguage: '',
      acceptTerms: false,
      stars: 0, 
    });
  };

  return (
    <Paper elevation={12} style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid2
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Grid2 xs={12} md={4}>
            <TextField
              label="Nombre"
              name="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <TextField
              label="Apellidos"
              name="surname"
              value={data.surname}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <TextField
              label="Edad"
              name="age"
              value={data.age}
              onChange={handleChange}
              type="number"
              fullWidth
              required
            />
            </Grid2>
          </Grid2>
          <Grid2 container>
          <Grid2 xs={12} md={6}>
            <FormControl >
            <FormLabel style={{ display: 'block', textAlign: 'center' }}>Género</FormLabel>
            <RadioGroup
              name="gender"
              value={data.gender}
              onChange={handleChange}
              row 
            >
              
              <FormControlLabel value="male" control={<Radio required />} label="Hombre" />
              <FormControlLabel value="female" control={<Radio required />} label="Mujer" />
              <FormControlLabel value="other" control={<Radio required />} label="Otro" />
            </RadioGroup>
            </FormControl>
          </Grid2>

          <Grid2 xs={12} md={6} style={{padding:20}}>
            <Select
              name="favoriteLanguage"
              value={data.favoriteLanguage}
              onChange={handleChange}
              fullWidth
              displayEmpty
              required
            >
              <MenuItem value="">Selecciona tu lenguaje favorito</MenuItem>
              <MenuItem value="javascript">JavaScript</MenuItem>
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="java">Java</MenuItem>
            </Select>
          </Grid2>
          </Grid2>
          <Divider style={{ width: '100%' }} />

          <Grid2 container spacing={2} >
            <Grid2 xs={12} md={6}>
              <Typography>Puntúa esta encuesta</Typography>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Rating
                name="stars"
                value={data.stars}
                onChange={(event, newValue) => {
                  setData((prevData) => ({
                    ...prevData,
                    stars: newValue,
                  }));
                }}
              />
            </Grid2>
          </Grid2>

          <Grid2 xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="acceptTerms"
                  checked={data.acceptTerms}
                  onChange={handleChange}
                  required
                />
              }
              label="Acepto los términos y condiciones"
            />
          </Grid2>

          <Grid2 container spacing={2} justifyContent="center" alignItems="center">
            <Grid2 item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!data.acceptTerms}
              >
                Enviar
              </Button>
            </Grid2>
            <Grid2 item>
              <Button
                type="button"
                variant="outlined"
                color="error"
                onClick={handleClear}
              >
                Limpiar
              </Button>
            </Grid2>
          </Grid2>

          {/* Dialogo */}
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Confirmación</DialogTitle>
            <DialogContent>
              <DialogContentText>
                ¿Estás seguro de enviar los datos?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)} color="primary">No</Button>
              <Button onClick={() => setDialogOpen(false)} color="primary">Sí</Button>
            </DialogActions>
          </Dialog>
        
      </form>
    </Paper>
  );
}

export default App;
