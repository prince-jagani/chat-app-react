import React, { forwardRef } from "react";
import { ResizableBox, ResizeHandle } from "react-resizable";
import './resize.css'
import { IconGripVertical } from "@tabler/icons-react";

interface ResizeBoxProps {
    direction: ResizeHandle,
    defaultSize: [number, number]
    min: [number, number],
    max: [number, number]
}

interface CustomResizeHandleProps {
    handleAxis: string;
}

const CustomResizeHandle = forwardRef<HTMLDivElement, CustomResizeHandleProps>((props, ref) => {
    const { handleAxis, ...restProps } = props;
    return (
        <>
            <div
                className={`custom-handle custom-handle-${handleAxis} custom-resize-handle-component`}
                ref={ref}
                {...restProps}
            ><IconGripVertical size={16} /></div>
        </>
    );
});



const ResizeBox: React.FC<React.PropsWithChildren<ResizeBoxProps>> = ({ direction, children, min, max, defaultSize }) => {

    return <ResizableBox width={defaultSize[0]} height={defaultSize[1]}
        handle={<CustomResizeHandle
            handleAxis="e" />}
        resizeHandles={[direction]}
        minConstraints={min}
        maxConstraints={max}
        onResize={() => {
            document.body.style.cursor = "ew-resize"
        }}
        onResizeStop={() => document.body.style.cursor = "auto"}
    >
        <div className="content">
            {children}</div> </ResizableBox>
}

export default ResizeBox;