import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-right">
        <button className="header-dropdown">
          2026-06-24.dahlia <ChevronDown size={14} className="icon-ml" />
        </button>
        <button className="header-dropdown active">
          API Reference <ChevronDown size={14} className="icon-ml" />
        </button>
        <a href="#" className="header-link">Docs</a>
        <a href="#" className="header-link">Support</a>
        <a href="#" className="header-link">
          Sign in <ArrowRight size={14} className="icon-ml" />
        </a>
      </div>
    </header>
  );
}

export default Header;
