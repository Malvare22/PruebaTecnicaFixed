import { Cascader, Dropdown, Input, Space } from "antd"
import Search from "antd/es/transfer/search"
import type { GetProps, MenuProps } from 'antd';
import './SearchBar.css'
import { useState } from "react";
import CompactDown from "../../assets/svg/searchBar/CompactDown";
type SearchProps = GetProps<typeof Input.Search>;



const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

function SearchBar() {

  const [category, setCaterogy] = useState(0);

          
  const tags: string[] = ['Todas las categorías', 'Celulares', 'Motocicletas'];

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
  ];

  return (
    <>
      <div className="searchBarStyles" style={{display: 'flex', alignItems: 'center'}}>
        <div className="input"><Search placeholder="Encuentra el producto que necesitas"/></div>
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

export default SearchBar
