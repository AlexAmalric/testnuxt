export default defineEventHandler(async (event) => {
  console.log(`> new request ${event.method}: ${getRequestURL(event)}`)
  const params = getRouterParams(event)
  if (params && Object.keys(params).length > 0) {
    console.log(params)
  }
  const files = await readMultipartFormData(event)
  if (files) {
    console.log(files)
  }
  // const routerParams = getRouterParams(event)
  // console.log('routerParams', routerParams)
  // const config = useRuntimeConfig()
  // console.log('config', config)
  const query = getQuery(event)
  if (query) {
    console.log('query', query)
  }

})
