// Inicia el sistema cuando la página carga
console.log("Sistema Iniciado...");

// Almacena todos los sospechosos registrados en la agencia
const baseDeDatos = [];

const sospechoso1 = {
    nombre: "Victor Magneto",
    codigo: "  ~PHOENIX_7849_INFERNO~  ",
    nivelPeligrosidad: 10,
    capturado: false,
    delitos: ["hackeo de sistemas", "robo de datos confidenciales", "estafas electronicas"]
};

const sospechoso2 = {
    nombre: "James Moriarty",
    codigo: "  &DRAGON_5421_STORM&  ",
    nivelPeligrosidad: 9,
    capturado: false,
    delitos: ["trafico de informacion", "sabotaje de infraestructura"]
};

const sospechoso3 = {
    nombre: "Sheldon Plankton",
    codigo: "  #SERPENT_2103_SHADOW#  ",
    nivelPeligrosidad: 3,
    capturado: true,
    delitos: ["intento de robo", "espionaje de bajo nivel"]
};

// Agregar los tres sospechosos iniciales a la base de datos
baseDeDatos.push(sospechoso1);
baseDeDatos.push(sospechoso2);
baseDeDatos.push(sospechoso3);

console.log("Base de datos inicializada con 3 sospechosos.");

// Permite registrar nuevos sospechosos dinámicamente en el sistema
function registrarSospechoso(nombre, codigo, nivelPeligrosidad, capturado, delitos) {
    const nuevoSospechoso = {
        nombre: nombre,
        codigo: codigo,
        nivelPeligrosidad: nivelPeligrosidad,
        capturado: capturado,
        delitos: delitos
    };
    
    baseDeDatos.push(nuevoSospechoso);
    console.log(`Sospechoso ${nombre} registrado correctamente.`);
}

// Recorre la base de datos y muestra todos los sospechosos con su nivel de peligro
function listarSospechosos() {
    console.log("\n========== LISTADO DE SOSPECHOSOS ==========");
    
    for (let i = 0; i < baseDeDatos.length; i++) {
        const sospechoso = baseDeDatos[i];
        console.log(`Agente, el sospechoso ${sospechoso.nombre} tiene un nivel de peligro de ${sospechoso.nivelPeligrosidad}`);
    }
    
    console.log("==========================================\n");
}

// Ejecuta el listado inicial para verificar el sistema (por lo del break que pidieron)
listarSospechosos();
