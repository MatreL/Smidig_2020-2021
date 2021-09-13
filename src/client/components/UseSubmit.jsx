import { useState } from "react";

export function useSubmit(submitFunction, onSubmitSuccess) {
    const [submitting, setSubmit] = useState(false);
    const [error, setError] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
        setError(undefined);
        try {
            await submitFunction();
            onSubmitSuccess();
        } catch (e) {
            setError(e);
        } finally {
            setSubmit(false);
        }
    }

    return { handleSubmit, submitting, error };
}