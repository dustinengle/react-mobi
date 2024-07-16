import { ReactNode, ReactElement } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type Align = 'center' | 'end' | 'start' | 'stretch';
type Context = 'danger' | 'info' | 'success' | 'warning';
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
type FormData = Record<string, boolean | number | string>;
type Icons = 'alert' | 'attach' | 'award' | 'calendar' | 'caret-down' | 'caret-up' | 'cash' | 'cc-amex' | 'cc-discover' | 'cc-mastercard' | 'cc-visa' | 'check' | 'close' | 'comment' | 'danger' | 'delete' | 'edit' | 'email' | 'folder' | 'hide' | 'info' | 'lock' | 'map' | 'message' | 'minus' | 'next' | 'open' | 'plus' | 'prev' | 'profile' | 'restricted' | 'save' | 'settings' | 'star' | 'success' | 'tag' | 'unlock' | 'user' | 'view' | 'warning';
type Justify = 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';
type Position = 'cover' | 'bottom' | 'left' | 'right' | 'top';
type Role = 'primary' | 'secondary' | 'tertiary';
type Style = Record<string, number | string>;

interface FormProps {
    fields: Array<Field>;
    handler: (data: FormData) => void;
    highlight?: 'none' | 'optional' | 'required';
    label?: string;
}

interface HeroProps {
    children: ReactNode;
    image: string;
    position?: Position;
}

interface ModalProps {
    callback: (yes: boolean) => void;
    children: ReactNode;
    no?: string;
    open: boolean;
    yes?: string;
}

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

interface NotificationProps {
    callback?: () => void;
    children: ReactNode;
    context: Context;
}

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

interface CardProps {
    children: ReactNode;
    style?: Style;
}

interface CarouselProps {
    children: Array<ReactElement<CarouselItemProps>>;
}
declare function Carousel({ children, ...props }: CarouselProps): react_jsx_runtime.JSX.Element;
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

interface HeaderProps {
    children: ReactNode;
}

interface ChargeItem {
    charge: number;
    max: number;
    min: number;
}
interface ChargeItemDescriptions {
    balance: string;
    charge: string;
    noCharge: string;
    subTitle: string;
    subTitleItems?: Array<string>;
    summary: string;
    title: string;
}
declare const ChargeItemDescriptionsDefault: ChargeItemDescriptions;
interface ChargesProps {
    chargeItems: Array<ChargeItem>;
    chargeItemDescriptions?: ChargeItemDescriptions;
}
declare function Charges({ chargeItems, chargeItemDescriptions, ...props }: ChargesProps): react_jsx_runtime.JSX.Element;
interface FeeItem {
    amount: number;
    max?: number;
    min?: number;
    rate: number;
}
interface FeeItemDescriptions {
    subTitle: string;
    subTitleItems?: Array<string>;
    template: string;
    title: string;
}
declare const FeeItemDescriptionsDefault: FeeItemDescriptions;
interface FeesProps {
    feeItems: Array<FeeItem>;
    feeItemDescriptions?: FeeItemDescriptions;
}
declare function Fees({ feeItems, feeItemDescriptions, ...props }: FeesProps): react_jsx_runtime.JSX.Element;
interface APR {
    formula: ReactElement<Math>;
    max: number;
    min: number;
    subTitle?: string;
    summary: string;
    title: string;
}
interface APRItem {
    amount: number;
    apr: number;
    cycles: number;
    fees: number;
    rewards: number;
}
interface APRItemDescription {
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
}
declare const APRItemDescriptionDefaults: APRItemDescription;
interface APRsProps {
    apr: APR;
    aprItems: Array<APRItem>;
    aprItemDescriptions?: APRItemDescription;
}
declare function APRs({ apr, aprItems, aprItemDescriptions, ...props }: APRsProps): react_jsx_runtime.JSX.Element;
interface SchumerProps {
    apr: APR;
    aprItems: Array<APRItem>;
    aprItemDescriptions?: APRItemDescription;
    chargeItems: Array<ChargeItem>;
    chargeItemDescriptions?: ChargeItemDescriptions;
    feeItems: Array<FeeItem>;
    feeItemDescriptions?: FeeItemDescriptions;
}

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

