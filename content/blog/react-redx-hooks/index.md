---
title: "react-reduxのHooksAPI触ってみた"
date: "2019-05-30"
description: "react-reduxの次期バージョンにHooksAPIが追加されていたのですこし触ってみました。"
category: javascript
thumb: ./thumb.png
---

こんにちわ、ななきです。

TypeScriptとReduxが楽しい今日このごろです。

そんな中react-reduxの次期バージョンにHooksAPIが追加されていたのですこし触ってみました。

APIの詳細は[こちら](https://react-redux.js.org/next/api/hooks)です。

## useStore

useStoreはProviderへ渡しているstoreオブジェクトを参照できる関数です。

使う前の準備としてはいつもどおりProviderにstoreを渡します。

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

次にその下層コンポーネント内でuseStoreしましょう

```
import React from 'react'
import { useStore } from 'react-redux'

const Components = () => {
  const store = useStore()

  return (...)
}
```

これでstoreオブジェクトを参照できるようになります。

ですが、直接storeを参照するのは推奨されていません、
今までも`connect()`を使用していたようにHooksでも`useSelector`や`useDispatch`というHooksが用意されているのでそちらを見ていきましょう。

## useSelector

useSelectorではstoreのstateを参照できるようになります。

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

これは今までのconnectの第一引数でやってたことですね。

## useDispatch

useDispatchはdispatch関数を扱えるようになります。

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

Actionの中身については以前と同じくtypeを持ったオブジェクトを渡す形ですね

<h2>まとめ</h2>

そんなわけでさっくりHooksAPI触ってみました。

ただコード載せただけみたいになってしまったので不明な箇所があればドキュメント読むとかTwitterで絡んでくれるとかしてください

Hooks個人的には今までのconnectより好きなので早く使っていきたいですね。