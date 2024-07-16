import React, { useState } from "react";
import CompanySettings from "./CompanySettings";
import DetailSettings from "./DetailSettings";
import EmailSettings from "./EmailSettings";

export default function ViewSettings(props) {
  const {
    distributor,
    countries,
    cities,
    fetchCitiesData,
    fetchCountriesData,
    editDistributorSettings,
    fetchEmailSettings,
    addEmailSettings,
    updateEmailSettings,
    email_settings,
    dist_settings,
    updateDistOptions,
    updateCompanyStatus,
  } = props;

  const nav_bar = [
    { name: "Company", icon: <i className="fas fa-building"></i> },
    { name: "Email Settings", icon: <i className="fas fa-envelope-open"></i> },
    { name: "Details", icon: <i className="fas fa-clipboard"></i> },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const settingTab =
    currentTab == 0 ? (
      <CompanySettings
        distributor={distributor}
        fetchCitiesData={fetchCitiesData}
        fetchCountriesData={fetchCountriesData}
        countries={countries}
        cities={cities}
        editDistributorSettings={editDistributorSettings}
        dist_settings={dist_settings}
        updateDistOptions={updateDistOptions}
      />
    ) : currentTab == 1 ? (
      <EmailSettings
        email_settings={email_settings}
        addEmailSettings={addEmailSettings}
        updateEmailSettings={updateEmailSettings}
      />
    ) : (
      <DetailSettings
        updateCompanyStatus={updateCompanyStatus}
        dist_settings={dist_settings}
      />
    );

  function updateCurrentPage(page) {
    if (page == 1) {
      fetchEmailSettings();
    }
    setCurrentTab(page);
  }

  return (
    <div class="row">
      <div class="profile-nav col-md-3">
        <div class="panel">
          <div class="user-heading round bg_themed">
            <a href="#">
              <img
                src={
                  distributor
                    ? distributor.logo
                      ? distributor.logo
                      : "../static/images/company_alt.webp"
                    : "../static/images/company_alt.webp"
                }
                alt="Company logo"
              />
            </a>
            <h1>{distributor ? distributor.name : ""}</h1>
            <p>{distributor ? distributor.email : ""}</p>
          </div>

          <ul class="list-group">
            {nav_bar.map((item, index) => {
              const view_class =
                index == currentTab
                  ? "list-group-item p_current container-fluid"
                  : "list-group-item container-fluid";
              return (
                <li
                  class={view_class}
                  key={index}
                  onClick={() => updateCurrentPage(index)}
                >
                  <div className="row pl-3 pr-3 font-size-18">
                    <div>{item.icon}</div>
                    <div className="ml-5">{item.name}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {settingTab}
    </div>
  );
}
