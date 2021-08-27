import { IConfig, IOnFunction, IPluginMetaData } from "./types";
export default class RTEPlugin {
    private pluginMetaData;
    private isContainer;
    private containerMetaData;
    static allPlugins: never[];
    static register: () => void;
    constructor(pluginMetaData: IPluginMetaData);
    addPlugins: (...plugins: RTEPlugin[]) => void;
    register: () => void;
    on: <Type extends keyof IOnFunction>(type: Type, callback: IOnFunction[Type]) => void;
}
export declare const pluginApp: (id: string, title: string, config: Partial<IConfig>) => RTEPlugin;
//# sourceMappingURL=index.d.ts.map