



function importJson(category) {
  var func = {
    'flushPushButtonOperators'   : flushPushButtonOperators,
    'extendedPushButtonOperators': extendedPushButtonOperators,
    'flushSelectorSwitches'      : flushSelectorSwitches,
    'extendedSelectorSwitches'   : extendedSelectorSwitches,
    'indicatingLightUnits'       : indicatingLightUnits,
    'westlokLegendPlates'        : westlokLegendPlates,
    'partsAndAccessories'        : partsAndAccessories,
    'selectOPushButton'          : selectOPushButton
  }

  $.getJSON('js/homewoodeJson/' + category + '.json', func[category]).error(function(xhr) {
    console.log(xhr)
  });
}

function flushPushButtonOperators(json) {
    for (var i = 0; i < json.length; i ++) {
      var product = json[i];
      var out = "<div class='";
      if (i % 2 === 0) {
        out += "product2";
      } else {
        out += "product1";
      }
      out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
      out += ">";
      out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
      out += "<input type='hidden' name='userid' value='96231500' />";
      out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
      out += "<div class='image'>";
      out += "<a href=" + product["imgLg"] + " class='thickbox'><img src=" + product["img"] +" height='100' width='100'/><br />";
      out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' /></a>";
      out += "</div>";
      out += "<div class='description'>";
      out += "<span class='header'>" + product["name"] + "</span>";
      out += "<p class='babytitle'>" + product["type"] + "</p>";
      if (product["description"] !== undefined) {
        out += "<p>" + product["description"] + "</p>";
      }
      if (product["subdescription"] !== undefined) {
        out += "<p>" + product["subdescription"] + "</p>";
      }
      if (product["need_contact"] !== undefined) {
        out += "<span class='header'>Need a Contact Block?</span><br />";
        out += "<a href='flush-pushbutton.php#single-circuit-contact-block' target='_blank'>> Single Circuit Contact Blocks</a><br />";
        out += "<a href='flush-pushbutton.php#double-circuit-contact-block' target='_blank'>> Double Circuit Contact Blocks</a>";
        out += ""
      }
      out += "</div>"; 

      out += "<ol class='product-ol'>";
      for (var k = 0; k < product["items"].length; k ++) {
        var item = product["items"][k];
        out += "<li>";
        out += "<ul class='product-ul'>";
        out += "<li class='item'>" + item["name"] + "</li>";
        out += "<li class='cat'>" + item["catalog_num"] + "</li>";
        out += "<li class='price'>$" + item["price"] +"</li>";
        out += "<li class='quant'>";
        out += "<input type='text' class='qtybox' />";
        out += "<input type='hidden' value=" + item["catalog_num"] + " - " + product["name"] + " />";
        out += "<input type='hidden' value=" + item["price"] +" />";
        out += "</li>";
        out += "</ul>";
        out += "<div class='clearfix'></div>"

        out += "</li>";
      }
      out += "<li>";
      out += "<ul class='product-ul'><li class='add2'>";
      out += "<input type='submit' name='Submit' value='Add to Cart' />";
      out += "</li></ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
      out += "</ol>";
      out += "<div class='clearfix'></div>"
      if (product["more_info"] !== undefined) {
        out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
        out += "<div class='menu_body'>";
        for (var img in product["more_info"]) {
          out += "<img src=" + product["more_info"][img] + "/>";
        }
        out += "</div></div>";
      }

      out += "</form>"; 
      out += "</div>"
      $("#product-list").append(out);
    }              
    $("#product-list").append("<div class='clearfix'></div>");
}

