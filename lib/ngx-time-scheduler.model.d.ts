import * as moment from 'moment';
export declare class Period {
    name: string;
    classes: string;
    timeFramePeriod: number;
    timeFrameOverall: number;
    timeFrameHeaders: string[];
    timeFrameHeadersTooltip?: string[];
    tooltip?: string;
}
export declare class Item {
    id: number;
    name: string;
    start: moment.Moment;
    end: moment.Moment;
    classes: string;
    sectionID: number;
    tooltip?: string;
    allocation?: number;
}
export declare class Section {
    id: number;
    name: string;
    tooltip?: string;
    userId?: string;
}
export declare class Text {
    NextButton: string;
    PrevButton: string;
    TodayButton: string;
    GotoButton: string;
    SectionTitle: string;
    constructor();
}
export declare class Events {
    ItemDropped: (item: Item) => void;
    ItemClicked: (item: Item) => void;
    ItemContextMenu: (item: Item, event: MouseEvent) => void;
    SectionClickEvent: (section: Section) => void;
    SectionContextMenuEvent: (section: Section, event: MouseEvent) => void;
    PeriodChange: (start: moment.Moment, end: moment.Moment) => void;
}
export declare class SectionItem {
    section: Section;
    minRowHeight: number;
    itemMetas: ItemMeta[];
    constructor();
}
export declare class ItemMeta {
    item: Item;
    isStart: boolean;
    isEnd: boolean;
    cssTop: number;
    cssLeft: number;
    cssWidth: number;
    constructor();
}
export declare class Header {
    headerDetails: HeaderDetails[];
    constructor();
}
export declare class HeaderDetails {
    name: string;
    colspan: number;
    tooltip?: string;
}
