import { LoginUser, User, setSecretKeyForUser } from '~/server/connectors/mongo'
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { setCookie } from 'h3'; 

const SECRET_KEY_BASE = process.env.SECRET_KEY_BASE

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  const result = await LoginUser({ email, password })

  if (result) {
    const secretKey = randomBytes(64).toString('hex');
    await setSecretKeyForUser(email, secretKey);

    // Generate a JWT token with the user's email and role, signed with the secret key and the secret key base
    const token = jwt.sign(
      { email, role: result.role },
      `${SECRET_KEY_BASE}${secretKey}`,
      { expiresIn: '1h' }
    );    
    
    setCookie(event, 'token', token, { maxAge: 3600, httpOnly: true });


    return {
      success: true,
      role: result.role,
    };
  } else {
    return {
      success: false,
      message: 'Wrong username or password'
    };
  }
  //return AddUser(userInfo)
})