function extendedPushButtonOperators(json) {
  for (var i = 0; i < json.length; i ++) {
      var product = json[i];
      var out = "<div class='";
      if (i % 2 === 0) {
        out += "product2";
      } else {
        out += "product1";
      }
      out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
      out += ">";
      out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
      out += "<input type='hidden' name='userid' value='96231500' />";
      out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
      out += "<div class='image'>";
      out += "<a href=" + product["imgLg"] + " class='thickbox'><img src=" + product["img"] +" height='100' width='100'/><br />";
      out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' /></a>";
      out += "</div>";
      out += "<div class='description'>";
      out += "<span class='header'>" + product["name"] + "</span>";
      out += "<p class='babytitle'>" + product["type"] + "</p>";
      if (product["description"] !== undefined) {
        out += "<p>" + product["description"] + "</p>";
      }
      if (product["subdescription"] !== undefined) {
        out += "<p>" + product["subdescription"] + "</p>";
      }
      if (product["need_contact"] !== undefined) {
        out += "<span class='header'>Need a Contact Block?</span><br />";
        out += "<a href='extended-pushbutton.php#single-circuit-contact-block' target='_blank'>> Single Circuit Contact Blocks</a><br />";
        out += "<a href='extended-pushbutton.php#double-circuit-contact-block' target='_blank'>> Double Circuit Contact Blocks</a>";
        out += ""
      }
      out += "</div>"; 

      out += "<ol class='product-ol'>";
      for (var k = 0; k < product["items"].length; k ++) {
        var item = product["items"][k];
        out += "<li>";
        out += "<ul class='product-ul'>";
        out += "<li class='item'>" + item["name"] + "</li>";
        out += "<li class='cat'>" + item["catalog_num"] + "</li>";
        out += "<li class='price'>$" + item["price"] +"</li>";
        out += "<li class='quant'>";
        out += "<input type='text' class='qtybox' />";
        out += "<input type='hidden' value=" + item["catalog_num"] + " - " + product["name"] + " />";
        out += "<input type='hidden' value=" + item["price"] +" />";
        out += "</li>";
        out += "</ul>";
        out += "<div class='clearfix'></div>"

        out += "</li>";
      }
      out += "<li>";
      out += "<ul class='product-ul'><li class='add2'>";
      out += "<input type='submit' name='Submit' value='Add to Cart' />";
      out += "</li></ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
      out += "</ol>";
      out += "<div class='clearfix'></div>"
      if (product["more_info"] !== undefined) {
        out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
        out += "<div class='menu_body'>";
        for (var img in product["more_info"]) {
          out += "<img src=" + product["more_info"][img] + "/>";
        }
        out += "</div></div>";
      }

      out += "</form>"; 
      out += "</div>"
      $("#product-list").append(out);
    }              
    $("#product-list").append("<div class='clearfix'></div>");
}

function flushSelectorSwitches(json) {
  var prev = ""
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "";
    if (prev !== product["type"]) {
      out += "<h6 id=" + product["type"].replace(/\s+/g, '-') + ">" + product["type"] + "</h6>";
      out += "<div class='topbar'>";
      out += "<ul class='babynav-2'>";
      out += "<li class='prod-operation'>Operation Type</li>";
      out += "<li class='prod-position'>Position</li>";
      out += "<li class='prod-cam'>Cam #</li>";
      out += "<li class='prod-cat'>Catalog #</li>";
      out += "<li class='prod-price'>Price</li>";
      out += "<li class='prod-quant'>Quantity</li>";
      out += "</ul>";
      out += "</div>";
      prev = product["type"];
    }

    out += "<div class='products2'>";
    out += "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] +" class='thickbox'>";
    out += "<img src=" + product["img"] +" height='100' width='100' /><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' />";
    out += "</a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] +"</span><br />";
    out += "<span class='babytitle'>Need a Contact Block?</span><br />";
    out += "<a href='http://www.levydev.com/homewood/contact-us.php' target='_blank'>> Consult our Factory</a>";
    out += "</div>";
    out += "<ol class='product-ol2'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul2'>";
      out += "<li class='position'>" + item["position"] +"</li>";
      out += "<li class='cam'>" + item["cam_num"] +"</li>";
      out += "<li class='cat'>" + item["catalog_num"] +"</li>";
      out += "<li class='price'>$" + item["price"] +"</li>";
      out += "<li class='quant'>";
      out += "<input type='text' name='qty1' class='qtybox' />";
      out += "<input type='hidden' name='product1' value=" + item["catalog_num"] + " - Flush Selector Switch - " + item["position"] + " Pos/" + item["cam_num"] + " Cam " + product["name"] + " " + product["type"] + " />";
      out += "<input type='hidden' name='price1' value=" + item["price"] + " />";
      out += "</li>";
      out += "</ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>";

    if (product["more_info"] !== undefined) {
      out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
      out += "<div class='menu_body'>";
      for (var img in product["more_info"]) {
        out += "<img src=" + product["more_info"][img] + "/>";
      }
      out += "</div></div>";
    }
    out += "</form>";
    out += "</div>";
    $("#product-list").append(out);
  }
  $("#product-list").append("<div class='clearfix'></div>");
}

