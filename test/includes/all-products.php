<a name="content"></a> 

<div id="related_info">

<div class="shopping-cart">
<?php
//Gather variables for display
if (isset($_POST['qty'])) {
	$qty = number_format($_POST['qty'],0);
	$tot = "$" . $_POST['tot'];
	}
elseif (isset($_SESSION['qty']) && $resetCart!="yes") {
	$qty = number_format($_SESSION['qty'],0);
	$tot = "$" . $_SESSION['tot'];
	}
else
{
	$tot="$" . 0;
	$qty=0;
}
echo "<p><span class=\"scheader\">Shopping Cart</span></p>";
echo '<p>You have <strong>'.$qty.'</strong> items in cart<br />Total: <strong>'.$tot.'</strong></p>';

?>
<p><a href="http://ww7.aitsafe.com/cf/review.cfm?userid=96231500&return=<?php echo $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF']; ?>">View Cart</a></p>
</div>

    <h3 class="all"><a href="index.php">All Products</a></h3>
    
    <ul>
    <li>
    	<div class="searchbox" style="padding-left:8px;">
        <form action="search-results.php" method="get" name="search_for_part" id="search_for_part">
    	<input type="text" name="searchquery" id="searchbox" title="Search for a part number" onfocus="if(this.value==this.defaultValue)this.value=''" onblur="if(this.value=='')this.value=this.defaultValue" value="Search for a part number" style="padding:3px;width:165px;">
        <input type="hidden" name="submitted" value="true" />
        </form>
        </div>
    </li>
    
    <li>
    <div id="firstpane" class="menu_list nav-head sliderpane">
		<p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'flush pb') { echo 'class="activenav"'; } ?>>Flush Push Button Operators</a></p>
            <div class="menu_body">
                <ul class="all-drop">
                <li><a href="flush-pushbutton.php">All Flush Push Button Operators</a></li>
                <li><a href="flush-pushbutton.php#full-shroud">Full Shroud</a></li>
                <li><a href="flush-pushbutton.php#no-shroud">No Shroud</a></li>
                <li><a href="flush-pushbutton.php#mushroom-head">Mushroom Head</a></li>
                <li><a href="flush-pushbutton.php#cylinder-lock">Cylinder Lock (Key Removable in Locked Position Only)</a></li>
                <li><a href="flush-pushbutton.php#cylinder-all">Cylinder Lock (Key Removable in All Positions)</a></li>
                <li><a href="flush-pushbutton.php#single-contact">Single Circuit Contact Blocks</a></li>
                <li><a href="flush-pushbutton.php#double-contact">Double Circuit Contact Blocks</a></li>
                </ul>
            </div>
    </div>
    </li>
    
    <li>
    <div id="secondpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'extended pb') { echo 'class="activenav"'; } ?>>Extended Push Button Operators</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="extended-pushbutton.php">All Extended Push Button Operators</a></li>
            <li><a href="extended-pushbutton.php#half-shroud">Half Shroud</a></li>
            <li><a href="extended-pushbutton.php#full-shroud">Full Shroud</a></li>
            <li><a href="extended-pushbutton.php#no-shroud">No Shroud</a></li>
            <li><a href="extended-pushbutton.php#mushroom-head">Mushroom Head</a></li>
            <li><a href="extended-pushbutton.php#cylinder-lock">Cylinder Lock (Key Removable in Locked Position Only)</a></li>
            <li><a href="extended-pushbutton.php#cylinder-all">Cylinder Lock (Key Removable in All Positions)</a></li>
            <li><a href="extended-pushbutton.php#single-circuit">Single Circuit Contact Blocks</a></li>
            <li><a href="extended-pushbutton.php#double-circuit">Double Circuit Contact Blocks</a></li>
        </ul>
        </div>
    </div>
    </li>
    <li>
    <div id="thirdpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'flush select') { echo 'class="activenav"'; } ?>>Flush Selector Switches</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="flush-selector-switches.php">All Flush Selector Switches</a></li>
            <li><a href="flush-selector-switches.php#standard-handle">Standard Handle</a></li>
            <li><a href="flush-selector-switches.php#lever-handle">Lever Handle</a></li>
            <li><a href="flush-selector-switches.php#cylinder-lock">Cylinder Lock</a></li>
        </ul>
        </div>
    </div>
    </li>
    <li>
    <div id="fourthpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'extended select') { echo 'class="activenav"'; } ?>>Extended Operator Selector Switches</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="extended-operator-selector.php">All Extended Operator Selector Switches</a></li>
            <li><a href="extended-operator-selector.php#2-position">2 Position</a></li>
            <li><a href="extended-operator-selector.php#3-position">3 Position</a></li>
        </ul>
        </div>
    </div>
    </li>
    <li>
    <div id="fifthpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'lights') { echo 'class="activenav"'; } ?>>Indicating Light Units</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="indicating-light-units.php">All Indicating Light Units</a></li>
            <li><a href="indicating-light-units.php#standard-xformer">Standard Transformer Type Light Units</a></li>
            <li><a href="indicating-light-units.php#standard-full">Standard Full Voltage Type Light Units</a></li>
            <li><a href="indicating-light-units.php#push-test">Push-to-Test Light Units</a></li>
            <li><a href="indicating-light-units.php#push-lite">Push-Lite Units</a></li>
            <li><a href="indicating-light-units.php#lens-units">Units Complete with Lens</a></li>
            <li><a href="indicating-light-units.php#lens-only">Lens Only</a></li>
            <li><a href="indicating-light-units.php#replacement-bulbs">Replacement Bulbs</a></li>
        </ul>
        </div>
    </div>
    </li>
    <li>
    <div id="sixthpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'westlok') { echo 'class="activenav"'; } ?>>WESTLOK Legend Plates</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="westok-legend-plates.php">All Legend Plates</a></li>
            <li><a href="westok-legend-plates.php#push-button">For Push Button Units</a></li>
            <li><a href="westok-legend-plates.php#selector-switches">For Selector Switches</a></li>
            <li><a href="westok-legend-plates.php#indicating-lights">For Indicating Lights</a></li>
        </ul>
        </div>
    </div>
    </li>
    <li>
    <div id="seventhpane" class="menu_list nav-head sliderpane">
        <p class="menu_head nav-head"><a href="#" <?php if (isset($activenav) && $activenav == 'parts') { echo 'class="activenav"'; } ?>>Parts</a></p>
        <div class="menu_body">
        <ul class="all-drop">
            <li><a href="parts.php">All Parts</a></li>
            <li><a href="parts.php#contact-flush">Contact Blocks for Flush Push Button Operators</a></li>
            <li><a href="parts.php#contact-extended">Contact Blocks for Extended Push Button Operators</a></li>
            <li><a href="parts.php#lens">Lens</a></li>
            <li><a href="parts.php#replacement-bulbs">Replacement Bulbs</a></li>
            <li><a href="parts.php#legend-plates">Legend Plates</a></li>
        </ul>
        </div>
    </div>
    </li>
    </ul>
  </div>