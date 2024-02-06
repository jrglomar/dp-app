import { ComponentPropsWithoutRef, ReactNode } from "react"

type BaseProps = {
    children: ReactNode;
    textOnly?: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never }

export default function Button(props: ButtonProps) {
    const { children, textOnly, ...otherProps } = props;
    return (
        <button
            className={`button ${textOnly ? 'button--text-only' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}
