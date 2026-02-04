// async function apiPost<T>(endpoint: string, body: string){
//     const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${endpoint}`,{
//         method: 'POST',
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body: body
//     });

//     if(!res.ok){
//         throw new Error(`POST to ${endpoint} Failed (${res.status})`);
//     };

//     return res.json() as Promise<T>;
// }

// async function apiGet<T>(endpoint: string){
//     const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${endpoint}`);

//     if(!res.ok){
//         throw new Error(`GET to ${endpoint} Failed (${res.status})`);
//     };

//     return res.json() as Promise<T>;
// }

// async function apiDelete(endpoint: string, id: number) {
//     const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${endpoint}/${id}`, {
//         method: 'DELETE'
//     });

//     if(!res.ok) {
//         throw new Error(`DELETE ${endpoint} id ${id} Failed (${res.status})`);
//     };

// }