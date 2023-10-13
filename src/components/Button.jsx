export function Button({ children, variant, ...props }) {
    if (props.href) {
        return (
            <a className={`btn btn-${variant}`} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={`btn btn-${variant}`} {...props}>
            {children}
        </button>
    );
}
