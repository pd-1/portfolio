"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
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
          Contact
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
          お問い合わせ
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Card sx={{ flex: 1 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                連絡先
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon color="primary" />
                  <Typography variant="body1">
                    your-email@example.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body1">
                    000-0000-0000
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LinkedInIcon color="primary" />
                  <Typography variant="body1">
                    LinkedIn
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <GitHubIcon color="primary" />
                  <Typography variant="body1">
                    GitHub
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                副業について
              </Typography>
              <Typography variant="body2" color="text.secondary">
                短期・長期プロジェクトともに対応可能です。
                まずはお気軽にご相談ください。
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                お問い合わせフォーム
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="お名前"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="メールアドレス"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
                <TextField
                  label="件名"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="メッセージ"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ mt: 2 }}
                >
                  送信する
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
