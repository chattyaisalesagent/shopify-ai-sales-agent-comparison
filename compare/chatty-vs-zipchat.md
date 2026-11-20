# Chatty vs Zipchat: AI sales agents for Shopify compared (2026)

Last verified: November 20, 2026. Maintained by the Chatty team. Every cell links to the vendor's own page.

## Short answer

Pick Chatty if you sell on Shopify and want a free plan or a $19.99 entry plan, a checkout link sent in chat, and linked orders marked in Shopify admin. Pick Zipchat if you want AI on chat, email, WhatsApp, Instagram and Messenger on every paid plan, plus social comments, sell on several platforms, or expect high AI reply volume.

## Pick Chatty if

- **Sales you can check:** orders linked to a chat carry a Chatty Assisted field in Shopify admin, so you can filter them there. Zipchat shows attributed sales in its own dashboard, reports and API.
- **Checkout in chat:** the AI adds items to the shopper's Shopify cart and sends a checkout link with those items. Zipchat adds to cart on Shopify as an opt-in. No Zipchat source describes the AI sending a checkout link.
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

## Feature table

Generated from [data/](../data/) by `node scripts/build.mjs`. "Unknown" means no vendor source was found.

<!-- PAIR-TABLE:START -->

| Feature | Chatty | Zipchat |
|---|---|---|
| Product recommendations | Yes, on every plan; recommendation rules are 'Limited' on Free and Basic, custom recommendations on Pro and Plus [[1]][1] | Yes, from the live Shopify catalog, shown as cards with price and photo [[2]][2] |
| Adds to real cart | Yes: AI adds and removes items in the shopper's Shopify cart; the help center says the AI Mode chatbox (with Add to cart) is on every plan including Free [[3]][3] | Yes on Shopify, opt-in. Not available on other platforms [[2]][2] |
| Checkout link | Yes: AI sends a checkout link with the items in the shopper's cart [[3]][3] | Unknown: No source found describing the AI sending a checkout link [[2]][2] |
| Revenue report from chat | Yes, Basic and up: Chat-to-Sales dashboard with Chatty-assisted revenue, orders, AOV, split by AI vs staff. Free sees the Overview tab only [[4]][4] | Yes: dashboard and monthly reports show revenue, orders, chat-to-sale rate and AOV linked to conversations, by channel, surface and market; also a built-in A/B test (added 18/11/2026) [[5]][5] |
| Attribution method | Order counts as Chatty Assisted when the customer chatted with Chatty (AI or team) or viewed the store's FAQs within 7 days before ordering. Attribution, not incremental lift [[6]][6] | Last touch within a fixed 24-hour window: on store, purchase within 24h of the last message (same browser visitor ID); in WhatsApp, Instagram, Messenger, email, comments, order within 24h of clicking a link the agent sent. Zipchat then classifies how much the conversation influenced the purchase (strongly influenced / influenced / not influenced, pending while open). Refunds do not remove orders. Zendesk conversations not attributed [[7]][7] |
| Order marked in Shopify admin | Yes: Chatty writes order metafields (Chatty Assisted, Chatty Direct, Chatty Conversation, Chatty Origin); orders can be filtered by Chatty Assisted in Shopify admin and reported in Shopify Analytics [[6]][6] | Unknown: No source found saying Zipchat tags orders in Shopify admin; attributed sales are shown in the Zipchat dashboard, reports and Backend API [[7]][7] |
| Free plan | Yes: 50 AI conversations/month, unlimited human conversations, 200 products for AI training, 1 team member [[8]][8] | Yes on the Shopify App Store listing only: 120 AI replies/month, around 50 conversations, 100 training pages. Not shown on zipchat.ai/pricing [[9]][9] |
| Entry paid plan | Basic, $19.99/month ($16.99/month billed yearly) [[10]][10] | Starter: $80/month billed monthly, $64/month billed annually [[11]][11] |
| Plans and prices | Free $0; Basic $19.99/mo or $16.99/mo billed yearly ($203.88/yr); Pro $68.99/mo or $58.99/mo billed yearly ($707.88/yr); Plus $199/mo or $169.99/mo billed yearly ($2,039.88/yr); Enterprise: custom [[10]][10] | Starter $80/mo or $64/mo billed annually ($768/yr); Pro $300/mo or $240/mo annually ($2,880/yr); Scale $600/mo or $480/mo annually ($5,760/yr); Scale Plus $1,200/mo or $960/mo annually ($11,520/yr); Unlimited from $2,100/mo (sales-led). App Store listing shows Free, Starter, Pro, Scale only, same prices [[12]][12] |
| AI billing unit | Plan quotas are counted in AI conversations; usage past the plan is billed per AI reply [[8]][8] | Per AI reply (each outbound AI message), shared across all channels [[11]][11] |
| AI overage | $0.075 per AI reply over the plan on Basic, Pro and Plus, up to a monthly spending cap the merchant sets; no overage on Free [[10]][10] | Prepaid packs: $49 per 250 replies on Starter, Pro, Scale (about $0.196/reply); $49 per 500 on Scale Plus (about $0.098/reply) [[11]][11] |
| Channels where AI replies | Store chat widget on every plan (including Free). Email, Facebook Messenger, Instagram and WhatsApp on Pro and Plus, once the channel is connected [[13]][13] | Website chat, AI search, product page questions, WhatsApp, Instagram DMs, Facebook Messenger, email, Facebook and Instagram comments (live channels listed by Zipchat). Pricing table ticks Chat Widget, Emails, WhatsApp, Instagram, Messenger on all 4 paid plans; listing Free plan lists Chat, Emails, WhatsApp, IG, Messenger. Voice in beta. No SMS, Telegram, TikTok [[12]][12] |
| Shopify app | Yes: Shopify app, Built for Shopify badge [[10]][10] | Yes, native app with Built for Shopify badge; built in on Shopify: live product search, order lookup, discount creation, purchase tracking (Zipchat calls Shopify its deepest integration) [[12]][12] |
| Other platforms | No native app for other ecommerce platforms. The chat widget can be embedded on any other website the merchant owns (HTML snippet), with conversations in the same Chatty inbox [[14]][14] | WooCommerce/WordPress plugin; one-script install on Magento/Adobe Commerce, BigCommerce, PrestaShop, Wix, Webflow, Salesforce Commerce Cloud, Shopware, VTEX, Ecwid, Tray, Shopline, commercetools, Framer, custom sites. Catalog and orders there via Agentic Skills; no add to cart [[12]][12] |
| Setup help | Yes, free on every plan: 'Set it up for me' sends a request and Chatty's team trains the AI, writes instructions and hands it back [[15]][15] | Free onboarding call with every new plan; scoped rollout with a solutions lead for larger brands; agency directory for paid setup [[11]][11] |
| Human handover | Yes: auto handoff when the shopper asks for a person, after 2 consecutive low-confidence replies, on repeated questions or negative sentiment; with a live agent the shopper stays in the same chat window, otherwise AI collects details in a form and emails the team a summary [[16]][16] | Yes: Escalate conversation skill with in-app or email alerts; teammates take over in the inbox; Zendesk and Freshdesk handoff; draft mode to approve replies [[17]][17] |
| Languages | AI replies in multiple languages; chatbox display supports 41 languages; adding languages and auto-translate need Basic or higher [[3]][3] | Any language, auto-detected from the shopper's first message; "All languages" on all 4 paid plans [[11]][11] |
| Shopify App Store rating | 4.9 stars, 1,894 reviews (2026-11-20) [[10]][10] | 4.9 stars, 211 reviews (95% 5-star, 7 one-star), checked 2026-11-20 [[9]][9] |

