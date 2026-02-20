const BASE_URL = 'https://remotive.com/api'

export const fetchJobs = async (limit=20, search='', category='') => {
    let response = await fetch (`${BASE_URL}/remote-jobs?limit=${limit}&search=${search}&category=${category}`)

    if (!response.ok) {
        throw new Error('Failed to fetch jobs')
    }

    const data = await response.json()
    return data.jobs
}
