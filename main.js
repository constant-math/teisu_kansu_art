//class
//カテゴリー選択ボタンの情報をまとめたclass
class CategoryButton {
    #categories = ["ネタ", "ハイクオリティー", "シンプル", "ハート"];
    constructor() {
    }

    get categories(){
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
    #getMediumPathExtension() {
        const pointPosition = this.#mediumPath.lastIndexOf(".");//mediumPath.の位置を後ろから検索
        // 拡張子がなかったら""を返す
        if (pointPosition == -1) {
            return ""
        }
        return this.#mediumPath.slice(pointPosition);
    }

    //mediumPathの拡張子がExtensionsにあるか判定
    #hasMediumPathExtension(Extensions) {
        const mediumPathExtension = this.#getMediumPathExtension()//mediumPathの拡張子
        // mediumPathの拡張子がExtensionsになければfalseを返す
        if (Extensions.indexOf(mediumPathExtension) == -1) {
            return false
        }
        return true;
    }

    // mediumをliに追加
    #appendMedium(li) {
        const imageExtensions = [".png", ".PNG", ".jpg", ".JPG"] //画像の拡張子
        const videoExtensions = [".mp4", ".MP4", ".mov", ".MOV"] //画像の拡張子

        //mediumがimageの時
        if (this.#hasMediumPathExtension(imageExtensions)) {
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
        if (this.#hasMediumPathExtension(videoExtensions)) {
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

        //error
        const p = document.createElement("p");
        p.textContent = "error";
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


    ////worksをmain-content-works-listに追加
    appendWork() {

        const ul = document.getElementById("main-content-works-list");   //作品を入れる親要素

        //作品の情報を入れる親要素をulに追加
        const li = document.createElement("li");
        li.classList.add("main-content-works-list-item");
        li.id = this.#title;


        // titleをliに追加
        const h3 = document.createElement("h3");
        h3.textContent = this.#title;
        h3.classList.add("main-content-work-title");
        li.appendChild(h3);

        // mediumをliに追加
        this.#appendMedium(li);

        //url listをliに追加
        const ulUrl = document.createElement("ul");
        ulUrl.classList.add("main-content-work-url-list");
        li.appendChild(ulUrl);

        //url listにurlを追加
        this.#appendUrl(ulUrl, "Desmos", this.#desmosUrl);
        this.#appendUrl(ulUrl, "Twitter", this.#twitterUrl);
        this.#appendUrl(ulUrl, "Instagram", this.#instagramUrl);
        this.#appendUrl(ulUrl, "TikTok", this.#tiktokUrl);

        //descriptionをliに追加
        const p = document.createElement("p");
        p.textContent = this.#description;
        p.classList.add("main-content-work-description");
        li.appendChild(p);

        ul.appendChild(li);
    }


    //work.categoryがselectedCategoryを含むか判定
    hasSelectedCategory() {
        //すべてが選択されているとき
        if (main.categoryButton.selectedCategory== "すべて") {
            return true;
        }

        //選択されたカテゴリーを含まないとき
        if (this.#category.indexOf(main.categoryButton.selectedCategory) == -1) {
            return false;
        } else {
            return true;
        }
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
        )
    ];

    constructor() {
    }

    get worksInfomation(){
        return this.#worksInfomation;
    }

    //worksを追加
    appendWorks() {
        for (const work of this.#worksInfomation) {
            work.appendWork();
        }
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
class Main {
    #categoryButton = new CategoryButton();

    #works = new Works();

    constructor() {

    }

    //getter setter
    get categoryButton(){
        return this.#categoryButton
    }

    get works(){
        return this.#works
    }

    //mainコード
    main() {
        this.works.appendWorks();
    }

}

const main = new Main();
main.main();




