const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNDc1MywiZXhwIjoxOTU1MDgwNzUzfQ.FCVRlrB8hlq9ajcxdGsKuN01O1xUGpTqgYPn5E6OMVQ';

const SUPABASE_URL = 'https://uaosfqkaigoigfmurywa.supabase.co';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getRestaurants() {
    const response = await client
        .from('Restaurants')
        .select();
    return response.data;
}

export async function getParks() {
    const response = await client
        .from('Parks')
        .select();
    return response.data;
}

export async function getBridges() {
    const response = await client
        .from('Bridges')
        .select();
    return response.data;
}

export async function getSports() {
    const response = await client
        .from('Sports')
        .select();
    return response.data;
}