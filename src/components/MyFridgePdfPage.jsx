// import  { useRef, useEffect, useState } from "react";
// import { jsPDF } from "jspdf";
// import { toPng } from "html-to-image";



// const MyFridgePdfPage = () => {
//   const cardRef = useRef(null);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const checkImages = async () => {
//       try {
//         const promises = data.flat().map(
//           (item) =>
//             new Promise((resolve, reject) => {
//               const img = new Image();
//               img.src = item.website || item.socialmedia || item.chatmailwhatsapp || item.print || item.report;
//               img.onload = resolve;
//               img.onerror = reject;
//             })
//         );

//         await Promise.all(promises);
//         setImagesLoaded(true);
//         console.log("All images loaded successfully");
//       } catch (error) {
//         console.error("Some images failed to load", error);
//         setError("Failed to load all images. Please check your internet connection and try again.");
//       }
//     };

//     checkImages();
//   }, []);

//   const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   };

//   const handleDownload = async () => {
//     if (!imagesLoaded) {
//       console.error("Images not loaded yet");
//       setError("Please wait for all images to load before generating the PDF.");
//       return;
//     }

//     setIsGeneratingPDF(true);
//     setError(null);

//     try {
//       console.log("Starting PDF generation...");
//       const batches = chunkArray(data, 10);

//       for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
//         const currentBatch = batches[batchIndex];
//         const pdf = new jsPDF({
//           orientation: "portrait",
//           unit: "mm",
//           format: "a4",
//         });

//         for (let index = 0; index < currentBatch.length; index++) {
//           if (index > 0) {
//             pdf.addPage();
//           }

//           const frameCard = cardRef.current.children[index + batchIndex * 10];
//           if (frameCard) {
//             console.log(`Capturing image for FrameCard: ${index + batchIndex * 10}`);

//             const dataUrl = await toPng(frameCard, {
//               backgroundColor: "#FFFFFF",
//               pixelRatio: 3,
//             });

//             console.log(`Image captured for FrameCard: ${index + batchIndex * 10}`);

//             const imgWidth = 210;
//             const imgHeight = 297;
//             const pageWidth = 210;
//             const pageHeight = 297;
//             const x = (pageWidth - imgWidth) / 2;
//             const y = (pageHeight - imgHeight) / 2;

//             pdf.addImage(dataUrl, "PNG", x, y, imgWidth, imgHeight);
//           } else {
//             console.error(`FrameCard not found for index: ${index + batchIndex * 20}`);
//           }
//         }

//         console.log(`Saving PDF as: batch${batchIndex + 1}.pdf`);
//         pdf.save(`batch${batchIndex + 1}.pdf`);
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }

//       console.log("PDF generation completed successfully");
//     } catch (err) {
//       console.error("Error generating PDF", err);
//       setError("An error occurred while generating the PDF. Please try again.");
//     } finally {
//       setIsGeneratingPDF(false);
//     }
//   };

//   return (
//     <div className="p-4">
//       <div
//         id="printableArea"
//         ref={cardRef}
//         style={{
//           width: "210mm",
//           height: "297mm",
//           backgroundColor: "white",
//           display: "block",
//           position: "relative",
//         }}
//       >
//         {data.map((set, index) => (
//           <div key={index} style={{ pageBreakAfter: 'always' }}>
//             <QRCodeComponent
//               websiteQRCode={set[0].website}
//               socialMediaQRCode={set[1].socialmedia}
//               chatMailQRCode={set[2].chatmailwhatsapp}
//               printQRCode={set[3].print}
//               reportQRCode={set[4].report}
//               productId={set[0].workspaceId}
//               userId={set[0].userId}
//               password={set[0].password}
//               cidUserId={set[0].customerId}
//             />
//           </div>
//         ))}
//       </div>
//       {error && <div className="text-red-500 mt-4">{error}</div>}
//       <button
//         onClick={handleDownload}
//         disabled={!imagesLoaded || isGeneratingPDF}
//         className={`fixed p-2 text-white rounded shadow-lg bottom-4 right-4 ${
//           imagesLoaded && !isGeneratingPDF ? 'bg-blue-500' : 'bg-gray-400'
//         }`}
//         style={{ zIndex: 1000 }}
//       >
//         {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
//       </button>
//     </div>
//   );
// };

// export default MyFridgePdfPage;