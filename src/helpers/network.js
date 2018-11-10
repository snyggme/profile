const API_ROOT = 'https://5bc443613e0ce20013533336.mockapi.io'

export const httpGet = async endPoint => {
    try {
        const response = await fetch(`${API_ROOT}/${endPoint}`)
        if (response.ok) {
            const json = await response.json()

            return json.projects
        } else {
            throw new Error(response.status)
        }
    } catch (err) {
        console.log('httpGet error ', err)
    }
}
