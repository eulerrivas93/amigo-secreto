// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Sale de la función si no hay nombre
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array y agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

// Función para limpiar la lista y el resultado
function limpiarLista() {
    amigos = []; // Vacía el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista en HTML
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado del sorteo
}
