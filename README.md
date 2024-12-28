# Docs

https://message-exp.github.io/docs/

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

For more information, please read [Docusaurus docs](https://docusaurus.io/docs/category/guides).

### Installation

```
$ pnpm install
```

(Yes, you should install pnpm first.)

### Local Development

```
$ pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true pnpm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
