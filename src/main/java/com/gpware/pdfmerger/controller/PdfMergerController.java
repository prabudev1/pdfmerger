package com.gpware.pdfmerger.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.gpware.pdfmerger.model.RequestModel;
import com.gpware.pdfmerger.service.PdfMergerService;

@Controller
@RequestMapping("pdf")
@CrossOrigin
public class PdfMergerController {

	@Autowired
	private PdfMergerService pdfService;

	@ResponseStatus(HttpStatus.OK)
	@GetMapping("test")
	public HttpEntity<String> testService() throws IOException {
		return new HttpEntity<String>("Yes, I'm working ");
	}

	@ResponseStatus(HttpStatus.OK)
	@PostMapping("merge")
	public HttpEntity<?> multiUploadFileModel(@ModelAttribute RequestModel model) {
		try {
			byte[] fileContent = pdfService.mergeFies(model.getFiles());
			HttpHeaders header = new HttpHeaders();
			header.setContentType(MediaType.APPLICATION_PDF);
			header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=merged.pdf");
			header.setContentLength(fileContent.length);
			return new HttpEntity<byte[]>(fileContent, header);
		} catch (IOException e) {
			System.out.println("Exception: " + e.getMessage());
			e.printStackTrace();
			return new HttpEntity<String>("OOPS, Something went wrong. Please try again.");
		}
	}

}