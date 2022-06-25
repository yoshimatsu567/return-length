export function returnLength(arg: string | []): number {
    if (typeof arg === "string") {
        return arg.length;
    } else {
        return arg.join("").length;
    }
}
