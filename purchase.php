<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $marca  = htmlspecialchars($_POST["marca"]);

    echo "<h1>Datos recibidos</h1>";
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Correo:</strong> $correo</p>";
    echo "<p><strong>Marca favorita:</strong> $marca</p>";

    echo "<br><a href='index.html'>Regresar</a>";
}
?>
