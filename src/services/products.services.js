const { restConnector } = require('./baseURL.services');

export async function fetchProducts(params) {
  try {
    const response = await restConnector({
      method: 'GET',
      url: 'api/v1/products',
      params,
    });
    const { products, pagination } = response.data.metadata;
    return { products, pagination };
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải danh sách sản phẩm';
    throw new Error(message);
  }
}

export async function fetchProductBySlug(slug) {
  try {
    const response = await restConnector({
      method: 'GET',
      url: `api/v1/products/slug/${slug}`,
    });
    return response.data.metadata;
  } catch (error) {
    const message =
      error.response?.data?.message || 'Không thể tải thông tin sản phẩm';
    throw new Error(message);
  }
}
