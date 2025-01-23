# Docs

[![Deploy to GitHub Pages](https://github.com/message-exp/docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/message-exp/docs/actions/workflows/deploy.yml)

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

## Protos

Follow the following instructions to generate docs from .proto files.

First, get [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc) and add it to PATH.

Second, generate JSON file from .proto files.

```sh
protoc \
  --proto_path=./protos \
  --doc_out=./fixtures \
  --doc_opt=json,proto_workspace.json \
  $(find protos/nori -name "*.proto")
```

Third, generate .mdx files from the JSON file.

```sh
pnpm exec docusaurus generate-proto-docs
```

> [!NOTE]
> If you encounter this error: `[ERROR] Error: The path to the sidebar file does not exist at "sidebarsProtodocs.js".` , please create an empty `sidebarsProtodocs.js` file, then execute the command again.

Finally, run the program to check the result.

```sh
pnpm run start
```
