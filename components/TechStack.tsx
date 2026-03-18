"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const techCategories = [
  {
    title: 'バックエンド',
    technologies: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Go', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Redis', level: 'Intermediate' },
      { name: 'GraphQL', level: 'Advanced' }
    ]
  },
  {
    title: 'フロントエンド',
    technologies: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'Vue.js', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'HTML5/CSS3', level: 'Expert' },
      { name: 'TailwindCSS', level: 'Advanced' },
      { name: 'Material-UI', level: 'Advanced' },
      { name: 'Redux', level: 'Advanced' }
    ]
  },
  {
    title: 'インフラ＆DevOps',
    technologies: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'Terraform', level: 'Intermediate' },
      { name: 'Nginx', level: 'Advanced' },
      { name: 'Linux', level: 'Advanced' },
      { name: 'Monitoring', level: 'Intermediate' }
    ]
  },
  {
    title: 'その他',
    technologies: [
      { name: 'Git', level: 'Expert' },
      { name: 'Agile', level: 'Advanced' },
      { name: 'Testing', level: 'Advanced' },
      { name: 'CI/CD', level: 'Advanced' },
      { name: 'Security', level: 'Intermediate' },
      { name: 'Performance', level: 'Advanced' },
      { name: 'Architecture', level: 'Advanced' },
      { name: 'Documentation', level: 'Advanced' }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'success';
    case 'Advanced': return 'primary';
    case 'Intermediate': return 'warning';
    default: return 'default';
  }
};

export default function TechStack() {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Tech Stack
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          使用技術
        </Typography>
        
        <Stack spacing={3}>
          {techCategories.map((category, index) => (
            <Card key={index}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={`${tech.name} (${tech.level})`}
                        color={getLevelColor(tech.level) as any}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
            </Card>
          ))}
        </Stack>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Expert: 詳細 | Advanced: 熟練 | Intermediate: 中級
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
