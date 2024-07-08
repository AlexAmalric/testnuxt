# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

In the root of your project, create a file named .env. This file will contain the environment variables necessary for the application to function correctly.

Add environment variables:

In the .env file, add the following lines, replacing <your_mongo_uri> and <your_secret_key_base> with your respective values:

MONGO_URI=<your_mongo_uri>
SECRET_KEY_BASE=<your_secret_key_base>

'MONGO_URI': The connection URI to your MongoDB database. For example: mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority

SECRET_KEY_BASE: A base secret key used for generating and verifying JWT tokens. This key should be a complex and secure string to ensure the security of your tokens. You can generate a secure key using the following Python command:

```python

# Generating a secret key
import os
print(os.urandom(64).hex())


# Now make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
````

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# additional package dependencies

```sudo apt-get update
sudo apt-get install libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```
