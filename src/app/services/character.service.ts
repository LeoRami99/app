import { instance } from "@/app/services/config";


export const getCharacters = async () => {
    const response = await instance.get("character");
    return response;
}