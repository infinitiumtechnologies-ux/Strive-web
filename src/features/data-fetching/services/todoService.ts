import apiClient from '../../../shared/utils/api-client';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const todoService = {
  getTodos: async (page: number = 1, limit: number = 5, triggerError: boolean = false): Promise<Todo[]> => {
    const url = triggerError ? '/invalid-endpoint-error-trigger' : '/todos';
    const response = await apiClient.get<Todo[]>(url, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  },
};
