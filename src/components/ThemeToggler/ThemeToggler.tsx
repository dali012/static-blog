import { ColorModeContext } from '@/providers/ColorMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';
import { FC, useContext } from 'react';

const ThemeToggler: FC = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const {
    palette: { mode },
  } = useTheme();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggler;
