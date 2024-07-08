// makes sure the secret is set when a route needs it
// le middleware tourne à chaque requete au back

import jwt from 'jsonwebtoken';
import { getSecretKeyForUser } from '~/server/connectors/mongo.ts';
import { getCookie  } from 'h3';

  // const secret = event.headers.get('x-secret') //si pas token alors envoyer header de JSONcontent x-email et x-password pour prouver qu'on est admin
  // if (secret === 'community') {
  //   event.context.secretIsKnown = true
    //event.context.role= 'teacher'

        //event.context.password= 'GetCollection(password) ??
      

  const SECRET_KEY_BASE = process.env.SECRET_KEY_BASE

  export default defineEventHandler(async (event)  => {
    try {
    // Vérifiez si l'objet ctx ou event contient les informations de route attendues
    const currentRoute = event.node.req.url;
    if (!currentRoute) {
      throw new Error('Route path is undefined');
    }

    // Vérifie si la route actuelle est une route protégée
    const protectedRoutes = [
      /^\/admin\/.*$/,   // Correspond à toutes les routes sous /admin/
      /^\/teacher\/.*$/  // Correspond à toutes les routes sous /teacher/
    ];
    const isProtectedRoute = protectedRoutes.some(routeRegex => routeRegex.test(currentRoute));

    // Si la route n'est pas protégée, sortez de la fonction sans vérifier le token
    if (!isProtectedRoute) {
      return;
    }
    if (currentRoute === '/login') {
      return;
    }

    const token = getCookie(event, 'auth_token');
    if (!token) {
      event.res.statusCode = 401;
      return { message: 'Unauthorized' };
    }

    const decodedToken = jwt.decode(token) as { email: string; role: string };
    const uniqueSecretKey = await getSecretKeyForUser(decodedToken.email);

    if (!uniqueSecretKey) {
      event.res.statusCode = 401;
      return { message: 'Unauthorized' };
    }

    // Vérifiez le token avec la clé secrète combinée
    jwt.verify(token, `${SECRET_KEY_BASE}${uniqueSecretKey}`);

    // Attachez les informations de l'utilisateur au contexte
    event.context.user = { email: decodedToken.email, role: decodedToken.role };
    return { message : 'Success' };
  } catch (error) {
    console.error('Error verifying token:', error);   
    // Remove the auth_token cookie on unauthorized access
    event.res.setHeader('Set-Cookie', `auth_token=; Max-Age=0; Path=/`);    
    return { message: 'Unauthorized' };
    
  }
});

// à utiliser afin de vérifier si l'user peut accéder à l'url /teacher/classroom
