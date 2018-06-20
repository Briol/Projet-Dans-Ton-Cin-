<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/CSS/index.css" />
    <link rel="stylesheet" href="assets/CSS/header.css" />
    <link rel="stylesheet" href="assets/CSS/carrousel.css" />
    <title>Dans Ton Ciné</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>

<?php include('header.php'); ?>

    <div id="boiteCarrousel">
        <div id="boite">
            <div class="btn prev">
                <img src="assets/image/back.png">
            </div>
            <div class="container">
                <div class="inner">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
            <div class="btn next">
                <img src="assets/image/right-arrow.png">
            </div>
        </div>
    </div>

<script type="text/javascript" src="ApiIMDB.js"></script>
<script type="text/javascript" src="assets/JS/carrousel.js"></script>
</body>
</html>