<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Actualización</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #26225d;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .form-container {
            background-color: white;
            color: black;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        h2 {
            color: #f5901f;
        }

        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            background-color: #f5901f;
            color: white;
            border: none;
            padding: 12px;
            width: 100%;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background-color: #d97706;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Actualizar Fechas de inicio de año</h2>
        <!--<form action="update-dates-save.php" method="POST">-->
        <form action="update-dates-save-public.php" method="POST">
            <label for="field1">Fecha 1</label>
            <input type="text" name="field1" required>

            <label for="field2">Fecha 2:</label>
            <input type="text" name="field2" required>

            <label for="field3">Fecha 3:</label>
            <input type="text" name="field3" required>

            <label for="field4">Fecha 4:</label>
            <input type="text" name="field4" required>

            <label for="field5">Fecha 5:</label>
            <input type="text" name="field5" required>

            <label for="field6">Fecha 6:</label>
            <input type="text" name="field6" required>

            <button type="submit">Enviar</button>
        </form>
    </div>
</body>
</html>
