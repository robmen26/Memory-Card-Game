<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Memory Card Game</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/game.css">

</head>

<body class="body">

    <div id="title" class="fluid-container">
        <img src='img/evista.png' alt='card-img'>
    </div>

    <h1> Splendex Memory Game </h1>
    <div id="front" class="container d-flex align-items-center  justify-content-center">
        <form method="post">
            <label for="button">Deck Size</label><br>
            <select class="number" name="size">
                <?php
                for ($i = 6; $i < 21; $i++) {
                    if ($i % 2 == 0) { // created select opnion
                        echo " <option value=" . $i . ">" . $i . "</option>";
                    }
                }
                ?>
            </select><br>
            <input class="button" type="submit" name="start" value="START NEW GAME">
        </form>


    </div>
    </div>

    <?php

    if (isset($_POST["start"])) {
        $_SESSION["size"] = $_POST["size"] / 2;
        header("Location: game+.php");
    }

    ?>



</body>

</html>