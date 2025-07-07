import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import config from "../../config";

//Get all listings
export function getAllListings(){
    return queryOptions({
        queryKey: ['listings'],
        queryFn: () => axios.get(config.API_URL+"/listings"),
        staleTime: Infinity,
        placeholderData: (prev) => prev,
    })
}