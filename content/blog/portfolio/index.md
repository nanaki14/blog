---
title: "Nuxt + Vuexでサクッとポートフォリオ作ってみた"
date: "2019-05-13"
description: "GW中にNuxt＋Vuexでポートフォリオサイトを作ったので紹介をしようかなと思います。"
category: javascript
thumb: "./portfolio.png"
---
こんにちわ、ななきです。

GW中にNuxt＋Vuexでポートフォリオサイトを作ったので紹介をしようかなと思います。

ちなみに作ったサイトは<a href="https://nanaki.work/" target="_blank">こちら</a>です。

可能ならPCで見ていただけるとすごく嬉しかったりします。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">先日作ったポートフォリオサイト、PCで見るとかっこいいので是非見てください<a href="https://t.co/p4Hh7lUZM6">https://t.co/p4Hh7lUZM6</a> <a href="https://t.co/qe1qNFvleC">pic.twitter.com/qe1qNFvleC</a></p>&mdash; ななき/Futurize (@nanaki14) <a href="https://twitter.com/nanaki14/status/1127524357113126912?ref_src=twsrc%5Etfw">2019年5月12日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<h2>技術的な話</h2>

技術的な話をしますと、今回Nuxtのgenerateを使ってみんな大好き<a href="https://www.netlify.com/" target="_blank">Netlify</a>でホスティングしています。

Netlify何ぞって方はとりあえず<a href="https://booth.pm/ja/items/1041767" target="_blank">こちら</a>の本を読んどくといいと思います。

PC表示でのみあらわれるマウスに追従するあれは<a href="https://nanaki.design/javascript/pointer-move/">以前作った自作ライブラリ？</a>を使ってます、みんな使ってね

ローディングアニメーションに関してはVuexで状態の管理をしてます。

```
const initialState = {
  loading: true
}

export const state = () => initialState

export const getters = {
  isLoading: state => state.loading
}

export const mutations = {
  endLoding(state) {
    state.loading = false
  }
}

export const actions = {
  endLoding({ commit }) {
    commit('endLoding')
  }
}
```

コンポーネントの実装は以下

```
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading'
    })
  },
  watch: {
    isLoading: async function(next, prev) {
      if (!next && prev) {
        // ここに好きなアニメーションとかの処理
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      await this.$delay(1000) // PromiseでsetTimeOut返すプラグインです
      this.endLoding()
    })
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding'
    })
  }
}
</script>
```

こうすることで初回のローディング時のみ任意の関数を発火出来ます。

オープニングのアニメーション作りたい場合などにいいですね。

次にページ遷移時のアニメーションです。

ページ遷移時のアニメーションはtransitionというライフサイクルが用意されているのでこれを利用します。

```
<script>
transition: {
    enter(el, done) {
      //フェードアウトさせる処理
      () => {
        // アニメーション完了時のコールバック
        done()
      }
    }
}
</script>
```

これだけです。

この辺のアニメーションに関しては<a href="https://qiita.com/soichiro_nitta/items/8d8ce14fc287aa233ae6" target="_blank">新田というマッチョが書いた記事</a>がとてもいいので読んでみることをおすすめです。

<h2>まとめ</h2>

Nuxtを使うとめんどくさいところを吸収してくれつつ簡単にリッチな実装ができるのでいいですね

ポートフォリオ作ってみたい！って方はNuxtを使って作ってみるといいと思います。

作ってみたいけどわからないことがあるなどなど、簡単なアドバイスだったりお手伝いはできるのでお気軽にメッセージ等もいただければと思います。