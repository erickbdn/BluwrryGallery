import createClient from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-23",
  useCdn: true,
});
// const user = client.users.getById('me');
// console.log(user)

export async function loadPost({ params }) {
  
    const data = await client.fetch(`*[_type == "post"] { 
      title,
      description,
      category,
      image {
        asset -> {
          url
        }
      }
    }`);
    
    if (data) {
      return {
        posts: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }

  
export async function loadAuthor({ params }) {
  const data = await client.fetch(`*[_type == "author"] { 
    name,
    description,
    socials,
    image {
      asset -> {
        url
      }
    }
  }`);
  if (data) {
    return {
      author: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}

export async function loadFeatured({ params }) {
  
  const data = await client.fetch(`*[_type == "featured"] { 
    title,
    description,
    category,
    image {
      asset -> {
        url
      }
    }
  }`);
  
  if (data) {
    return {
      featured: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}