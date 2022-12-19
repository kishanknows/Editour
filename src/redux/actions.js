import { PATH_CHANGE } from "./constants";

export function changeFilePath(filePath){
    return {
        type: PATH_CHANGE,
        payload: filePath
    }
}