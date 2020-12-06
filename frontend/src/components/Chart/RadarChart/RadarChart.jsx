import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

// Fetch data
// import { fetchCharts } from "../../../api/index";

const RadarChart = () => {
  // const [dataCharts, setdataCharts] = useState([]);
  // useEffect(() => {
  //   const fetchChartsAPI = async () => {
  //     setdataCharts(await fetchCharts());
  //   };

  //   fetchChartsAPI(); // on appel la fonction pour l'activer
  // }, []);

  // dataCharts.map(({ data }, i) => {
  //   console.log(data);
  // });


  // dataCharts.map((item, i) => {
  //   return console.log(item);
  // });

  // dataCharts.map(({ data }) => console.log( data));

  // dataCharts.map(({ backgroundColor }) => {
  //   let tableauColor = [];
  //   backgroundColor.map((item) => {
  //     tableauColor.push(item);
  //     return tableauColor;
  //   });
  //   console.log(tableauColor);
  // });
  // console.log(dataCharts.map(({ data }) => data));
  // let getDatas = () => {
  //   dataCharts.map((data) => {
  //     let datas = [];
  //     data.data.map((item) => {
  //       datas.push(item);
  //       return datas;
  //     });
  //     {
  //       console.log("datas", datas);
  //     }
  //   });
  // };

  // dataCharts.map((data, i) => {
  //   console.log("data sans curly", data.backgroundColor, i);
  // });

  // return dataCharts.length ? (
  //   <Radar
  //     data={{
  //       labels: dataCharts.map(({ labels }) => labels),
  //       datasets: [
  //         {
  // label: dataCharts.map(({ label }) => label),
  // data: dataCharts.map(({ data }) => data),
  //           backgroundColor: dataCharts.map(
  //             ({ backgroundColor }) => backgroundColor
  //           ),
  //         },
  //       ],
  //     }}
  //   ></Radar>
  // ) : null;

  // // t,

  return (
    <Radar
      data={{
        labels: [
          "Technologie web",
          "Bootcamp",
          "UX Design",
          "Anglais",
          "Urbanisation SI",
          "IOT",
        ],
        datasets: [
          {
            label: 
            ["Test", "Test", "Test", "Test", "Test"],
            data: [20, 50, 90, 25, 40, 65],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",

            ],
            
          },
        ],
      }}
    ></Radar>
  )
};

export default RadarChart;
