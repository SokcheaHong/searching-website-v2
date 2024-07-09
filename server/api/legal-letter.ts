// server/api/post.js

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const isFeatured = query.isFeatured || 0;
  const runtimeConfig = useRuntimeConfig();
  const path = getRequestPath(event)
  const response: any = await $fetch(`${runtimeConfig.public.apiBaseUrl}${path}`);
  return response;
});