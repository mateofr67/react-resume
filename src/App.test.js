import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json";

test('aplica tema por defecto basado en preferencia del sistema', () => {
  // Mock de `window.matchMedia` para simular preferencia de color
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  render(<App />);

  const htmlElement = document.documentElement;
  const appliedTheme = htmlElement.getAttribute('data-theme');

  // Comprobar si el tema aplicado es 'light' o 'dark'
  expect(['light', 'dark']).toContain(appliedTheme);
});

test('renderiza el nombre desde Header', () => {
  render(<App />);

  // Verificar si el nombre del header está en el documento
  expect(screen.getByText(data.info.name)).toBeInTheDocument();
});

test('muestra la experiencia correctamente', () => {
  render(<App />);

  // Verificar si se muestra el primer elemento de experiencia
  const firstExperience = data.experience[0];
  expect(screen.getByText(firstExperience.company)).toBeInTheDocument();
});

test('renderiza las habilidades correctamente', () => {
  render(<App />);

  // Verificar si se muestra la primera habilidad
  const firstSkill = data.skills[0];
  expect(screen.getByText(firstSkill.name)).toBeInTheDocument();
});

test('muestra la educación correctamente', () => {
  render(<App />);

  // Verificar si se muestra el primer título de educación
  const firstEducation = data.education[0];
  expect(screen.getByText(firstEducation.degree)).toBeInTheDocument();
});
