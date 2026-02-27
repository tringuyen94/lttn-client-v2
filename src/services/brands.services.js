const { restConnector } = require('./baseURL.services');

export async function fetchBrands() {
  try {
    const response = await restConnector({
      method: 'GET',
      url: 'api/v1/brands',
    });
    return response.data.metadata;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải danh sách thương hiệu';
    throw new Error(message);
  }
}
