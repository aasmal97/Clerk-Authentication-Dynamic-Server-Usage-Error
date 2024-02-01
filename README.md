# Introduction
This repository holds the minimum reproducible example that highlights a build error issue when using
1. Nextjs Server Actions
2. Nextjs Auth Router
3. Clerk Authentication `auth()` and `currentUser()`, inside imported server action
# Issue Description
Using `auth()` or `currentUser()` inside a server action, that is declared outside of a `page.tsx` file, results in the following build error:   
```
[Error]: Dynamic server usage: Page couldn't be rendered statically because it used `cookies`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error
```
# Getting Started
1. Run `npm i`
2. Create a `.env.local` file in the following format 
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=**************************************
CLERK_SECRET_KEY=*****************************
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```
3. Run `npm run build`

# Important Files
- `actions.ts` can be located [here](app\actions.ts)
- `page.ts` can be located [here](app\page.tsx)