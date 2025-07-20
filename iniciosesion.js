document.getElementById("btn-login").addEventListener("click", function () {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("olvido-form").classList.add("hidden");
});

document.getElementById("btn-register").addEventListener("click", function () {
    document.getElementById("register-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("olvido-form").classList.add("hidden");
});

document.getElementById("link-register").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("olvido-form").classList.add("hidden");
});

document.getElementById("link-login").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("olvido-form").classList.add("hidden");
});

document.getElementById("link-olvido").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("olvido-form").classList.remove("hidden");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.add("hidden");
});

document.getElementById("link-back-login").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("olvido-form").classList.add("hidden");
    document.getElementById("register-form").classList.add("hidden");
});

document.querySelector("#register-form button").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    let nombre = document.querySelector("#register-form input[placeholder='Nombres Completos']").value.trim();
    let apellido = document.querySelector("#register-form input[placeholder='Apellidos Completos']").value.trim();
    let cedula = document.querySelector("#register-form input[placeholder='Cedula']").value.trim();
    let email = document.querySelector("#register-form input[placeholder='Correo Electrónico']").value.trim();
    let password = document.querySelector("#register-form input[placeholder='Contraseña']").value.trim();
    let confirmPassword = document.querySelector("#register-form input[placeholder='Confirmar Contraseña']").value.trim();

    // Validación del correo electrónico
    if (!email.includes('@')) {
        alert("⚠ El correo electrónico debe contener el símbolo '@'.");
        return;
    }

    // Validación de la cédula (solo números)
    if (!/^\d+$/.test(cedula)) {
        alert("⚠ La cédula solo debe contener números.");
        return;
    }

    if (nombre === "" || apellido === "" || cedula === "" || email === "" || password === "" || confirmPassword === "") {
        alert("⚠ Todos los campos son obligatorios.");
    } else if (password !== confirmPassword) {
        alert("⚠ Las contraseñas no coinciden.");
    } else {
        // Obtener usuarios registrados
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el usuario ya está registrado
        let usuarioExistente = usuarios.find(user => user.email === email);
        if (usuarioExistente) {
            alert("⚠ Este correo electrónico ya está registrado.");
            return;
        }

        // Crear un nuevo objeto de usuario
        let nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            email: email,
            password: password
        };

        // Agregar el nuevo usuario al array de usuarios
        usuarios.push(nuevoUsuario);

        // Almacenar el array actualizado en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("✅ Registro exitoso. Ahora inicia sesión.");

        // Limpia los campos del formulario
        document.querySelector("#register-form").reset();

        // Redirige automáticamente al formulario de inicio de sesión
        document.getElementById("register-form").classList.add("hidden");
        document.getElementById("login-form").classList.remove("hidden");
    }
});

document.querySelector("#login-form button").addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.querySelector("#login-form input[type='email']").value.trim();
    let password = document.querySelector("#login-form input[type='password']").value.trim();

    if (email === "" || password === "") {
        alert("⚠ Por favor, completa todos los campos.");
        return;
    }

    // Obtener usuarios registrados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario existe
    let usuario = usuarios.find(user => user.email === email && user.password === password);

    if (usuario) {
        alert("✅ Inicio de sesión exitoso. ¡Bienvenido " + usuario.nombre + "!");
        window.location.href = "index.html"; // Redirigir a la página principal
    } else {
        alert("❌ Correo o contraseña incorrectos. Verifica tus datos.");
    }
});
document.querySelector("#login-form button").addEventListener("click", function (event) {
    if (usuario) {
        alert("✅ Inicio de sesión exitoso. ¡Bienvenido " + usuario.nombre + "!");
        window.location.href = "index.html"; // Redirigir a la página principal
    } else {
        alert("❌ Correo o contraseña incorrectos. Verifica tus datos.");
    }
});