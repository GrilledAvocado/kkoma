// use client는 import보다 더 먼저 나와야 합니다.
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
// import { Menu, MenuItem } from "@mui/material";

const Header = () => {
  const [value, setValue] = React.useState(-1);

  const theme = useTheme();

  const StyledFab = styled(Fab)({
    width: 80,
    height: 80,
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    "&.MuiFab-root": {
      // MUI Fab 루트에 대한 스타일을 재정의
      boxShadow: theme.shadows[2], // 이는 elevation 2에 해당하는 그림자입니다.
      backgroundColor: 'white',
    },
  });

  return (
    <header>
        <AppBar
          position="fixed"
          color="default"
          sx={{ top: "auto", bottom: 0 }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="거래 일정"
                icon={<EventAvailableIcon />}
              component={Link}
              href="/plan"
            />
            <BottomNavigationAction
              label="내 거래"
                icon={<ListAltIcon />}
              component={Link}
              href="/my-trade"
            />
            <BottomNavigationAction label="" disabled/>
            <BottomNavigationAction
              label="모아보기"
                icon={<GridViewIcon />}
              component={Link}
              href="/lists"
            />
            <BottomNavigationAction
              label="내 페이지"
                icon={<PersonOutlineIcon />}
              component={Link}
              href="/my-page"
            />
          </BottomNavigation>
            <StyledFab
            //   color="white"
              aria-label="add"
              size="large"
              href="/"
              onClick={() => {
                setValue(-1);
              }}
            >
              {/* <AddIcon fontSize="large"/> */}
                <Image
                    src="/chicken-home.svg"
                    alt="Home Logo"
                    className="dark:invert z-2"
                    width={50}
                    height={24}
                    priority
                />
            </StyledFab>
        </AppBar>
    </header>
  );
};

export default Header;