function extendedSelectorSwitches(json) {
  var prev = ""
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "";
    if (prev !== product["type"]) {
      out += "<h6 id=" + product["type"].replace(/\s+/g, '-') + ">" + product["type"] + "</h6>";
      out += "<div class='topbar'>";
      out += "<ul class='babynav-2'>";
      out += "<li class='prod-operation'>Operation Type</li>";
      out += "<li class='prod-position'>Operation</li>";
      out += "<li class='prod-cam'>Cam #</li>";
      out += "<li class='prod-cat'>Catalog #</li>";
      out += "<li class='prod-price'>Price</li>";
      out += "<li class='prod-quant'>Quantity</li>";
      out += "</ul>";
      out += "</div>";
      prev = product["type"];
    }

    out += "<div class='products2'>";
    out += "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] +" class='thickbox'>";
    out += "<img src=" + product["img"] +" height='100' width='100' /><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' />";
    out += "</a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] +"</span><br />";
    out += "<span class='babytitle'>Need a Contact Block?</span><br />";
    out += "<a href='http://www.levydev.com/homewood/contact-us.php' target='_blank'>> Consult our Factory</a>";
    out += "</div>";
    out += "<ol class='product-ol2'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul2'>";
      out += "<li class='position'>" + item["operation"] +"</li>";
      out += "<li class='cam'>" + item["cam_num"] +"</li>";
      out += "<li class='cat'>" + item["catalog_num"] +"</li>";
      out += "<li class='price'>$" + item["price"] +"</li>";
      out += "<li class='quant'>";
      out += "<input type='text' name='qty1' class='qtybox' />";
      out += "<input type='hidden' name='product1' value=" + item["catalog_num"] + " - Extended Selector Switch - " + item["position"] + " Pos/" + item["cam_num"] + " Cam " + product["name"] + " " + product["type"] + " />";
      out += "<input type='hidden' name='price1' value=" + item["price"] + " />";
      out += "</li>";
      out += "</ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>";

    if (product["more_info"] !== undefined) {
      out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
      out += "<div class='menu_body'>";
      for (var img in product["more_info"]) {
        out += "<img src=" + product["more_info"][img] + "/>";
      }
      out += "</div></div>";
    }
    out += "</form>";
    out += "</div>";
    $("#product-list").append(out);
  }
  $("#product-list").append("<div class='clearfix'></div>");
}

function indicatingLightUnits(json) {
  var prev = ""
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "";
    if (prev !== product["type"]) {
      out += "<h6 id=" + product["type"].replace(/\s+/g, '-') + ">" + product["type"] + "</h6>";
      out += "<div class='topbar'>";
      out += "<ul class='babynav'>";
      out += "<li class='prod-desc'>Description</li>";
      out += "<li class='prod-item'>Voltage/Freq.</li>";
      out += "<li class='prod-cat'>Catalog #</li>";
      out += "<li class='prod-price'>Price</li>";
      out += "<li class='prod-quant'>Quantity</li>";
      out += "</ul>";
      out += "</div>";
      prev = product["type"];
    }

    out += "<div class='products2'>";
    out += "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] +" class='thickbox'>";
    out += "<img src=" + product["img"] +" height='100' width='100' /><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' />";
    out += "</a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] +"</span><br />";
    out += "<p class='babytitle'>" + product["type"] + "</p>";
      if (product["description"] !== undefined) {
        out += "<p>" + product["description"] + "</p>";
      }
      if (product["subdescription"] !== undefined) {
        out += "<p>" + product["subdescription"] + "</p>";
      }
    out += "</div>";
    out += "<ol class='product-ol'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul'>";
      out += "<li class='item'>" + item["voltage"] +"</li>";
      out += "<li class='cat'>" + item["catalog_num"] +"</li>";
      out += "<li class='price'>";
      if (item["price"] === null) {
        out += "N/A";
      } else {
        out += "$" + item["price"];
      }
      out += "</li>";
      out += "<li class='quant'>";
      out += "<input type='text' name='qty1' class='qtybox' />";
      out += "<input type='hidden' name='product1' value=" + item["catalog_num"] + " - " + product["name"] + " - " + item["voltage"] + " />";
      out += "<input type='hidden' name='price1' value=" + item["price"] + " />";
      out += "</li>";
      out += "</ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>";

    if (product["more_info"] !== undefined) {
      out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
      out += "<div class='menu_body'>";
      for (var img in product["more_info"]) {
        out += "<img src=" + product["more_info"][img] + "/>";
      }
      out += "</div></div>";
    }
    out += "</form>";
    out += "</div>";
    $("#product-list").append(out);
  }
  $("#product-list").append("<div class='clearfix'></div>");
}

