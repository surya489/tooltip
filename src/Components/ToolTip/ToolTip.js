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
                        { color: 'blue', square: true, text: 'Running', value: '380' },
                        { color: 'red', square: true, text: 'Swimming', value: '120' }
                    ]}
                />
                <ToolTipCard
                    date="2024-07-16"
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '250' },
                        { color: 'red', square: true, text: 'Swimming', value: '450' }
                    ]}
                />
                <ToolTipCard
                    date="2024-07-16"
                    bodyItems={[
                        { text: 'Running', value: '150' },
                        { text: 'Swimming', value: '90' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '50' },
                        { text: 'Swimming', value: '10' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '15' },
                        { text: 'Swimming', value: '50' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '10', icon: 'run' },
                        { text: 'Swimming', value: '150', icon: 'swim' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { color: 'blue', square: false, text: 'Running', value: '100' },
                        { color: 'red', square: false, text: 'Swimming', value: '200' }
                    ]}
                    totalValue="300"
                    total
                    extension="KCal"
                />
                <ToolTipCard
                    title="Activities"
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '86' },
                        { color: 'red', square: true, text: 'Swimming', value: '69' }
                    ]}
                />
                <ToolTipCard
                    date="2024-07-16"
                    bodyItems={[
                        { color: 'blue', square: false, text: 'Running', value: '29' },
                        { color: 'red', square: false, text: 'Swimming', value: '99' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { color: 'blue', square: false, text: 'Running', value: '480' }
                    ]}
                />
            </div>
        </Center>
    );
};

export default ToolTip;
