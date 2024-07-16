import React, { useState, useEffect } from "react";
import CustomSwitch from "../../widgets/CustomSwitch";

export default function ViewCompanySettings(props) {
  const { distributor, editSettings, dist_settings, updateDistOptions } = props;

  const [c_name, setCName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [pin, setPin] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [use_price_list, setUsePriceList] = useState(false);
  const [use_sales_target, setUseSalesTarget] = useState(false);
  const [use_offers, setUseOffers] = useState(false);

  useEffect(() => {
    if (distributor) {
      setCName(distributor.name);
      setEmail(distributor.email);
      setEmail2(distributor.email2);
      setPhone(distributor.phone);
      setPhone2(distributor.phone2);
      setPin(distributor.kra);
      setCategory(distributor.category);
      setWebsite(distributor.website);
      setState(distributor.state);
      setCountry(distributor.country);
      setAddress(distributor.address);
    }
    if (dist_settings) {
      setUsePriceList(dist_settings.use_price_list);
      setUseSalesTarget(dist_settings.use_sales_target);
      setUseOffers(dist_settings.use_offers);
    }
  }, [distributor, dist_settings]);

  function updateSettingsTab(type, value) {
    updateDistOptions({
      id: dist_settings.id,
      use_price_list: type == "price" ? value : use_price_list,
      use_sales_target: type == "target" ? value : use_sales_target,
      use_offers: type == "offer" ? value : use_offers,
    });
  }

  return (
    <div>
      <div className="card panel">
        <div className="bio-graph-heading card-header">
          <h3>Company Settings</h3>
        </div>
        <div className="card-content panel-body bio-graph-info">
          <div className="row justify-content-between pl-3 pr-3">
            <h1>....</h1>
            <i
              onClick={() => editSettings()}
              className="fas fa-edit text-primary btn_type"
            ></i>
          </div>
          <div className="row">
            <div className="bio-row">
              <p>
                <span>Name: </span> {c_name}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Kra Pin: </span> {pin}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Email: </span> {email}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Email2:</span> {email2}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Phone: </span> {phone}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Phone: </span> {phone2}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Website: </span> {website}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Category: </span>
                {category}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>State: </span> {state ? state.city_name : ""}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Country: </span>
                {country ? country.name : ""}
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Address: </span>
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card panel">
              <div className="card-content panel-body">
                <div className="bio-desk">
                  <h4 className="red">Price List</h4>
                  <div className="ml-4">
                    <CustomSwitch
                      option={{
                        name: use_price_list ? "Active" : "In Active",
                        selected: use_price_list,
                      }}
                      handleChange={() => {
                        updateSettingsTab("price", !use_price_list);
                        setUsePriceList(!use_price_list);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card panel">
              <div className="card-content panel-body">
                <div className="bio-desk">
                  <h4 className="red">Price Offers</h4>
                  <div className="ml-4">
                    <CustomSwitch
                      option={{
                        name: use_offers ? "Active" : "In Active",
                        selected: use_offers,
                      }}
                      handleChange={() => {
                        updateSettingsTab("offer", !use_offers);
                        setUseOffers(!use_offers);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card panel">
              <div className="card-content panel-body">
                <div className="bio-desk">
                  <h4 className="red">Sales Target</h4>
                  <div className="ml-4">
                    <CustomSwitch
                      option={{
                        name: use_sales_target ? "Active" : "In Active",
                        selected: use_sales_target,
                      }}
                      handleChange={() => {
                        updateSettingsTab("target", !use_sales_target);
                        setUseSalesTarget(!use_sales_target);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