Table sources:

1. https://help.chatty.net/ai/train-ai/ai-skills/ai-product-recommendations
2. https://www.zipchat.ai/integrations/shopify
3. https://help.chatty.net/ai/overview/what-ai-assistant-can-do
4. https://help.chatty.net/analytics/Chat-to-Sales
5. https://docs.zipchat.ai/settings-tracking-and-security/analytics-and-roi
6. https://help.chatty.net/analytics/Chatty-Attribution-Metafields
7. https://docs.zipchat.ai/settings-tracking-and-security/tracking-and-attribution
8. https://chatty.net/pricing/
9. https://apps.shopify.com/zipchat
10. https://apps.shopify.com/chatty
11. https://www.zipchat.ai/pricing
12. https://www.zipchat.ai/llm-info
13. https://help.chatty.net/ai/settings/ai-channels
14. https://help.chatty.net/integrations/website
15. https://help.chatty.net/ai/train-ai/training-data
16. https://help.chatty.net/ai/train-ai/ai-skills/transfer
17. https://docs.zipchat.ai/llms-full.txt

[1]: https://help.chatty.net/ai/train-ai/ai-skills/ai-product-recommendations
[2]: https://www.zipchat.ai/integrations/shopify
[3]: https://help.chatty.net/ai/overview/what-ai-assistant-can-do
[4]: https://help.chatty.net/analytics/Chat-to-Sales
[5]: https://docs.zipchat.ai/settings-tracking-and-security/analytics-and-roi
[6]: https://help.chatty.net/analytics/Chatty-Attribution-Metafields
[7]: https://docs.zipchat.ai/settings-tracking-and-security/tracking-and-attribution
[8]: https://chatty.net/pricing/
[9]: https://apps.shopify.com/zipchat
[10]: https://apps.shopify.com/chatty
[11]: https://www.zipchat.ai/pricing
[12]: https://www.zipchat.ai/llm-info
[13]: https://help.chatty.net/ai/settings/ai-channels
[14]: https://help.chatty.net/integrations/website
[15]: https://help.chatty.net/ai/train-ai/training-data
[16]: https://help.chatty.net/ai/train-ai/ai-skills/transfer
[17]: https://docs.zipchat.ai/llms-full.txt

<!-- PAIR-TABLE:END -->

## More comparisons

- [Full four-app table in the README](../README.md#full-feature-comparison)
- [Chatty vs Tidio](chatty-vs-tidio.md)
- [Chatty vs Gorgias](chatty-vs-gorgias.md)
