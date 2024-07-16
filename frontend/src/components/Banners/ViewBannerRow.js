import React from "react";

export default function ViewBannerRow({ banner, deleteBanner, editBanner }) {
  return (
    //   <div className="container-fluid">
    //     <div className="border-bottom row justify-content-between align-items-center">
    //       <div className="row align-items-center pb-2 pt-2">
    //         <div className="banner_img">
    //           <img
    //             src={
    //               banner.pic ? `..${banner.pic}` : "../static/images/3955595.webp"
    //             }
    //             alt="Card image cap"
    //           />
    //         </div>
    //         <div className=" ml-4">
    //           {banner.offer ? (
    //             <div className="row justify-content-between">
    //               <h6>Offer Name:</h6>
    //               <p className=" overflow-hidden">{banner.offer.detail_name}</p>
    //             </div>
    //           ) : banner.product ? (
    //             <div className="row justify-content-between">
    //               <h6>Product Name:</h6>
    //               <p className=" overflow-hidden">{banner.product.name}</p>
    //             </div>
    //           ) : (
    //             <div />
    //           )}
    //           <p>{banner.text ? banner.text : ""}</p>
    //         </div>
    //       </div>
    //       <div className="d-block">
    //         <div
    //           onClick={() => editBanner(banner)}
    //           className="btn btn-primary mr-2"
    //         >
    //           <i className="fas fa-edit text-white"></i>
    //         </div>
    //         <div
    //           onClick={() => deleteBanner(banner.id)}
    //           className="btn btn-danger"
    //         >
    //           <i className="fas fa-times text-white"></i>
    //         </div>
    //       </div>

    //       {/**/}

    //       {/* <div className="card-header">
    //       <div className="row justify-content-between align-items-center">
    //         <h5 className="font-weight-bold mt-2 ml-2">{banner.name}</h5>
    //         <i onClick={() => editBanner(banner)} className="fas fa-edit"></i>
    //       </div>
    //     </div>
    //     <div className="card-body p-4">

    //       <div className="row justify-content-between">

    //       </div>
    //     </div>
    //  */}
    //     </div>
    //   </div>

    <div>
      <div className="card">
        <div className="banner_img">
          <img
            src={
              banner.pic ? `..${banner.pic}` : "../static/images/add_image.png"
            }
            alt="Card image cap"
          />
          <div className="delete_btn" onClick={() => deleteBanner(banner.id)}>
            x
          </div>
        </div>
        <div className="card-header">
          <div className="row justify-content-between align-items-center">
            <h6 className="font-weight-bold mt-2">{banner.name}</h6>
            <i onClick={() => editBanner(banner)} className="fas fa-edit"></i>
          </div>
        </div>
        <div className="card-body p-4">
          <p>{banner.text ? banner.text : ""}</p>
        </div>
      </div>
    </div>
  );
}
