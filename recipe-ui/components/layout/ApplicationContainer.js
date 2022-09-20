import { useState } from 'react';
import {AppShell, Burger, createStyles, Footer, Header, MediaQuery, Text} from '@mantine/core';
import NavSidebar from "./NavSidebar";

const useStyles = createStyles((theme) => ({

}));

export const ApplicationContainer = ({ children }) => {
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <NavSidebar opened={opened} />
      }
      footer={
        <Footer height={60} p="md">
          Application Footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application Header</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
