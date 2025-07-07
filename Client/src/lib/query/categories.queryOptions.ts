import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config";

//Get all listings
export function getAllCategories(){
    return queryOptions({
        queryKey: ['categories'],
        queryFn: () => axios.get(config.API_URL+"/categories"),
        staleTime: Infinity,
        placeholderData: (prev) => prev,
    })
}