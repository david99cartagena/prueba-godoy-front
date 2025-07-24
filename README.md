# 🐱 CatFact & GIF Finder - Frontend (Angular)

Este proyecto frontend permite consultar datos curiosos sobre gatos y acompañarlos de GIFs animados usando dos APIs: una de hechos aleatorios sobre gatos y otra de imágenes (GIFs). Cada búsqueda se almacena en un historial persistente.

## 🚀 Tecnologías utilizadas

- Angular 17
- TypeScript
- Bootstrap 5
- RxJS
- HTML5 + CSS3

## 🎯 Funcionalidad

- Muestra un **fact aleatorio sobre gatos** y un **GIF relacionado**.
- Permite **refrescar el GIF** sin cambiar el fact.
- Guarda cada búsqueda en un historial con:
  - Fecha
  - Fact completo
  - Palabras clave usadas
  - URL del GIF
- Navegación mediante pestañas (tabs Bootstrap).
- **Manejo de errores** con mensajes claros.
- Loading spinner mientras se cargan los datos.

## 📦 Estructura del proyecto

```
src/
├── app/
│ ├── services/ # Lógica para llamadas HTTP
│ ├── interfaces/ # Modelos tipados de datos
│ └── app.component.ts # Componente principal
├── assets/
└── environments/ # Configuración de entornos
```

## ⚙️ Configuración local

1. Clona el repositorio:
   ````bash
   git clone https://github.com/david99cartagena/prueba-godoy-front.git
   ```
   ````
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura el archivo environment.ts con la URL del backend:
   ```bash
   export const environment = {
   production: false,
   apiUrl: 'http://localhost:5000/api'
   };
   ```
4. Inicia el servidor:

   ```bash
   ng serve
   ```

5. Accede a la app en http://localhost:4200
