# 🛍️ Gestión de Productos con FakeStore API

Este proyecto es una aplicación de línea de comandos desarrollada con **Node.js** que permite gestionar productos utilizando la **FakeStore API**.  
Podrás listar, consultar, crear, actualizar y eliminar productos directamente desde la terminal.

---

## 📦 Requerimientos del Proyecto

### 🧩 Requerimiento #1: Configuración Inicial
1. Crea un directorio para el proyecto.  
2. Agrega un archivo `index.js` como punto de entrada.  
3. Inicializa el proyecto con:
   ```bash
   npm init -y
   ```
4. En el archivo `package.json`, agrega la propiedad:
   ```json
   "type": "module"
   ```
   Esto habilita el uso de **ESModules**.
5. Configura un script en `package.json`:
   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```
6. Ejecuta el programa con:
   ```bash
   npm run start
   ```

---

### ⚙️ Requerimiento #2: Lógica de Gestión de Productos

El sistema interpreta comandos ingresados en la terminal y ejecuta acciones sobre la **API FakeStore**.

#### 🔍 Consultar Todos los Productos
```bash
npm run start GET products
```
📤 Devuelve la lista completa de productos.

---

#### 🔎 Consultar un Producto Específico
```bash
npm run start GET products/<productId>
```
📤 Devuelve la información del producto indicado.  
📘 Ejemplo:
```bash
npm run start GET products/15
```

---

#### ➕ Crear un Producto Nuevo
```bash
npm run start POST products <title> <price> <category> [description]
```
🛠️ Crea un nuevo producto con los datos proporcionados.  
📘 Ejemplo:
```bash
npm run start POST products "T-Shirt-Rex" 300 remeras "Remera de algodón premium"
```

---

#### ✏️ Actualizar un Producto Existente
```bash
npm run start PUT products/<id> <title> <price> <category> [description]
```
📘 Ejemplo:
```bash
npm run start PUT products/3 "Pantalón Slim" 2500 pantalones "Versión actualizada"
```

---

#### 🗑️ Eliminar un Producto
```bash
npm run start DELETE products/<id>
```
📘 Ejemplo:
```bash
npm run start DELETE products/7
```

---

## 💡 Tips de Desarrollo

- Usa **process.argv** para capturar y procesar los comandos ingresados.  
- Implementa **fetch** para interactuar con la API de FakeStore.  
- Utiliza **destructuring** y **spread** para manipular los datos de forma limpia.  
- Aplica métodos de **arrays** y **strings** para separar parámetros y extraer información útil.  

---

## 🧠 Ejemplo de Ejecución

```bash
npm run start GET products
```

Salida:
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "category": "men's clothing"
  },
  ...
]
```

---

## 📁 Estructura del Proyecto
```
📦 UrbanClothes_Nodejs
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 🧑‍💻 Autor
Mariana Salgueiro, desarrollado como práctica de Node.js para la gestión de productos utilizando la API pública **FakeStoreAPI** 
