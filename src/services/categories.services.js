const { restConnector } = require('./baseURL.services');

export async function fetchCategories() {
  try {
    const response = await restConnector({
      method: 'GET',
      url: 'api/v1/categories',
    });
    return response.data.metadata;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải danh mục sản phẩm';
    throw new Error(message);
  }
}
