# Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Protos

Follow the following instructions to generate docs from .proto files.

First, generate JSON file from .proto files.

```sh
protoc \
  --doc_out=./fixtures \
  --doc_opt=json,proto_workspace.json \
  $(find protos/nori -name "*.proto")
```

Second, generate .mdx files from the JSON file.

```sh
pnpm exec docusaurus generate-proto-docs
```

> [!NOTE]
> If you encounter this error: `[ERROR] Error: The path to the sidebar file does not exist at "sidebarsProtodocs.js".` , please create an empty `sidebarsProtodocs.js` file, then execute the command again.

Finally, change the link path.

```ts
const config: Config = {
  // ...
  themeConfig: {
    // ...
    navbar: {
      // ...
      items: [
        // ...
        {
          to: 'protodocs/package/test.proto',  // change this to your proto doc path
          activeBasePath: 'protodocs',
          label: 'Protodocs',
          position: 'left',
        },
        // ...
```
