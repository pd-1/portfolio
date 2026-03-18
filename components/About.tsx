"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function About() {
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
          About
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          私について
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                経歴
              </Typography>
              <Typography variant="body1" paragraph>
                フルスタックエンジニアとして、Webアプリケーション開発の
                全工程を経験してきました。
              </Typography>
              <Typography variant="body1" paragraph>
                バックエンドのAPI設計からフロントエンドのUI実装、
                インフラ構築まで一貫して担当可能です。
              </Typography>
              <Typography variant="body1">
                副業としても様々なプロジェクトに参画し、
                異なる業界の課題解決に貢献してきました。
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                強み
              </Typography>
              <Typography variant="body1" paragraph>
                • 幅広い技術栈で柔軟な対応が可能
              </Typography>
              <Typography variant="body1" paragraph>
                • ビジネス要件を技術実装に落とし込む能力
              </Typography>
              <Typography variant="body1" paragraph>
                • チーム開発でのコミュニケーション能力
              </Typography>
              <Typography variant="body1">
                • 常に最新技術を学習し続ける姿勢
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
