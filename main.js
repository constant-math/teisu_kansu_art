//class
//カテゴリー選択ボタンの情報をまとめたclass
class CategoryButton {
    #categories = ["ネタ", "ハイクオリティー", "シンプル", "ハート"];
    constructor() {
    }

    get categories() {
        return this.#categories;
    }


    //選択されているcategoryを取得
    get selectedCategory() {
        const buttons = document.getElementsByName("main-category-button");

        for (const button of buttons) {
            if (button.checked) {
                return button.value;
            }
        }

        //一つも選択されていないとき
        console.log("カテゴリーボタンが選択されていません．");
        return "error";
    }
}

//作品の情報をまとめたclass
class Work {
    #title;
    #mediumPath;
    #desmosUrl;
    #twitterUrl;
    #instagramUrl;
    #tiktokUrl;
    #description;
    #category;


    constructor(title, mediumPath, desmosUrl, twitterUrl, instagramUrl, tiktokUrl, description, category) {
        this.#title = title;
        this.#mediumPath = mediumPath;
        this.#desmosUrl = desmosUrl;
        this.#twitterUrl = twitterUrl
        this.#instagramUrl = instagramUrl;
        this.#tiktokUrl = tiktokUrl;
        this.#description = description;
        this.#category = category;
    }

    //getter setter
    get title() {
        return this.#title;
    }

    //mediumPathの拡張子を取得
    get mediumPathExtension() {
        const pointPosition = this.#mediumPath.lastIndexOf(".");//mediumPath.の位置を後ろから検索
        // 拡張子がなかったら""を返す
        if (pointPosition == -1) {
            return ""
        }
        return this.#mediumPath.slice(pointPosition);
    }

    //mediumがimageか判定
    #isImage() {
        const imageExtensions = [".png", ".PNG", ".jpg", ".JPG"]; //画像の拡張子
        return imageExtensions.includes(this.mediumPathExtension);
    }

    //mediumがvideoか判定
    #isVideo() {
        const videoExtensions = [".mp4", ".MP4", ".mov", ".MOV"]; //動画の拡張子
        return videoExtensions.includes(this.mediumPathExtension);
    }

    // mediumをliに追加
    #appendMedium(li) {
        //mediumがimageの時
        if (this.#isImage()) {
            //aタグをliに追加
            const a = document.createElement("a");
            a.href = this.#mediumPath;
            li.appendChild(a);

            //imgをaに追加
            const img = document.createElement("img");
            img.src = this.#mediumPath;
            img.alt = this.#title;
            img.classList.add("main-content-work-image");
            a.appendChild(img);
            return;
        }

        //mediumがvideoの時
        if (this.#isVideo()) {
            //videoをliに追加
            const video = document.createElement("video");
            video.src = this.#mediumPath;
            video.alt = this.#title;
            video.controls = true;
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
            video.playsinline = true;
            video.classList.add("main-content-work-video");
            li.appendChild(video);
            return;
        }

        //imageでもvideoでもないとき
        const p = document.createElement("p");
        p.textContent = "error";
        console.log(this.#mediumPath + "の拡張子に対応していません．")
        li.appendChild(p);
    }

    //url listにurlを追加
    #appendUrl(ul, text, url) {
        //ulにliを追加
        const li = document.createElement("li");
        li.classList.add("main-content-work-url-list-item");
        ul.appendChild(li);

        //liにaを追加
        const a = document.createElement("a");
        a.textContent = text
        a.href = url;
        a.target = "_blank"
        a.rel = "noopener noreferrer"
        li.appendChild(a);
    }


    ////workをdocumentFragmentに追加
    appendWork(documentFragment) {
        //作品の情報を入れる親要素をdocumentFragmentに追加
        const li = document.createElement("li");
        li.id = this.#title;
        li.classList.add("main-content-works-list-item");
        documentFragment.appendChild(li);


        // titleをliに追加
        const h3 = document.createElement("h3");
        h3.textContent = this.#title;
        h3.classList.add("main-content-work-title");
        li.appendChild(h3);

        // mediumをliに追加
        this.#appendMedium(li);

        //url listをliに追加
        const ul = document.createElement("ul");
        ul.classList.add("main-content-work-url-list");
        li.appendChild(ul);

        //url listにurlを追加
        this.#appendUrl(ul, "Desmos", this.#desmosUrl);
        this.#appendUrl(ul, "Twitter", this.#twitterUrl);
        this.#appendUrl(ul, "Instagram", this.#instagramUrl);
        this.#appendUrl(ul, "TikTok", this.#tiktokUrl);

        //descriptionをliに追加
        const p = document.createElement("p");
        p.textContent = this.#description;
        p.classList.add("main-content-work-description");
        li.appendChild(p);
    }


    //work.categoryがselectedCategoryを含むか判定
    hasSelectedCategory() {
        const categoryButton = new CategoryButton();

        //すべてが選択されているとき
        if (categoryButton.selectedCategory == "すべて") {
            return true;
        }

        return this.#category.includes(categoryButton.selectedCategory);
    }


}

