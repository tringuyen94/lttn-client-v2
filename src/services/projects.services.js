const { restConnector } = require('./baseURL.services');

export async function fetchProjects(params) {
  try {
    const response = await restConnector({
      method: 'GET',
      url: 'api/v1/projects',
      params,
    });
    return response.data.metadata;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải danh sách dự án';
    throw new Error(message);
  }
}

export async function fetchProjectBySlug(slug) {
  try {
    const response = await restConnector({
      method: 'GET',
      url: `api/v1/projects/slug/${slug}`,
    });
    return response.data.metadata;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải thông tin dự án';
    throw new Error(message);
  }
}
