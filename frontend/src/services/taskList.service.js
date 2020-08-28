import http from '../http-common'

class TaskListDataService {
  getAll() {
    return http.get('/tasks')
  }

  createTask(data) {
    return http.post('/tasks', data)
  }

  updateTask(id, data) {
    return http.put(`/tasks/${id}`, data)
  }

  deleteTask(id) {
    return http.delete(`/tasks/${id}`)
  }
}

export default new TaskListDataService()