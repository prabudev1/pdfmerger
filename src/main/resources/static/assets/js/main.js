Dropzone.autoDiscover = false;

$(document).ready(function() {
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
	
	
	$(".dev-container").removeClass("body-opacity");
	$(".loader-box,.message-box").hide();
	
	var myDropzone = new Dropzone("#fileDropzoneElement", {
        url: "/pdf/merge",
        paramName: "files",
        autoProcessQueue: false,
        uploadMultiple: true, // uplaod files in a single request
        parallelUploads: 100, // use it with uploadMultiple
        maxFilesize: 50, // MB
        maxFiles: 10,
        acceptedFiles: ".pdf",
        addRemoveLinks: false,
        clickable: ".upoad-btn",
        // Language Strings
        dictFileTooBig: "File is to big ({{filesize}}mb). Max allowed file size is {{maxFilesize}}mb",
        dictInvalidFileType: "Invalid File Type",
        dictCancelUpload: "Cancel",
        dictRemoveFile: "Remove",
        dictMaxFilesExceeded: "Only {{maxFiles}} files are allowed",
        dictDefaultMessage: "Drop files here or click to <a href='javascript:void(0)' class='upoad-btn'>upload</a>",
    });
	
});


function fileRemove(thisObj) {
	$(thisObj).parent().remove();
	if ($(".dropzone .dz-preview").length == 0 ) {
		$(".dropzone.dz-started .dz-message").show();
		$(".dz-message-bottom").hide();
	}
	
}

Dropzone.options.fileDropzoneElement = {
	    // The setting up of the dropzone
	    init: function() {
	        var myDropzone = this;
	        // First change the button to actually tell Dropzone to process the queue.
	        $("#dropzoneSubmit").on("click", function(e) {
	            // Make sure that the form isn't actually being sent.
	            e.preventDefault();
	            e.stopPropagation();
	            
	            if ($('input[name ="fileOrder"]').length < 2 ) {
	            	alert("OOPS, Please choose atleast 2 files to merge");
	            	return;
	            }

	            $(".dev-container").addClass("body-opacity");
	    		$(".loader-box ").show();
	    		
	            if (myDropzone.files != "") {
	                myDropzone.processQueue();
	            } else {
	                $("#fileDropzoneForm").submit();
	                location.href = "/";
	            }
	        });
	        // on add file
	        this.on("addedfile", function(file) {
	        	$("#fileDropzoneElement").sortable({
        			revert : true
        		});
	        	$(".dropzone.dz-started .dz-message").hide();
	        	$(".dz-message-bottom").show();
	            // console.log(file);
	        });
	        this.on("drop", function(file, response) {
	        	$("#fileDropzoneElement").sortable({
        			revert : true
        		});
	        	$(".dropzone.dz-started .dz-message").hide();
	        	$(".dz-message-bottom").show();
	            // console.log(response);
	        });
	     // on error
	        this.on("addedfiles", function(file, response) {
	        	$("#fileDropzoneElement").sortable({
        			revert : true
        		});
	        	$(".dropzone.dz-started .dz-message").hide();
	        	$(".dz-message-bottom").show();
	            // console.log(response);
	        });
	        // on error
	        this.on("error", function(file, response) {
	            // console.log(response);
	        });
	        // on start
	        this.on("sendingmultiple", function(file) {
	             // console.log(file);
	        });
	        // on success
	        this.on("successmultiple", function(file) {
	            // submit form
	            $("#fileDropzoneForm").submit();
	            $(".loader-box ").hide();
	            $(".message-box").fadeIn(1500);
	            $(".dropzone.dz-started .dz-message").show();
	    		$(".dz-message-bottom").hide();
	    		
	            this.removeAllFiles(true);
	            
	            setTimeout(function(){
	            	$(".message-box").fadeOut("fast");
	            	$(".dev-container").removeClass("body-opacity");
	 	        	$(".loader-box ").hide();
	            }, 1500);
	           
	        });
	    }
	};