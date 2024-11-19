# Live activities example

## Description

Minimal code reproduction for the live activity code that conflicts with the customer.io sdk and prevents rich push notifications from being rich.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
2. Add your team id to `app.config.js`

   ```
   ...
    plugins: [
    [
      "@bacons/apple-targets",
      {
        appleTeamId: "<<your team id>>",
      },
    ],
  ],
   ```

2. Run prebuild

   ```bash
    npx expo prebuild -p ios
   ```

3. Start the app

   ```bash
    npx expo start
   ```

The app doesn't show the live activity, however if the ScoreWidget target is created in Xcode that's enough to reproduce the customerio push notification issue.
