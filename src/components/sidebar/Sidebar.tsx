import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className='sidebar_text_logo'>
          <h3>Codling</h3>
        </li>
        <li>
          <p className='sidebar_description'>사이트 관리</p>
        </li>
        <li className="sidebar__menu-item" >
          <Link to="/Sidepagemain" className="sidebar__menu-link">
            대시보드
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage1" className="sidebar__menu-link">
            상품 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage2" className="sidebar__menu-link">
            주문 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage3" className="sidebar__menu-link">
            회원 관리
          </Link>
        </li>

        <li>
          <p className='sidebar_description'>사이트 관리</p>
        </li>
        <li className="sidebar__menu-item" >
          <Link to="/Sidepagemain" className="sidebar__menu-link">
            대시보드
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage1" className="sidebar__menu-link">
            상품 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage2" className="sidebar__menu-link">
            주문 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage3" className="sidebar__menu-link">
            회원 관리
          </Link>
        </li>

        <li>
          <p className='sidebar_description'>비즈니스 센터</p>
        </li>
        <li className="sidebar__menu-item" >
          <Link to="/Sidepagemain" className="sidebar__menu-link">
            대시보드
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage1" className="sidebar__menu-link">
            상품 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage2" className="sidebar__menu-link">
            주문 관리
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage3" className="sidebar__menu-link">
            회원 관리
          </Link>
        </li>



        <li>
          <p className='sidebar_description'>사이트 설정</p>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/Sidepage4" className="sidebar__menu-link">
            설정
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;