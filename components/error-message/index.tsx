import React from 'react';
import '@/styles/error-message-styles.css'
import { ErrorMessageProps } from "@/utils/interfaces/component-props";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ showError, errorMessage, handleCloseError }) => {
    return (
        <main>
            {showError && (
                <div className={`error-message ${!showError ? 'hide' : ''}`}>
                    {errorMessage}
                    <button onClick={handleCloseError} className="float-right">✕</button>
                </div>
            )}
        </main>
    )
}

export default ErrorMessage;