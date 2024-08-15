import { Cascader, Dropdown, Input, Space } from "antd"
import Search from "antd/es/transfer/search"
import type { GetProps, MenuProps } from 'antd';
import './SearchBar.css'
import { useContext, useState } from "react";
import CompactDown from "../../assets/svg/searchBar/CompactDown";
import { FiltersContext } from "../../context/FiltersContext";

function SearchBar() {

  const {searchText, setSearchText, category, setCaterogy} = useContext(FiltersContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }
          
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
      <div className="searchBarStyles" style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
        <div className="input"><Search placeholder="Encuentra el producto que necesitas" onChange={handleInput}/></div>
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