interface BackgroundProps {
    children: ReactNode;
    context?: Context;
    style?: Style;
}

interface BadgeProps {
    children: ReactNode;
    context?: Context | 'default';
    count: number;
}

interface ButtonProps {
    callback: (...args: any[]) => any;
    label: string;
    role?: Role | 'default';
}

interface DividerProps {
    direction?: 'horizontal' | 'vertical';
    dots?: boolean;
    line?: 'dashed' | 'solid';
}

interface HeadingProps {
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

interface IconProps {
    name?: Icons;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    src?: string;
}

interface ImageProps {
    alt?: string;
    caption?: string;
    role?: 'contain' | 'cover' | 'fill' | 'responsive';
    src: string;
    style?: Style;
}

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

interface LinkProps {
    children: ReactNode;
    href: string;
    open?: boolean;
    style?: Style;
}

interface ListProps {
    children: ReactNode;
    role?: 'ordered' | 'unordered';
}
interface ListItemProps {
    children: ReactNode;
}
declare function List({ children, role, ...props }: ListProps): react_jsx_runtime.JSX.Element;
declare function ListItem({ children, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;

interface MathProps {
    formula: string;
}

interface TextProps {
    bold?: boolean;
    capitalize?: boolean;
    children: ReactNode;
    context?: Context;
    italic?: boolean;
    legal?: boolean;
    lowercase?: boolean;
    strikethrough?: boolean;
    style?: Style;
    subscript?: boolean;
    superscript?: boolean;
    underline?: boolean;
    uppercase?: boolean;
}

interface TooltipProps {
    children: ReactNode;
    context?: Context;
    message: string;
    position?: Position;
    style?: Style;
}

interface FlexProps {
    align?: Align;
    children: ReactNode;
    column?: boolean;
    full?: boolean;
    gap?: number | string;
    justify?: Justify;
    row?: boolean;
    style?: Style;
    wrap?: boolean;
}

interface GridProps {
    children: ReactNode;
    cols: number;
    gap?: number | string;
    justify?: Justify;
    rows?: number;
}
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

declare function validateMax(max: number, value: number | string): boolean;
declare function validateMin(min: number, value: number | string): boolean;
declare function validateRegEx(regex: RegExp, value: number | string): boolean;

export { type APR, type APRItem, type APRItemDescription, APRItemDescriptionDefaults, APRs, type APRsProps, Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, type Align, type BackgroundProps, type BadgeProps, type BodyProps, type ButtonProps, type CardProps, Carousel, CarouselItem, type CarouselItemProps, type CarouselProps, type ChargeItem, type ChargeItemDescriptions, ChargeItemDescriptionsDefault, Charges, type ChargesProps, Checkbox, type CheckboxProps, type Column, type Context, type DividerProps, type FeeItem, type FeeItemDescriptions, FeeItemDescriptionsDefault, Fees, type FeesProps, type Field, type FlexProps, type FooterProps, type FormData, type FormProps, GridArea, type GridAreaProps, type GridProps, H1, H2, H3, H4, H5, H6, type HeaderProps, type HeadingProps, type HeroProps, type HighlightProps, type IconProps, type Icons, type ImageProps, Input, type InputProps, type Justify, type LabelProps, type LinkProps, List, ListItem, type ListItemProps, type ListProps, type MathProps, type ModalProps, Navigation, NavigationLink, type NavigationLinkProps, type NavigationProps, type NotificationProps, Option, type OptionProps, type PaginationProps, type Position, Radio, type RadioProps, type Role, type SchumerProps, Select, type SelectProps, Stepper, StepperItem, type StepperItemProps, type StepperProps, type Style, type TableProps, type TextProps, Textarea, type TextareaProps, type TooltipProps, isBoolean, isNumber, isString, validateMax, validateMin, validateRegEx };
