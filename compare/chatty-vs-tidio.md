# Chatty vs Tidio: AI sales agents for Shopify compared (2026)

Chatty is the AI sales agent for Shopify made by Avada, at [chatty.net](https://chatty.net/) and on the Shopify App Store at [apps.shopify.com/chatty](https://apps.shopify.com/chatty). It is not related to other products named Chatty.

Last verified: November 20, 2026. Maintained by the Chatty team. Every cell links to the vendor's own page.

## Short answer

Pick Chatty if you sell on Shopify and want linked orders marked in Shopify admin, with the AI adding items to a real Shopify cart and sending a checkout link on Pro and Plus. Plans start free, and product recommendations are on every plan. Pick Tidio if you sell on several platforms, want Lyro AI on email, Messenger, Instagram and WhatsApp on any plan with Lyro, and want ticketing on all plans.

## Pick Chatty if

- **Sales you can check:** orders linked to a chat carry a Chatty Assisted field in Shopify admin, so you can filter them there. Tidio shows its sales report in Tidio Analytics.
- **Checkout in chat:** on Pro and Plus, the AI shopping assistant adds items to the shopper's Shopify cart and sends a checkout link with those items. Tidio also has add to cart on Lyro product cards. No Tidio source describes Lyro sending a checkout link.
- **Budget and setup:** a free plan with 50 AI conversations a month, Basic at $19.99 a month, and free done-for-you AI setup on every plan.

## Pick Tidio if

- **Several platforms:** you also run WooCommerce, BigCommerce, Squarespace or a custom site. Chatty has no native app outside Shopify.
- **AI on every channel:** Lyro answers on chat, email, Messenger, Instagram and WhatsApp on any plan with Lyro. Chatty's AI on email, Messenger, Instagram and WhatsApp is on Pro and Plus only.
- **Helpdesk:** ticketing is included on all Tidio plans. Chatty's helpdesk tickets are in early access.

## How each counts sales from chat

### Chatty

An order counts as Chatty Assisted when the customer chatted with Chatty (AI or team) or viewed the store's FAQs within 7 days before ordering. This is attribution, not incremental lift. The help center says: "The card shows a link between chat and sales, not the lift chat caused." These orders are linked to the chat, not caused by it. They show in the Chat-to-Sales report (Basic and up) and in Shopify admin.

### Tidio

Tidio counts paid Shopify orders only. Lyro gets credit when the shopper clicked a Lyro product recommendation before buying; no time window is stated. Human agents get credit for orders within 7 days after the chat. The Sales assisted overview is on every plan; the full Sales section is on Growth and up.

The two apps use different triggers and windows, so their revenue numbers are not comparable.

## FAQ

### Is there a Tidio alternative for Shopify with a free plan?

Chatty has a free plan with 50 AI conversations a month, with human conversations unlimited ([Chatty pricing](https://chatty.net/pricing/)). Tidio's own free plan has 50 human conversations a month plus 50 Lyro AI conversations once ([Tidio pricing](https://www.tidio.com/pricing/)).

### Can Chatty and Tidio add products to the Shopify cart?

Yes, both. Chatty's AI shopping assistant adds items to the Shopify cart and sends a checkout link on Pro and Plus ([Chatty pricing](https://chatty.net/pricing/)). Tidio's Lyro shows product cards with an add to cart button on plans with Lyro; no Tidio source describes a checkout link ([Tidio help](https://help.tidio.com/articles/product-recs-shopify/)).

### How do Chatty and Tidio count sales from chat?

Chatty links an order to chat when the customer chatted with Chatty or viewed the store's FAQs within 7 days before ordering ([Chatty help](https://help.chatty.net/analytics/Chatty-Attribution-Metafields)). Tidio credits Lyro when the shopper clicked a Lyro product recommendation before buying, and human agents for orders within 7 days ([Tidio help](https://help.tidio.com/articles/conversion-rate/)).

### Does Tidio's Lyro AI answer on Instagram and WhatsApp?

Yes. Lyro answers on chat, email, Messenger, Instagram and WhatsApp on any plan with Lyro ([Tidio pricing](https://www.tidio.com/pricing/)). Chatty's AI answers on those channels on Pro and Plus only ([Chatty help](https://help.chatty.net/ai/settings/ai-channels)).

### How much do Chatty and Tidio cost?

Chatty's paid plans start at $19.99 a month for Basic ([listing](https://apps.shopify.com/chatty)). Tidio starts at $29 a month for human only and $39 a month with Lyro AI ([listing](https://apps.shopify.com/tidio-chat)).

## Feature table

Generated from [data/](../data/) by `node scripts/build.mjs`. "Unknown" means no vendor source was found.

<!-- PAIR-TABLE:START -->

| Feature | Chatty | Tidio |
|---|---|---|
| Product recommendations | Yes, on every plan; limited on Free and Basic, full on Pro and Plus (pricing page row Smart product recommendation) [[1]][1] | Yes: Lyro recommends synced Shopify products as product cards, stock-aware; on any plan with Lyro AI (or during the 7-day trial); works in the chat widget, Messenger, Instagram, WhatsApp and email tickets [[2]][2] |
| Adds to real cart | Yes, on Pro and Plus: the AI shopping assistant adds and removes items in the shopper's Shopify cart (pricing page: Pro and Plus unlock the AI shopping assistant) [[1]][1] | Yes: Add to cart button on Lyro product cards (Shopify and WooCommerce), shopper picks a variant; can be switched to View details [[2]][2] |
| Checkout link | Yes, on Pro and Plus: the AI shopping assistant sends a checkout link with the items in the shopper's cart (pricing page: Pro and Plus unlock the AI shopping assistant) [[1]][1] | Unknown: Not documented: help center describes an Add to cart button (variant picker) or View details button on Lyro product cards; no mention of Lyro sending a checkout or cart link [[2]][2] |
| Revenue report from chat | Yes, Basic and up: Chat-to-Sales dashboard with Chatty-assisted revenue, orders, AOV, split by AI vs staff. Free sees the Overview tab only [[3]][3] | Yes, for Shopify stores: Sales assisted (revenue, orders, AOV) split by Lyro, Flows and human agents. Overview tab on every plan; full Analytics > Sales on Growth and above. Non-Shopify projects see click metrics only, no order values [[4]][4] |
| Attribution method | Order counts as Chatty Assisted when the customer chatted with Chatty (AI or team) or viewed the store's FAQs within 7 days before ordering. Attribution, not incremental lift [[5]][5] | Paid Shopify orders only. Lyro: shopper clicked a Lyro product recommendation before buying (no window stated). Flows: shopper interacted with a Flow product recommendation or coupon. Human agents: order within 7 days after the chat [[4]][4] |
| Order marked in Shopify admin | Yes: Chatty writes order metafields (Chatty Assisted, Chatty Direct, Chatty Conversation, Chatty Origin); orders can be filtered by Chatty Assisted in Shopify admin and reported in Shopify Analytics [[5]][5] | Unknown: Not documented: help center describes assisted sales only inside Tidio Analytics (Overview, Sales, Flows); no mention of tags, notes or metafields on attributed orders in Shopify admin [[4]][4] |
| Free plan | Yes: 50 AI conversations/month, unlimited human conversations, 200 products for AI training, 1 team member [[1]][1] | Yes: 50 human conversations/month, 100 Flows visitors/month, plus 50 Lyro AI conversations once (do not renew) [[6]][6] |
| Entry paid plan | Basic, $19.99/month ($16.99/month billed yearly) [[7]][7] | Human only Starter $29/mo (100 conversations, no Lyro). Cheapest plan with Lyro AI: Lyro AI Starter $39/mo (50 conversations shared by Lyro and team) [[8]][8] |
| Plans and prices | Free $0; Basic $19.99/mo or $16.99/mo billed yearly ($203.88/yr); Pro $68.99/mo or $58.99/mo billed yearly ($707.88/yr); Plus $199/mo or $169.99/mo billed yearly ($2,039.88/yr); Enterprise: custom [[7]][7] | Two modes, same quotas (50 to 1,000 conversations/month). With Lyro AI: Starter $39/mo (50 conversations), $390/yr; Growth $75/mo to $700/mo (100 to 1,000 conversations), from $750/yr. Human only: Free $0 (50); Starter $29/mo (100), $290/yr; Growth $49 to $199/mo (200 to 1,000). Plus from $300/mo plus monthly usage (contact sales). Premium: contact for pricing. Annual billing = 2 months free. [[8]][8] |
| AI billing unit | Plan quotas are counted in AI conversations; usage past the plan is billed per AI reply [[1]][1] | Conversation: one conversation with at least one reply from Lyro or the team counts once, no matter how many messages [[6]][6] |
| AI overage | $0.075 per AI reply over the plan on Basic, Pro and Plus, up to a monthly spending cap the merchant sets; no overage on Free [[7]][7] | No pay-per-unit overage on Starter/Growth. At the limit the team cannot reply to new conversations and Lyro stops until renewal or upgrade; optional automatic upgrade to the next tier at 95% usage. Plus: base price plus monthly usage at discounted rates [[9]][9] |
| Channels where AI replies | Store chat widget on every plan (including Free). Email, Facebook Messenger, Instagram and WhatsApp on Pro and Plus, once the channel is connected [[10]][10] | Lyro answers on website live chat, email, Messenger, Instagram and WhatsApp, on any plan with Lyro AI [[6]][6] |
| Shopify app | Yes: Shopify app, Built for Shopify badge [[7]][7] | Yes: Shopify App Store app, Shopify-only features (cart preview, order actions in inbox, order history) [[11]][11] |
| Other platforms | No native app for other ecommerce platforms. The chat widget can be embedded on any other website the merchant owns (HTML snippet), with conversations in the same Chatty inbox [[12]][12] | Yes: WordPress, WooCommerce, BigCommerce, Adobe Commerce, Squarespace, PrestaShop, Wix, Ecwid, OpenCart and any site via JavaScript [[13]][13] |
| Setup help | Yes, free on every plan: 'Set it up for me' sends a request and Chatty's team trains the AI, writes instructions and hands it back [[14]][14] | Starter/Growth are self-service. Plus adds a dedicated Success Manager; Premium adds Lyro as a managed service and a dedicated services team [[6]][6] |
| Human handover | Yes: auto handoff when the shopper asks for a person, after 2 consecutive low-confidence replies, on repeated questions or negative sentiment; with a live agent the shopper stays in the same chat window, otherwise AI collects details in a form and emails the team a summary [[15]][15] | Yes: handoff and escalation rules; Lyro can answer always or only when agents are offline; handed-over chats continue in the same conversation [[16]][16] |
| Languages | AI replies in multiple languages; chatbox display supports 41 languages; adding languages and auto-translate need Basic or higher [[17]][17] | 51 languages [[18]][18] |
| Shopify App Store rating | 4.9 stars, 1,894 reviews (2026-11-20) [[7]][7] | 4.8 stars, 1,358 reviews (86% 5-star, 4% 1-star), checked 2026-11-20; no Built for Shopify badge; launched July 14, 2014 [[8]][8] |

Table sources:

1. https://chatty.net/pricing/
2. https://help.tidio.com/articles/product-recs-shopify/
3. https://help.chatty.net/analytics/Chat-to-Sales
4. https://help.tidio.com/articles/conversion-rate/
5. https://help.chatty.net/analytics/Chatty-Attribution-Metafields
6. https://www.tidio.com/pricing/
7. https://apps.shopify.com/chatty
8. https://apps.shopify.com/tidio-chat
9. https://help.tidio.com/articles/monthly-conversations-limit/
10. https://help.chatty.net/ai/settings/ai-channels
11. https://www.tidio.com/shopify/
12. https://help.chatty.net/integrations/website
13. https://help.tidio.com/sections/install-tidio/
14. https://help.chatty.net/ai/train-ai/training-data
15. https://help.chatty.net/ai/train-ai/ai-skills/transfer
16. https://help.tidio.com/articles/lyro-main/
17. https://help.chatty.net/ai/overview/what-ai-assistant-can-do
18. https://help.tidio.com/articles/lyro-multilanguage-support/

[1]: https://chatty.net/pricing/
[2]: https://help.tidio.com/articles/product-recs-shopify/
[3]: https://help.chatty.net/analytics/Chat-to-Sales
[4]: https://help.tidio.com/articles/conversion-rate/
[5]: https://help.chatty.net/analytics/Chatty-Attribution-Metafields
[6]: https://www.tidio.com/pricing/
[7]: https://apps.shopify.com/chatty
[8]: https://apps.shopify.com/tidio-chat
[9]: https://help.tidio.com/articles/monthly-conversations-limit/
[10]: https://help.chatty.net/ai/settings/ai-channels
[11]: https://www.tidio.com/shopify/
[12]: https://help.chatty.net/integrations/website
[13]: https://help.tidio.com/sections/install-tidio/
[14]: https://help.chatty.net/ai/train-ai/training-data
[15]: https://help.chatty.net/ai/train-ai/ai-skills/transfer
[16]: https://help.tidio.com/articles/lyro-main/
[17]: https://help.chatty.net/ai/overview/what-ai-assistant-can-do
[18]: https://help.tidio.com/articles/lyro-multilanguage-support/

<!-- PAIR-TABLE:END -->

## More comparisons

- [Full four-app table in the README](../README.md#full-feature-comparison)
- [Chatty vs Zipchat](chatty-vs-zipchat.md)
- [Chatty vs Gorgias](chatty-vs-gorgias.md)

Try each app: [Chatty](https://apps.shopify.com/chatty), [Tidio](https://apps.shopify.com/tidio-chat), [Zipchat](https://apps.shopify.com/zipchat), [Gorgias](https://apps.shopify.com/helpdesk).
