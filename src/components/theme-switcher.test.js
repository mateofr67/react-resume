import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';  // Ruta al archivo del componente
import '@testing-library/jest-dom';  // Asegúrate de tener este import para las aserciones de Jest

test('no renderiza cuando enabled es falso', () => {
  render(<ThemeSwitcher enabled={false} currentTheme="light" setThemeFn={jest.fn()} />);
  const themeSwitcher = screen.queryByRole('button');
  expect(themeSwitcher).toBeNull();  // Verifica que no se renderiza
});

test('al hacer clic se alterna el tema', () => {
  const setThemeFn = jest.fn();
  render(<ThemeSwitcher enabled={true} currentTheme="light" setThemeFn={setThemeFn} />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);  // Simula el clic
  
  expect(setThemeFn).toHaveBeenCalledWith('dark');  // Verifica que se haya llamado con 'dark'
});

test('al presionar Enter se alterna el tema', () => {
  const setThemeFn = jest.fn();
  render(<ThemeSwitcher enabled={true} currentTheme="light" setThemeFn={setThemeFn} />);
  
  const button = screen.getByRole('button');
  fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });  // Simula la pulsación de la tecla 'Enter'
  
  expect(setThemeFn).toHaveBeenCalledWith('dark');  // Verifica que se haya llamado con 'dark'
});

test('cambia de tema de light a dark', () => {
  const setThemeFn = jest.fn();
  render(<ThemeSwitcher enabled={true} currentTheme="light" setThemeFn={setThemeFn} />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);  // Cambia a dark

  expect(setThemeFn).toHaveBeenCalledWith('dark');
});

test('cambia de tema de dark a light', () => {
  const setThemeFn = jest.fn();
  render(<ThemeSwitcher enabled={true} currentTheme="dark" setThemeFn={setThemeFn} />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);  // Cambia a light

  expect(setThemeFn).toHaveBeenCalledWith('light');
});
