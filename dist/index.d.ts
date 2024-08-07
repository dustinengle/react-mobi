import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, ReactElement } from 'react';

interface Alignments {
    center?: boolean;
    justify?: boolean;
    left?: boolean;
    right?: boolean;
}
interface Arrangements {
    ordered?: boolean;
    unordered?: boolean;
}
interface Behaviors {
    contain?: boolean;
    cover?: boolean;
    fill?: boolean;
    responsive?: boolean;
}
interface Contexts {
    danger?: boolean;
    default?: boolean;
    info?: boolean;
    success?: boolean;
    warning?: boolean;
}
interface Directions {
    horizontal?: boolean;
    vertical?: boolean;
}
interface Justifications {
    around?: boolean;
    between?: boolean;
    center?: boolean;
    end?: boolean;
    evenly?: boolean;
    start?: boolean;
}
interface Lines {
    dashed?: boolean;
    solid?: boolean;
}
interface Locations {
    cover?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
}
interface Orientations {
    center?: boolean;
    end?: boolean;
    start?: boolean;
    stretch?: boolean;
}
interface Roles {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
}
interface Sizes {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
}
interface Styles {
    bold?: boolean;
    capitalize?: boolean;
    italic?: boolean;
    legal?: boolean;
    lower?: boolean;
    strike?: boolean;
    sub?: boolean;
    super?: boolean;
    underline?: boolean;
    upper?: boolean;
}

interface Amount {
    max: number;
    min?: number;
    payment?: number;
    percentage?: number;
}
interface APR {
    breakdowns: Array<Breakdown>;
    formula: string;
    max: number;
    min: number;
}
interface Breakdown {
    amount: number;
    apr: number;
    cycles: number;
    fees: number;
    rewards: number;
}
interface Charge {
    amount: number;
    max: number;
    min: number;
}
interface Dimensions {
    height?: number | string;
    width?: number | string;
}
interface Fee {
    amount: number;
    max?: number;
    min?: number;
    rate: number;
}
interface Positions {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
}
interface Spacings {
    margin?: number | string;
    padding?: number | string;
}

type Align = 'center' | 'end' | 'start' | 'stretch';
type Context = 'danger' | 'info' | 'success' | 'warning';
type FormData = Record<string, boolean | number | string>;
type Justify = 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';
type Position = 'cover' | 'bottom' | 'left' | 'right' | 'top';
type Role = 'primary' | 'secondary' | 'tertiary';
type Style = Record<string, number | string>;

interface Field {
    autocomplete?: string;
    error?: string;
    label: string;
    input: 'checkbox' | 'date' | 'email' | 'file' | 'number' | 'password' | 'radio' | 'select' | 'tel' | 'text' | 'textarea';
    max?: number;
    min?: number;
    name: string;
    options?: Record<string, string>;
    regex?: RegExp;
    required?: boolean;
    value?: boolean | number | string;
}
interface FormProps {
    fields: Array<Field>;
    handler: (data: FormData) => void;
    hideActions?: boolean;
    highlight?: 'none' | 'optional' | 'required';
    label?: string;
    resetLabel?: string;
    submitLabel?: string;
}
declare function Form({ fields, handler, hideActions, highlight, label, resetLabel, submitLabel }: FormProps): react_jsx_runtime.JSX.Element;

interface HeroProps extends Locations {
    children: ReactNode;
    image: string;
}
declare function Hero({ children, image, ...props }: HeroProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    callback: (yes: boolean) => void;
    children: ReactNode;
    no?: string;
    open: boolean;
    yes?: string;
}
declare function Modal({ children, callback, no, open, yes, ...props }: ModalProps): react_jsx_runtime.JSX.Element;

interface NavigationProps {
    children: ReactNode;
    logo: string;
}
declare function Navigation({ children, logo, ...props }: NavigationProps): react_jsx_runtime.JSX.Element;
interface NavigationLinkProps {
    children: ReactNode;
    href: string;
}
declare function NavigationLink({ children, href, ...props }: NavigationLinkProps): react_jsx_runtime.JSX.Element;

