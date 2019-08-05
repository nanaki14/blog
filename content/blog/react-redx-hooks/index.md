---
title: "react-reduxのHooksAPI触ってみた"
date: "2019-05-30"
description: "react-reduxの次期バージョンにHooksAPIが追加されていたのですこし触ってみました。"
category: javascript
thumb: "./react-redx-hooks.png"
---

こんにちわ、ななきです。

TypeScript と Redux が楽しい今日このごろです。

そんな中 react-redux の次期バージョンに HooksAPI が追加されていたのですこし触ってみました。

API の詳細は[こちら](https://react-redux.js.org/next/api/hooks)です。

## useStore

useStore は Provider へ渡している store オブジェクトを参照できる関数です。

使う前の準備としてはいつもどおり Provider に store を渡します。

```
const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      ...
    </Provider>
  )
}
```

次にその下層コンポーネント内で useStore しましょう

```
import React from 'react'
import { useStore } from 'react-redux'

const Components = () => {
  const store = useStore()

  return (...)
}
```

これで store オブジェクトを参照できるようになります。

ですが、直接 store を参照するのは推奨されていません、
今までも`connect()`を使用していたように Hooks でも`useSelector`や`useDispatch`という Hooks が用意されているのでそちらを見ていきましょう。

## useSelector

useSelector では store の state を参照できるようになります。

```
import React from 'react'
import { useSelector } from 'react-redux'

const Components = () => {
  const count = useSelector(state => state.count)

  return (
    <div>{counter}</div>
  )
}
```

これは今までの connect の第一引数でやってたことですね。

## useDispatch

useDispatch は dispatch 関数を扱えるようになります。

```
import React from 'react'
import { useDispatch } from 'react-redux'

const Components = () => {

  const dispatch = useDispatch()

  handleClick = useCallback(() => {
    dispatch({ type: 'INCREMENT' })
  })

  return (
    <button onClick={handleClick}>increment</button>
  )
}
```

Action の中身については以前と同じく type を持ったオブジェクトを渡す形ですね

<h2>まとめ</h2>

そんなわけでさっくり HooksAPI 触ってみました。

ただコード載せただけみたいになってしまったので不明な箇所があればドキュメント読むとか Twitter で絡んでくれるとかしてください

Hooks 個人的には今までの connect より好きなので早く使っていきたいですね。
