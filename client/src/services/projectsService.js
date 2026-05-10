// Import shared API object
import api from './api'

// Getting all projects
export async function getProjects() {
    const response = await api.get('/api/projects')
    return response.data
}