import { useState } from 'react';
import {Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { NextLink } from '@mantine/next';
import {useRouter} from "next/router";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

export function NavSidebarLinksGroup({ label, link, icon, children }) {
  const { classes, theme } = useStyles();
  const hasChildren = Array.isArray(children);
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const childItems = (hasChildren ? children : []).map((link) => (
    <Text
      component={NextLink}
      href={link.link}
      className={classes.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ));

  function handleOpen() {
    if (hasChildren) setOpened((o) => !o);
    if (link) router.push(link);
  }

  return (
    <>
      <UnstyledButton onClick={() => handleOpen()} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              {icon}
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasChildren && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasChildren ? <Collapse in={opened}>{childItems}</Collapse> : null}
    </>
  );
}
