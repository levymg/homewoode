<?php

define ('DB_USER', '371272_hwuser');
define ('DB_PASSWORD', 'HwEcom2013');
define ('DB_HOST', 'mysql51-025.wc1.dfw1.stabletransit.com');

$dbc = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) OR die ('Could not connect to Mysql: ' . mysql_error() );
mysql_select_db("371272_homewoode") OR die ('Could not select the database: ' . mysql_error() );

function escape_data ($data) {
global $dbc;
if (ini_get('magic_quotes_gpc')) {
$data = stripslashes($data);
}
return mysql_real_escape_string (trim($data), $dbc);
}
?>