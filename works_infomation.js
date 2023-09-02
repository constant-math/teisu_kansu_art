class Work {
    constructor(title, image, desmos, twitter, instagram, tiktok, description, tag) {
        this.title = title;
        this.image = image;
        this.desmos = desmos;
        this.twitter = twitter
        this.instagram = instagram;
        this.tiktok = tiktok;
        this.description = description;
        this.tag = tag;
    }
}

let works = [
    new Work(
        "正岡式",
        "./images/masaokashiki.png",
        "https://www.desmos.com/calculator/vpjtbcltgw",
        "https://twitter.com/constant_math/status/1487712186654806020?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
        "https://www.instagram.com/p/CZWUYVgvd1d/?utm_source=ig_web_copy_link",
        "https://www.tiktok.com/@constant_math/video/7058923808652086530?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
        "正岡子規ならぬ正岡式です．",
        ["work", "neta", "high_quality"],
    ),
    new Work(
        "正岡式",
        "./images/masaokashiki.png",
        "https://www.desmos.com/calculator/vpjtbcltgw",
        "https://twitter.com/constant_math/status/1487712186654806020?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
        "https://www.instagram.com/p/CZWUYVgvd1d/?utm_source=ig_web_copy_link",
        "https://www.tiktok.com/@constant_math/video/7058923808652086530?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
        "正岡子規ならぬ正岡式です．",
        ["work", "neta", "high_quality"],
    )
];

console.log(works);

