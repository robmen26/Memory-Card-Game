<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/game.css">
</head>

<div id="title" class="fluid-container">
    <img src='img/evista.png' alt='card-img'>
   </div>
<body class="body">
<div class="b">
<div class="wrapper">
    <ul class="cards">
            <?php     
            $range=$_SESSION["size"];
            for($j=0;$j<2;$j++){
            for($i=1;$i<=$range;$i++){
             echo   "<li class='card'>
             <div class='view front-view'> 
             <img class='material-icons' src='img/mark.jpg' alt='card-img'>
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
    </iv>



<script type="text/javascript" src="script.js">
      

</script>
</body>
</html>