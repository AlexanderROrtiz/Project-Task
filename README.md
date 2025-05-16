
# Project-Task

Aplicación móvil desarrollada en **React Native** y **TypeScript** para la gestión de tareas locales y visualización de un listado remoto. Cumple con los requerimientos de navegación, manejo de estado global, consumo de API, validaciones y pruebas unitarias.

## Tecnologías y versiones utilizadas

- **React Native**: ^0.79.2
- **Expo**: ~53.0.9
- **React**: ^19.0.0
- **TypeScript**: ~5.8.3
- **Redux Toolkit**: ^2.8.2
- **React Redux**: ^9.2.0
- **React Navigation**: 
  - @react-navigation/native: ^7.1.9
  - @react-navigation/native-stack: ^7.3.13
  - @react-navigation/stack: ^7.3.2
- **Testing**:
  - Jest: ^29.7.0
  - @testing-library/react-native: ^13.2.0
  - @testing-library/jest-native: ^5.4.3

## Patrones de diseño y arquitectura implementados

- **Arquitectura basada en componentes**: Separación clara entre componentes de UI y lógica de negocio.
- **Redux (Patrón Flux)**: Para manejo de estado global y desacoplamiento de la lógica de negocio.
- **Separación de responsabilidades**: 
  - Carpeta `components` para vistas y lógica de presentación.
  - Carpeta `redux` para slices y store.
  - Carpeta `navigation` para la gestión de rutas.
  - Carpeta `styles` para estilos reutilizables.
- **Hooks personalizados**: Uso de hooks para acceder y manipular el estado global.
- **Testing**: Pruebas unitarias para lógica y componentes, siguiendo el patrón AAA (Arrange, Act, Assert).

## Estructura del proyecto

## Funcionalidades principales

### 1. Pantalla principal
- Dos botones para navegar a:
  - **Tasks**: Gestión de tareas locales.
  - **Listado**: Visualización de datos remotos.

### 2. Tasks
- Listado de tareas almacenadas en Redux.
- Botón para agregar nueva tarea (abre modal).
- Validación: no permite agregar tareas vacías.
- Persistencia en navegación: las tareas se mantienen al volver a la pantalla.

### 3. Listado remoto
- Obtiene datos de: [https://6172cfe5110a740017222e2b.mockapi.io/elements](https://6172cfe5110a740017222e2b.mockapi.io/elements)
- Muestra nombre e imagen de cada elemento.
- Loading indicator mientras se cargan los datos.
- Manejo de errores en la petición.

### 4. Pruebas unitarias
- Pruebas para pantallas y lógica de Redux.
- Cobertura de flujos principales y validaciones.

## Instalación y ejecución

**Clona el repositorio:**

   git clone https://github.com/tuusuario/project-task.git
   cd project-task/Project-Task

**Instala dependencias::**
- npm install

**Ejecuta la app en Android:**
- npm start
- npm start android

**Ejecución de pruebas:**
- npm test

**Contacto**
Para dudas o sugerencias, no dudes en escribirme.
