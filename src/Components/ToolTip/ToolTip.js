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
                        { text: 'Swimming', value: '150' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '150' },
                        { text: 'Swimming', value: '150' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '150' },
                        { text: 'Swimming', value: '150' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { text: 'Running', value: '150', icon: 'run' },
                        { text: 'Swimming', value: '150', icon: 'swim' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '150' },
                        { color: 'red', square: true, text: 'Swimming', value: '150' }
                    ]}
                    totalValue="150"
                    total
                    extension="KCal"
                />
                <ToolTipCard
                    title="Activities"
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '150' },
                        { color: 'red', square: true, text: 'Swimming', value: '150' }
                    ]}
                />
                <ToolTipCard
                    date="2024-07-16"
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '150' },
                        { color: 'red', square: true, text: 'Swimming', value: '150' }
                    ]}
                />
                <ToolTipCard
                    bodyItems={[
                        { color: 'blue', square: true, text: 'Running', value: '150' }
                    ]}
                />
            </div>
        </Center>
    );
};

export default ToolTip;
