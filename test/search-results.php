<?php 
ob_start();
$activenav = 'extended select';
include_once('includes/header.php');
include_once('includes/main-nav.php');
include_once('includes/all-products.php'); 

if (isset($_GET['searchquery'])) {
	$searchactive = true;
	$onlinepart = false;
	require_once('switch-onlinepart.php');
	if ($onlinepart == true) {
		header("Location: http://www.levydev.com/homewoode/".$onlinepage."");
	} else {
	$query_parts = "SELECT * 
	FROM unlistedparts 
	WHERE itemid = '".$_GET['searchquery']."'
	ORDER BY itemid ASC;";
	require_once('hwe_mysql.php');
	$parts_result = @mysql_query ($query_parts);
	$num_rows = @mysql_num_rows ($parts_result);
	}
} else {
	$searchactive = false;
}
?>

  <div id="right-content">
    
    <h2 class="h4-prod">Search Results</h2>
    
    <?php 
	if ($searchactive == true) { ?>
    <h4 class="h4-prod">You've searched for "<?php echo $_GET['searchquery']; ?>"</h4>
    <?php 
		
			if ($num_rows ==1) {
				while ($parts = @mysql_fetch_array($parts_result,MYSQL_NUM)) {
				echo '<table style="margin-left:0;"><tr><th>Part #</th><th>Description</th>';
				echo '<tr><td>'.$parts[1].'</td><td>'.$parts[2].'</td>';
				echo '</table>';
				echo '<div class="consult">For product availability, call us at <strong>412-665-2700</strong> or email <a href="mailto:sales@homewoodsales.com">sales@homewoodsales.com</a>.</div>';
				}
			} else {
				echo '<p>Sorry, no products matched your search. You may try a different search,<br />or call us at <strong>412-665-2700</strong> or email <strong><a href="mailto:sales@homewoodsales.com">sales@homewoodsales.com</a></strong>.</p>';
				echo "<form action=\"search-results.php\" method=\"get\" name=\"search_for_part\" id=\"search_for_part\">
    	<input type=\"text\" name=\"searchquery\" id=\"searchbox\" title=\"Search for a part number\" onfocus=\"if(this.value==this.defaultValue)this.value=''\" onblur=\"if(this.value=='')this.value=this.defaultValue\" value=\"Search for a part number\" style=\"padding:3px;width:165px;\">
        <input type=\"hidden\" name=\"submitted\" value=\"true\" />
        </form>";
			}
		
		} else { ?>
		<p>An error has occured. Please <a href="index.php">return home</a> or try a different search.</p>
    <?php } ?>
    
    <div class="clearfix"></div>
    </div>
    <!--products-->
  </div>
  <!--right-content-->
</div>
<div class="clearfix"></div>
<?php include_once('includes/footer.php'); ?>