import React from 'react';
import { Document, Page,pdfjs } from 'react-pdf';

import PDF from "./Resume_V5.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export default function Resume() {
  return (
    <div
    className= "py-20 flex justify-center"
   
    id="mycontact"
  >
  <Document  file={PDF}>
      <Page pageNumber={1} />
    </Document> 
     </div>
  );
}