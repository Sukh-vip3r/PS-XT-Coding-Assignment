
export function validateArray(payload: any[]): boolean {
    if (payload && Array.isArray(payload) && payload.length) {
        return true;
    }
    return false;
}