import { useMemo, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import BarChart from "./components/BarChart";
import bkkPopulationGrowthData from "./data/db.json";

function App() {
  const district = useMemo(() => {
    return bkkPopulationGrowthData.map(({ dcode, name }) => ({
      dcode: dcode,
      name: name,
    }));
  }, []);
  const [selectedDistrict, setSelectedDistrict] = useState(district[4]);
  const years = useMemo(
    () => [
      {
        id: 0,
        value: 2550,
      },
      {
        id: 1,
        value: 2551,
      },
      {
        id: 2,
        value: 2552,
      },
      {
        id: 3,
        value: 2553,
      },
      {
        id: 4,
        value: 2554,
      },
      {
        id: 5,
        value: 2555,
      },
      {
        id: 6,
        value: 2556,
      },
      {
        id: 7,
        value: 2557,
      },
      {
        id: 8,
        value: 2559,
      },
      {
        id: 9,
        value: 2559,
      },
    ],
    []
  );

  const filterData = useMemo(() => {
    return bkkPopulationGrowthData.filter(
      (data) => data.name === selectedDistrict.name
    );
  }, [selectedDistrict]);

  const [minYear, setMinYear] = useState(years[0]);
  const [maxYear, setMaxYear] = useState(years[years.length - 1]);

  console.log("district:", district);
  console.log("selectedDistrict:", selectedDistrict);
  console.log("filterData:", filterData);
  console.log(minYear, maxYear);

  return (
    <div className="h-full px-4 space-y-8 md:px-8 text-start m-auto py-8 w-full md:max-w-[1024px]">
      <h1>สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</h1>
      {/* describtion */}
      <section className="w-full space-y-6">
        {/* title */}
        <h3>ลักษณะพื้นที่</h3>
        {/* detail */}
        <p>
          กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดใน
          ประเทศไทยหากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
          คาดว่าจะสูงถึงเกือบเท่าตัวของ ประชากรที่ปรากฏในทะเบียน เราจึงเรียก
          กรุงเทพฯ ว่าเป็น{" "}
          <a className="underline underline-offset-2">“อภิมหานคร (megacity)”</a>{" "}
          คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
        </p>
        <p>
          อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559
          ดังแสดงในแผนภูมิ ต่อไปนี้
        </p>
      </section>
      {/* chart */}
      <section className="w-full space-y-6">
        {/* title */}
        <h3>การเติบโต</h3>
        {/* slection */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-4">
          {/* district */}
          <div className="w-full flex gap-x-4 md:gap-x-8 items-center">
            {/* label */}
            <p className="text-[14px]">เขต</p>
            {/* selector */}
            <div className="w-full md:w-1/2 rounded-sm">
              <Listbox value={selectedDistrict} onChange={setSelectedDistrict}>
                <div className="relative w-full text-sm text-primary-dark">
                  <Listbox.Button className="relative w-full bg-primary-light text-start p-1 rounded-sm cursor-default flex justify-between items-center">
                    <span className="flex justify-center text-xs sm:text-sm ml-1">
                      {selectedDistrict.name}
                    </span>
                    <span>
                      <ChevronUpDownIcon className="h-4 w-4 md:h-5 md:w-5" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-1 bg-primary-light text-primary-dark overflow-auto scrollbar-hide rounded-sm max-h-48 p-2 w-full">
                    {district.map((data) => (
                      <Listbox.Option
                        className={({
                          active,
                        }) => `relative cursor-default select-none p-1 ${
                          active ? "text-primary-pink" : "text-primary-dark"
                        }
                        `}
                        key={data.dcode}
                        value={data}
                      >
                        {data.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
          {/* year */}
          <div className="w-full flex gap-x-6 items-center">
            {/* min year */}
            <div className="w-full flex gap-x-4 md:gap-x-8 items-center">
              {/* label */}
              <p className="text-[14px]">ตั้งแต่</p>
              {/* selector */}
              <div className="w-full">
                <Listbox value={minYear} onChange={setMinYear}>
                  <div className="relative w-full text-sm text-primary-dark">
                    <Listbox.Button className="relative w-full bg-primary-light text-start p-1 rounded-sm cursor-default flex justify-between items-center">
                      <span className="flex justify-center text-xs sm:text-sm ml-1">
                        {minYear.value}
                      </span>
                      <span>
                        <ChevronUpDownIcon className="h-4 w-4 md:h-5 md:w-5" />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 bg-primary-light text-primary-dark overflow-auto scrollbar-hide rounded-sm max-h-48 p-2 w-full">
                      {years.map((data) => (
                        <Listbox.Option
                          className={({
                            active,
                          }) => `relative cursor-default select-none p-1 ${
                            active ? "text-primary-pink" : "text-primary-dark"
                          }
                        `}
                          key={data.id}
                          value={data}
                        >
                          {data.value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
            {/* max year */}
            <div className="w-full flex gap-x-4 md:gap-x-8 items-center">
              {/* label */}
              <p className="text-[14px]">ถึง</p>
              {/* selector */}
              <div className="w-full">
                <Listbox value={maxYear} onChange={setMaxYear}>
                  <div className="relative w-full text-sm text-primary-dark">
                    <Listbox.Button className="relative w-full bg-primary-light text-start p-1 rounded-sm cursor-default flex justify-between items-center">
                      <span className="flex justify-center text-xs sm:text-sm ml-1">
                        {maxYear.value}
                      </span>
                      <span>
                        <ChevronUpDownIcon className="h-4 w-4 md:h-5 md:w-5" />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 bg-primary-light text-primary-dark overflow-auto scrollbar-hide rounded-sm max-h-48 p-2 w-full">
                      {years.map((data) => (
                        <Listbox.Option
                          className={({
                            active,
                          }) => `relative cursor-default select-none p-1 ${
                            active ? "text-primary-pink" : "text-primary-dark"
                          }
                        `}
                          key={data.id}
                          value={data}
                        >
                          {data.value}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
        {/* bar chart */}
        <BarChart data={filterData} />
      </section>
      {/* reference */}
      <section className="w-full space-y-6">
        {/* title */}
        <h3>แหล่งข้อมูล</h3>
        {/* detail */}
        <ul className="list-disc list-outside pl-6 underline underline-offset-2 text-[14px]">
          <li className="pl-2">
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, จำนวนประชากร,
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, Editor. 2564:
            กรุงเทพฯ.
          </li>
          <li className="pl-2">
            สำนักงานสถิติแห่งชาติ, การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ.
            2563 สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ
          </li>
          <li className="pl-2">
            สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์,
            ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า
            กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
