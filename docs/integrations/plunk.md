# Send email using Plunk
Learn how to send an email using Vue Email and Plunk Node.js SDK.


## 1. Install dependencies

Get the [Plunk Node.js SDK](https://www.npmjs.com/package/@plunk/node).

::: code-group
  ```bash [pnpm]
  pnpm add @plunk/node
  ```
  ```bash [yarn]
  yarn add @plunk/node
  ```
  ```bash [npm]
  npm install @plunk/node
  ```
:::


## 2. Create an email using Vue

Start by building your email template in a `.vue` file.


```vue
// `welcome.vue`
<template>
  <e-html lang="en">
    <e-button :href="url">
      View on GitHub
    </e-button>
  </e-html>
</template>
<script lang="ts" setup>
import { EButton, EHtml } from 'vue-email';

defineProps<{ url: string }>();
</script>
```

## Step 3: Convert to HTML and send email

Import the email template you just built, convert into a HTML string, and use the Nodemailer SDK to send it.

::: code-group

```ts [Nuxt 3]
// server/api/send-email.post.ts

import Plunk from '@plunk/node';

const plunk = new Plunk(process.env.PLUNK_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await plunk.emails.send({
    to: "hello@useplunk.com",
    subject: "Hello world",
    body: body.template,
  });

  return { message: 'Email sent' };
});
```

```ts [NodeJs]
import express from 'express';
import Plunk from '@plunk/node';

const plunk = new Plunk(process.env.PLUNK_API_KEY);

const app = express();

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { template } = req.body;

  await plunk.emails.send({
    to: "hello@useplunk.com",
    subject: "Hello world",
    body: template,
  });

  return res.json({ message: "Email sent" });
});

app.listen(3001);
```

:::

## Try it yourself

[Plunk example](https://github.com/Dave136/vue-email)