interface NotificationProps extends Contexts {
    callback?: () => void;
    children: ReactNode;
}
declare function Notification({ children, callback, ...props }: NotificationProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    page: number;
    pageHandler: (page: number) => void;
    pageLabel?: string;
    size?: number;
    sizes?: Array<number>;
    sizeHandler?: (size: number) => void;
    sizeLabel?: string;
    total: number;
}
declare function Pagination({ page, pageHandler, pageLabel, size, sizes, sizeHandler, sizeLabel, total, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;

interface Column {
    label: string;
    name: string;
}
interface TableProps {
    card?: boolean;
    cols: Array<Column>;
    header?: 'column' | 'none' | 'row';
    rows: Array<Record<string, any>>;
    footer?: ReactNode;
}
declare function Table({ card, cols, header, rows, footer, ...props }: TableProps): react_jsx_runtime.JSX.Element;

declare enum Icons {
    alert = "alert",
    attach = "attach",
    award = "award",
    calendar = "calendar",
    caret_down = "caret_down",
    caret_up = "caret_up",
    cash = "cash",
    cc_amex = "cc_amex",
    cc_discover = "cc_discover",
    cc_mastercard = "cc_mastercard",
    cc_visa = "cc_visa",
    check = "check",
    close = "close",
    comment = "comment",
    danger = "danger",
    delete = "delete",
    edit = "edit",
    email = "email",
    folder = "folder",
    hide = "hide",
    info = "info",
    lock = "lock",
    map = "map",
    message = "message",
    minus = "minus",
    next = "next",
    open = "open",
    plus = "plus",
    prev = "prev",
    print = "print",
    profile = "profile",
    restricted = "restricted",
    save = "save",
    settings = "settings",
    star = "star",
    success = "success",
    tag = "tag",
    unlock = "unlock",
    user = "user",
    view = "view",
    warning = "warning"
}
interface IconProps extends Sizes {
    color?: string;
    name?: Icons;
    src?: string;
    title?: string;
}
declare function Icon({ color, name, src, title, ...props }: IconProps): react_jsx_runtime.JSX.Element | null;

interface AccordionProps {
    children: ReactNode;
}
declare function Accordion({ children, ...props }: AccordionProps): react_jsx_runtime.JSX.Element;
interface AccordionItemProps {
    children: ReactNode;
    iconClose?: Icons;
    iconOpen?: Icons;
    title: string;
}
declare function AccordionItem({ children, iconClose, iconOpen, title, ...props }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface BodyProps {
    children: ReactNode;
    margin?: number | string;
    padding?: number | string;
}
declare function Body({ children, margin, padding, ...props }: BodyProps): react_jsx_runtime.JSX.Element;

interface CardProps extends Dimensions, Spacings {
    children: ReactNode;
    dark?: boolean;
    style?: Style;
}
declare function Card({ children, dark, style, ...props }: CardProps): react_jsx_runtime.JSX.Element;

interface CarouselProps {
    autoplay?: boolean;
    children: Array<ReactElement<CarouselItemProps>>;
    interval?: number;
}
declare function Carousel({ children, autoplay, interval, ...props }: CarouselProps): react_jsx_runtime.JSX.Element;
interface CarouselItemProps {
    active?: number;
    children: ReactNode;
    index?: number;
    next?: number;
    prev?: number;
}
declare function CarouselItem({ children, active, index, next, prev, ...props }: CarouselItemProps): react_jsx_runtime.JSX.Element;

interface FooterProps {
    children: ReactNode;
}
declare function Footer({ children, ...props }: FooterProps): react_jsx_runtime.JSX.Element;

interface HeaderProps {
    children: ReactNode;
}
declare function Header({ children, ...props }: HeaderProps): react_jsx_runtime.JSX.Element;

interface AmountsProps {
    amounts: Array<Amount>;
    charges: Array<Charge>;
    meta?: AmountsMetaProps;
}
interface AmountsMetaProps {
    amount: string;
    charge: string;
    title: string;
    upTo: string;
}
declare function AmountsTable({ amounts, charges, meta, }: AmountsProps): react_jsx_runtime.JSX.Element;
interface APRsProps {
    apr: APR;
    meta?: APRsMetaProps;
}
interface APRsMetaProps {
    amount: string;
    amountExtra?: string;
    apr: string;
    aprExtra?: string;
    cycles: string;
    cyclesExtra?: string;
    fees: string;
    feesExtra?: string;
    rewards: string;
    rewardsExtra?: string;
    rewardsSummary?: string;
    subTitle: string;
    summary: string;
    title: string;
}
declare function APRsTable({ apr, meta, ...props }: APRsProps): react_jsx_runtime.JSX.Element;
interface ChargesProps {
    charges: Array<Charge>;
    meta?: ChargesMetaProps;
}
interface ChargesMetaProps {
    balance: string;
    charge: string;
    noCharge: string;
    subTitle: string;
    subTitles?: Array<string>;
    summary: string;
    title: string;
}
declare function ChargesTable({ charges, meta, }: ChargesProps): react_jsx_runtime.JSX.Element;
interface FeesProps {
    fees: Array<Fee>;
    meta?: FeesMetaProps;
}
interface FeesMetaProps {
    subTitle: string;
    subTitleItems?: Array<string>;
    template: string;
    title: string;
}
declare function FeesTable({ fees, meta, }: FeesProps): react_jsx_runtime.JSX.Element;
interface SchumerProps {
    apr: APR;
    aprsMeta?: APRsMetaProps;
    charges: Array<Charge>;
    chargesMeta?: ChargesMetaProps;
    fees: Array<Fee>;
    feesMeta?: FeesMetaProps;
}
declare function Schumer({ apr, aprsMeta, charges, chargesMeta, fees, feesMeta, }: SchumerProps): react_jsx_runtime.JSX.Element;

interface StepperProps {
    children: ReactElement<StepperItemProps>[];
    finish: () => void;
    finishLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
}
declare function Stepper({ children, finish, finishLabel, nextLabel, prevLabel, ...props }: StepperProps): react_jsx_runtime.JSX.Element;
interface StepperItemProps {
    callback?: () => boolean;
    callbackLabel?: string;
    children: ReactNode;
    title?: string;
}
declare function StepperItem({ children, callback, callbackLabel, title, ...props }: StepperItemProps): react_jsx_runtime.JSX.Element;

declare function Animation(): null;

interface BackgroundProps extends Roles {
    children: ReactNode;
    style?: Style;
}
declare function Background({ children, style, ...props }: BackgroundProps): react_jsx_runtime.JSX.Element;

interface BadgeProps extends Contexts {
    children: ReactNode;
    count: number;
}
declare function Badge({ children, count, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends Roles {
    callback: (...args: any[]) => any;
    icon?: Icons;
    label: string;
}
declare function Button({ callback, icon, label, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface DividerProps extends Dimensions, Directions, Lines, Spacings {
    color?: string;
    dots?: boolean;
}
declare function Divider({ color, dots, ...props }: DividerProps): react_jsx_runtime.JSX.Element;

interface HeadingProps extends Alignments {
    children: ReactNode;
}
declare function H1({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H2({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H3({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H4({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H5({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;
declare function H6({ children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;

interface HighlightProps {
    bg?: string;
    children: ReactNode;
    fg?: string;
    style?: Style;
}
declare function Highlight({ children, bg, fg, style }: HighlightProps): react_jsx_runtime.JSX.Element;

interface ImageProps extends Behaviors, Dimensions, Spacings {
    alt?: string;
    caption?: string;
    src: string;
    style?: Style;
}
declare function Image({ alt, caption, src, style, ...props }: ImageProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    checked?: boolean;
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
}
declare function Checkbox({ children, handler, checked, error, id, name, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;
interface InputProps {
    autocomplete?: string;
    disabled?: boolean;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    type?: string;
    value?: string;
}
declare function Input({ autocomplete, disabled, error, handler, id, name, type, value, ...props }: InputProps): react_jsx_runtime.JSX.Element;
interface OptionProps {
    children: ReactNode;
    value: string;
}
declare function Option({ children, value, ...props }: OptionProps): react_jsx_runtime.JSX.Element;
interface RadioProps {
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value: string;
}
declare function Radio({ children, error, handler, id, name, value, ...props }: RadioProps): react_jsx_runtime.JSX.Element;
interface SelectProps {
    children: ReactNode;
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value?: string;
}
declare function Select({ children, error, handler, id, name, value, ...props }: SelectProps): react_jsx_runtime.JSX.Element;
interface TextareaProps {
    error?: boolean;
    handler: (name: string, value: string) => void;
    id?: string;
    name: string;
    value?: string;
}
declare function Textarea({ error, handler, id, name, value, ...props }: TextareaProps): react_jsx_runtime.JSX.Element;

interface LabelProps {
    error?: boolean;
    field: Field;
    highlight?: 'none' | 'optional' | 'required';
    optional?: string;
    required?: string;
}
declare function Label({ error, field, highlight, optional, required, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

interface LinkProps {
    button?: boolean;
    children: ReactNode;
    href: string;
    open?: boolean;
    style?: Style;
}
declare function Link({ button, children, href, open, ...props }: LinkProps): react_jsx_runtime.JSX.Element;

interface ListProps extends Arrangements {
    children: ReactNode;
}
interface ListItemProps {
    children: ReactNode;
}
declare function List({ children, ...props }: ListProps): react_jsx_runtime.JSX.Element;
declare function ListItem({ children, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;

interface MathProps {
    formula: string;
}
declare function Math({ formula, ...props }: MathProps): react_jsx_runtime.JSX.Element;

interface TextProps extends Alignments, Contexts, Dimensions, Roles, Spacings, Styles {
    children: ReactNode;
    color?: string;
    line?: number | string;
    size?: number | string;
    style?: Style;
}
declare function Text({ children, color, line, size, style, ...props }: TextProps): react_jsx_runtime.JSX.Element;

interface TooltipProps extends Contexts, Locations {
    children: ReactNode;
    message: string;
    style?: Style;
}
declare function Tooltip({ children, message, style, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;

interface FlexProps extends Dimensions, Justifications, Orientations, Spacings {
    autoWrap?: boolean;
    children: ReactNode;
    column?: boolean;
    full?: boolean;
    gap?: number | string;
    row?: boolean;
    style?: Style;
    wrap?: boolean;
}
declare function Flex({ children, autoWrap, column, full, gap, row, style, wrap, ...props }: FlexProps): react_jsx_runtime.JSX.Element;

interface GridProps {
    children: ReactNode;
    cols: number;
    gap?: number | string;
    rows?: number;
}
declare function Grid({ children, cols, gap, rows, ...props }: GridProps): react_jsx_runtime.JSX.Element;
interface GridAreaProps {
    children: ReactNode;
    colEnd?: number;
    colStart: number;
    rowEnd?: number;
    rowStart: number;
}
declare function GridArea({ children, colEnd, colStart, rowEnd, rowStart, ...props }: GridAreaProps): react_jsx_runtime.JSX.Element;

declare function isBoolean(x: any): boolean;
declare function isNumber(x: any): boolean;
declare function isString(x: any): boolean;

declare class Extractor {
    static alignments(props: Alignments): Array<string>;
    static arrangements(props: Arrangements): Array<string>;
    static behaviors(props: Behaviors): Array<string>;
    static contexts(props: Contexts): Array<string>;
    static directions(props: Directions): Array<string>;
    static justifications(props: Justifications): Array<string>;
    static lines(props: Lines): Array<string>;
    static locations(props: Locations): Array<string>;
    static orientations(props: Orientations): Array<string>;
    static roles(props: Roles): Array<string>;
    static sizes(props: Sizes): Array<string>;
    static styles(props: Styles): Array<string>;
}

declare class Fetcher {
    private host;
    private token?;
    constructor(host?: string);
    private headers;
    private request;
    auth(token: string): void;
    deauth(): void;
    del<T>(route: string): Promise<T>;
    get<T>(route: string): Promise<T>;
    post<T>(route: string, body?: BodyInit): Promise<T>;
    put<T>(route: string, body: BodyInit): Promise<T>;
}

declare class Formatter {
    static _currency: Intl.NumberFormat;
    static _percentage: Intl.NumberFormat;
    static currency(n: number): string;
    static percentage(n: number): string;
}

declare function random(length?: number): string;

declare class Renderer {
    static render(template: string, data: Record<string, number>): Array<ReactNode>;
}

declare function validateMax(max: number, value: number | string): boolean;
declare function validateMin(min: number, value: number | string): boolean;
declare function validateRegEx(regex: RegExp, value: number | string): boolean;

export { type APR, type APRsMetaProps, type APRsProps, APRsTable, Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, type Align, type Alignments, type Amount, type AmountsMetaProps, type AmountsProps, AmountsTable, Animation, type Arrangements, Background, type BackgroundProps, Badge, type BadgeProps, type Behaviors, Body, type BodyProps, type Breakdown, Button, type ButtonProps, Card, type CardProps, Carousel, CarouselItem, type CarouselItemProps, type CarouselProps, type Charge, type ChargesMetaProps, type ChargesProps, ChargesTable, Checkbox, type CheckboxProps, type Column, type Context, type Contexts, type Dimensions, type Directions, Divider, type DividerProps, Extractor, type Fee, type FeesMetaProps, type FeesProps, FeesTable, Fetcher, type Field, Flex, type FlexProps, Footer, type FooterProps, Form, type FormData, type FormProps, Formatter, Grid, GridArea, type GridAreaProps, type GridProps, H1, H2, H3, H4, H5, H6, Header, type HeaderProps, type HeadingProps, Hero, type HeroProps, Highlight, type HighlightProps, Icon, type IconProps, Icons, Image, type ImageProps, Input, type InputProps, type Justifications, type Justify, Label, type LabelProps, type Lines, Link, type LinkProps, List, ListItem, type ListItemProps, type ListProps, type Locations, Math, type MathProps, Modal, type ModalProps, Navigation, NavigationLink, type NavigationLinkProps, type NavigationProps, Notification, type NotificationProps, Option, type OptionProps, type Orientations, Pagination, type PaginationProps, type Position, type Positions, Radio, type RadioProps, Renderer, type Role, type Roles, Schumer, type SchumerProps, Select, type SelectProps, type Sizes, type Spacings, Stepper, StepperItem, type StepperItemProps, type StepperProps, type Style, type Styles, Table, type TableProps, Text, type TextProps, Textarea, type TextareaProps, Tooltip, type TooltipProps, isBoolean, isNumber, isString, random, validateMax, validateMin, validateRegEx };
