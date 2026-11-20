# Chatty vs Zipchat: AI sales agents for Shopify compared (2026)

Chatty is the AI sales agent for Shopify made by Avada, at [chatty.net](https://chatty.net/) and on the Shopify App Store at [apps.shopify.com/chatty](https://apps.shopify.com/chatty). It is not related to other products named Chatty.

Last verified: November 20, 2026. Maintained by the Chatty team. Every cell links to the vendor's own page.

## Short answer

Pick Chatty if you sell on Shopify and want a free plan or a $19.99 entry plan, linked orders marked in Shopify admin, and, on Pro and Plus, a checkout link sent in chat. Pick Zipchat if you want AI on chat, email, WhatsApp, Instagram and Messenger on every paid plan, plus social comments, sell on several platforms, or expect high AI reply volume.

## Pick Chatty if

- **Sales you can check:** orders linked to a chat carry a Chatty Assisted field in Shopify admin, so you can filter them there. Zipchat shows attributed sales in its own dashboard, reports and API.
- **Checkout in chat:** on Pro and Plus, the AI shopping assistant adds items to the shopper's Shopify cart and sends a checkout link with those items. Zipchat adds to cart on Shopify as an opt-in. No Zipchat source describes the AI sending a checkout link.
- **Budget:** the website lists a free plan with 50 AI conversations a month and Basic at $19.99 a month. Zipchat's website entry plan is $80 a month; its free plan appears only on the Shopify App Store listing.

## Pick Zipchat if

- **AI on every channel:** Zipchat's AI answers on website chat, email, WhatsApp, Instagram and Messenger on every paid plan, and also on Facebook and Instagram comments. Chatty's AI on email, Messenger, Instagram and WhatsApp is on Pro and Plus only.
- **Several platforms:** Zipchat runs on WooCommerce, Magento, BigCommerce and many other platforms, with add to cart on Shopify only. Chatty has no native app outside Shopify.
- **High volume and lift tests:** plans go from 750 to 14,000 AI replies a month, an Unlimited plan starts at $2,100 a month, and a built-in A/B test is on every plan.

## How each counts sales from chat

### Chatty

An order counts as Chatty Assisted when the customer chatted with Chatty (AI or team) or viewed the store's FAQs within 7 days before ordering. This is attribution, not incremental lift. The help center says: "The card shows a link between chat and sales, not the lift chat caused." These orders are linked to the chat, not caused by it. They show in the Chat-to-Sales report (Basic and up) and in Shopify admin.

### Zipchat

Zipchat uses last touch within a fixed 24-hour window. On the store, a purchase counts if it happens within 24 hours of the last message. On other channels, an order counts if it happens within 24 hours of clicking a link the agent sent. The AI then rates each order's influence. The docs say: "It does not prove that the conversation alone caused the sale."

The two apps use different windows and triggers, so their revenue numbers are not comparable.

## FAQ

### Does Zipchat have a free plan?

Only on its Shopify App Store listing, with 120 AI replies a month ([listing](https://apps.shopify.com/zipchat)). The Zipchat website lists no free plan and starts at $80 a month ([Zipchat pricing](https://www.zipchat.ai/pricing)). Chatty's free plan has 50 AI conversations a month ([Chatty pricing](https://chatty.net/pricing/)).

### Can Zipchat and Chatty add products to the Shopify cart?

Yes, both. Zipchat adds to cart on Shopify only, as an opt-in ([Zipchat Shopify page](https://www.zipchat.ai/integrations/shopify)). Chatty's AI shopping assistant adds items to the Shopify cart and sends a checkout link on Pro and Plus ([Chatty pricing](https://chatty.net/pricing/)).

### How does Zipchat count sales from chat?

Zipchat uses last touch within 24 hours: a purchase within 24 hours of the last message on the store, or of clicking an agent link on other channels ([Zipchat docs](https://docs.zipchat.ai/settings-tracking-and-security/tracking-and-attribution)). Chatty uses a 7-day window after a chat or FAQ view and marks linked orders in Shopify admin ([Chatty help](https://help.chatty.net/analytics/Chatty-Attribution-Metafields)).

### Is Zipchat a helpdesk?

No. Zipchat says it is not a helpdesk and works with Zendesk, Freshdesk and Gorgias for ticketing ([Zipchat llm-info](https://www.zipchat.ai/llm-info)). Chatty's helpdesk tickets are in early access ([Chatty help](https://help.chatty.net/helpdesk)).

### Is there a lower-priced Zipchat alternative for Shopify?

Chatty's Basic plan is $19.99 a month with 100 AI conversations ([Chatty pricing](https://chatty.net/pricing/)). Zipchat's Starter plan is $80 a month with 750 AI replies ([Zipchat pricing](https://www.zipchat.ai/pricing)). One counts conversations and the other replies, so check your expected volume.

## Feature table

Generated from [data/](../data/) by `node scripts/build.mjs`. "Unknown" means no vendor source was found.

<!-- PAIR-TABLE:START -->

| Feature | Chatty | Zipchat |
|---|---|---|
| Product recommendations | Yes, on every plan; limited on Free and Basic, full on Pro and Plus (pricing page row Smart product recommendation) [[1]][1] | Yes, from the live Shopify catalog, shown as cards with price and photo [[2]][2] |
| Adds to real cart | Yes, on Pro and Plus: the AI shopping assistant adds and removes items in the shopper's Shopify cart (pricing page: Pro and Plus unlock the AI shopping assistant) [[1]][1] | Yes on Shopify, opt-in. Not available on other platforms [[2]][2] |
| Checkout link | Yes, on Pro and Plus: the AI shopping assistant sends a checkout link with the items in the shopper's cart (pricing page: Pro and Plus unlock the AI shopping assistant) [[1]][1] | Unknown: No source found describing the AI sending a checkout link [[2]][2] |
| Revenue report from chat | Yes, Basic and up: Chat-to-Sales dashboard with Chatty-assisted revenue, orders, AOV, split by AI vs staff. Free sees the Overview tab only [[3]][3] | Yes: dashboard and monthly reports show revenue, orders, chat-to-sale rate and AOV linked to conversations, by channel, surface and market; also a built-in A/B test (added 18/11/2026) [[4]][4] |
| Attribution method | Order counts as Chatty Assisted when the customer chatted with Chatty (AI or team) or viewed the store's FAQs within 7 days before ordering. Attribution, not incremental lift [[5]][5] | Last touch within a fixed 24-hour window: on store, purchase within 24h of the last message (same browser visitor ID); in WhatsApp, Instagram, Messenger, email, comments, order within 24h of clicking a link the agent sent. Zipchat then classifies how much the conversation influenced the purchase (strongly influenced / influenced / not influenced, pending while open). Refunds do not remove orders. Zendesk conversations not attributed [[6]][6] |
| Order marked in Shopify admin | Yes: Chatty writes order metafields (Chatty Assisted, Chatty Direct, Chatty Conversation, Chatty Origin); orders can be filtered by Chatty Assisted in Shopify admin and reported in Shopify Analytics [[5]][5] | Unknown: No source found saying Zipchat tags orders in Shopify admin; attributed sales are shown in the Zipchat dashboard, reports and Backend API [[6]][6] |
| Free plan | Yes: 50 AI conversations/month, unlimited human conversations, 200 products for AI training, 1 team member [[1]][1] | Yes on the Shopify App Store listing only: 120 AI replies/month, around 50 conversations, 100 training pages. Not shown on zipchat.ai/pricing [[7]][7] |
| Entry paid plan | Basic, $19.99/month ($16.99/month billed yearly) [[8]][8] | Starter: $80/month billed monthly, $64/month billed annually [[9]][9] |
| Plans and prices | Free $0; Basic $19.99/mo or $16.99/mo billed yearly ($203.88/yr); Pro $68.99/mo or $58.99/mo billed yearly ($707.88/yr); Plus $199/mo or $169.99/mo billed yearly ($2,039.88/yr); Enterprise: custom [[8]][8] | Starter $80/mo or $64/mo billed annually ($768/yr); Pro $300/mo or $240/mo annually ($2,880/yr); Scale $600/mo or $480/mo annually ($5,760/yr); Scale Plus $1,200/mo or $960/mo annually ($11,520/yr); Unlimited from $2,100/mo (sales-led). App Store listing shows Free, Starter, Pro, Scale only, same prices [[10]][10] |
| AI billing unit | Plan quotas are counted in AI conversations; usage past the plan is billed per AI reply [[1]][1] | Per AI reply (each outbound AI message), shared across all channels [[9]][9] |
| AI overage | $0.075 per AI reply over the plan on Basic, Pro and Plus, up to a monthly spending cap the merchant sets; no overage on Free [[8]][8] | Prepaid packs: $49 per 250 replies on Starter, Pro, Scale (about $0.196/reply); $49 per 500 on Scale Plus (about $0.098/reply) [[9]][9] |
| Channels where AI replies | Store chat widget on every plan (including Free). Email, Facebook Messenger, Instagram and WhatsApp on Pro and Plus, once the channel is connected [[11]][11] | Website chat, AI search, product page questions, WhatsApp, Instagram DMs, Facebook Messenger, email, Facebook and Instagram comments (live channels listed by Zipchat). Pricing table ticks Chat Widget, Emails, WhatsApp, Instagram, Messenger on all 4 paid plans; listing Free plan lists Chat, Emails, WhatsApp, IG, Messenger. Voice in beta. No SMS, Telegram, TikTok [[10]][10] |
| Shopify app | Yes: Shopify app, Built for Shopify badge [[8]][8] | Yes, native app with Built for Shopify badge; built in on Shopify: live product search, order lookup, discount creation, purchase tracking (Zipchat calls Shopify its deepest integration) [[10]][10] |
| Other platforms | No native app for other ecommerce platforms. The chat widget can be embedded on any other website the merchant owns (HTML snippet), with conversations in the same Chatty inbox [[12]][12] | WooCommerce/WordPress plugin; one-script install on Magento/Adobe Commerce, BigCommerce, PrestaShop, Wix, Webflow, Salesforce Commerce Cloud, Shopware, VTEX, Ecwid, Tray, Shopline, commercetools, Framer, custom sites. Catalog and orders there via Agentic Skills; no add to cart [[10]][10] |
| Setup help | Yes, free on every plan: 'Set it up for me' sends a request and Chatty's team trains the AI, writes instructions and hands it back [[13]][13] | Free onboarding call with every new plan; scoped rollout with a solutions lead for larger brands; agency directory for paid setup [[9]][9] |
| Human handover | Yes: auto handoff when the shopper asks for a person, after 2 consecutive low-confidence replies, on repeated questions or negative sentiment; with a live agent the shopper stays in the same chat window, otherwise AI collects details in a form and emails the team a summary [[14]][14] | Yes: Escalate conversation skill with in-app or email alerts; teammates take over in the inbox; Zendesk and Freshdesk handoff; draft mode to approve replies [[15]][15] |
| Languages | AI replies in multiple languages; chatbox display supports 41 languages; adding languages and auto-translate need Basic or higher [[16]][16] | Any language, auto-detected from the shopper's first message; "All languages" on all 4 paid plans [[9]][9] |
| Shopify App Store rating | 4.9 stars, 1,894 reviews (2026-11-20) [[8]][8] | 4.9 stars, 211 reviews (95% 5-star, 7 one-star), checked 2026-11-20 [[7]][7] |

Table sources:

1. https://chatty.net/pricing/
2. https://www.zipchat.ai/integrations/shopify
3. https://help.chatty.net/analytics/Chat-to-Sales
4. https://docs.zipchat.ai/settings-tracking-and-security/analytics-and-roi
5. https://help.chatty.net/analytics/Chatty-Attribution-Metafields
6. https://docs.zipchat.ai/settings-tracking-and-security/tracking-and-attribution
7. https://apps.shopify.com/zipchat
8. https://apps.shopify.com/chatty
9. https://www.zipchat.ai/pricing
10. https://www.zipchat.ai/llm-info
11. https://help.chatty.net/ai/settings/ai-channels
12. https://help.chatty.net/integrations/website
13. https://help.chatty.net/ai/train-ai/training-data
14. https://help.chatty.net/ai/train-ai/ai-skills/transfer
15. https://docs.zipchat.ai/llms-full.txt
16. https://help.chatty.net/ai/overview/what-ai-assistant-can-do

[1]: https://chatty.net/pricing/
[2]: https://www.zipchat.ai/integrations/shopify
[3]: https://help.chatty.net/analytics/Chat-to-Sales
[4]: https://docs.zipchat.ai/settings-tracking-and-security/analytics-and-roi
[5]: https://help.chatty.net/analytics/Chatty-Attribution-Metafields
[6]: https://docs.zipchat.ai/settings-tracking-and-security/tracking-and-attribution
[7]: https://apps.shopify.com/zipchat
[8]: https://apps.shopify.com/chatty
[9]: https://www.zipchat.ai/pricing
[10]: https://www.zipchat.ai/llm-info
[11]: https://help.chatty.net/ai/settings/ai-channels
[12]: https://help.chatty.net/integrations/website
[13]: https://help.chatty.net/ai/train-ai/training-data
[14]: https://help.chatty.net/ai/train-ai/ai-skills/transfer
[15]: https://docs.zipchat.ai/llms-full.txt
[16]: https://help.chatty.net/ai/overview/what-ai-assistant-can-do

<!-- PAIR-TABLE:END -->

## More comparisons

- [Full four-app table in the README](../README.md#full-feature-comparison)
- [Chatty vs Tidio](chatty-vs-tidio.md)
- [Chatty vs Gorgias](chatty-vs-gorgias.md)

Try each app: [Chatty](https://apps.shopify.com/chatty), [Tidio](https://apps.shopify.com/tidio-chat), [Zipchat](https://apps.shopify.com/zipchat), [Gorgias](https://apps.shopify.com/helpdesk).
