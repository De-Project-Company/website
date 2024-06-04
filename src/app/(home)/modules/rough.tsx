// import * as React from 'react';

// export function MyComponent() {
//   return (
//     <div className="flex justify-center items-center px-16 py-20 bg-sky-50 max-md:px-5">
//       <div className="flex flex-col mt-1.5 w-full max-w-[1231px] max-md:max-w-full">
//         <div className="self-center text-6xl leading-[53.76px] text-sky-950 max-md:max-w-full max-md:text-4xl">
//           Starters Products & Projects
//         </div>
//         <div className="mt-28 max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col justify-center items-center w-full bg-blue-800 border-2 border-blue-600 border-solid aspect-square max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f475b136de9a3d662e226b2b02985b4e9e86db5c263efd193eab975e53439018?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                   className="w-full aspect-square"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col self-stretch my-auto font-semibold text-center leading-[92%] max-md:mt-10 max-md:max-w-full">
//                 <div className="text-3xl text-sky-950 max-md:max-w-full">
//                   Traverse
//                 </div>
//                 <div className="mt-6 text-2xl font-medium leading-9 text-justify text-neutral-950 max-md:max-w-full">
//                   Whether you're a seasoned professional or just starting out in
//                   your tech career, there's a place for you at Starters. Join
//                   our community today and embark on a journey of growth,
//                   collaboration, and endless possibilities in the world of
//                   technology.
//                 </div>
//                 <div className="flex gap-5 justify-between mt-6 text-lg text-orange-400 max-md:flex-wrap max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                     className="shrink-0 max-w-full aspect-[3.57] w-[172px]"
//                   />
//                   <div className="my-auto">Read More</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col justify-center items-center px-3.5 w-full bg-blue-800 border-2 border-blue-600 border-solid aspect-square max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93e7108c0ad7ebe05168ab4214e328e6859ccccf253f09effa8b605292ca106?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                   className="w-full aspect-[0.91]"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col self-stretch my-auto font-semibold text-center leading-[92%] max-md:mt-10 max-md:max-w-full">
//                 <div className="text-3xl text-sky-950 max-md:max-w-full">
//                   Paygo
//                 </div>
//                 <div className="mt-6 text-2xl font-medium leading-9 text-justify text-neutral-950 max-md:max-w-full">
//                   Whether you're a seasoned professional or just starting out in
//                   your tech career, there's a place for you at Starters. Join
//                   our community today and embark on a journey of growth,
//                   collaboration, and endless possibilities in the world of
//                   technology.
//                 </div>
//                 <div className="flex gap-5 justify-between mt-6 text-lg text-orange-400 max-md:flex-wrap max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                     className="shrink-0 max-w-full aspect-[3.57] w-[172px]"
//                   />
//                   <div className="my-auto">Read More</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col items-center pt-8 pb-1.5 w-full bg-blue-800 aspect-square max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9af99e6963a7661d1303a11c4991f2e2b8f5eb3200cf24ecf7891e0325d1fb7?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                   className="w-full aspect-[1.15]"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col self-stretch my-auto font-semibold text-center leading-[92%] max-md:mt-10 max-md:max-w-full">
//                 <div className="text-3xl text-sky-950 max-md:max-w-full">
//                   Starters Ed-Management
//                 </div>
//                 <div className="mt-6 text-2xl font-medium leading-9 text-justify text-neutral-950 max-md:max-w-full">
//                   Whether you're a seasoned professional or just starting out in
//                   your tech career, there's a place for you at Starters. Join
//                   our community today and embark on a journey of growth,
//                   collaboration, and endless possibilities in the world of
//                   technology.
//                 </div>
//                 <div className="flex gap-5 justify-between mt-6 text-lg text-orange-400 max-md:flex-wrap max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5778d8a2b49ce3d1fb79364adcb234bc01c7ed7c189a15b5058aa377319b1506?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
//                     className="shrink-0 max-w-full aspect-[3.57] w-[172px]"
//                   />
//                   <div className="my-auto">Read More</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="justify-center items-center self-center px-3 py-1 mt-20 max-w-full text-lg font-semibold leading-5 text-center text-white bg-orange-400 rounded w-[522px] max-md:px-5 max-md:mt-10">
//           View all projects
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const rough = () => {
  return (
    <ol className="lg:flex  items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
      <li className="relative ">
        <a
          href="https://pagedone.io/"
          className="flex items-center font-medium w-full  "
        >
          <span className="w-6 h-6 bg-indigo-600 border border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-8 lg:h-8">
            {' '}
            1{' '}
          </span>
          <div className="block">
            <h4 className="text-base  text-indigo-600">
              Create Pagedone Account
            </h4>
          </div>
          <svg
            className="w-5 h-5 ml-2 stroke-indigo-600 sm:ml-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
              stroke="stroke-current"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </li>
      <li className="relative  ">
        <a className="flex items-center font-medium w-full  ">
          <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">
            2
          </span>
          <div className="block">
            <h4 className="text-base  text-gray-900">Billing Information</h4>
          </div>
          <svg
            className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
              stroke="stroke-current"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </li>
      <li className="relative  ">
        <a className="flex items-center font-medium w-full  ">
          <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8">
            3
          </span>
          <div className="block">
            <h4 className="text-base  text-gray-900">Summary</h4>
          </div>
        </a>
      </li>
    </ol>
  );
};

export default rough;
