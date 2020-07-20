import * as React from "react";

const calendar = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5599 4.43992H18.72V2.75987C18.72 2.29629 18.3436 1.91992 17.8799 1.91992H17.0399C16.5762 1.91992 16.2 2.29629 16.2 2.75987V4.43992H7.79987V2.75987C7.79987 2.29629 7.42365 1.91992 6.95992 1.91992H6.11997C5.65624 1.91992 5.27987 2.29629 5.27987 2.75987V4.43992H4.43992C3.05057 4.43992 1.91992 5.57057 1.91992 6.95992V19.5599C1.91992 20.9493 3.05057 22.0799 4.43992 22.0799H19.5599C20.9493 22.0799 22.0799 20.9493 22.0799 19.5599V6.95992C22.0799 5.57057 20.9493 4.43992 19.5599 4.43992ZM20.3999 19.5599C20.3999 20.0227 20.0227 20.3999 19.5599 20.3999H4.43992C3.97711 20.3999 3.59997 20.0227 3.59997 19.5599V10.3536H20.3999V19.5599Z" fill="#333333"/>
</svg>;

const notification = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.8333 21.0938C12.9104 21.0938 13.7917 20.2125 13.7917 19.1354H9.875C9.875 20.2125 10.7562 21.0938 11.8333 21.0938ZM17.7083 15.2188V10.3229C17.7083 7.31687 16.1123 4.80042 13.3021 4.13458V3.46875C13.3021 2.65604 12.646 2 11.8333 2C11.0206 2 10.3646 2.65604 10.3646 3.46875V4.13458C7.56417 4.80042 5.95833 7.30708 5.95833 10.3229V15.2188L4 17.1771V18.1562H19.6667V17.1771L17.7083 15.2188ZM15.75 16.1979H7.91667V10.3229C7.91667 7.89458 9.39521 5.91667 11.8333 5.91667C14.2715 5.91667 15.75 7.89458 15.75 10.3229V16.1979Z" fill="#333333"/>
</svg>

const question = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="#333333"/>
</svg>

const person = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 5.1375C13.305 5.1375 14.3625 6.195 14.3625 7.5C14.3625 8.805 13.305 9.8625 12 9.8625C10.695 9.8625 9.6375 8.805 9.6375 7.5C9.6375 6.195 10.695 5.1375 12 5.1375ZM12 15.2625C15.3413 15.2625 18.8625 16.905 18.8625 17.625V18.8625H5.1375V17.625C5.1375 16.905 8.65875 15.2625 12 15.2625ZM12 3C9.51375 3 7.5 5.01375 7.5 7.5C7.5 9.98625 9.51375 12 12 12C14.4862 12 16.5 9.98625 16.5 7.5C16.5 5.01375 14.4862 3 12 3ZM12 13.125C8.99625 13.125 3 14.6325 3 17.625V21H21V17.625C21 14.6325 15.0037 13.125 12 13.125Z" fill="#333333"/>
</svg>

const exit = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#333333"/>
</svg>

const tuple = <T extends string[]>(...args: T) => args;

const AllIcons = tuple(
    'notification',
    'question',
    'person',
    'exit',
    'calendar'
);

export type SingleIcon = typeof AllIcons[number];

export interface IconProps {
    img?: SingleIcon;
    className?: string;
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {}

const InternalIcon: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
    const {
        img,
        className
    } = props;


    return (
        <img className={className} src={img} alt={'Not found'}/>
    )
};

const Icon = React.forwardRef<unknown, IconProps>(InternalIcon) as CompoundedComponent;

Icon.displayName = 'NeoIcon';

export default Icon
