import React from "react";

import "./ToolTip.css";

import Center from "../Center/Center";
import ToolTipCard from "../ToolTipCard/ToolTipCard";

const ToolTip = () => {
    return (
        <Center>
            <div className="tooltip_wrap">
                <ToolTipCard date='2024-07-16' text='Running ' color square value='380' />
                <ToolTipCard date='2024-07-16' text='Running ' color square value='380' />
                <ToolTipCard date='2024-07-16' text='Running ' color square value='380' />
                <ToolTipCard text='Running ' value='380' />
                <ToolTipCard title='Activities' text='Running ' color square value='380' />
                <ToolTipCard title='Activities' text='Running ' totalValue="330" total color square value='380' />
                <ToolTipCard title='Activities' text='Running ' totalValue="330" total extension='KCl' color square value='380' />
            </div>
        </Center>
    )
}

export default ToolTip;