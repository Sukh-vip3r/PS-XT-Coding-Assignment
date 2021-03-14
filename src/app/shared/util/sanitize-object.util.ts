

export function sanitizeObject(payload: any): any {
    if (validateObject(payload)) {
        let sanitizedPayload = {};
        let keys = Object.keys(payload);
        for (let key of keys) {
            let value = typeof payload[key] === 'string' ? payload[key].trim() : payload[key];

            if (value !== null || value !== undefined || value !== '') {
                sanitizeObject[key] = value
            }
        }
        return sanitizeObject;
    }
    return {};

}

export function validateObject(payload: any): boolean {
    return payload && Object.values(payload).length > 0;
}