import { Cascader, Dropdown, Input, Space } from "antd"
import type { GetProps, MenuProps } from 'antd';
import './Sorter.css'
import { useState } from "react";
import CompactDown from "../../assets/svg/searchBar/CompactDown";

function Sorter() {

  const [category, setCaterogy] = useState(0);

  const tags: string[] = ['Mejores Reviews', 'Peores Reviews', 'Mayor Precio', 'Menor Precio'];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => setCaterogy(0)}>
          {tags[0]}
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => setCaterogy(1)}>
          {tags[1]}
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => setCaterogy(2)}>
          {tags[2]}
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div onClick={() => setCaterogy(3)}>
          {tags[3]}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="sorterStyles" style={{display: 'flex', alignItems: 'center', alignContent: 'center'}}>
        <div className="label">Ordenar por</div>
        <div className="dropMenu">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}><div style={{marginRight: '10px'}}>{tags[category]}</div><CompactDown></CompactDown></div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default Sorter
