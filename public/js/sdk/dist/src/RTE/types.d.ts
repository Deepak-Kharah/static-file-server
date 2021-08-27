import React from "react";
import { RTEPlugin } from "./index";
export declare interface IRteParam {
    [key: string]: any;
}
export declare type IOnFunction = {
    exec: () => {};
    render: (element: React.ReactElement, attrs: {
        [key: string]: any;
    }, path: number[], rte: IRteParam) => React.ReactElement;
    normalize: (rte: IRteParam) => {};
    insertBreak: (rte: IRteParam) => {};
    deleteBackward: (rte: IRteParam) => {};
    deleteForward: (rte: IRteParam) => {};
    beforeRender: (rte: IRteParam) => {};
    beforeChildRender: () => {};
    copy: (rte: IRteParam) => void;
};
export declare type IOnType = "exec" | "normalize" | "deleteBackwards" | "deleteForwards" | "render" | "insertBreak" | "beforeRender" | "beforeChildRender" | "copy" | "paste";
export declare type IDisplayOnOptions = "toolbar" | "hoveringToolbar";
export declare type IElementTypeOptions = "inline" | "void" | "block" | "text";
export declare interface IDnd {
    disable: boolean;
    hideSelectionBackground: boolean;
    icon?: React.ReactElement;
    className: string;
    droppableContainer: (elementType: string, path: number[]) => string;
    disableColumnLayout: boolean;
}
export declare interface IConfig {
    icon: React.ReactElement;
    displayOn: IDisplayOnOptions | IDisplayOnOptions[];
    elementType: IElementTypeOptions | IElementTypeOptions[];
    dnd: IDnd;
}
export declare interface IRegistryDnd {
    DisableDND: boolean;
    DisableSelectionHalo: boolean;
    CustomDndIcon: React.ReactElement;
    ContainerClassName: "scrte-table-row-dnd-container";
    getDroppableContainer: (elementType: string, path: number[]) => string;
    DisableGridDnd: boolean;
}
export declare interface IRegistry {
    title: string;
    icon?: React.ReactElement;
    category?: string;
    toolbar: {
        inMainToolbar: boolean;
        inHoveringToolbar: boolean;
    };
    dndOptions: Partial<IRegistryDnd>;
    beforeChildrenRender?: (...params: any) => any;
    beforeElementRender?: (...params: any) => any;
    handleMouseDown?: (...params: any) => any;
    Component?: (...params: any) => any;
}
export declare interface IMeta {
    id: string;
    elementType: null | IElementTypeOptions | IElementTypeOptions[];
    editorCallbacks: {
        [key: string]: any;
    };
    isDependent: boolean;
}
export declare interface IPluginMetaData {
    registry: IRegistry;
    meta: IMeta;
}
export declare interface IContainerRegistry {
    id: string;
    title: string;
    rootCategory: false;
    toolbar: {
        inMainToolbar: boolean;
        inHoveringToolbar: boolean;
    };
}
export declare interface IContainerMeta {
    id: string;
    dependentPlugins: RTEPlugin[];
}
export declare interface IContainerMetaData {
    registry: IContainerRegistry;
    meta: IContainerMeta;
}
//# sourceMappingURL=types.d.ts.map