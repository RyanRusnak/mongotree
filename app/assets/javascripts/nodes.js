
$('#jstree').jstree({ "plugins" : ["themes","html_data","ui"] })
        // 1) the loaded event fires as soon as data is parsed and inserted
        .bind("loaded.jstree", function (event, data) { })
        // 2) but if you are using the cookie plugin or the core `initially_open` option:
        .one("reopen.jstree", function (event, data) { })
        // 3) but if you are using the cookie plugin or the UI `initially_select` option:
        .one("reselect.jstree", function (event, data) { });


$('#toggle-nav').click(function(){
	$('#left-pane').toggle('slow', changeIcon);
});

function changeIcon(){
     if ($('#left-pane').is(':visible')){
		$('#toggle-nav').html('<button id="toggle-nav" class="btn"><i class="icon-chevron-left"></i></button>');
	}else{
		$('#toggle-nav').html('<button id="toggle-nav" class="btn"><i class="icon-chevron-right"></i></button>');
	}
}