// {
//   memberregistrationData.image === '' && (
//     <div className="w-full flex-col justify-start items-start gap-1.5 flex">
//       <Label
//         htmlFor="Image"
//         className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
//       >
//         Image
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="7"
//           height="7"
//           viewBox="0 0 7 7"
//           fill="none"
//         >
//           <path
//             d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
//             fill="#EF4444"
//           />
//         </svg>
//       </Label>
//       <div className="w-full flex-col justify-start items-start gap-2.5 flex">
//         <CldUploadWidget
//           onSuccess={results => {
//             setResult(results?.info as UploadedAssetData);
//             setmemberregistrationData({
//               ...memberregistrationData,
//               // @ts-ignore
//               image: results?.info?.url
//             });
//           }}
//           uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
//         >
//           {({ open }) => {
//             return (
//               <Label
//                 onClick={() => open()}
//                 htmlFor="dropzone-file"
//                 className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 "
//               >
//                 <div className="mb-3 flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                   >
//                     <g id="Upload 02">
//                       <path
//                         id="icon"
//                         d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
//                         stroke="#4F46E5"
//                         strokeWidth="1.6"
//                         strokeLinecap="round"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//                 <span className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
//                   PNG, JPG or PDF, smaller than 15MB
//                 </span>
//                 <h6 className="text-center text-gray-900 text-sm font-medium leading-5">
//                   Drag and Drop your file here or
//                 </h6>
//               </Label>
//             );
//           }}
//         </CldUploadWidget>
//       </div>
//     </div>
//   );
// }
