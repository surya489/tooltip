import React from "react";
import './ToolTipCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const ToolTipCard = ({ date, title, bodyItems, total, totalValue, extension }) => {
    return (
        <div className="tooltip_card_wrap">
            <div className="tooltip_card">
                <div className="content">
                    {date && <span className="date">{date}</span>}
                    {title && <span className="title">{title}</span>}

                    {bodyItems.map((item, index) => (
                        <div className="body" key={index}>
                            <div>
                                {item.color && (
                                    <span className={`${item.color} ${item.square && item.color ? 'square' : item.color ? 'color' : ''}`}></span>
                                )}
                                {item.icon === "run" && (
                                    <span className={`${item.icon}`}><FontAwesomeIcon icon={faRunning} className="icon" /></span>
                                )}
                                {item.icon === "swim" && (
                                    <span className={`${item.icon}`}><FontAwesomeIcon icon={faSwimmer} className="icon" /></span>
                                )}
                                <span className="text">{item.text}</span>
                            </div>
                            <div>
                                <span className="value">{item.value}</span>
                            </div>
                        </div>
                    ))}

                    {total && totalValue && (
                        <div className="totalValue">
                            <span className="total">Total</span>
                            <span className="total_value">
                                {totalValue}
                                {extension && <span>{extension}</span>}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ToolTipCard;
