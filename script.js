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



// Fase 4: El Decodificador (Métodos de String)

let analizarCodigoSospechoso = (sospechoso) => {

    let esPeligroso = false; // bandera para saber si el código es peligroso

    // se quitan los espacios del código
    let sinEspacios = sospechoso.codigo.trim();

    // Verifico si empieza con la clave de seguridad
    if (sinEspacios.startsWith('S3CR3T')) {

        // Quitamos los primeros 6 caracteres ("S3CR3T")
        let codigoImportante = sinEspacios.substring(6);

        // Buscamos palabras clave  peligro o riesgo
        if (
            codigoImportante.includes('Peligro') ||
            codigoImportante.includes('Riesgo')
        ) {
            esPeligroso = true;
        }

    } else {
        return 'Correo no encriptado';
    }

    // Retornamos el resultado final
    return esPeligroso ? 'Código de alta prioridad' : 'Código estándar';
};



    // Fase 5: El Reporte Final (Formato y Estilo)

let generarReporteSeguridad = () => {

    const CANTIDAD_DE_LINEAS_INFORME = 50;
    const CANTIDAD_DE_LINEAS_TITULO = 35;
    const ANCHO_ESPACIADOR = 12;

    let lineaRepetidaSeparadora = '-'.repeat(CANTIDAD_DE_LINEAS_INFORME);
    let lineaRepetidaSeparadoraDos = '-'.repeat(CANTIDAD_DE_LINEAS_TITULO);

    console.log('\n' + lineaRepetidaSeparadora);
    console.log('Agencia Skynet: INFORME DE SEGURIDAD');
    console.log(lineaRepetidaSeparadora);

    console.log('NOMBRE'.padEnd(ANCHO_ESPACIADOR) + ' | PELIGROSIDAD');
    console.log(lineaRepetidaSeparadoraDos);

    for (let sospechoso of baseDeDatos) {
        let nombre = sospechoso.nombre;
        let peligrosidad = sospechoso.nivelPeligrosidad;

        console.log(`${nombre.padEnd(ANCHO_ESPACIADOR)} | ${peligrosidad}`);
    }

    console.log(lineaRepetidaSeparadoraDos + '\n');
};


    // Fase 6: Despliegue y Créditos

    //Pruebas de los codigos 
const sospechosoPruebaPeligroso = {
    codigo: "   S3CR3TPeligroZonaRoja   "
};

const sospechosoPruebaSeguro = {
    codigo: "   S3CR3TAccesoAutorizado   "
};

const sospechosoPruebaInvalido = {
    codigo: "   ACCESO_LIBRE_123   "
};

console.log("\nPruebas del decodificador de códigos:");

console.log(analizarCodigoSospechoso(sospechosoPruebaPeligroso)); // Esperado: Código de alta prioridad


console.log(analizarCodigoSospechoso(sospechosoPruebaSeguro)); // Esperado: Código estándar


console.log(analizarCodigoSospechoso(sospechosoPruebaInvalido)); // Esperado: Correo no encriptado


listarSospechosos();
generarReporteSeguridad();


// Firma digital
console.log("Sistema creado por los Agentes: Evanny Zapata y Simon Palacios");



