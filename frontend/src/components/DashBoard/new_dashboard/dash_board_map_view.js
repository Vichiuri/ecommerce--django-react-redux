import React, { useEffect, useState } from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import KenyaJson from "../../../utils/kenya.json";

export default function DashBoardMapView(props) {
  const { map_data } = props;

  const [view_json, setViewJson] = useState(KenyaJson);
  const [layered_regions, setLayeredRegions] = useState([]);
  const [checked_regions, setCheckedRegions] = useState([]);
  const [max_number, setMaxNumber] = useState(0);
  const [view_data, setViewData] = useState([]);

  useEffect(() => {
    if (map_data && map_data?.length > 0) {
      initMapRegions(map_data);
      viewMapBottomSlider(map_data);
    }
  }, [map_data]);

  function initMapRegions(map_data) {
    const { layers } = view_json;
    let new_regions = [];
    // console.log(layers.some((item) => item.name == "Mombasa"));
    const new_array = layers.map((layer) => {
      let count = 0;
      const count_data = map_data.filter((item) => item.name == layer.name)[0];
      if (count_data) {
        count = count_data?.count ?? 0;
        const new_region_layer = layer.id;
        new_regions.push(new_region_layer);
      }
      layer.count = count;
      return layer;
    });
    view_json.layers = new_array;
    setViewJson(view_json);
    setLayeredRegions(new_regions);
  }

  function viewMapBottomSlider(map_data) {
    const greatest_number = Math.max(
      ...map_data.map((item) => {
        return item.count;
      })
    );
    const new_array = [];
    const length = map_data.length >= 4 ? 4 : map_data.length;
    for (let i = 0; i < length; i++) {
      const data = map_data[i];
      new_array.push(data);
    }
    setMaxNumber(greatest_number);
    setViewData(new_array);
  }

  const checkSelectedLayers = (id) => {
    checked_regions.includes(id)
      ? setCheckedRegions(checked_regions.filter((sid) => sid !== id))
      : setCheckedRegions([...checked_regions, id]);

    const { layers } = view_json;
    const current_check = layers?.filter((item) => item.id == id)[0];
    if (current_check) {
      if (view_data.length >= 4) {
        view_data.pop();
        view_data.splice(0, 0, {
          name: current_check.name,
          count: current_check.count,
        });
      } else {
        view_data.splice(0, 0, {
          name: current_check.name,
          count: current_check.count,
        });
      }
    }
  };

  return (
    <div className="col-xl-4 dashb_board_card_padding">
      <div className="white_card card_height_100  mb_20">
        <div className="white_card_header">
          <div className="box_header m-0">
            <div className="main-title">
              <h3 className="m-0">Locations</h3>
            </div>
            <div className="header_more_tool">
              <div className="dropdown">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  <i className="ti-more-alt"></i>
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-eye"></i> Action
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-trash"></i> Delete
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fas fa-edit"></i> Edit
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="ti-printer"></i> Print
                  </a>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fa fa-download"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white_card_body">
          <div className="row justify-content-center">
            <VectorMap
              onClick={(e) => checkSelectedLayers(e.target.id)}
              {...view_json}
              checkedLayers={checked_regions}
              currentLayers={layered_regions}
              className="dashboard_w_map pb_20"
            />
          </div>
          <div className="world_list_wraper">
            <div className="row justify-content-center">
              <div className="row justify-content-between">
                {view_data.map((data, index) => {
                  const { name, count } = data;
                  let percentage = (count / max_number) * 100;
                  return (
                    <div key={index} className="col-lg-6 mb-1">
                      <div className="single_progressbar">
                        <h6 className="f_s_14 f_w_400">{`${name} (${count})`}</h6>
                        <div className="ruler-sold">
                          <div
                            className="ruler-sold-count"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="col-lg-6 mt-4">
                  <div className="single_progressbar">
                    <h6>Retailers</h6>
                    <div id="bar7" className="barfiller">
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                      <span className="fill" data-percentage="55"></span>
                    </div>
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
