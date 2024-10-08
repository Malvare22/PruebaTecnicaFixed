import { Cascader, Col, Dropdown, Input, Row, Space } from "antd"
import type { GetProps, MenuProps } from 'antd';
import './Sorter.css'
import { useContext, useState } from "react";
import CompactDown from "../../assets/svg/searchBar/CompactDown";
import { FiltersContext } from "../../context/FiltersContext";

function Sorter() {

  const {sorter, setSorter} = useContext(FiltersContext);

  const tags: string[] = ['Mejores Reviews', 'Peores Reviews', 'Mayor Precio', 'Menor Precio'];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => setSorter(0)}>
          {tags[0]}
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => setSorter(1)}>
          {tags[1]}
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => setSorter(2)}>
          {tags[2]}
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div onClick={() => setSorter(3)}>
          {tags[3]}
        </div>
      ),
    },
  ];

  return (
    <>
      <Row style={{width: '100%'}} align={'middle'} className="sorterStyles">
        <Col span={12} className="label">Ordenar por</Col>
        <Col span={12} className="dropMenu">
          <Dropdown menu={{ items }}>
            <div>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}><div style={{marginRight: '10px'}}>{tags[sorter]}</div><CompactDown></CompactDown></div>
              </Space>
            </a>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </>
  )
}

export default Sorter
