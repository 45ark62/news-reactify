const TOTAL_PAGES = 10;
const PAGE_SIZE = 10;
const DATA_MOCK=[
    {
        "id": "56ea560e-404a-4a4b-8a41-9d6f60de1315",
        "title": "Six Killed in Hudson River Helicopter Tour Crash, Including Children",
        "description": "Six people were killed when a helicopter tour carrying a family of five from Spain crashed into the Hudson River on Thursday afternoon.",
        "url": "https://www.breitbart.com/politics/2025/04/10/six-killed-in-hudson-river-helicopter-tour-crash-including-children/",
        "author": "Paul Bois",
        "image": "https://media.breitbart.com/media/2025/04/Helicopter-Crash-Hudsom-640x335.jpeg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 22:40:38 +0000"
    },
    {
        "id": "4fa09721-88d9-44d4-8a35-b884e9e5d35c",
        "title": "Drowning in tariffs, American businesses try to stay afloat",
        "description": "It's pretty rare for one person to do one thing that affects nearly every business in the United States. But that's the power of the presidency and the new tariffs that took effect this week. Over the last few days, as the tariffs have gone up and down, NPR has been talking to Americans who run diff...",
        "url": "https://www.npr.org/2025/04/10/1243870155/drowning-in-tariffs-american-businesses-try-to-stay-afloat",
        "author": "npr",
        "image": "None",
        "language": "en",
        "category": [
            "personalfinance",
            "business"
        ],
        "published": "2025-04-10 21:58:41 +0000"
    },
    {
        "id": "b1eb75c2-e7b6-427d-b965-00bf3a1d6172",
        "title": "Breitbart Business Digest: The Forgotten Economic Theory Behind Trump’s Tariffs",
        "description": "The Optimum Tariff: The Idea Behind Trump’s Trade Strategy\n\nFor decades, American elites have spoken of free trade as though it were a moral commandment engraved in stone—unquestionable, sacred, etern...",
        "url": "https://www.breitbart.com/economy/2025/04/10/breitbart-business-digest-the-forgotten-economic-theory-behind-trumps-tariffs/",
        "author": "John Carney",
        "image": "https://media.breitbart.com/media/2025/04/trump-4-2-25-wh-getty-640x335.png",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 21:35:57 +0000"
    },
    {
        "id": "f095fd51-4ce9-4ae5-81eb-78228b1aae68",
        "title": "Over 200 Dead in Dominican Republic Nightclub Collapse",
        "description": "Officials in the Dominican Republic say the death toll from Tuesday’s tragic collapse of a popular nightclub has grown to over 200 people.",
        "url": "https://www.breitbart.com/latin-america/2025/04/10/over-200-dead-in-dominican-republic-nightclub-collapse/",
        "author": "John Hayward",
        "image": "https://media.breitbart.com/media/2025/04/GettyImages-2208898882-640x335.jpg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:57:42 +0000"
    },
    {
        "id": "ac272868-0037-4de1-8489-ca70ca34c07a",
        "title": "John Carney: Trump Should Award Pat Buchanan the Medal of Freedom for ‘Lighting the Signal Fire’ About the Dangers of Globalist Trade Policies",
        "description": "On Wednesday's \"Alex Marlow Show,\" Breitbart News economics editor John Carney discussed the policy legacy of Pat Buchanan. Carney said, \"Pat Buchanan, | Clips",
        "url": "https://www.breitbart.com/clips/2025/04/10/john-carney-trump-should-award-pat-buchanan-the-medal-of-freedom-for-lighting-the-signal-fire-about-the-dangers-of-globalist-trade-policies/",
        "author": "Breitbart TV",
        "image": "https://media.breitbart.com/media/2025/04/pat-buchanan-getty-640x335.png",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:52:36 +0000"
    },
    {
        "id": "083087b8-3ab0-48e3-93a9-d9e60801f169",
        "title": "Martina Navratilova Asks Dems What They're Willing to 'Give Up' to Defend Trans Athletes",
        "description": "Tennis legend Martina Navratilova is slamming the Democrats for their support of radical transgender ideology and asking what ideals they are willing to give up continuing that support.\n\nOn Thursday, ...",
        "url": "https://www.breitbart.com/sports/2025/04/10/martina-navratilova-asks-dems-what-theyre-willing-give-up-defend-trans-athletes/",
        "author": "Warner Todd Huston",
        "image": "https://media.breitbart.com/media/2025/04/Tim-Clayton_Corbis-via-Getty-Images-2-640x335.jpg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:47:24 +0000"
    },
    {
        "id": "57078f8d-8a69-4d2f-b95e-d013f2e5b945",
        "title": "Data centers bring money to small towns. But do they also bring jobs?",
        "description": "Data centers bring money to small towns. But do they also bring jobs? Tech companies are investing hundreds of billions of dollars in data centers across the country. But despite the record-setting pr...",
        "url": "https://www.npr.org/2025/04/10/nx-s1-5355017/data-centers-bring-money-to-small-towns-but-do-they-also-bring-jobs",
        "author": "npr",
        "image": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "language": "en",
        "category": [
            "economy",
            "business"
        ],
        "published": "2025-04-10 20:42:25 +0000"
    },
    {
        "id": "c62b482a-9689-4781-8f59-4193463d82fd",
        "title": "India Sees ‘Opportunity of a Lifetime’ in Trump’s Trade Policy",
        "description": "Indian Commerce Minister Piyush Goyal said on Monday that President Donald Trump’s trade policies could create “the opportunity of a lifetime” for India.\n\n“We stand at a moment in history where India ...",
        "url": "https://www.breitbart.com/asia/2025/04/10/india-sees-opportunity-lifetime-trumps-trade-policy/",
        "author": "John Hayward",
        "image": "https://media.breitbart.com/media/2025/04/Piyush-Goyal-640x335.jpg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:41:41 +0000"
    },
    {
        "id": "7ce9ccc1-396e-4f9e-aa22-0c157188c489",
        "title": "Trump Orders Investigations of Former Federal Officials, Says 'Anonymous' Author 'Guilty of Treason'",
        "description": "President Donald Trump ordered the DOJ to investigate two former officials from his first administration who openly betrayed him.",
        "url": "https://www.breitbart.com/politics/2025/04/10/trump-orders-investigations-former-administration-officials/",
        "author": "Olivia Rondeau",
        "image": "https://media.breitbart.com/media/2025/04/Christopher-Krebs-Miles-Taylor-640x335.jpg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:30:28 +0000"
    },
    {
        "id": "5dbcdf7b-4618-48be-90d8-cf5f19fdf135",
        "title": "Trump Tariff Policy Could Crush China's Slave-Linked Temu, Shein Shopping Apps",
        "description": "President Donald Trump's tariff policies could pose an existential threat to low-quality, cheap goods from Temu and Shein.",
        "url": "https://www.breitbart.com/economy/2025/04/10/trump-tariff-policy-could-crush-chinas-slave-linked-temu-shein-shopping-apps/",
        "author": "Frances Martel",
        "image": "https://media.breitbart.com/media/2025/04/GettyImages-1653668609-640x335.jpg",
        "language": "en",
        "category": [
            "politics"
        ],
        "published": "2025-04-10 20:23:11 +0000"
    }
]
export { TOTAL_PAGES, PAGE_SIZE,DATA_MOCK };