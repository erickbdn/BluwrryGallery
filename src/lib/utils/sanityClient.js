import createClient from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-23",
  useCdn: true,
});

export async function loadPost({ params }) {
    const data = await client.fetch(`*[_type == "post"]`);
  
    if (data) {
      return {
        pets: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }