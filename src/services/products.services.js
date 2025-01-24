const { restConnector } = require('./baseURL.services');

export async function fetchProducts(params) {
  const response = await restConnector({
    method: 'GET',
    url: 'api/v1/products',
    params,
  });
  const products = await response.data.metadata;

  return products;
}

export async function fetchProductBySlug(slug) {
  const response = await restConnector({
    method: 'GET',
    url: `api/v1/products/slug/${slug}`,
  });
  const product = await response.data.metadata;

  return product;
}
