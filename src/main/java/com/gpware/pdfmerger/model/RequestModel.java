package com.gpware.pdfmerger.model;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class RequestModel {

	private List<MultipartFile> files;
	private List<String> fileOrder;

	public List<MultipartFile> getFiles() {
		return files;
	}

	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}

	public List<String> getFileOrder() {
		return fileOrder;
	}

	public void setFileOrder(List<String> fileOrder) {
		this.fileOrder = fileOrder;
	}

}
