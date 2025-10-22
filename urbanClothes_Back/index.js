// index.js
const BASE_URL = "https://fakestoreapi.com";
let [, , method, resource, ...params] = process.argv;

if (!method || !resource) {
  console.log(" Uso: npm run start <METHOD> <resource> [params]");
  process.exit(1);
}

method = method.toUpperCase();
resource = resource.toLowerCase();

async function request(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(" Error en la solicitud:", error.message);
  }
}

async function main() {
  //  GET products o products/:id
  if (method === "GET" && (resource === "products" || resource.startsWith("products/"))) {
    const parts = resource.split("/");
    if (parts.length === 1) {
      // Lista todos los productos
      await request(`${BASE_URL}/products`);
    } else {
      // Obtiene un producto por ID
      const id = parseInt(parts[1]);
      if (isNaN(id) || id <= 0) {
        console.log(" ID inválido. Uso: npm run start GET products/<id>");
        return;
      }
      await request(`${BASE_URL}/products/${id}`);
    }
  }

  // POST products <title> <price> <category> [description]
  else if (method === "POST" && resource === "products") {
    const [title, price, category, description = "Producto agregado desde CLI"] = params;
    if (!title || !price || !category) {
      console.log(" Uso: npm run start POST products <title> <price> <category> [description]");
      return;
    }

    const newProduct = {
      title,
      price: Number(price),
      category,
      description,
    };

    await request(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  }

  // PUT products/:id <title> <price> <category> [description]
  else if (method === "PUT" && resource.startsWith("products/")) {
    const [, id] = resource.split("/");
    const [title, price, category, description = "Producto actualizado desde CLI"] = params;

    if (!id || !title || !price || !category) {
      console.log(" Uso: npm run start PUT products/<id> <title> <price> <category> [description]");
      return;
    }

    const updatedProduct = {
      title,
      price: Number(price),
      category,
      description,
    };

    await request(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  }

  // DELETE products/:id
  else if (method === "DELETE" && resource.startsWith("products/")) {
    const [, id] = resource.split("/");
    if (!id) {
      console.log(" Uso: npm run start DELETE products/<id>");
      return;
    }

    await request(`${BASE_URL}/products/${id}`, { method: "DELETE" });
  }

  //  Comando no reconocido
  else {
    console.log(" Comando no reconocido o mal formado.");
  }
}

main();
