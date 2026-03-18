"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';

const services = [
  {
    title: 'バックエンド開発',
    icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'RESTful API設計、データベース設計、マイクロサービス構築など、堅牢なバックエンドシステムを開発します。',
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'フロントエンド開発',
    icon: <WebIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'モダンなフレームワークを使用し、ユーザー体験を重視したレスポンシブなWebアプリケーションを開発します。',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'インフラ構築',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'クラウド環境の構築、CI/CDパイプラインの設計、監視システムの導入など、効率的なインフラを構築します。',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions']
  }
];

export default function Services() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Services
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          提供できるサービス
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {service.technologies.map((tech, techIndex) => (
                      <Typography
                        key={techIndex}
                        variant="body2"
                        component="span"
                        sx={{
                          display: 'inline-block',
                          bgcolor: 'grey.200',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          m: 0.5,
                          fontSize: '0.75rem'
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
