<?php
$servername = "sql205.infinityfree.com";
$username = "if0_38202731";
$password = "5RGJzQp9IrMTN";
$dbname = "if0_38202731_culturlingua_public";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Iniciar la consulta preparada
$sql = "UPDATE inicios SET fecha = ? WHERE id = ?";
$stmt = $conn->prepare($sql);

// Verificar si la consulta preparada se creó correctamente
if (!$stmt) {
    die("Error en la consulta: " . $conn->error);
}

// Recorrer los 6 campos y actualizar cada fila con su respectivo ID
for ($i = 1; $i <= 6; $i++) {
    $info = $_POST["field$i"];
    $stmt->bind_param("si", $info, $i);
    $stmt->execute();
}

// Cerrar conexión
$stmt->close();
$conn->close();

// Mostrar mensaje de éxito
echo "<div style='text-align:center; margin-top:50px; font-family:Arial;'>
        <h2 style='color:#26225d;'>✅ Actualización Exitosa</h2>
        <p>Los datos han sido actualizados correctamente.</p>
        <a href='edit-dates.php' style='background:#f5901f; padding:10px 20px; color:white; text-decoration:none; border-radius:5px;'>Volver</a>
      </div>";
?>
