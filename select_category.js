function selectCategory() {
    const category = document.getElementsByName('category');

    const work = document.getElementsByClassName('work');
    const neta = document.getElementsByClassName('neta');
    const high_quality = document.getElementsByClassName('high_quality');
    const simple = document.getElementsByClassName('simple');
    const heart = document.getElementsByClassName('heart');


    // すべて表示
    if (category[0].checked) {
        for (const element of work) {
            element.style.display = "";

        }
    }

    //ネタ
    else if (category[1].checked) {
        for (const element of work) {
            element.style.display = "none";
        }

        for (const element of neta) {
            element.style.display = "";
        }
    }

    //ハイクオリティー
    else if (category[2].checked) {
        for (const element of work) {
            element.style.display = "none";
        }

        for (const element of high_quality) {
            element.style.display = "";
        }
    }

    //シンプル
    else if (category[3].checked) {
        for (const element of work) {
            element.style.display = "none";
        }

        for (const element of simple) {
            element.style.display = "";
        }
    }

    //ハート
    else if (category[4].checked) {
        for (const element of work) {
            element.style.display = "none";
        }

        for (const element of heart) {
            element.style.display = "";
        }
    }



}

