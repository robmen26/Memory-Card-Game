<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/game.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="body">
<div id="title" class="row fluid-container">   <!-- a title a legfelső sáv -->
    <div class="col">                       
    <img src='img/evista.png' alt='card-img'>
</div>
    <form class ="col " method="post">  
        <label for="button">Deck Size</label>
        <select class="number" name="size" >
            <?php 
                for($i=6;$i<21;$i++){
                    if($i % 2==0){      // created select opnion
                   echo " <option value=".$i.">".$i."</option>";
                    }
                }
            ?>
        </select>
        <input class="button" type="submit" name="start" value="START NEW GAME">
            </form>
   </div>

    
<div class="a  container">   <!-- az "a" div a container ahol a kiirasok vannak(best,tries) -->

<button class="restart "onclick="restart()">RESTART</button>
<span id="tries"></span>
<label id="best">BEST: 0 </label>

</div>
<div class="b container">  <!-- az "b" divben maga a játék van -->
   
<div class="wrapper ">  <!-- a kártyákat tartalmazó div -->
    <ul class="cards">
            <?php 
        if(isset($_POST["start"])){
            $_SESSION["size"]=$_POST["size"]/2; 
             header("Location: game+.php");  //ujra tölti az oldalt a select által kiválasztott értékkel
                    }  

            $range=$_SESSION["size"];
            for($j=0;$j<2;$j++){                // kártyák létrehozása
            for($i=1;$i<=$range;$i++){
             echo   "<li class='card'>
             <div class='view front-view'> 
             <img class='material-icons' src='img/white.jpg' alt='card-img'>
            </div>
             <div class='view back-view'>
             <img src='img/img".$i.".png' alt='card-img'>
            </div>
             </li> " ;  
            }
        }
            ?> 
    </ul>
</div>
</div>


<script type="text/javascript" >let size= <?php echo $range?>; </script> <!-- a Deck méretét átadjuk a scriptnek --> 
<script type="text/javascript" src="script/script.js"></script>
<!-- a Deck méretét átadjuk a scriptnek -->
</body>
</html>