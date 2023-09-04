

class Work {
    constructor(title, mediumPath, desmosUrl, twitterUrl, instagramUrl, tiktokUrl, description, tags) {
        this.title = title;
        this.mediumPath = mediumPath;
        this.desmosUrl = desmosUrl;
        this.twitterUrl = twitterUrl
        this.instagramUrl = instagramUrl;
        this.tiktokUrl = tiktokUrl;
        this.description = description;
        this.tags = tags;
    }

    //mediumPathの拡張子を取得
    getMediumPathExtension() {
        const pointPosition = this.mediumPath.lastIndexOf(".");//mediumPath.の位置を後ろから検索
        // 拡張子がなかったら""を返す
        if (pointPosition == -1) {
            return ""
        }
        return this.mediumPath.slice(pointPosition);
    }

    //mediumPathの拡張子がExtensionsにあるか判定
    hasMediumPathExtension(Extensions) {
        const mediumPathExtension = this.getMediumPathExtension()//mediumPathの拡張子
        // mediumPathの拡張子がExtensionsになければfalseを返す
        if (Extensions.indexOf(mediumPathExtension) == -1) {
            return false
        }
        return true;
    }

    // mediumをliに追加
    appendMedium(li) {
        const imageExtensions = [".png", ".PNG", ".jpg", ".JPG"] //画像の拡張子
        const videoExtensions = [".mp4", ".MP4", ".mov", ".MOV"] //画像の拡張子

        //mediumがimageの時
        if (this.hasMediumPathExtension(imageExtensions)) {
            //aタグをliに追加
            const a = document.createElement("a");
            a.href=this.mediumPath;
            li.appendChild(a);

            //imgをaに追加
            const img=document.createElement("img");
            img.src=this.mediumPath;
            img.alt=this.title;
            img.classList.add("main-content-work-image");
            a.appendChild(img);
            return;
        }

        //mediumがvideoの時
        if(this.hasMediumPathExtension(videoExtensions)){
            //videoをliに追加
            const video=document.createElement("video");
            video.src=this.mediumPath;
            video.alt=this.title;
            video.controls=true;
            video.muted=true;
            video.autoplay=true;
            video.loop=true;
            video.playsinline=true;
            video.classList.add("main-content-work-video");
            li.appendChild(video);
            return;
        }

        //error
        const p =document.createElement("p");
        p.textContent="error";
        li.appendChild(p);
    }

    //作品を表示
    displayWork() {
        const ul = document.getElementById("main-content-works-list");   //作品を入れる親要素

        //作品の情報を入れる親要素をulに追加
        const li = document.createElement("li");
        li.classList.add("main-content-works-list-item");
        ul.appendChild(li);


        // titleをliに追加
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        h3.classList.add("main-content-work-title");
        li.appendChild(h3);

        // mediumをliに追加
        this.appendMedium(li);

        //
    }
}

const works = [
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
        "さくら",
        "./vedeos/sakura.mp4",
        "https://www.desmos.com/calculator/vpjtbcltgw",
        "https://twitter.com/constant_math/status/1487712186654806020?s=20&t=ABNRdLEZVW6B8NQXhMYPpQ",
        "https://www.instagram.com/p/CZWUYVgvd1d/?utm_source=ig_web_copy_link",
        "https://www.tiktok.com/@constant_math/video/7058923808652086530?is_from_webapp=1&sender_device=pc&web_id=7130789751313581569",
        "正岡子規ならぬ正岡式です．",
        ["work", "neta", "high_quality"],
    )
];


works[0].displayWork();
works[1].displayWork();
// console.log(works[0].hasMediumPathExtension(videoExtensions));
