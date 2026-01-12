import Link from 'next/link';
import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'medium',
    className,
    ...props
}) {
    const classes = clsx(
        styles.button,
        styles[variant],
        styles[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
