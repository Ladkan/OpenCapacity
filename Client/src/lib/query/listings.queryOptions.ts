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

export function getListing(id:string){
    return queryOptions({
        queryKey: ['listing_'+id],
        queryFn: () => axios.get(config.API_URL+"/listings/"+id),
        staleTime: 50000,
        placeholderData: (prev) => prev
    })
}