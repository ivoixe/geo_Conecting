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
	$direccion = (!empty($_POST['direccion']))?$_POST['direccion'] :0;
	$latlog= $lat.','.$log;

   $sql= 'INSERT INTO ubicaciones_at_time (hora,latlog,direccion) VALUES ("'.$hora.'","'.$latlog.'","'.$direccion.'") ';
  save_data($conn,$sql);
  echo "fine";

 ?>  