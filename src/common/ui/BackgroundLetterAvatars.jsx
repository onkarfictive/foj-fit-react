import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// Function to generate color based on string
function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

// Function to generate initials and color for the avatar
function stringAvatar(name) {
  const nameParts = name.split(' ');

  const firstInitial = nameParts[0][0]; // First letter of the first part
  const secondInitial = nameParts.length > 1 ? nameParts[1][0] : ''; // Second letter of the second part, if available

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstInitial}${secondInitial}`,
  };
}

export default function BackgroundLetterAvatars({ name }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(name)} />
    </Stack>
  );
}
