(function($) {
	$("#sortable1").sortable({
		revert : true
	});
	$("#sortable2").sortable({
		revert : true
	});
	$("ul, li").disableSelection();	
	$(".dz-message-bottom").hide();
	
//	var myDropzone = new Dropzone("#my-dropzone-element-id");
//	  myDropzone.on("addedfile", function(file) {
//		  
//	  });
	$("#mergepdf").click(function(){
		//alert(Dropzone.options.myDropzoneElementId.getAcceptedFiles().length);
	});
})(jQuery);


function fileRemove(thisObj) {
	$(thisObj).parent().remove();
	if ($(".dropzone .dz-preview").length == 0 ) {
		$(".dropzone.dz-started .dz-message").show();
		$(".dz-message-bottom").hide();
	}
	
}