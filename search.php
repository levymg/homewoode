<?php

require_once('hwe_mysql.php');
$rs = mysql_query('SELECT itemid, itemdescription FROM unlistedparts WHERE itemid LIKE "'. mysql_real_escape_string($_REQUEST['term']) .'%" ORDER BY itemid ASC LIMIT 0,15', $dbc);

$data = array();
if ( $rs && mysql_num_rows($rs) )
{
    while( $row = mysql_fetch_array($rs, MYSQL_ASSOC) )
    {
        $data[] = array(
            'label' => $row['itemid'] .', '. $row['itemdescription'] ,
            'value' => "http://homewoodecommerce.com/search-results.php?searchquery=" . $row['itemid'] . "&submitted=true"
        );
    }
}

echo json_encode($data);
flush();
?>