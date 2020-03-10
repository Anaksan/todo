import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  },
  {
    text: 'Common',
    id: 'common'
  },
  {
    text: 'Important',
    id: 'important'
  },
  {
    text: 'Very Important',
    id: 'very important'
  }
];

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button 
          onClick={()=>{changeFilter(id)}}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Footer.defaultProps = {
  activeFilter: 'all',
  changeFilter: ()=>{},
}

export default Footer;
