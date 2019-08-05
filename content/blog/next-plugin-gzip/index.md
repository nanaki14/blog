---
title: "Nextにプラグイン追加したりgzip対応した話"
date: "2019-05-15"
description: "最近Nextを触ることが多かったので、webpack周りのプラグインの追加だったりgzip対応について書いてみたいと思います。"
category: javascript
thumb: "./next-plugin-gzip.png"
---
こんにちわ、ななきです。

最近Nextを触ることが多かったので、webpack周りのプラグインの追加だったりgzip対応について書いてみたいと思います。

多分このへんはサービス運用するにあたってTS化したり速度改善したりと必要になってくるので目を通しておいて損はないと思います。

<h2>プラグインの追加</h2>

<a href="https://github.com/zeit/next-plugins" target="_blank">Nextのプラグイン</a>は結構豊富です。

私はこの中でTypeScriptとbundle-analyzerを使う機会がありました。

通常一つプラグインを追加する場合は下記のように書くようです。

```next.config.js
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  // webpackとかの記述
})
```

ただ、これだと複数のプラグイン使う場合どうするのって感じですよね。

複数使う場合はコミュニティプラグインの<a href="https://github.com/cyrilwanner/next-compose-plugins" target="_blank">next-compose-plugins</a>を使うか下記のような書き方をするようです。

```next.config.js
const withTypescript = require('@zeit/next-typescript')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withTypescript(
  withBundleAnalyzer({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      },
      {
        // webpackとかの記述
      }
  })
)
```

２つ３つであればこのように入れ子でもいいかもしれませんが可読性が良くないので状況に応じてnext-compose-pluginsを使用するほうがいいかもしれませんね。

ちなみに上記の設定だとbundle-analyzerは下記コマンドで実行します。

```
BUNDLE_ANALYZE=both next build
```

そしてTypeScriptに関してはtsconfigの用意とbabelrcに下記の追加で動いてしまいます。

```
"presets": [
  "@zeit/next-typescript/babel"
],
```

便利な世の中ですね

<h2>gzip対応</h2>

これはびっくりするほど簡単でした。

`yarn add compression` をして、下記の様にserver.jsに記述するだけです。

```server.js
const express = require('express')
const compression = require('compression')

const server = express()
server.use(compression())
```

ちなみにホスティングがGCPで、設定については<a href="https://nanaki.design/javascript/next-js/">以前書いた記事</a>を参考にしてください。

gzip対応したらスピードテストのスコアがそれぞれ10前後伸びたので対応しておいて損はなさそうです。

初めてちゃんとgzip学びましたがすごいです（すごいです）

<h2>まとめ</h2>

Nextは英語の情報多めなので少し情報追うのが大変ですが、やりたいことは多少頑張ればできる感じですね。

今後もNextで開発してく機会があるので適宜まとめていきます。