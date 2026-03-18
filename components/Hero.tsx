"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          フルスタックエンジニア
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          バックエンド・フロントエンド・インフラを幅広く対応し、
          企業のデジタル変革を支援するエンジニアです。
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          高品質なコードと効率的なシステム設計で、
          ビジネスの成長に貢献します。
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" size="large">
            お問い合わせ
          </Button>
          <Button variant="outlined" size="large">
            経歴を見る
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
