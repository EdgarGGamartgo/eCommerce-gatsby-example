/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import React, { FC, memo } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Logo } from 'components/logo';
import { LinkAnyClearStyles } from 'components/link';

import { Wrapper, Text, Box } from './styled';

export const FooterMemo: FC = () => (
  <Wrapper>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box justifyContent="flex-start">
            {/* <Logo /> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box justifyContent="center">
            <Text weight="medium">
              
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box justifyContent="flex-end">
            <LinkAnyClearStyles href="mailto:Aprende idiomas">
              <Text weight="medium">Aprende idiomas</Text>
            </LinkAnyClearStyles>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
);

export const Footer = memo(FooterMemo);
