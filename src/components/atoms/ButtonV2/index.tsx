interface Props {
    readonly label: string;
    readonly color?: string;
    readonly onClick?: () => void;
}

export const ButtonV2 = ({label, color = '#ff5722', onClick}: Props) => {
    return (
        <div color={color} onClick={onClick}>
            {label}
        </div>
    );
};
