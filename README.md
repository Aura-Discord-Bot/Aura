# Aura - Simple, powerful Discord bot
Simple multi-purpose Discord bot made with TypeScript-> https://auramm.xyz

**Dashboard**: https://github.com/Aura-Discord-Bot/Aura-Dashboard

![Aura Avatar](https://i.ibb.co/tmF2Wrc/aura-smol.png)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a1ac968b712b44dab13bcf953c2c87ca))](https://app.codacy.com/gh/Aura-Discord-Bot/Aura?utm_source=github.com&utm_medium=referral&utm_content=Aura-Discord-Bot/Aura&utm_campaign=Badge_Grade)

## Config
`config.json` example:
```
{
    "bot": {
        "token": "<your_bot_token>",
        "secret": "<your_client_secret>",
        "ownerId": "<discord_user_id>",
        "activity": "auramm.xyz",
        "id": "<discord_bot_id>"
    },
    "api": {
        "port": "3000",
        "url": "https://auramm.xyz/api",
        "stripeSecretKey": "<sk_test_...>",        
        "stripeWebhookSecret": "<whsec_...>"
    },
    "guild": {
        "id": "<support_guild_id>",
        "premiumRoleId": "<premium_role_id>"
    },
    "lavalinkNodes": [
        {
            "host": "localhost",
            "port": 2333,
            "password": "youshallnotpass"
        }
    ],
    "dashboardURL": "https://auramm.xyz",
    "mongoURL": "mongodb://localhost/Aura"
}
```

## Redirect URIs
![Redirects](https://i.ibb.co/9pbfVwL/updated-redirects.png)

## Start the Bot
- `npm start` to start the bot, and Lavalink
- Remember to have a local MongoDB database running `mongod`
- Have Lavalink.jar running - `npm run start:music` or `java -jar Lavalink.jar`

## Troubleshooting
- Open an issue, if you find any bugs or have any suggestions etc.
- You can also join the [Aura Discord](https://discord.gg/95gShMP) if you need extra support.

## Debug with VSCode (Windows)
* `F5` -> start
* `Shift + F5` -> stop
* `Ctrl + Shift + B` -> run build task
* `F9` -> toggle breakpoint
* `F10` -> step over
* `F11` -> step into
* `Shift + F11` -> step out

## Debug Locally with Stripe
`stripe listen --forward-to localhost:3000/stripe-webhook`

This will allow you to get the `config.api.stripeWebhookSecret`.
Replace `localhost:3000` with whatever you are using for the bot server.
