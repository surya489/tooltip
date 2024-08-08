import React from "react";
import './ToolTipCard.css';

const ToolTipCard = ({ date, title, bodyItems, total, totalValue, extension }) => {
    return (
        <div className="tooltip_card_wrap">
            <div className="tooltip_card">
                <div className="content">
                    {date && <span className="date">{date}</span>}
                    {title && <span className="title">{title}</span>}

                    {/* Map through the bodyItems array to create multiple body sections */}
                    {bodyItems.map((item, index) => (
                        <div className="body" key={index}>
                            <div>
                                {item.color && (
                                    <span className={`${item.color} ${item.square ? 'square' : ''}`}></span>
                                )}
                                {item.icon && (
                                    <span className={`${item.icon}`}></span>
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
        </div>
    );
};

export default ToolTipCard;
