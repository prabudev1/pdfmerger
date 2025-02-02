package com.gpware.pdfmerger.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.pdfbox.multipdf.PDFMergerUtility;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PdfMergerService {

	public byte[] mergeFies(List<MultipartFile> files, List<String> order) throws IOException {
		ByteArrayOutputStream destStream = new ByteArrayOutputStream();
		PDFMergerUtility pdfMerger = new PDFMergerUtility();
		for (String orderIndex : order) {
			MultipartFile file = files.get(Integer.valueOf(orderIndex));
			pdfMerger.addSource(file.getInputStream());
		}
		pdfMerger.setDestinationStream(destStream);
		pdfMerger.mergeDocuments(null);
		return destStream.toByteArray();
	}

	public byte[] downloadExcel(String userIdentifier, String fromDate, String toDate, String orderBy)
			throws IOException {

		ByteArrayOutputStream baos = new ByteArrayOutputStream();
//        workbook.write(baos);
		byte[] baosByteArray = baos.toByteArray();
		baos.close();
		return baosByteArray;
	}
}
