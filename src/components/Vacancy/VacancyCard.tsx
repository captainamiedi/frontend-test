import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface Vacancy {
  id: number;
  title: string;
  salary: string;
  location: string;
  company: string;
  experience: string;
}

const VacancyCard: React.FC<Vacancy> = React.memo(({ title, salary, location, company, experience }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', paddingBottom: '1rem' }}>
          <Typography variant="subtitle1" color="textSecondary" sx={{ marginRight: { md: 2 } }}>
            {salary}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ alignSelf: { xs: 'flex-start', md: 'center' }, backgroundColor: '#dff2f9', padding: '0.5rem 1rem', borderRadius: '.5rem' }}>
            {experience}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {company}
        </Typography>
        <Box sx={{ display: 'flex', marginTop: 2, gap: 20 }}>
          <Button variant="contained" color="primary" >
            Откликнуться
          </Button>
          <Button variant="outlined" >
            Посмотреть контент
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
});

export default VacancyCard;
