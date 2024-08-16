import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import Man from '../../assets/img/buying.png';
import './Modal.css'
import { Check } from '../../assets/svg/Check';
import { DataContext } from '../../context/DataContext';


const ProductModal = () => {
  const {modalProduct, openModal: isModalOpen, setOpenModal: setIsModalOpen} = useContext(DataContext);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if(modalProduct == null) return<></>;

  return (
    <>
      <Modal className='modalStyle' closeIcon={false} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel}>
        
        <img src={Man} width={'520px'}></img>
        <div style={{display: 'flex', justifyContent:'center', margin: '20px'}}>
          <div>
            <img src={modalProduct.img[0]} width={'120px'} height={'140px'}></img>
          </div>
          <div style={{paddingLeft: '20px', width: '300px'}}>
            <div style={{color: '#004AC1', fontSize: '16px', fontWeight:'bold', textAlign:'end'}}>${modalProduct?.price} x 1</div>
            <div style={{color: '#2B3445', fontSize: '16px', fontWeight:'bold', width:'60%'}}>{modalProduct?.name}</div>
            <div style={{color: '#7D879C', fontSize: '14px', fontWeight:'bold'}}>Color seleccionado: {modalProduct?.color}</div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent:'space-between', alignContent:'center', padding:'18px 40px 18px 40px', borderTop:'1px #707070 solid', borderBottom:'1px #707070 solid'}}>
          <div style={{color: '#7D879C', fontSize:'16px', fontWeight:'bolder'}}>1 ítem en tu carrito</div>
          <div style={{display: 'flex', alignContent: 'center'}}>
            <div style={{color: '#7D879C', fontSize:'16px', fontWeight:'bolder'}}>Subtotal</div>
            <div style={{color: '#004AC1', fontSize:'16px', fontWeight:'bolder', marginLeft:'10px'}}>${modalProduct?.price}</div>
          </div>
        </div>
        <div className='rows'>
          <div style={{display: 'flex' , justifyContent: 'center', alignContent:'center', alignItems: 'center', marginBottom: '10px'}}>
            <div style={{width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignContent:'center', alignItems:'center', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', borderRadius:'50%'}}><div className={'check'}><Check></Check></div></div>
          </div>
          <div style={{color:'#2B3445', fontWeight: 'bold', fontSize:'14px'}}>Te vas a llevar este celular por solo</div>
          <div style={{color:'#2B3445', fontWeight: 'bold', fontSize:'20px'}}>$120 p/semana!</div>
          <div style={{fontWeight: 'bold', fontSize:'20px'}}><Button 
          style={{margin: '14px', backgroundColor: '#FFD300', color: '#004AC1', fontSize:'16px', fontWeight: 'bold', height: '56px', width: '220px'}
        }>COMPRAR A CRÉDITO</Button></div>
          <div style={{color:'#2B3445', fontStyle:'italic', fontSize:'12px'}}>o puedes</div>
          <div style={{color:'#004AC1', fontWeight: 'bold', fontSize:'14px'}}>Comprar a contado</div>
        </div>
      </Modal>
    </>
  );
};

export default ProductModal;