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
      "category": category-> {
        name,
        description
      },
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

export async function loadAuthorData({ params }) {
  const data = await client.fetch(`*[_type == "authorData"] { 
    profileDesc,
    experiences[] {
      company,
      date,
      desc,
      jobDesc[] // Array of text items (bullet points)
    },
    educations[] {
      place,
      description,
      activity[] // Array of text items (bullet points)
    },
    achievements[] {
      title,
      activity[] // Array of text items (bullet points)
    }
  }`);
  
  if (data && data.length > 0) {
    // Return the first author data if available
    return {
      authorData: data[0]
    };
  }
  
  return {
    status: 404, // Not Found
    body: new Error("Author Data not found")
  };
}