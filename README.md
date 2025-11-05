
  # Web Red Neuronal Básica

  **Autor:** Sebastian Gravini  
  **Licencia:** MIT  

  ## Descripción

  Simulación interactiva con una red neuronal básica en JavaScript (usando Brain.js)
  que ajusta el color y tamaño de texto según edad y género.  
  Demuestra cómo una red puede aprender patrones visuales simples en una interfaz web.

  ## Características

  - Entrenamiento directo en el navegador usando **Brain.js**.  
  - Interfaz visual e intuitiva con controles deslizantes (range).  
  - Cambios dinámicos de color y tipografía basados en las predicciones de la red.  
  - Separación limpia entre **HTML**, **CSS** y **JavaScript**.

  ## Tecnologías utilizadas

  - **HTML5** – Estructura del documento  
  - **CSS3** – Diseño visual  
  - **JavaScript (ES6)** – Lógica y conexión con la red neuronal  
  - **Brain.js** – Librería para redes neuronales en el navegador  

  ## Cómo funciona

  1. La red neuronal se entrena con un conjunto de datos que representan diferentes etapas de la vida 
     (niñez, adultez, vejez).  
  2. Cada muestra de entrenamiento define combinaciones de color y tamaño de texto para reflejar 
     características típicas de esa etapa.  
  3. El usuario puede mover los deslizadores de edad y género para ver cómo la red predice 
     el estilo visual correspondiente.

  ## Ejemplo visual

  | Edad | Género | Resultado aproximado |
  |------|---------|----------------------|
  | 10   | Neutral | Colores vivos, texto grande |
  | 45   | Masculino | Colores moderados, texto pequeño |
  | 80   | Femenino | Colores suaves, texto grande |

  ## Cómo usar

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/tu-usuario/web-red-neuronal-basica.git
     ```
  2. Abre el archivo `index.html` en tu navegador.  
  3. Ajusta los controles de edad y género y observa los cambios en tiempo real.

  ## Dependencias

  El único recurso externo necesario es **Brain.js**, cargado desde un CDN:

  ```html
  <script src="https://unpkg.com/brain.js"></script>
