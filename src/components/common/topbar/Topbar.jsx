import React from 'react';
import { MENUITEMS } from './topmenu';

const Topbar = () => {
  return (
    <nav className="topbar">
      <ul className="menu">
        {MENUITEMS.map((item, index) => (
          <li key={index} className="menu-item">
            {item.children ? (
              <div className="dropdown">
                {item.icon}
                <span>{item.title}</span>
                <ul className="dropdown-menu">
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      <a href={child.path}>{child.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;
