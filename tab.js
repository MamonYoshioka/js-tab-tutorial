(() => {
    // DOM要素の取得
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLength = $nav.length;

    // 初期化
    const init = () => {
        $content[0].style.display = 'block'; 
    };
    init();

    // クリックイベントの設定
    const handleClick = (e) => {
        e.preventDefault();

        // クリックされたnavとdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        // 対象外のnavとcontentを非表示にする
        let index = 0;
        while(index < navLength){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        };
        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content = "' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);


    };

    // 全nav要素に対してhandleClick関数を適応し、発火
    let index = 0;
    while (index < navLength) {
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }
    
})();