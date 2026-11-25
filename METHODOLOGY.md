# Methodology

## Who maintains this

This repo is maintained by the Chatty team at Avada. Chatty is one of the four apps compared. To keep that from shaping the data, every cell is tied to a vendor's own page, with a short verbatim quote in the data files. Corrections from anyone, including the other vendors, are welcome via issues or PRs.

## How the data was collected

- **When:** all pages were read on November 20, 2026. On November 25, 2026, the four Shopify App Store ratings and the Chatty overage source were checked again.
- **Where:** vendor pricing pages, vendor product pages, vendor help centers and docs, and each app's Shopify App Store listing.
- **What is stored:** for each app and feature, a short value, a status (yes, no, partial, paid add-on, unknown), the source URL, a verbatim quote from that page, the date accessed, and an optional note.
- **Third-party sources:** blogs and review roundups are not used as a source.
- **G2:** G2 pages blocked automated access, so G2 ratings are not verified. Where a vendor shows its own G2 score, the data says so.

## Rules

- **No source means unknown.** If no vendor page states a fact, the cell is marked unknown. Nothing is inferred.
- **Vendor words, plain summary.** Values summarize the source in short plain sentences. The quote in the data files is the check.
- **Plan limits are part of the fact.** If a feature needs a certain plan or a paid add-on, the value says so.
- **No scores.** The repo describes fit. It does not rank the apps.
- **When vendor pages disagree:** for Chatty, the website pricing page and the Shopify App Store listing are used when the help center conflicts. For other apps, the more specific page (pricing table or plan doc) is used, and the conflict is listed below.

## Re-verification

Every source is re-checked monthly, and whenever a vendor announces a pricing change. The "Last verified" date in the README and the `accessed` field in the data show when each fact was last read.

To rebuild after editing `data/<app>.json`:

```
node scripts/build.mjs
node scripts/check.mjs
```

`check.mjs` fails if a sourced cell lacks a URL or date, if any file contains an em dash or middle dot, or if a README table has an empty cell.

## Known conflicts in vendor sources

### Chatty

Sources: chatty.net/pricing/ (website), apps.shopify.com/chatty (listing), help.chatty.net (help center).

1. **Overage price.** On November 25, 2026, the website pricing page shows $0.075 per AI reply over the plan, while the Shopify App Store listing shows $0.4 per AI conversation over the plan. The help center pricing page also shows $0.4 per conversation. The data uses the website pricing page: $0.075 per AI reply.
2. **Messenger, Instagram and WhatsApp inbox on Free.** Website: Basic and up. Listing: Free has email connect, Basic adds the multi-channel inbox. Help center pricing table: all plans, while its own FAQ says paid plans add the multi-channel inbox. AI replies on these channels are Pro and Plus only in every source.
3. **What counts as assisted.** The help center definition of Chatty Assisted includes customers who only viewed the store's FAQs within 7 days, not only those who chatted. The README states this.
4. **AI shopping assistant plan.** Website pricing page FAQ: "Pro and Plus also unlock the AI shopping assistant", and the listing shows AI Shopping assistant under Pro and Plus. Help center (chatbox/ai-mode-vs-legacy): AI Mode is "Available on every plan, including Free". The data uses the pricing page: add to cart and checkout link on Pro and Plus. Product recommendations are on every plan, limited on Free and Basic.

### Gorgias

Sources: gorgias.com/pricing, docs.gorgias.com, apps.shopify.com/helpdesk.

1. **AI Agent price on Advanced.** The Compare plans table lists $0.85 per interaction. The plan card gives $477 for 530 interactions on annual billing, which is $0.90. The data uses the card prices.
2. **Number of integrations.** The pricing page shows three counts: 254 (page schema), 150+ (Compare plans) and 100+ (menu).
3. **Legacy AI Agent cutoff date.** "AI Agent explained" says merchants who subscribed before July 16, 2025 may need to upgrade. "Shopping Assistant explained" says before May 28, 2025.
4. **Shopping Assistant channels.** "Shopping Assistant explained" lists chat, email and SMS. "AI Agent explained" lists email, chat, SMS and social. The billing doc says AI Agent can be deployed on email and chat.
5. **Voice and SMS on Starter.** Add-ons are described as available on any plan, but Compare plans marks them as not available on Starter.
6. **Seats on Basic.** Compare plans: 500 seats. Shopify listing: "Unlimited customer support agents".
7. **Overage text.** The $1.50 per automated interaction price appears in the AI Agent offer schema on the pricing page, not in the visible plan card text.
8. **Voice and SMS prices.** The pricing page price table for Voice and SMS was empty on November 20, 2026.

### Tidio

1. **New plans from November 16, 2026.** Tidio replaced its module pricing with one conversation quota shared by Lyro and team. Accounts that subscribed before that date keep their old plans and limits. The data shows the new plans.
2. **G2 rating.** The 4.6 G2 score comes from Tidio's own pricing page. It was not verified on G2.
3. **Discount codes.** Tidio's Shopify page says Lyro can send discount codes. The help center documents coupons through the Flows "Send a coupon code" action. The data marks this as partial.

### Zipchat

1. **Free plan.** A Free plan (120 AI replies a month) appears on the Shopify App Store listing only. The website pricing page and llm-info list no free plan.
2. **Plans on the listing.** The listing shows Free, Starter, Pro and Scale. Scale Plus and Unlimited appear only on the website.
3. **G2 rating.** Zipchat reports a 4.5 G2 score on its own site. It was not verified on G2.
