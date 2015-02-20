<?php 
session_start();
$resetCart="no";
if (isset($_GET['r'])) {
	$_SESSION['qty'] = 0;
	$_SESSION['tot'] = 0;
	$resetCart="yes";
}
elseif (isset($_POST['qty']))
	{
	$_SESSION['qty'] = $_POST['qty'];
	$_SESSION['tot'] = $_POST['tot'];
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Push Buttons || Homewood Group</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<meta name="author" content="Homewood Group" />
<meta name="description" content="Support for the installed base of Westinghouse industrial equipment worldwide. Engineering field service for power generation, transmission &amp; distribution, industrial and manufacturing facilities around the globe." />
<link rel="shortcut icon" type="image/ico" href="favicon.ico" />
<link href="styles/reset.css" type="text/css" rel="stylesheet" media="screen, projector" />
<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
<link href="styles/basic.css" type="text/css" rel="stylesheet" media="screen, projector" />
<link rel="stylesheet" href="styles/thickbox.css" type="text/css" media="screen" />
<!--[if IE 7]>
<link href="styles/ie7.css" type="text/css" rel="stylesheet" media="screen, projector" />
<![endif]-->
<link rel="stylesheet" type="text/css" media="screen" href="styles/superfish.css" />
<link rel="stylesheet" type="text/css" media="screen" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

<script type="text/javascript" src="http://www.homewoodsales.com/scripts/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="http://www.homewoodsales.com/scripts/hoverIntent.js"></script>
<script type="text/javascript" src="js/accordion.js"></script>
<script type="text/javascript" src="js/thickbox/thickbox.js"></script>
<script type="text/javascript" src="js/global.js"></script>


</head>