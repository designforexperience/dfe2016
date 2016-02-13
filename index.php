<?php
    /* 
	 *   ______  ___  ___  ___
	 *   | ___ \/ _ \ |  \/  |
	 *   | |_/ / /_\ \| .  . |
	 *   | ___ \  _  || |\/| |
	 *   | |_/ / | | || |  | |
	 *   \____/\_| |_/\_|  |_/
	 * 
	 *
	 *   Leroy de Rouwe 
     *   <info@bameffect.nl>
	 */
     
    session_start(); 
    ob_start();
    require_once 'inc/functions.php';
    require_once 'inc/savant/Savant3.php';
										  
    // Start up the template engine
    $templates  = array('templates');
    $tpl        = new Savant3();
	$tpl        ->setPath('template', $templates);

    // Set up the options for further use troughout the website
    $option         = getOptionsByGet();
    $option[0]      = isset($option[0]) ? $option[0] : 'home';
    $tpl->option    = $option;
	
	// Check if we have a PHP file to include
	$file       = '';
	foreach ($option as $item) {
		$checkFile = 'php/'.$item.'.php';
		if (file_exists($checkFile)) {
			$file = $checkFile;
		}
	}
	
	if ($file != '') {
		include $file;
	}
	
    // Show it all
    $tpl->display('frame.tpl.php');
    ob_end_flush();
?>