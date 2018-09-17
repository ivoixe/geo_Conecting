<?php
//var_dump($_POST['hora']);
	/* CONFIGURACIÓN */
	  require 'config_db.php';

	/* FUNCIONES */
	  require 'functions.php';
	 $bd_usuarios=array(
	 	'0' => array(
	 		'user' => 'ivonne',
	 		'password'=> '123456',
	 		'ident_interno' => 'una_clave'
	 		)
	 	);
   /**CONEXION A LA BASE DE DATOS*/
	/***llegaria con su usuario y contraseña******************/
 
	$usuario = (!empty($_POST['username']))? $_POST['username']:''; 

	$pass = (!empty($_POST['password']))? $_POST['password']:'';
	$conn = connect_db($db);
	
	if($usuario ==  $bd_usuarios[0]['user'] &&  $pass == $bd_usuarios[0]['password']){

	

	}
	$hora = (!empty($_POST['hora']))? $_POST['hora']:0;
		$lat = (!empty($_POST['lat']))? $_POST['lat'] : 0;
		$log = (!empty($_POST['log']))?$_POST['log'] :0;
		$latlog= $lat.','.$log;
		if(!empty($hora) && !empty($latlog) && $latlog !=0){
			  $sql= 'INSERT INTO ubicaciones (hora,latlog,user,ident_interno) VALUES ("'.$hora.'","'.$latlog.'","'.$usuario.'","'. $bd_usuarios[0]['ident_interno'].'") ';
	  			save_data($conn,$sql);
		}
 	

 ?>  