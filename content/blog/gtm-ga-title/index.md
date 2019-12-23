---
title: "SPAでGTMやGAにtitleがうまく渡らない時の対処"
date: "2019-05-13"
description: "Reactでhelmetを使ったtitleの変更後にGAやGTMに情報を伝える場合に反映前のものや、遷移前のページのものが伝わることがあったのでその対処法メモです。"
category: javascript
thumb: "./gtm-ga-title.jpg"
---

こんにちわ、ななきです。

最近GAとかGTMに苦しめられてます。

特にReactでhelmetを使ったtitleの変更後にGAやGTMに情報を伝える場合に反映前のものや、遷移前のページのものが伝わることがありました。

多分Vueでも同様な事が起こると思うので、メモ代わりに対応方法残しておきます。

## setTimeout

いろんなライフサイクルや状態の変更後に `dataLayer.push` を試したのですがうまくいかず調べてたどり着いたのが `setTimeout` でした。

```
setTimeout(() => {
  dataLayer.push({ event: 'custom-name' })
}, 0)
```

こんなかんじで `componentDidMount` や `componentWillReceiveProps` などの中で発火させると正しく変更後・遷移後のtitleを渡すことが出来ました。

あまりスマートな解決策では無いかもしれませんが、issue内でも他の方法が上がっておらず一旦この形で乗り切るしかなさそうですね。

余談ですが、このコードを書いたときに、昔上司に `setTimeout` は魔法だからうまく行かなかったら試してみなさいと言われたのを思い出したました。