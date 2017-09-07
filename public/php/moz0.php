<?php
	if($_GET['page']){
		$page = $_GET['page'];
		$vols = file_get_contents('../data/vols.json');
		echo $vols;
	}elseif($_GET['user']){
		$result = '<form action=""><input type="text"></form>';
		echo $result;
	}
	
?>