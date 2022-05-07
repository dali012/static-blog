import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

interface ColorModeProviderProps {
  children: React.ReactNode;
}

const initialContext = {
  mode: 'light' as PaletteMode,
  toggleColorMode: () => {},
};

export const ColorModeContext = createContext(initialContext);

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>(initialContext.mode);

  const { toggleColorMode } = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
