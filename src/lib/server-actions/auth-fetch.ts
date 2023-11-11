'use server'

export default async function fetchData(
    { path, method, data}:
    { path: string, method: string, data: object}) {
        const response = await fetch(path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const json = await response.json()
        
        return json.data
    }   