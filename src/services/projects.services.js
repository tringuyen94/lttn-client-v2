const { restConnector } = require('./baseURL.services');

export async function fetchProjects(params) {
  const response = await restConnector({
    method: 'GET',
    url: 'api/v1/projects',
    params,
  });
  const projects = await response.data.metadata;

  return projects;
}

export async function fetchProjectBySlug(slug) {
  const response = await restConnector({
    method: 'GET',
    url: `api/v1/projects/slug/${slug}`,
  });
  const project = await response.data.metadata;

  return project;
}
