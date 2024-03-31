export const projectData = [
  {
    id: 1,
    title: "The post-purchase flow from a high level",
    description: `
      I barely see any brands get their post purchase flow right so I'm gonna simplify it as much as possible here:

      - Segment by # of purchases made by recipient from 1x to 4x+. Use a conditional split to do this
      - Send thank you notes to each segment, speak to each one differently
      - Send an SMS upsell to 1x purchasers. Exclude anyone who's already on your SMS list with a conditional split
        (exclude "Accepts SMS marketing = true")
      - Send a normal upsell to 1x customers. Test different send times. This will not perform well for every brand. 
        If not, cut it.
      - Send an upsell to your loyalty program / subscription program to 2x+ customers. Makes no sense sending this 
        to anyone who's purchased less than 2x as they're not invested enough to care about the loyalty benefits.
      
      That's the post-purchase flow from a high level.`,
  },
  {
    id: 2,
    title:
      "How I come up with email flow content that our target market actually cares about",
    description: `
      From doing several hundred Klaviyo audits, I've noticed that a good amount of brand owners don't 
      know what type of content to put in their email flows.

      Some brands get it & do a good job but a lot of them are putting random stuff that no one cares about,  
      or not including crucial information that their audience needs to make a purchase decision.
     
      So here's essentially what I do from a high level for email content, specifically for flows:
     
      - Find out what X brand's customers care about: why they purchased, why they made repeat purchases etc.
      - Find out what the customers' biggest objections to buying are, e.g. the price is too high
      - Take the 3 most common answers for the above 2 and compile them into a doc.
     
      Since the market is fractal, we can take the opinions of a handful of your customers and that will  
      reasonably represent the opinions of all of your potential customers.
     
      Use the doc as a starting point for all content. The goal is to elaborate on the value points from #1 and
      minimize the objection points from #2.
     
      Here is an example: let's say we're selling whey protein,
     
      And based on customer research we know that our market generally buys our products because they value quality 
      and great taste.

      But their objections are high pricing compared to competitors.
     
      So one content angle you can glean from this is using the value points to justify the objection point, such as:
     
     "Most often you have to pay a little more if you want true quality. Brand X is definitely that. It might seem pricey, 
     but when it comes to your health, that little bit more is worth it."
     
     For the 'great taste' value point, you could use actual customer reviews, such as:
     
     "I recently purchased this protein powder and I must say, it is hands down the best protein powder I have ever tried! 
     The grass-fed, high-quality ingredients truly make a difference in the overall taste and nutritional value. 
     The chocolate flavor is absolutely delicious and tastes great, reminding me of ice cream."
     
     So that's how I come up with email flow content that our target market actually cares about, because it's the type of info 
     that they're looking for when making a purchase decision.
     `,
  },
];

export const caseStudyData = [
  {
    id: 1,
    title: "We increased her monthly email revenue by $105,000 in just 60 days",
    description: `
    My client Shelley just copped a Hellcat SRT.

Kidding…

But she could if she wanted to.

Because we increased her monthly email revenue by $105,000 in just 60 days.

And this isn’t even her final form 😈

Here’s exactly how we did it (and plan to run it up even more in 2024):

**Welcome Flow**

Their original welcome flow was highly suboptimal from a conversions perspective and also looked like it was made in MS Paint, respectfully.

The copy was also not very good either. It was mostly just "Thanks for signing up, we'll be sending you XYZ." Zero context.

For this flow, you need to give context to new subs on email 1.

Most new subs have no idea who you or your brand are.

They need context for what your brand is & why it's different from competitors.

Hormozi talks about this a lot. You must decommoditize.

So we rewrote the copy to emphasize this brand's unique benefits to the reader, in a super readable format.

We also placed the signup offer at the top (so you can see it without scrolling on mobile) along with a big CTA button to maximize CTR.

Finally, our team of world-class designers redesigned their entire welcome flow.

Not only does this massively improve brand perception to customers, it also has a ripple effect within their biz: their sales team & executives see it & say it gives a more polished professional feel to the brand.

**Campaigns**

They previously weren’t sending any campaigns whatsoever except for holidays and sales.

We implemented a consistent campaign strategy that generates on average $13,020 per campaign.

Here are some of our best-performing campaigns for them:

- Review campaign : Find 3-4 of their best customer reviews & compile them into a campaign—the most non-salesy way of making sales.  


- USPs : Highlighting the unique problems solved by the brand & why their products are the best on the market.


- Bestsellers : Now that our subscribers know: 
  * the problems that we solve and 
  * that our products are actually good, we send them a campaign highlighting their best sellers.
  This is the easiest way to convert noncustomers to 1x customers.
  This traffic also feeds our flows.
    `,
  },
];
