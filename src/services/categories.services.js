const { restConnector } = require('./baseURL.services');

export async function fetchCategories() {
  const response = await restConnector({
    method: 'GET',
    url: 'api/v1/categories',
  });
  const categories = await response.data.metadata;

  return categories;
}
