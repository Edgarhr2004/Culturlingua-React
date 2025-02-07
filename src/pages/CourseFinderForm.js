import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, Card, CardContent } from '@mui/material';
import emailjs from 'emailjs-com';

const CourseFinderForm = () => {
  const [formData, setFormData] = useState({
    horario: "",
    tipoCurso: "",
    modalidad: "presencial",
    nombre: "",
    telefono: "",
    email: ""
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_9lb5qor',   // Replace with your service ID
      'template_my1sx5e',  // Replace with your template ID
      formData,            // Pass formData as variables to your template
      'E34tJabSp_CQoJAQZ'  // Replace with your user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert("Tu formulario ha sido enviado exitosamente.");
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert("Hubo un error al enviar tu formulario. Intenta nuevamente.");
    });
  };

  return (
    <section id="course-finder-form" className="flex flex-col items-center p-8 bg-gradient-to-r from-red-500 to-yellow-400 text-white">
      <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <h1>Encuentra tu curso</h1>
        <p>Déjanos tus datos, te contactaremos, y encontraremos tu mejor opción.</p>
        <br></br><br></br>
      </div>
    </div>
    <br></br>
      <h2 className="text-3xl font-bold mb-4">Encuentra el curso perfecto para ti 📚</h2>
      <p className="text-lg mb-6">Déjanos tus datos y te ayudaremos a elegir el mejor curso.</p>
      
      <Card sx={{ width: "100%", maxWidth: 600, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Horario */}
            <FormControl fullWidth>
              <InputLabel>Horario</InputLabel>
              <Select
                value={formData.horario}
                onChange={(e) => handleChange("horario", e.target.value)}
                label="Horario"
              >
                <MenuItem value="Matutino (8am-1pm)">Matutino (8am-1pm)</MenuItem>
                <MenuItem value="Vespertino (1pm-7pm)">Vespertino (1pm-7pm)</MenuItem>
                <MenuItem value="Nocturno (7pm-9pm)">Nocturno (7pm-9pm)</MenuItem>
                <MenuItem value="Sabatino">Sabatino</MenuItem>
                <MenuItem value="Aún no estoy seguro">Aún no estoy seguro</MenuItem>
              </Select>
            </FormControl>

            {/* Tipo de Curso */}
            <FormControl fullWidth>
              <InputLabel>Tipo de Curso</InputLabel>
              <Select
                value={formData.tipoCurso}
                onChange={(e) => handleChange("tipoCurso", e.target.value)}
                label="Tipo de Curso"
              >
                <MenuItem value="Kinder">Kinder (4 a 6 años)</MenuItem>
                <MenuItem value="Niños">Niños (6 a 10 años)</MenuItem>
                <MenuItem value="Jovenes">Jóvenes (11 a 15 años)</MenuItem>
                <MenuItem value="Adultos">Adultos (15+ años)</MenuItem>
                <MenuItem value="Intensivo">Intensivo</MenuItem>
              </Select>
            </FormControl>

            {/* Modalidad */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Modalidad</FormLabel>
              <RadioGroup
                row
                value={formData.modalidad}
                onChange={(e) => handleChange("modalidad", e.target.value)}
              >
                <FormControlLabel value="presencial" control={<Radio />} label="Presencial" />
                <FormControlLabel value="online" control={<Radio />} label="Online" />
              </RadioGroup>
            </FormControl>

            {/* Nombre */}
            <TextField
              label="Nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              fullWidth
              required
            />

            {/* Teléfono */}
            <TextField
              label="Teléfono de contacto"
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              fullWidth
              required
            />

            {/* Email */}
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default CourseFinderForm;
