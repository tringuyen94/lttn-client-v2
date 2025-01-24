const { restConnector } = require('./baseURL.services');

export async function fetchBrands() {
  const response = await restConnector({
    method: 'GET',
    url: 'api/v1/brands',
  });
  const brands = await response.data.metadata;

  return brands;
}
