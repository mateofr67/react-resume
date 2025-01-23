import { updateTheme } from './theme-switcher'; // Ajusta la importación
import { Theme } from './path-to-theme'; // Ajusta la importación
import ThemeSwitcher  from './theme-switcher';

describe('updateTheme function', () => {
  const setThemeFn = jest.fn(); // Mock de setThemeFn

  it('cambia el tema a dark si el tema actual es light', () => {
    updateTheme(Theme.LIGHT, setThemeFn);
    expect(setThemeFn).toHaveBeenCalledWith(Theme.DARK.toLowerCase());
  });

  it('cambia el tema a light si el tema actual es dark', () => {
    updateTheme(Theme.DARK, setThemeFn);
    expect(setThemeFn).toHaveBeenCalledWith(Theme.LIGHT.toLowerCase());
  });
});
