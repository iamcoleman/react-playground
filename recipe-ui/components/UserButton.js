import { UnstyledButton, Group, Avatar, Text, createStyles, Menu } from '@mantine/core';
import {IconChevronRight, IconSettings} from '@tabler/icons';
import { NextLink } from '@mantine/next';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

export function UserButton({ image, name, email, icon, ...others }) {
  const { classes } = useStyles();

  return (
    <Menu width={200} shadow="md" position="top">
      <Menu.Target>
        <UnstyledButton className={classes.user} {...others}>
          <Group>
            <Avatar src={image} radius="xl" />

            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {name}
              </Text>

              <Text color="dimmed" size="xs">
                {email}
              </Text>
            </div>

            { icon || <IconChevronRight size={14} stroke={1.5} /> }
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          icon={<IconSettings size={14} />}
          component={NextLink}
          href="/settings"
        >
          Settings
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>


  );
}
