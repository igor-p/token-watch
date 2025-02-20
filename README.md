This application queries real-time crypto market data, via the Coingecko api, to show a listing of top currencies in a minimalist-inspired interface.

**Coming soon:** watchlists

## Getting API access

Before using this app, you will need a **free** API key from CoinGecko.
See [this guide](https://support.coingecko.com/hc/en-us/articles/21880397454233-User-Guide-How-to-sign-up-for-CoinGecko-Demo-API-and-generate-an-API-key) to create your account and generate an api key.

_Note that this key will only grant you access to a limited set of free APIs (which is sufficient for this application).
You can see the docs for the free APIs [here](https://docs.coingecko.com/v3.0.1/reference/introduction)_

## Getting Started

### Set up environment variable
With the API key you generated above, create a `.env` file and add the variable `NEXT_PUBLIC_API_KEY` with the API key as the value
```dotenv
NEXT_PUBLIC_API_KEY=your_key_here
```

You can also copy the provided `.env.template` file to a `.env` file and replace the value.


### Install dependencies
```bash
npm install
# or
pnpm install
```

### Run the development server
```bash
npm dev
# or
pnpm dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

Built with [Next.js](https://nextjs.org/), and bootstrapped with [create-next-app](https://nextjs.org/docs/app/getting-started/installation).

Coingecko free API docs: https://docs.coingecko.com/v3.0.1/reference/introduction