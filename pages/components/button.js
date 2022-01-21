import React from "react"
import Link from "next/link"

const STYLES = ["btn btn-primary", "btn btn-secondary", "btn btn-tertiary", "btn btn-outline"];
const SIZES = ["btn-small", "btn-medium", "btn-large"];

export default function Button({ children, buttonStyle, buttonSize, type, onClick }) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link href="/">
            <button
                className={`${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}