function westlokLegendPlates(json) {
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] + " class='thickbox'><img src=" + product["img"] +" height='100' width='100'/><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' /></a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] + "</span>";
    out += "<p class='babytitle'>" + product["type"] + "</p>";
    if (product["description"] !== undefined) {
      out += "<p>" + product["description"] + "</p>";
    }
    if (product["subdescription"] !== undefined) {
      out += "<p>" + product["subdescription"] + "</p>";
    }
    if (product["need_contact"] !== undefined) {
      out += "<span class='header'>Need a Contact Block?</span><br />";
      out += "<a href='flush-pushbutton.php#single-circuit-contact-block' target='_blank'>> Single Circuit Contact Blocks</a><br />";
      out += "<a href='flush-pushbutton.php#double-circuit-contact-block' target='_blank'>> Double Circuit Contact Blocks</a>";
      out += ""
    }
    out += "</div>"; 

    out += "<ol class='product-ol'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul'>";
      out += "<li class='item'>" + item["making"] + "</li>";
      out += "<li class='cat'>" + item["plate_num"] + "</li>";
      out += "<li class='price'>$" + item["price"] +"</li>";
      out += "<li class='quant'>";
      out += "<input type='text' class='qtybox' />";
      out += "<input type='hidden' value=" + item["plate_num"] + " - " + product["name"] + " - " + item["making"] + " />";
      out += "<input type='hidden' value=" + item["price"] +" />";
      out += "</li>";
      out += "</ul>";
      out += "<div class='clearfix'></div>"

      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>"
    if (product["more_info"] !== undefined) {
      out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
      out += "<div class='menu_body'>";
      for (var img in product["more_info"]) {
        out += "<img src=" + product["more_info"][img] + "/>";
      }
      out += "</div></div>";
    }

    out += "</form>"; 
    out += "</div>"
    $("#product-list").append(out);
  }              
  $("#product-list").append("<div class='clearfix'></div>");
}

function partsAndAccessories(json) {
  var prev = "";
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "";
    if (prev !== product["type"]) {
      out += "<h6 id=" + product["type"].replace(/\s+/g, '-') + ">" + product["type"] + "</h6>";
      out += "<div class='topbar'>";
      out += "<ul class='babynav'>";
      if (product["categories"].length > 3) {
        out += "<li class='prod-desc'>"+product["categories"][0]["user"]+"</li>";
        out += "<li class='prod-item'>"+product["categories"][1]["user"]+"</li>";
        out += "<li class='prod-cat'>"+product["categories"][2]["user"]+"</li>";
        out += "<li class='prod-price'>"+product["categories"][3]["user"]+"</li>";
      } else {
        out += "<li class='prod-desc'>"+product["categories"][0]["user"]+"</li>";
        out += "<li class='prod-item'></li>";
        out += "<li class='prod-cat'>"+product["categories"][1]["user"]+"</li>";
        out += "<li class='prod-price'>"+product["categories"][2]["user"]+"</li>";
      }
      out += "<li class='prod-quant'>Quantity</li>";
      out += "</ul>";
      out += "</div>";
      prev = product["type"];
    }

    out += "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] +" class='thickbox'>";
    out += "<img src=" + product["img"] +" height='100' width='100' /><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' />";
    out += "</a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] + "</span>";
    out += "<p class='babytitle'>" + product["type"] + "</p>";
    if (product["description"] !== undefined) {
      out += "<p>" + product["description"] + "</p>";
    }
    if (product["subdescription"] !== undefined) {
      out += "<p>" + product["subdescription"] + "</p>";
    }
    out += "</div>";
    out += "<ol class='product-ol'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul'>";
      if (product["categories"].length > 3) {
        out += "<li class='item'>" + item[product["categories"][1]["db"]] +"</li>";
        if (item[product["categories"][2]["db"]] !== null) {
          out += "<li class='cat'>" + item[product["categories"][2]["db"]] +"</li>";
          out += "<li class='price'>";
          if (item[product["categories"][3]] === null) {
            out += "N/A";
          } else {
            out += "$" + item[product["categories"][3]["db"]];
          }
          out += "</li>";
        }
      } else {
        out += "<li class='item'></li>";
        out += "<li class='cat'>" + item[product["categories"][1]["db"]] +"</li>";
        out += "<li class='price'>";
        if (item[product["categories"][2]] === null) {
          out += "N/A";
        } else {
          out += "$" + item[product["categories"][2]["db"]];
        }
        out += "</li>";
      }
      if (item[product["categories"][2]["db"]] !== null) {
        out += "<li class='quant'>";
        out += "<input type='text' name='qty1' class='qtybox' />";
        out += "<input type='hidden' name='product1' value=" + item["catalog_num"] + " - " + product["name"] + " - " + item["voltage"] + " />";
        out += "<input type='hidden' name='price1' value=" + item["price"] + " />";
        out += "</li>";
      }
      out += "</ul>";
      out += "<div class='clearfix'></div>";
      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>";

    if (product["more_info"] !== undefined) {
      out += "<div class='menu_list sliderpane'><p class='menu_head'>More Technical Information</p>";
      out += "<div class='menu_body'>";
      for (var img in product["more_info"]) {
        out += "<img src=" + product["more_info"][img] + "/>";
      }
      out += "</div></div>";
    }
    out += "</form>";
    out += "</div>";
    $("#product-list").append(out);
  }
  $("#product-list").append("<div class='clearfix'></div>");
}

