"use client"
import ReactEcharts from "echarts-for-react";

function BarChartSample() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

  const data2 = {
    "time": [
      "Mon Nov 26 45291 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sun Aug 22 45294 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sat May 18 45297 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Fri Feb 12 45300 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Thu Nov 09 45302 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Wed Aug 05 45305 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Tue May 01 45308 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Mon Jan 26 45311 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sun Oct 22 45313 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sat Jul 18 45316 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Fri Apr 14 45319 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Thu Jan 08 45322 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Wed Oct 04 45324 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Tue Jul 01 45327 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Mon Mar 27 45330 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sun Dec 21 45332 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sat Sep 17 45335 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Fri Jun 13 45338 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Tue Sep 25 46745 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Mon Jun 21 46748 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sun Mar 18 46751 01:00:00 GMT+0100 (West Africa Standard Time)",
      "Sat Dec 12 46753 01:00:00 GMT+0100 (West Africa Standard Time)",
    ],
    "price": [
      21490.037114700004,
      22475.63955,
      21383.9514966,
      18500.0985,
      16383.62456546,
      14401.560917220002,
      17606.65517625,
      18463.981503510004,
      18695.036454420002,
      16815.470789600004,
      17771.54711552,
      17847.052421,
      18721.224984340002,
      17814.1640952,
      18081.16859596,
      18463.723324200004,
      18033.752748,
      17966.41009632,
      18217.940202,
      19468.28962,
      19569.421589079997,
      19065.570734691,
    ]
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt: any) {
        return [pt[0], '10%'];
      }
    },
    title: {
      text: ''
    },
    toolbox: null,
    grid: {
      show: false,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data2.time,
      show: false,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      show: false,
    },
    series: [
      {
        name: 'BTC market prices',
        type: 'bar',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(0,184,141)',
          borderRadius: [5, 5, 0, 0],
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0,
              // color: 'rgb(21, 21, 25)'
              color: "white",
            }, {
              offset: 1,
              color: 'slateblue'
            }]
          }
        },
        data: data2.price
      }
    ],
  };

  return (
    <>
      <ReactEcharts style={{ width: "100%" }} option={option} />
    </>
  )
}

export default BarChartSample