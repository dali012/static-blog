import { Link, Typography } from '@mui/material';
import { FC } from 'react';

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" mt={10}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Dalip012
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