function selectOPushButton(json) {
  var prev = ""
  for (var i = 0; i < json.length; i ++) {
    var product = json[i];
    var out = "";
    if (prev !== product["type"]) {
      out += "<h6 id=" + product["type"].replace(/\s+/g, '-') + ">" + product["type"] + "</h6>";
      out += "<div class='topbar'>";
      out += "<ul class='babynav'>";
      out += "<li class='prod-desc'>Description</li>";
      out += "<li class='prod-item'></li>";
      out += "<li class='prod-cat'>Catalog #</li>";
      out += "<li class='prod-price'>Price</li>";
      out += "<li class='prod-quant'>Quantity</li>";
      out += "</ul>";
      out += "</div>";
      prev = product["type"];
    }
    out += "<div class='";
    if (i % 2 === 0) {
      out += "product2";
    } else {
      out += "product1";
    }
    out += "' id=" + product["name"].replace(/\s+/g, '-').toLowerCase();
    out += ">";
    out += "<form method='post' action='http://ww7.aitsafe.com/cf/addmulti.cfm'>";
    out += "<input type='hidden' name='userid' value='96231500' />";
    out += "<input type='hidden' name='return' value='www.homewoodecommerce.com/index.php' />";
    out += "<div class='image'>";
    out += "<a href=" + product["imgLg"] + " class='thickbox'><img src=" + product["img"] +" height='100' width='100'/><br />";
    out += "<img src='images/view-larger.png' height='20' width='90' alt='View Larger' /></a>";
    out += "</div>";
    out += "<div class='description'>";
    out += "<span class='header'>" + product["name"] + "</span>";
    out += "<p class='babytitle'>" + product["type"] + "</p>";
    if (product["description"] !== undefined) {
      out += "<p>" + product["description"] + "</p>";
    }
    if (product["subdescription"] !== undefined) {
      out += "<p>" + product["subdescription"] + "</p>";
    }
    out += "</div>"; 

    out += "<ol class='product-ol'>";
    for (var k = 0; k < product["items"].length; k ++) {
      var item = product["items"][k];
      out += "<li>";
      out += "<ul class='product-ul'>";
      out += "<li class='item'></li>";
      out += "<li class='cat'>" + item["catalog_num"] + "</li>";
      out += "<li class='price'>$" + item["price"] +"</li>";
      out += "<li class='quant'>";
      out += "<input type='text' class='qtybox' />";
      out += "<input type='hidden' value=" + item["catalog_num"] + " - " + product["name"] + " />";
      out += "<input type='hidden' value=" + item["price"] +" />";
      out += "</li>";
      out += "</ul>";
      out += "<div class='clearfix'></div>"

      out += "</li>";
    }
    out += "<li>";
    out += "<ul class='product-ul'><li class='add2'>";
    out += "<input type='submit' name='Submit' value='Add to Cart' />";
    out += "</li></ul>";
    out += "<div class='clearfix'></div>";
    out += "</li>";
    out += "</ol>";
    out += "<div class='clearfix'></div>"

    out += "</form>"; 
    out += "</div>"
    $("#product-list").append(out);
  }              
  $("#product-list").append("<div class='clearfix'></div>");
}

// importJson('indicatingLightUnits');





