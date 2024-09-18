//import { getEntry } from "@data/sanity/api";

export const prerender = false

export async function GET({ params }) {
  const id = params.id;
    //let entry = await getEntry(id)
  const entry = {
    title: 'Bonjour',
    id,
    url: '/test'
  }
  if (!entry) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify({
      title: entry.title,
      url: entry.url,
      id: entry.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}