Based on: https://github.com/kellenmace/intro-to-headless-wordpress-with-sveltekit

## Getting Started

1. Get a local WordPress site running locally, and install and activate the WPGraphQL plugin.
1. Clone this repo down to your machine
1. `cd` into the root directory of this project. Create a `.env.local` file and define an environment variable like this `VITE_PUBLIC_WORDPRESS_API_URL=http://sveltesummit.local/graphql`, replacing "http://sveltesummit.local" with the domain of your local WordPress site.
1. Run `npm install`, then `npm run dev`. Visit `http://localhost:3000` in a browser to see your app.
