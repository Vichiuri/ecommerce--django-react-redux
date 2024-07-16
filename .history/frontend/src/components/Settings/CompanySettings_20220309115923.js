import React, { useState } from "react";
import EditCompanySettings from "./EditCompanySettings";
import ViewCompanySettings from "./ViewCompanySettings";

export default function CompanySettings(props) {
  const {
    distributor,
    countries,
    cities,
    fetchCitiesData,
    fetchCountriesData,
    editDistributorSettings,
    dist_settings,
    updateDistOptions,
  } = props;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div class="profile-info col-md-9">
      {isEdit ? (
        <EditCompanySettings
          viewSetting={() => setIsEdit(false)}
          distributor={distributor}
          fetchCitiesData={fetchCitiesData}
          fetchCountriesData={fetchCountriesData}
          countries={countries}
          cities={cities}
          editDistributorSettings={editDistributorSettings}
        />
      ) : (
        <ViewCompanySettings
          distributor={distributor}
          editSettings={() => setIsEdit(true)}
          dist_settings={dist_settings}
          updateDistOptions={updateDistOptions}
        />
      )}
    </div>
  );
}
