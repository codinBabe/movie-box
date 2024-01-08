// useLoading.js
import { useState, useCallback } from 'react';

const UseLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    // A function to set isLoading to true
    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    // A function to set isLoading to false
    const stopLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        startLoading,
        stopLoading,
    };
};

export default UseLoading;