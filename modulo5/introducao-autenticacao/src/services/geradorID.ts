import { v4 } from "uuid"

export function geradorId():string {
    const id = v4();
    return id;
}