export function sanitizeObject(payload: any): any {
    if (validateObject(payload)) {
        const sanitizedPayload = {};
        const keys = Object.keys(payload);
        for (const key of keys) {
            const value = typeof payload[key] === 'string' ? payload[key].trim() : payload[key];

            if (value !== null || value !== undefined || value !== '') {
                sanitizedPayload[key] = value;
            }
        }
        return sanitizedPayload;
    }
    return {};

}

export function validateObject(payload: any): boolean {
    return payload && Object.values(payload).length > 0;
}
