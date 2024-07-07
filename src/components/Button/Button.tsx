import { ButtonType } from "./types";

import './styles.css';

const Button = ({ className, content, method, title }: ButtonType) => {
    return (
        <button
            className={`dog-image__btn ${className}`}
            content={content}
            onClick={method}
            title={title}
        >
            {content}
        </button>
    )
}

export default Button;