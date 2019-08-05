---
title: "Nuxtでデコレーターを使わずTypeScriptを書いてみた"
date: "2019-05-12"
description: "最近案件でもTS化したVueを使っていたのと最近の界隈の流れもありNuxtもTypeScript化してみました。"
category: javascript
thumb: "./nuxt-typescript.png"
---
こんにちわ、ななきです。

だいぶ前にVueをTypeScript化した的な記事書いたのですが、それから案件でもTS化したVueを使っていたのと最近の界隈の流れもありNuxtもTypeScript化してみました。

結果的にデコレータを使わずに、vuexもコンポーネントも型が効いており満足です。

ちなみにvuex部分にかんしては<a href="https://github.com/takefumi-yoshii/ts-nuxtjs-express" target="_blank">こちら</a>のリポジトリを参考にさせて頂きました。

<h2>コンポーネントのTS化</h2>

コンポーネントに関してはびっくりするほどやることないです。

```
$ yarn add ts-node
$ yarn add -D @nuxt/typescript
$ touch tsconfig.json
$ nuxt build
```

これだけです、あとはコンポーネント内で以下の様に書いて行けばいいだけです。

```
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // ここにいつものライフサイクル
})
</script>
```

最初のうちはめんどくさいtsconfigすらもbuild時に記述してくれるのですごいです。

そしてTS化すると気になるのがlintですよね。

Nuxtのeslintは優秀なので可能な限りそのまま使いたいので以下の様に拡張します。

```
$ yarn add -D @typescript-eslint/eslint-plugin
```

```
module.exports = {
  // ここまでデフォルトの設定

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
}
```

これでeslintでもTSをパースできる様になりました。

とても簡単です。

<h2>vuexのTS化</h2>

こちらに関しては冒頭で紹介したリポジトリの<a href="https://github.com/takefumi-yoshii/ts-nuxtjs-express/tree/master/types/vuex" target="_blank">/types/vuex</a>を使わせてもらいました。

その上でコンポーネント内でも型を効かせたいが、デコレーターは使いたくなかったので型のプラグインを作成しました。

```plugins/exStore/index.ts
import * as Vuex from 'vuex'

class ExStore {
  store: Vuex.ExStore
  constructor(store) {
    this.store = store
  }

  getStore() {
    return this.store
  }

  state() {
    return this.store.state
  }

  getters() {
    return this.store.getters
  }

  commit() {
    return this.store.commit
  }

  dispatch() {
    return this.store.dispatch
  }
}

export default (context, inject) => {
  const store = new ExStore(context.store)

  inject('exStore', store.getStore())
  inject('state', store.state())
  inject('getters', store.getters())
  inject('commit', store.commit())
  inject('dispatch', store.dispatch())
}
```

今度はこのプラグインを注入します。

```nuxt.config.js
plugins: [
  {
    src: '~/plugins/exStore',
    ssr: true
  }
],
```

これでコンポーネント内で下記の様にstoreのオブジェクトへアクセスできるようになります。

```
// store
this.$state.exStore

// state
this.$state

// getters
this.$getters['hoge/fuga']

// commit
this.$commit['hoge/fuga']

// dispatch
this.$dispatch['hoge/fuga']
```

なぜわざわざプラグインを作ったのは`$store`が`$store: Vuex.Store<any>`で固定されており書き換えが出来なかったためです。

ので型定義ファイルに下記の追加をしていきます。

```types/nuxt/vue.d.ts
import Vue from 'vue'
import * as Vuex from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $exStore: Vuex.ExStore
    $state: Vuex.ExStore['state']
    $getters: Vuex.ExStore['getters']
    $commit: Vuex.ExStore['commit']
    $dispatch: Vuex.ExStore['dispatch']
  }
}
```

こうすることでcontextを参照できる場所でのvuexの型が効くようになりました。

<h2>まとめ</h2>

コンポーネントだけであれば簡単にTS化できるので軽い気持ちで触ってみるのもいいと思います。

ただvuexの型が効くとほんとに世界変わるので是非慣れてきたら使ってみてください。