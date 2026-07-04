import React from 'react';
import { Search, Sparkles, Moon, ChevronUp, ChevronDown } from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  'Introduction',
  'Authentication',
  'Errors',
  'Expanding Responses',
  'Idempotent requests',
  'Include-dependent response values (API v2)',
  'Metadata',
  'Pagination',
  'Request IDs',
  'Connected Accounts',
  'Versioning'
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-area">
          <span className="stripe-logo">stripe</span>
          <span className="api-text">API</span>
          <div className="theme-toggle">
            <div className="toggle-thumb">
              <Moon size={12} className="moon-icon" />
            </div>
          </div>
        </div>
        
        <div className="search-bar">
          <div className="search-input-wrapper">
            <Search size={14} className="search-icon" />
            <span className="search-placeholder">Find anything</span>
          </div>
          <button className="ask-ai-btn">
            <Sparkles size={12} /> Ask AI
          </button>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={item} className={index === 0 ? 'active' : ''}>
              <a href="#">{item}</a>
            </li>
          ))}
          <li className="nav-group">
            <div className="nav-group-header">
              Core Resources
              <ChevronDown size={14} />
            </div>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-item">
          <ChevronUp size={14} className="mr-2" /> Developers
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
