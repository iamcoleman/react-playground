import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import { NavSidebarLinksGroup } from './NavSidebarLinksGroup';
import { UserButton } from '../UserButton';
import { IconClipboardList, IconHome } from '@tabler/icons';

const navItems = [
  {
    label: 'Home',
    link: '/',
    icon: <IconHome size={18} />,
    children: null,
  },
  {
    label: 'Recipes',
    link: null,
    icon: <IconClipboardList size={18} />,
    children: [
      {
        label: 'View Recipes',
        link: '/recipes'
      },
      {
        label: 'Create Recipe',
        link: '/recipes/create'
      },
      {
        label: 'Compare Recipes',
        link: '/recipes/compare'
      },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavSidebar({ opened }) {
  const { classes } = useStyles();
  const links = navItems.map((item) => <NavSidebarLinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ sm: 300 }} pt="md" px="md" className={classes.navbar} hiddenBreakpoint="sm" hidden={!opened}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v6.9.420</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Coleman Lyski"
          email="coleman.lyski@gmail.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