//作品をまとめたclass
class Works {
    #worksInfomation = [
        new Work(
            "正岡式",
            "./images/masaokashiki.png",
            "https://www.desmos.com/calculator/vpjtbcltgw",
            "https://twitter.com/constant_math/status/1487712186654806020?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
            "https://www.instagram.com/p/CZWUYVgvd1d/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7058923808652086530?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "正岡子規ならぬ正岡式です．",
            ["ネタ", "ハイクオリティー"],
        ),
        new Work(
            "成功の方程式",
            "./images/seikounohouteishiki.png",
            "https://www.desmos.com/calculator/vmcsusrcis",
            "https://twitter.com/constant_math/status/1451809808965767171?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
            "https://www.instagram.com/p/CVX084zv1wx/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7022158413974998273?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "これが本当の成功の方程式です．",
            ["ネタ", "ハイクオリティー"],
        ),
        new Work(
            "紫式部の「式」の部分",
            "./images/murasakishikibu.png",
            "https://www.desmos.com/calculator/ckycuovihw",
            "https://twitter.com/constant_math/status/1520696133886300161?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
            "https://www.instagram.com/p/CdAudFIPbJ1/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7092704557234507009?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "紫式部の「式」の部分を求めました.",
            ["ネタ", "ハイクオリティー"],
        ),
        new Work(
            "富士山",
            "./images/fujisan.png",
            "https://www.desmos.com/calculator/nfjxkyxvsl",
            "https://twitter.com/constant_math/status/1500395771614662656?s=20&t=WdZBaHy5EUYVCjOG0RpkTg",
            "https://www.instagram.com/p/CawbIrivtEM/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7071909842180410625?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "逆さ富士まで描いたのがこだわりです.",
            ["ハイクオリティー"],
        ),
        new Work(
            "モナ・リザ",
            "./images/monalisa.png",
            "https://www.desmos.com/calculator/aira5crdjr",
            "https://twitter.com/constant_math/status/1447170072829587460?s=20&t=nu49ohVqdGEynwknXiGmhQ",
            "https://www.instagram.com/p/CU2dg7JPu8R/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7018490329766579458?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "実は，直線だけで描いています．",
            ["ハイクオリティー"],
        ),
        new Work(
            "サクラ",
            "./vedeos/sakura.mp4",
            "https://www.desmos.com/calculator/dplwudxfx3",
            "https://twitter.com/constant_math/status/1449575555888603136?s=20&t=hZpSP4GpIZRUQpoWsKh-yQ",
            "https://www.instagram.com/p/CVHTlvYPDah/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7019865845526580482?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            // "数学を愛する会さんの<a target=\"_blank\"href=\"https://twitter.com/mathlava/status/1454025782632747013?s=20&t=hZpSP4GpIZRUQpoWsKh-yQ\">グラフアートコンテスト（お題：\"芸術\"）</a>で優秀作品に選ばれました.",
            "",
            ["シンプル"],
        ),
        new Work(
            "心臓の鼓動",
            "./vedeos/shinzounokodou.mp4",
            "https://www.desmos.com/calculator/hbb9wn5wcy",
            "https://twitter.com/constant_math/status/1448795371770052608?s=20&t=hZpSP4GpIZRUQpoWsKh-yQ",
            "https://www.instagram.com/reel/Cj5Q7dbO87Q/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7019081531301940482?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "周期的なものと言えば,三角関数！",
            ["シンプル", "ハート"],
        ),
        new Work(
            "ハートの色塗り",
            "./vedeos/heartnoironuri.mp4",
            "https://www.desmos.com/calculator/1mxfvnosvi",
            "https://twitter.com/constant_math/status/1448605695234895878?s=20&t=hZpSP4GpIZRUQpoWsKh-yQ",
            "https://www.instagram.com/reel/Cj2ysu0t9IM/?utm_source=ig_web_copy_link",
            "https://www.tiktok.com/@constant_math/video/7018876745591819522?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
            "三角関数を使うことで，方程式でも色を塗れます．",
            ["シンプル", "ハート"],
        )
    ];

    constructor() {
    }

    get worksInfomation() {
        return this.#worksInfomation;
    }

    //worksをulに追加
    appendWorks() {
        //documentFragmentをつくる
        const documentFragment = document.createDocumentFragment();

        //workをdocumentFragmentに追加
        for (const work of this.#worksInfomation) {
            work.appendWork(documentFragment);
        }

        //ulにdocumentFragmentを追加
        const ul = document.getElementById("main-content-works-list");
        ul.appendChild(documentFragment);
    }

    //選択されたカテゴリーの作品を表示
    displaySelectedWorks() {
        for (const work of this.#worksInfomation) {
            let li = document.getElementById(work.title);

            //workがselectedCategoryを持っていればば表示する
            if (work.hasSelectedCategory()) {
                li.style.display = ""
            } else {
                li.style.display = "none"
            }
        }
    }
}


// mainコード
const categoryButton = new CategoryButton();
const works = new Works();

works.appendWorks();





