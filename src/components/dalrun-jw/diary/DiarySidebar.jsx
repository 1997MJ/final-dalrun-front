﻿import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UploadModal from './UploadModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/dalrun-jw/scss/_modal.scss'


const DiarySidebar = () => {
  const loginData = JSON.parse(localStorage.getItem("login"));
  let memId = null;
  if(loginData){
    memId = loginData.memId;
  }

  const loginAlert = ( (event) => {
    if(!loginData){
      event.preventDefault();
      alert('로그인이 필요합니다.');
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = (e) => {
    if(loginData){
      setModalOpen(true);
    } else { 
      e.preventDefault();
      alert('로그인이 필요합니다.');
    }
  };
  const closeModal = () => setModalOpen(false);

  return (

    <header className='diary-navbar-container'>

      <Link to="/" title="Home" className='logo-Link'>
        <img src="logo.svg" className='logo'/>
      </Link>
      <nav className='head-nav'>
        <ul>
          <li className='nav-item'>
            <Link to={`?search=${memId}`} title='내 기록' onClick={loginAlert}>
              <FontAwesomeIcon icon={faCircleUser} size='xl' style={{color:"#74EABC"}} />
              <span>내 기록</span>
            </Link>
          </li>
          <li className='nav-item'>
            <button onClick={handleModal}>
              <FontAwesomeIcon icon={faCloudArrowUp} size="xl" style={{color:"#74EABC"}}/>
              <span>업로드</span>
            </button>
            <UploadModal open={modalOpen} close={closeModal}/>
          </li>
          <li className='nav-item'>
            <Link to="/">
            <FontAwesomeIcon icon={faCircleQuestion} size="xl" style={{color:"#74EABC"}}/>
              <span>업로드</span>
              <span style={{marginTop:'0', marginRight:'0.2rem'}}>방법</span>
            </Link>
          </li>
        </ul>
        <div className='dropup-container'>
          <MyDropdown/>
        </div>
      </nav>
    </header>

  );
}
export default DiarySidebar

// 프로필 드롭업
function MyDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = ( () => {
    sessionStorage.removeItem("login");
  });

  return (

    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: 'auto' }}>
        <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
} // <MYDropdown/>