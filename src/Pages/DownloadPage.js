import jsPDF from "jspdf";
import backgroundImage from "../Assets/WASECERTIFICATEBYIJEBU.jpg";
import { useEffect } from "react";
import axios from "axios";

function Download() {
  // Retrieving data
  const storedData = localStorage.getItem("myData");

  // Parse the JSON string back to an object after retrieving
  const parsedData = JSON.parse(storedData);
  console.log(parsedData);
  const { firstName, surname, middleName, photograph } = parsedData;
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2); // months are zero-indexed
  const day = ("0" + today.getDate()).slice(-2);
  const formattedDate = year + "-" + month + "-" + day;

  function generateRandomNumber(length) {
    return Math.floor(
      Math.pow(10, length - 1) + Math.random() * 4 * Math.pow(10, length - 1)
    );
  }

  const idnos = generateRandomNumber(8);
  const generatePdf = () => {
    const doc = new jsPDF();

    // Add background image to PDF
    doc.addImage(
      backgroundImage,
      "PNG",
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight()
    );

    // Add image to PDF
    doc.addImage(
      photograph,
      "PNG",
      doc.internal.pageSize.getWidth() - 204,
      30,
      35,
      70
    );

    // Add text to PDF
    doc.setFontSize(20);
    doc.text(`${idnos}`, 15, 153);
    doc.setFontSize(20);
    doc.text(` ${firstName} ${middleName} ${surname} `, 55, 173.5);
    doc.setFontSize(14);
    doc.text(`${formattedDate}`, 155, 263);
    // doc.setFontSize(20);
    // doc.text(`${others}`, 25, 219);

    // Save PDF
    doc.save("certificate.pdf");
  };

  return (
    <div className="download">
      <div className="container">
        <div className="nav-container">
          <div className="nav">
            <div className="nav-image">
              <div className="logo"></div>
            </div>
          </div>
        </div>
        <div className="download">
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            Download Your Indegene Certificate
          </h1>
          <div className="download-boxes">
            <div className="download-box">
              <div className="card">
                <div className="card-top"></div>{" "}
                <div className="card-bottom">
                  <p onClick={generatePdf}>Publication Certificate</p>
                  <i class="fa-solid fa-download" onClick={generatePdf}></i>
                </div>
              </div>
            </div>

            <div className="download-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
