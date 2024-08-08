import React from "react";

import './ToolTipCard.css';

const ToolTipCard = ({ date, color, icon, text, value, total, totalValue, square, title, extension }) => {
    return (
        <div className="tooltip_card_wrap">
            <div className="tooltip_card">
                <div className="content">
                    {date && (
                        <span className="date">{date}</span>
                    )}
                    {title && (
                        <span className="date">{title}</span>
                    )}
                    <div className="body">
                        <div>
                            {color && (
                                <span className={`${color} ${square ? 'square' : ''}`}>{color}</span>
                            )}
                            {icon && (
                                <span className={`${icon}`}></span>
                            )}
                            <span className="text">{text}</span>
                        </div>
                        <div>
                            <span className="value">{value}</span>
                        </div>
                    </div>
                    {total && totalValue && (
                        <div className="totalValue">
                            <span className="total">Total</span>
                            <span className="total_value">{totalValue}
                                {extension && (
                                    <span>{extension}</span>
                                )}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ToolTipCard;