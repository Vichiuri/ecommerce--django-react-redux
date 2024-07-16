import React from "react";

export default function InfoSection() {
  return (
    <div class="section shipping-block">
      <div class="shipping-support">
        <div class="row space-around">
          <div class="col-auto col-lg-3 col-6">
            <div class="col-content flex-layout center_hozital no-wrap">
              <em class="icon icon-shipping" aria-hidden="true">
                {/* <span class="hidden">icon icon-tracking</span> */}
                <i className="fas fa-truck"></i>
              </em>
              <div class="content">
                <h6 class="footer-title uppercase">Free Delivery</h6>
                <p>For all orders over $120</p>
              </div>
            </div>
          </div>
          <div class="col-auto col-lg-3 col-6">
            <div class="col-content flex-layout center_hozital no-wrap">
              <em class="icon icon-payment" aria-hidden="true">
                <i className="fas fa-credit-card"></i>
              </em>
              <div class="content">
                <h6 class="footer-title uppercase">Safe Payment</h6>
                <p>If goods have problems</p>
              </div>
            </div>
          </div>
          <div class="col-auto col-lg-3 col-6">
            <div class="col-content flex-layout center_hozital no-wrap">
              <em class="icon icon-help-center" aria-hidden="true">
                <i className="fas fa-comments"></i>
              </em>
              <div class="content">
                <h6 class="footer-title uppercase">24/7 Help Center</h6>
                <p>24/7 Customer Support</p>
              </div>
            </div>
          </div>
          <div class="col-auto col-lg-3 col-6">
            <div class="col-content flex-layout center_hozital no-wrap">
              <em class="icon icon-confidence" aria-hidden="true">
                <i className="fas fa-coins"></i>
              </em>
              <div class="content">
                <h6 class="footer-title uppercase">Return money</h6>
                <p>If goods have problems</p>
              </div>
            </div>
          </div>
          <div class="col-auto col-lg-3 col-6 hidden-xl">
            <div class="col-content flex-layout center_hozital no-wrap">
              <em class="icon icon-friendly-services" aria-hidden="true">
                <i className="fas fa-headset"></i>
              </em>
              <div class="content">
                <h6 class="footer-title uppercase">Friendly Services</h6>
                <p>30 day satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
