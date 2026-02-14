export interface BlogPost {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

export async function getLatestPosts(): Promise<BlogPost[]> {
  const query = `
    query Publication {
      publication(host: "blog.souravmahato.in") {
        posts(first: 4) {
          edges {
            node {
              title
              brief
              url
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    const body = await response.json();

    if (body.errors) {
      console.error("Hashnode API errors:", body.errors);
      return [];
    }

    const posts =
      body.data?.publication?.posts?.edges?.map(
        (edge: { node: BlogPost }) => edge.node,
      ) || [];
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}
