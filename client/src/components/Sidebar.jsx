import React from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, typography, useTheme } from "@mui/material";
import { SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCarOutlined, Groups2Outlined, ReceiptLongOutlined, PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarViewMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, PieChartOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assests/profile.jpeg"

const Sidebar = ({drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile}) => {
    const {pathname} = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
  return (

    <div>Sidebar</div>
  )
}

export default Sidebar