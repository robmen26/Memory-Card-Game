<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>Memory Card Game</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="body">
    <div id="title" class=" fluid-container">
    <img src='img/evista.png' alt='card-img'>
    </div>
    <div id="front" class="container">
    <h1 >Splendex Memory Game </h1>
        <h2>Regulations: </h2>
        <p>
        The game is played by one player. There are different cards face down, each with a pair.
        The goal of the game is to find a match for each. 
        Two cards can be turned over at the same time. If they match, the cards remain as they are.
        If they don't match, they are turned over. Before playing, the player must choose how many pairs he wants to play with. (min. 3, max. 10)
        The game counts how many rounds you succeeded in. (2 flips 1 round)
        The game ends when the player has found all pairs.
        </p>
        <form method="POST">
        <input class="button " type="submit" name="button" value="on to the game">
        </form>
            <?php
                if(isset($_POST["button"])){
                    
                    header("Location: game.php");  
                }
            ?> 
    </div>

   

</body>
</html>