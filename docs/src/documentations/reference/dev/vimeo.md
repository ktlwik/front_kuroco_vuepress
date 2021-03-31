---
title: 1. Vimeoのアカウント登録
menu: リファレンス
tags: 
  - vimeo
weight: 1
---

@[toc](目次)



# 1. Vimeoのアカウント登録
Vimeoのアカウントを登録してください。Businessがお勧めです。
https://vimeo.com/

<img src="https://t.gyazo.com/teams/diverta/2edd56b5d6bbf55e7216c1b27aacc48c.png" class="img_capture">


## 2. ログインしたまま、下記のURLから新規アプリ登録画面へ遷移してください。

Vimeo developer
https://developer.vimeo.com/

<img src="https://t.gyazo.com/teams/diverta/5fd6266289e7e6f2e79247a3fad9e992.png" class="img_capture">

## 3. Create a new appでappを追加してください。

・App name: お好きな名前
・App description:簡単でよいので動画利用する内容の説明
・Will people besides you be able to access your app?:No

<img src="https://t.gyazo.com/teams/diverta/00f63d9590c1a7a71dfaaaa23a014328.png" class="img_capture">

## 4. appの設定画面になります。

 Request Upload Accessをクリックします。

<img src="https://t.gyazo.com/teams/diverta/1cc6fa6a5755d0b4f097d28d0d02a2b0.png" class="img_capture">

## 5. Request Upload Accessの申請画面を行います。

1. Will you be charging for sample? => No
2. Where will these videos be uploaded? => My account
3. Who created these videos? => Other people created these videos
4. What kind of videos will be uploaded? => 簡単でよいのでどのような動画がアップロードされるかの説明になります。
例) Videos about school events, everyday scenes, and announcements

<img src="https://t.gyazo.com/teams/diverta/d55161531b041665efab32f3bc27a9d1.png" class="img_capture">


# 6. アプリが認証された後

早いと2,3日で申請が承認されます。
ログインをして以下のリンクから承認されたアプリの設定画面へ遷移します。
  
Vimeo developer の My Apps
https://developer.vimeo.com/apps


## 7. Access Tokensの作成
下記のように、Authenticatedを選択後、Scopesを選択して、Generateをクリックすると、Access Tokenが作成されます。
Access Tokenは画面を閉じると再表示できませんので、メモをしておいてください。
設定画面上部にあるClient identifierとAccess Tokenの下部にあるClient secretsもメモをしておいてください。

<img src="https://t.gyazo.com/teams/diverta/9d4d4a4fc49c800e2afc5cc6dfc05a4d.png" class="img_capture">

# 8. Kurocoの管理画面に設定する
管理画面のKurocoのロゴのところからアカウント設定に遷移して、Vimeoの設定欄に上記の３つの値をセットします。

<img src="https://t.gyazo.com/teams/diverta/ab6e4e3a390f62bdf4e0403f0421a745.png" class="img_capture">

# 9. Vimeoの動画表示に関する設定をする
下記のURLからプリセットの設定画面に遷移します。
https://vimeo.com/settings/videos/embed_presets

<img src="https://t.gyazo.com/teams/diverta/bd4a5c677d313f4a250b90dd26121f38.png" class="img_capture">


## 10. プリセットを一つ作成します。

<img src="https://t.gyazo.com/teams/diverta/89962274c7b72c46919f3be3ad308bd6.png" class="img_capture">

## 11. アップロードのデフォルトを設定します。
以下のURLからアップロードのデフォルトを設定します。プリセットは先ほど作成したものを選択してください。
https://vimeo.com/settings/videos/upload_defaults

<img src="https://t.gyazo.com/teams/diverta/e28f4e4b464facc3f830e7b36bf5b409.png" class="img_capture">





