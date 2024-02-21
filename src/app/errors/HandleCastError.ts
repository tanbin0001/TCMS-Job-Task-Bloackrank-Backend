import mongoose from "mongoose";

const handleCastError = (err: mongoose.Error.CastError) => {
 
    const regex = /"([^"]*)"/;
    const match = err.message.match(regex);
    let errorMessage;

    if (match) {
        const extractedValue = match[1];
        errorMessage =extractedValue;    }

    return {
        message: 'Invalid ID',
        errorMessage
    };
};

export default handleCastError;
