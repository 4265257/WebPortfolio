const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query: query, variables: variables }),
    });

    const text = await res.text();
    console.log("Raw response text:", text); // Add this line

    const json = await res.json();
    if (json.errors) {
      console.log("GraphQL query failed:", json.errors);
      console.log("Raw response data:", json); // Add this line
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error("Error in fetchAPI:", error);
    throw new Error("Failed to fetch API");
  }
}
export async function getAllPagesWithSlugs() {
  const data = await fetchAPI(`
    {
        pages(first: 1000) {
            edges {
                node {
                    uri
                    slug
                    blocks
                }
            }
            
        }
        properties {
          edges {
            node {
              title
              uri
              slug
            }
          }
        }
    }
    `);
  return data;
}

export async function getPageBySlug(slug) {
  const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
        uri
        slug
        blocks
      }
    }
    `);
    return data?.page;
  }
    
 