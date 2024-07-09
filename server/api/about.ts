// server/api/post.js

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const path = getRequestPath(event)
  const response = await $fetch(runtimeConfig.public.apiBaseUrl + path);
  return response;
});