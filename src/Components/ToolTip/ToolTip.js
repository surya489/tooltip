import React from "react";
import "./ToolTip.css";
import Center from "../Center/Center";
import ToolTipCard from "../ToolTipCard/ToolTipCard";

const ToolTip = () => {
    return (
        <Center>
            <div className="tooltip_wrap">
                <ToolTipCard
                    date="2024-07-16"
                    bodyItems={[
                        { color: 'red', square: true, text: 'Running', value: '380' },
                        { color: 'blue', square: true, text: 'Cycling', value: '120' }
                    ]}
                />
                <ToolTipCard
                    title="Activities"
                    bodyItems={[
                        { color: 'green', square: true, text: 'Swimming', value: '250' },
                        { color: 'yellow', square: true, text: 'Hiking', value: '450' }
                    ]}
                    totalValue="700"
                    total
                />
                <ToolTipCard
                    title="Activities"
                    bodyItems={[
                        { color: 'orange', square: true, text: 'Yoga', value: '150' }
                    ]}
                    totalValue="150"
                    total
                    extension="KCal"
                />
            </div>
        </Center>
    );
};

export default ToolTip;
