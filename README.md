# env

<img src="https://badgen.net/packagephobia/install/@bergerapi/env"/>

Simple dotenv clone with extended functionality.  

# Usage

## Installation

### With NPM

``npm i @bergerapi/env``

### With Yarn

``yarn add @bergerapi/env``

## Implementation

Create an `.env` file in your project directory.

```env
TEST=test_string123
```

Then add following code to your entry file (e.g. `index.ts`)

```ts
import env from "@bergerapi/env";

env();
```

And use a variable with


```ts
console.log(process.env.TEST);
```

# Configuration

`@bergerapi/env` allows you to change the file which it will parse by passing the path as a parameter to the `env()` function.

```ts
env("../postgres.env")
```

You can also call this function multiple times to use multiple `.env` files as long as they do not contain variables whose names collide with other variables already defined.
