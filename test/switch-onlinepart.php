<?php 

switch(strtoupper($_GET['searchquery'])) {
	//flush-pushbutton
	case 'OT2B4':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#full-shroud';
	break;
	case 'OT2C1':
	case 'OT2C2':
	case 'OT2C3':
	case 'OT2C4':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#no-shroud';
	break;
	case 'OT2D1':
	case 'OT2D2':
	case 'OT2D3':
	case 'OT2D4':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#mushroom-head';
	break;
	case 'OT2E8':
	case 'OT2F8':
	case 'OT2G8':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#cylinder-lock';
	break;
	case 'OT2E9':
	case 'OT2F9':
	case 'OT2G9':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#cylinder-all';
	break;
	case 'OT2B':
	case 'OT2D':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#single-contact';
	break;
	case 'OT2M':
	case 'OT2N':
	case 'OT2A':
	case 'OT2V':
	case 'OT2X':
	case 'OT2AS':
	case 'OT2AP':
	case 'OT2MS':
	case 'OT2MP':
		$onlinepart = true;
		$onlinepage = 'flush-pushbutton.php#double-contact';
	break;
	//extended-pushbutton
	case 'OT1A1':
	case 'OT1A2':
	case 'OT1A3':
	case 'OT1A4':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#half-shroud';
	break;
	case 'OT1B1':
	case 'OT1B2':
	case 'OT1B3':
	case 'OT1B4':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#full-shroud';
	break;
	default:
		$onlinepart = false;
		$onlinepage = '';
	break;
	case 'OT1C1':
	case 'OT1C2':
	case 'OT1C3':
	case 'OT1C4':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#no-shroud';
	break;
	/*case 'OT1D1':
	case 'OT1D2':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#mushroom-head';
	break;*/
	case 'OT1E8':
	case 'OT1F8':
	case 'OT1G8':
	case 'OT1H8':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#cylinder-lock';
	break;
	case 'OT1E9':
	case 'OT1F9':
	case 'OT1G9':
	case 'OT1H9':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#cylinder-all';
	break;
	case 'OT1LA':
	case 'OT1AA':
	case 'OT1LB':
	case 'OT1AB':
	case 'OT1L':
	case 'OT1A':
	case 'OT1V':
	case 'OT1B':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#single-contact';
	break;
	case 'OT1WA':
	case 'OT1CA':
	case 'OT1WB':
	case 'OT1CB':
	case 'OT1W':
	case 'OT1C':
	case 'OT1X':
	case 'OT1D':
	case 'OT1E':
	case 'OT1F':
		$onlinepart = true;
		$onlinepage = 'extended-pushbutton.php#double-contact';
	break;
	//flush-selector-switches
	case 'OT2S1':
	case 'OT2S2':
	case 'OT2S4':
	case 'OT2S6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#maintained';
	break;
	case 'OT2I1':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-r-l';
	break;
	case 'OT2V2':
	case 'OT2V4':
	case 'OT2V6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-l-r-c';
	break;
	case 'OT2Z2':
	case 'OT2Z4':
	case 'OT2Z6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-r-c';
	break;
	case 'OT2W2':
	case 'OT2W4':
	case 'OT2W6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-l-c';
	break;
	case 'OT2S1W':
	case 'OT2S2W':
	case 'OT2S4W':
	case 'OT2S6W':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#maintained-l';
	break;
	case 'OT2I1W':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-r-l-l';
	break;
	case 'OT2V2W':
	case 'OT2V4W':
	case 'OT2V6W':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-l-r-c-l';
	break;
	case 'OT2Z2W':
	case 'OT2Z4W':
	case 'OT2Z6W':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-r-c-2';
	break;
	case 'OT2W2W':
	case 'OT2W4W':
	case 'OT2W6W':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#spring-l-c-2';
	break;
	case 'OT2K1':
	case 'OT2K2':
	case 'OT2K4':
	case 'OT2K6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#lock-all';
	break;
	case 'OT2Y1':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#lock-left';
	break;
	case 'OT2Y2':
	case 'OT2Y4':
	case 'OT2Y6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#lock-all2';
	break;
	case 'OT2O2':
	case 'OT2O4':
	case 'OT2O6':
		$onlinepart = true;
		$onlinepage = 'flush-selector-switches.php#lock-c-r';
	break;
	//extended-operator-selector
	case 'OT1S1':
	case 'OT1I1':
		$onlinepart = true;
		$onlinepage = 'extended-operator-selector.php#standard-1';
	break;
	case 'OT1K1':
	case 'OT1Y1':
		$onlinepart = true;
		$onlinepage = 'extended-operator-selector.php#cylinder-lock-1';
	break;
	case 'OT1S3':
	case 'OT1S6':
	case 'OT1S7':
	case 'OT1S9':
	case 'OT1S0':
	case 'OT1V1':
	case 'OT1Z1':
	case 'OT1W1':
		$onlinepart = true;
		$onlinepage = 'extended-operator-selector.php#standard-2';
	break;
	case 'OT1K3':
	case 'OT1Y3':
	case 'OT1O3':
		$onlinepart = true;
		$onlinepage = 'extended-operator-selector.php#cylinder-lock-2';
	break;
	//indicating-light-units
	case 'OTTF':
	case 'OTTH':
	case 'OTTJ':
	case 'OTXF':
	case 'OTXG':
	case 'OTXH':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu1';
	break;
	case 'OTFA':
	case 'OTFB':
	case 'OTFC':
	case 'OTFD':
	case 'OTFE':
	case 'OTSFF':
	case 'OTSFG':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu2';
	break;
	case 'OT3PA':
	case 'OT3PF':
	case 'OT3PH':
	case 'OT3PJ':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu3';
	break;
	case 'OT3PA':
	case 'OT3PF':
	case 'OT3PH':
	case 'OT3PJ':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu4';
	break;
	case 'OTTF1':
	case 'OTTH1':
	case 'OTTJ1':
	case 'OTXF1':
	case 'OTXG1':
	case 'OTXH1':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu5';
	break;
	case 'OTTF2':
	case 'OTTH2':
	case 'OTTJ2':
	case 'OTXF2':
	case 'OTXG2':
	case 'OTXH2':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu6';
	break;
	case 'OTTF3':
	case 'OTTH3':
	case 'OTTJ3':
	case 'OTXF3':
	case 'OTXG3':
	case 'OTXH3':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu7';
	break;
	case 'OTTF4':
	case 'OTTH4':
	case 'OTTJ4':
	case 'OTXF4':
	case 'OTXG4':
	case 'OTXH4':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu8';
	break;
	case 'OTTF5':
	case 'OTTH5':
	case 'OTTJ5':
	case 'OTXF5':
	case 'OTXG5':
	case 'OTXH5':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu9';
	break;
	case 'OTTF6':
	case 'OTTH6':
	case 'OTTJ6':
	case 'OTXF6':
	case 'OTXG6':
	case 'OTXH6':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu10';
	break;
	case 'OTFA1':
	case 'OTFB1':
	case 'OTFC1':
	case 'OTFD1':
	case 'OTFE1':
	case 'OTSFF1':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu11';
	break;
	case 'OTFA2':
	case 'OTFB2':
	case 'OTFC2':
	case 'OTFD2':
	case 'OTFE2':
	case 'OTSFF2':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu12';
	break;
	case 'OTFA3':
	case 'OTFB3':
	case 'OTFC3':
	case 'OTFD3':
	case 'OTFE3':
	case 'OTSFF3':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu13';
	break;
	case 'OTFA4':
	case 'OTFB4':
	case 'OTFC4':
	case 'OTFD4':
	case 'OTFE4':
	case 'OTSFF4':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu14';
	break;
	case 'OTFA5':
	case 'OTFB5':
	case 'OTFC5':
	case 'OTFD5':
	case 'OTFE5':
	case 'OTSFF5':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu15';
	break;
	case 'OTFA6':
	case 'OTFB6':
	case 'OTFC6':
	case 'OTFD6':
	case 'OTFE6':
	case 'OTSFF6':
		$onlinepart = true;
		$onlinepage = 'indicating-light-units.php#lu16';
	break;
	//westok-legend-plates
	case '187P001H01':
	case '187P002H01':
	case '187P003H01':
	case '187P004H01':
	case '187P005H01':
	case '187P006H01':
	case '187P007H01':
	case '187P008H01':
	case '187P009H01':
	case '187P010H01':
	case '187P011H01':
	case '187P012H01':
	case '187P013H01':
	case '187P014H01':
	case '187P015H01':
	case '187P016H01':
	case '187P017H01':
	case '187P018H01':
	case '187P019H01':
	case '187P020H01':
	case '187P021H01':
	case '187P022H01':
	case '187P023H01':
	case '187P024H01':
	case '187P025H01':
	case '187P026H01':
	case '187P027H01':
	case '187P028H01':
	case '187P029H01':
	case '187P030H01':
	case '187P055H01':
	case '187P056H01':
	case '187P057H01':
	case '187P058H01':
	case '187P059H01':
	case '187P060H01':
	case '187P061H01':
	case '187P062H01':
	case '187P063H01':
		$onlinepart = true;
		$onlinepage = 'westok-legend-plates.php#for-pushbutton-units';
	break;
	case '187P031H01':
	case '187P032H01':
	case '187P033H01':
	case '187P034H01':
	case '187P035H01':
	case '187P036H01':
	case '187P037H01':
	case '187P038H01':
	case '187P039H01':
	case '187P040H01':
	case '187P041H01':
	case '187P042H01':
	case '187P043H01':
	case '187P044H01':
	case '187P045H01':
	case '187P046H01':
	case '187P047H01':
	case '187P048H01';
		$onlinepart = true;
		$onlinepage = 'westok-legend-plates.php#for-selector-switches';
	break;
	case '187P049H01':
	case '187P050H01':
	case '187P051H01':
	case '187P052H01':
	case '187P053H01':
	case '187P054H01':
		$onlinepart = true;
		$onlinepage = 'westok-legend-plates.php#for-indicating-lights';
	break;
	//parts
	case 'OT1':
	case 'OT2':
	case 'OT3':
	case 'OT4':
	case 'OT5':
	case 'OT6':
		$onlinepart = true;
		$onlinepage = 'parts.php#lens';
	break;
	case 'OT3P1':
	case 'OT3P2':
	case 'OT3P3':
	case 'OT3P4':
	case 'OT3P5':
	case 'OT3P6':
		$onlinepart = true;
		$onlinepage = 'parts.php#ptt';
	break;
	case 'OT3L1':
	case 'OT3L2':
	case 'OT3L3':
	case 'OT3L4':
	case 'OT3L5':
	case 'OT3L6':
		$onlinepart = true;
		$onlinepage = 'parts.php#pl';
	break;
	case 'OT2J1':
	case 'OT2J2':
	case 'OT2J3':
	case 'OT2J4':
	case 'OT2J5':
	case 'OT2J6':
		$onlinepart = true;
		$onlinepage = 'parts.php#selecto';
	break;
	case '13D1365H08':
		$onlinepart = true;
		$onlinepage = 'parts.php#replacement1';
	break;
	case '13D1365H08':
	case '764A614H02':
	case '764A614H03':
	case '764A614H04':
	case '764A614H07':
	case '13D1365H10':
	case '31D5316H09':
		$onlinepart = true;
		$onlinepage = 'parts.php#replacement2';
	break;
	case '31D5316P1':
	case '1614639':
	case '31D5316P3':
	case '31D5316P4':
	case '1513106':
		$onlinepart = true;
		$onlinepage = 'parts.php#replacement3';
	break;
	
	//not-online-product
	default:
		$onlinepart = false;
		$onlinepage = '';
	break;
}
?>