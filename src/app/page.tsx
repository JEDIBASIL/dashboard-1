import { BarChartSample, StatCard1, TableSort, LineChartSample } from "@/components"
import "./page.css"
import { MdGroup, MdOutlineRemoveRedEye, MdOutlineStackedLineChart } from "react-icons/md";
import { Autocomplete, Burger } from "@mantine/core"

export default function Home() {
  const data = [{ name: 'a', value: 12 }]
  return (
    <>
      <div className="home">
        <div className="page_bar">
          <h2>Home</h2>
          <div className="right">
            {/* <Burger /> */}
          </div>
        </div>
        <div className="page_content">
          <div className="top">
            <StatCard1 color="blue" label="Total sales" amount="₦400k" icon={<MdOutlineStackedLineChart />} />
            <StatCard1 color="orange" label="Total users" amount="500" icon={<MdGroup />} />
            <StatCard1 color="red" label="Total sales" amount="400k" icon={<MdOutlineStackedLineChart />} />
            <StatCard1 color="green" label="Today visit" amount="50" icon={<MdOutlineRemoveRedEye />} />
          </div>

          <div className="chart_container">
            <div className="chart_content">
              <div className="chart_card">
                <p className="title">
                  Top product
                </p>
                <BarChartSample />
              </div>
              <div className="chart_card">
                <p className="title">
                  Income
                </p>
                <LineChartSample />
              </div>
            </div>
          </div>

          <div className="table_container">
            <h3>Table</h3>
            <div className="table_content">
              <TableSort />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
