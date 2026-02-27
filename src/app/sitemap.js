import { fetchProducts } from '@/services/products.services';
import { fetchProjects } from '@/services/projects.services';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lttnelectric.vn';

export default async function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/danh-sach-san-pham`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/du-an-thi-cong`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/lien-he`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  let productPages = [];
  try {
    const products = await fetchProducts();
    productPages = products.map((product) => ({
      url: `${SITE_URL}/danh-sach-san-pham/${product.product_slug}`,
      lastModified: new Date(product.updatedAt || product.createdAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch {
    // API unavailable — skip product pages
  }

  let projectPages = [];
  try {
    const projects = await fetchProjects();
    projectPages = projects.map((project) => ({
      url: `${SITE_URL}/du-an-thi-cong/${project.project_slug}`,
      lastModified: new Date(project.updatedAt || project.createdAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch {
    // API unavailable — skip project pages
  }

  return [...staticPages, ...productPages, ...projectPages];
}
