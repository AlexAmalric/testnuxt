import { MongoClient, ObjectId } from 'mongodb'
// avoir une db albers pour que ça fonctionne.
const uri = process.env.MONGO_URI || ''
const client = new MongoClient(uri)
const defaultDB = 'serious-game'

export const DB = async () => {
  await client.connect()
  return client.db(defaultDB)
}
export async function getSecretKeyForUser(email: string): Promise<string | null> {
  await client.connect()
  const Users = await GetCollection('users')
  const userSecret = await Users.findOne({ email });
  return userSecret ? userSecret.secretKey : null;
}

export async function setSecretKeyForUser(email: string, secretKey: string) {
  await client.connect() // En partant du principe que l'adresse mail est unique
  const Users = await GetCollection('users')
  await Users.updateOne(
    { email },
    { $set: { secretKey } },
    { upsert: true }
  );
}

export interface User {
  email: string;
  name: string;
  password: string;
  role: string;
  secretKey: string | null;
}

export const GetCollection = async (collectionName: string) => {
  await client.connect()
  return client.db(defaultDB).collection(collectionName)
}

export const LoginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const Users = await GetCollection('users') //est-ce que l'user existe
    const result = await Users.findOne({ email, password })
    return result
  } catch (error) {
    console.error('Error login in User:', error);
    throw error; // Rethrow or handle as needed
  } finally {
    // await client.close(); // Consider when to close the connection based on your app's use case
  }
}

export const AddUser = async (userInfo: User) => {
  try {
    const Users = await GetCollection('users')
    const result = await Users.insertOne({ ...userInfo })
    console.log(`created new user: ${result.insertedId}`)
    return result
  } catch (error) {
    console.error('Error deleting User:', error);
    throw error; // Rethrow or handle as needed
  } finally {
    // await client.close(); // Consider when to close the connection based on your app's use case
  }
}

export const DeleteUser = async (email: string) => {
  try {
    const Users = await GetCollection('users')
    const result = await Users.deleteOne({ email })
    console.log(`deleted user: ${result}`)
    return result
  } catch (error) {
    console.error('Error deleting User:', error);
    throw error; // Rethrow or handle as needed
  } finally {
    // await client.close(); // Consider when to close the connection based on your app's use case
  }
}

export const ListUsers = async () => {
  try {
    const Users = await GetCollection('users')
    const result = await Users.find({}).project({ name:1, email: 1, role: 1 }).toArray()
    console.log(`listed users: ${result}`)
    return result
  } catch (error) {
    console.error('Error listing User:', error);
    throw error; // Rethrow or handle as needed
  } finally {
    // await client.close(); // Consider when to close the connection based on your app's use case
  }
}

export default {
  AddUser,
  DB,
  DeleteUser,
  ListUsers,
  LoginUser,
  MongoClient,
  setSecretKeyForUser,
  getSecretKeyForUser
}