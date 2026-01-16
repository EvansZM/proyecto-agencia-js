
# 🕵️‍♂️ Proyecto Práctico: El Sistema de Inteligencia "Skynet" (Versión Lite)

**Tiempo estimado:** Toda la clase
**Modalidad:** Parejas (Agentes Binarios)
**Objetivo:** Crear un sistema de consola para gestionar y analizar una base de datos de "Sospechosos Cibernéticos".

---

## 🎯 Instrucciones Generales para los Agentes

¡Bienvenidos, reclutas! La agencia de inteligencia necesita actualizar su vieja base de datos de papel a un sistema digital moderno usando **JavaScript**.

Ustedes trabajarán en el departamento de **Ciber-Crimen**. Su misión es construir un programa que se ejecute en la consola del navegador y permita gestionar la información de los sospechosos más buscados.

**Reglas de Oro:**

1. **Trabajo en Equipo:** Uno "conduce" (escribe código) y el otro "navega" (revisa, dicta y busca errores). ¡Cambien de rol cada 30 minutos!
2. **No hay interfaz gráfica (aún):** Todo el poder se verá en la **Consola del Desarrollador** (F12). El HTML solo sirve para cargar su cerebro digital (el archivo `.js`).
3. **Código Limpio:** Nada de variables llamadas `x` o `y`. Usen nombres reales como `sospechosos`, `nivelPeligro`, etc.

---

## 🛠️ Fase 1: Configuración del Cuartel General

Antes de empezar a programar, necesitamos un lugar seguro donde alojar nuestro código.

1. Creen una carpeta en su computador llamada `Proyecto_Agencia_JS`.
2. Dentro, creen un archivo `index.html` (esqueleto básico) y un archivo `script.js`.
3. Enlacen el JS dentro del HTML.
4. Creen un repositorio en **GitHub** con el mismo nombre.
5. Suban sus archivos iniciales y activen **GitHub Pages** (queremos que el mundo vea su consola en acción al final).

> 💡 **Tip:** Escriban un `console.log("Sistema Iniciado...")` en su JS para verificar que todo está conectado al abrir el navegador.

---

## 📂 Fase 2: La Base de Datos (Estructuras de Datos)

La agencia tiene archivos confidenciales. Necesitamos digitalizarlos.

1. **El Archivo Maestro:** Declaren una variable constante llamada `baseDeDatos` que sea un **Arreglo** vacío inicialmente. Aquí guardaremos a los criminales.
2. **El Primer Sospechoso:** Creen un **Objeto** literal que represente a un sospechoso. Debe tener las siguientes propiedades (¡Usen su imaginación para los datos!):
* `nombre` (String)
* `codigo` (String) -> *Inventen un código raro con espacios y símbolos, ej: "  %SECRET_AGENT_007  "*
* `nivelPeligrosidad` (Number, del 1 al 10)
* `capturado` (Boolean)
* `delitos` (Array de Strings, ej: ["Hackeo", "Robo de WiFi"])


3. **Registro:** Agreguen este objeto al arreglo `baseDeDatos` usando el método que permite insertar elementos al final de un arreglo.
4. Creen **al menos 2 sospechosos más** con datos diferentes y agréguenlos también.

---

## ⚙️ Fase 3: Herramientas de Gestión (Funciones)

No podemos meter datos manualmente siempre. Necesitamos automatización.

1. Creen una **Función** llamada `registrarSospechoso`.
* Debe recibir como parámetros toda la información necesaria (nombre, código, nivel, etc.).
* Dentro de la función, deben crear el objeto y agregarlo al arreglo `baseDeDatos`.
* La función debe mostrar un mensaje en consola confirmando el registro: *"Sospechoso [Nombre] registrado correctamente."*


2. Creen una **Función** llamada `listarSospechosos`.
* Debe recorrer el arreglo `baseDeDatos` (pueden usar un ciclo `for` clásico).
* Por cada sospechoso, debe imprimir en consola: *"Agente, el sospechoso [Nombre] tiene un nivel de peligro de [Nivel]"*.



---

### 🛑 PUNTO DE CONTROL (BREAK DE AVANCE) 🛑

**¡Atención Agentes!** El Director Juan Pablo pasará por sus estaciones.
Deben tener listo hasta este punto.

* **Evaluación:** Se les pedirá que ejecuten `listarSospechosos()` en la consola y se debe ver la lista de sus criminales creados.
* **Si estás trabajando solo:** Debes tener al menos 2 sospechosos en la lista y la función de registro operativa.

*(Este es el momento para resolver dudas si su ciclo for se volvió infinito o si los objetos no se guardan).*

---

## 🕵️‍♂️ Fase 4: El Decodificador (Métodos de String)

La agencia ha interceptado códigos encriptados, pero vienen sucios. Necesitamos limpiarlos usando tecnología de punta (Métodos de String).

Creen una función llamada `analizarCodigo(sospechoso)` que reciba a un objeto sospechoso y haga lo siguiente:

1. **Limpieza:** El `codigo` del sospechoso a veces viene con espacios al inicio o final. Elimínenlos usando el método `trim()`.
2. **Verificación de Seguridad:** La agencia busca códigos que empiecen con una serie especial (ej: "S3CR3T"). Usen `startsWith()` para verificar si el código limpio comienza con esa palabra.
3. **Extracción:** Si el código es válido, extraigan solo la parte importante (omitan los primeros caracteres de seguridad) usando `substring()`.
4. **Búsqueda de Patrones:** Verifiquen si el código extraído contiene la palabra clave "Peligro" o "Riesgo" usando `includes()`.
5. **Reporte:** La función debe retornar un mensaje diciendo si el código es de "Alta Prioridad" (si contiene la palabra clave) o "Estándar".

---

## 📊 Fase 5: El Reporte Final (Formato y Estilo)

El Director odia los reportes desordenados. Vamos a hacer que la consola se vea profesional.

1. Creen una función `generarReporteSeguridad()`.
2. **Encabezado:** Usen `console.log` para imprimir una línea separadora genial. *Truco:* Usen el método `repeat()` para repetir el carácter guion ("-") 50 veces y crear una línea divisoria perfecta.
3. **Alineación:** Recorran la base de datos e impriman una tabla manual.
* Para que los nombres queden alineados en columnas, usen el método `padEnd()`.
* Ejemplo visual esperado en consola:
```text
NOMBRE            | PELIGROSIDAD
----------------------------------
Dr. No            | 10
Moriarty          | 8
Plankton          | 3

```


* *(Deben calcular cuánto relleno ponerle a cada nombre para que la barra `|` quede recta)*.



---

## 🚀 Fase 6: Despliegue y Créditos

1. Al final de su código, asegúrense de dejar una ejecución de prueba lista.
2. **Firma Digital:** Agreguen un `console.log` final que diga:
*"Sistema creado por los Agentes: [Nombre Alumno 1] y [Nombre Alumno 2]"*.
3. Hagan **Commit** y **Push** de sus cambios finales a GitHub.
4. Verifiquen que el enlace de **GitHub Pages** funcione y pásenselo al Director.

### 🆘 Excepción para "Lobos Solitarios" (Alumnos sin pareja)

Si estás operando solo/a:

* En la **Fase 5**, no es necesario que uses `padEnd` para alinear perfectamente la tabla, basta con que uses `repeat` para separar a cada sospechoso con una línea visual.
* En la **Fase 2**, puedes ingresar solo 3 sospechosos en total.

---

**¡Buena suerte, Agentes! El código es su arma.** 💻🕶️