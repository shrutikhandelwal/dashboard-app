import React from 'react'
import { Box, Card, CardActions, cardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from "@mui/material";
import Header from "components/Header"
import { useGetProductsQuery } from 'state/api';

export const Products = () => {
  const {data, isLoading} = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)")
  console.log(data)
  return (
    <Box m="1.5rem 2rem">
      <Header title="PRODUCTS" subtitle="see your list of products." />
    </Box>
  )
}

