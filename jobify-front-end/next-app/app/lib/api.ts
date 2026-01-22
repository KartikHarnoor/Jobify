import { endianness } from "os";

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE" ;

interface ApiConfig {
    method: HttpMethod;
    body?: any;
}

const api_prefix = "/api" // used for proxy fixes

async function apiFetch<T>(
    endpoint: string,
    config: ApiConfig
): Promise<T>{

    const res = await fetch(`${api_prefix}${endpoint}`, {
        method: config.method,
        headers: {
            "Content-Type" : "application/json", 
        },
        body: config.body? JSON.stringify(config.body) : undefined,
    });
    if(!res.ok){
        const errorText = await res.text();
        throw new Error (errorText || "API request failed");
    }

    if(res.status === 204) {
        return null as T;
    }

    return res.json();
}


export async function get<T>(endpoint: string) : Promise<T> {
    return apiFetch<T>(endpoint , {method: "GET"});
}

export async function post<T>(endpoint: string , body? : any) : Promise<T> {
    return apiFetch<T>(endpoint, {method: "POST", body});
}

export async function put<T>(endpoint: string , body? : any) : Promise<T> {
    return apiFetch<T>(endpoint, {method: "PUT", body});
}

export async function del<T>(endpoint: string) : Promise<T> {
    return apiFetch<T> (endpoint , {method: "DELETE"});
}