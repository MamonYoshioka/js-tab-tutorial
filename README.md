# Tabを切り替えるものをJavascriptを用いて作成
## 作成準備
    - html
    - css
    - js
上記のファイルを作成

## 作成手順
1. htmlファイルにて、必要なdivタグとaタグを用意
2. styleを整える
3. jsファイルで動きをつける
    - 3-1. DOM要素取得
    - 3-2. idを付与
    - 3-3. data属性をnavとcontentに付与
    - 3-5. contentをblockで表示するように初期化
    - 3-6. クリックイベントを設定
        - 3-6-1. 即時関数を宣言：(() => {})();
        - 設定の目的：グローバルな変数を汚染しないため。
        - 3-6-2. タブがクリックされたら、consoleでクリックされたことを表示するような関数を作成
            - 3-6-2-1. 関数の引数にeを忘れずに！：eはイベントオブジェクトを取得するために宣言する
            - 3-6-2-2. 関数内にpreventDefaultを宣言も忘れずに！
        - 3-6-3. navの0個目がクリックされたら関数が動くようにする：addEventListener
        - 3-6-4. navの全てに対応するように繰り返し処理を書く

## 参考動画・記事
[![デモ動画](https://img.youtube.com/vi/OSQ1LnU9SCw/0.jpg)](https://youtu.be/OSQ1LnU9SCw?si=5Hp1hu2fSwT59WaO)
