const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  }

export async function getAllPagesWithSlugs() {
    const data = await fetchAPI(`
    {
        pages(first: 1000) {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `);
    return data?.pages;
}

export async function getPageBySlug(slug) {
    const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
        uri
        projectssection {
          fieldGroupName
          projectsSections
        }
      }
    }
    `);
    return data?.page;
  }
