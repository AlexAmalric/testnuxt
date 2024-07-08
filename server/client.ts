// this is meant to be imported on the client to interact with the server api
// all client side functions will be defined here

const actions = [
  {
    name: 'checkSecret',
    path: '/api/secret',
    method: 'POST'
  },
  {
    name: 'createNFT',
    path: '/api/art/create',
    method: 'POST',
    secretRequired: true
  },
  {
    name: 'getNFTs',
    path: '/api/art',
    method: 'GET',
    secretRequired: true
  },
  {
    name: 'createOffer',
    path: '/api/art/createOffer',
    method: 'POST',
    secretRequired: true
  },
  {
    name: 'claimNFT',
    path: '/api/art/claim',
    method: 'POST',
    secretRequired: true
  },
  {
    name: 'redeemNFT',
    path: '/api/art/redeem',
    method: 'POST',
    secretRequired: true
  },
  {
    name: 'listCollection',
    path: '/api/art',
    method: 'GET',
    secretRequired: true
  },
  {
    name: 'XamanSignIn',
    path: '/api/xaman/sign-in',
    method: 'GET',
    secretRequired: true
  },
  {
    name: 'XamanGetPayload',
    path: '/api/xaman/payload',
    method: 'GET',
    secretRequired: true
  },
  {
    name: 'XamanGetAcceptNFTOffer',
    path: '/api/xaman/acceptNFTOffer',
    method: 'GET',
    secretRequired: true
  },
  {
    name: 'createAlbersURL',
    path: '/api/art/image/create',
    method: 'POST',
    secretRequired: true
  },
  {
    name: 'albersURLExists',
    path: '/api/art/image',
    method: 'GET',
    secretRequired: true
  }

]

type Headers = {
  [key: string]: string;
}

/* @ts-ignore */
const getCookies = () => decodeURIComponent(document.cookie)
  .split(';').reduce((cookies: any, cookie: any) => {
    /* @ts-ignore */
    const [name, value] = cookie.split('=').map(c => c.trim());
    cookies[name] = decodeURIComponent(value);
    return cookies;
  }, {})




const api: { [key: string]: any } = {}
actions.forEach(action => {
  api[action.name] = async (props: any) => {
    const headers: Headers = {
      'content-type': 'application/json'
    }
    const cookies = getCookies()
    const secret = cookies['secret']
    console.log('cookie', document.cookie, cookies, secret)

    if (action.secretRequired) {
      if (!secret) {
        throw new Error('secret is required')
      }
      headers['x-secret'] = secret //avant d'avoir les cookies, on injecte ici password et username
      
    }
//dans une route /admin/users à bloquer
    let url = action.path;
    let body = undefined;
    let queryString = '';
    if (action.method === 'GET' && props && Object.keys(props).length) {
      // Ensure values are converted to strings to satisfy encodeURIComponent's expected parameter types
      queryString = Object.entries(props).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(`${value}`)}`).join('&');
      url = `${url}?${queryString}`;
    } else if (action.method !== 'GET') {
      body = JSON.stringify(props);
    }

    try {
      const response = await fetch(url, {
        method: action.method,
        headers,
        ...(body ? { body } : {})
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'An error occurred with the request.');
      }

      return response.json();
    } catch (error: any) {
      // This catch block will handle fetch errors as well as errors thrown from non-ok responses
      console.error(`Error with the ${action.name} action:`, error.message);
      throw error; // Rethrow the error so that the calling code can handle it
    }
  }
})
export default api