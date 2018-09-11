<?php
//var_dump($_POST['hora']);
	/* CONFIGURACIÓN */
	  require 'config_db.php';

	/* FUNCIONES */
	  require 'functions.php';

   /**CONEXION A LA BASE DE DATOS*/
	
	$conn = connect_db($db);

	$hora = (!empty($_POST['hora']))? $_POST['hora']:0;
	$lat = (!empty($_POST['lat']))? $_POST['lat'] : 0;
	$log = (!empty($_POST['log']))?$_POST['log'] :0;
	$latlog= $lat.','.$log;
	if(!empty($hora) && !empty($latlog)){
		  $sql= 'INSERT INTO ubicaciones (hora,latlog) VALUES ("'.$hora.'","'.$latlog.'") ';
  			save_data($conn,$sql);
	}
 	

 ?>  