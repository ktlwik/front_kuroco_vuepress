---
title: Firebaseのプロジェクト作成
menu: リファレンス
tags: 
  - firebase
weight: 1
---

@[toc](目次)

# Firebaseのプロジェクト作成

以下のリンクからFirebaseの登録を行ってください。Firebaseの無料のSpark プランでテストや開発はできると思いますので、利用が進んできましたら決済（クレジットカード）の登録が必要になります。 
  
Firebase
https://firebase.google.com/

料金の詳細は以下になります。
https://firebase.google.com/pricing


## 1. Firebase(Google Cloud Platform)の利用を申し込む

<img src="https://t.gyazo.com/teams/diverta/68c91c878ab41f6f52cfb2324b888616.png" class="img_capture">

## 2. プロジェクトを作成

<img src="https://t.gyazo.com/teams/diverta/80cac292e99e9172a6f53914daf37bf5.png" class="img_capture">

## 3. プロジェクト名をセットして、続行をクリック
あとから変更ができませんので、プロジェクト名を設定してください。

<img src="https://t.gyazo.com/teams/diverta/7d357f59175b8991e0d080ab41cc6be9.png" class="img_capture">

## 4. このプロジェクトでGoogleアナリティクスを有効にするを「解除」
※Google Analytics連携する場合は有効ににしてください。
<img src="https://t.gyazo.com/teams/diverta/cb3cb54449ddfde1e3de52092d87bfe5.png" class="img_capture">

## 5. プロジェクトの作成が完了したら、続行をクリック

<img src="https://t.gyazo.com/teams/diverta/ef222fb5f473d4c9d05903c87484ac02.png" class="img_capture">


# Firebaseの設定・Credentialsの取得

## 6. Firebaseのダッシュボードの歯車のところにある、「ユーザーと権限」をクリック

<img src="https://t.gyazo.com/teams/diverta/fdafae56425ed83d5f8d25582b98e2bf.png" class="img_capture">


## 7. サービスアカウントのところから新しい秘密鍵の生成を行う。ダウンロードされたファイルは保存しておく。

<img src="https://t.gyazo.com/teams/diverta/c479abcee928850701857038c5b0ebde.png" class="img_capture">

## 8. Firebaseのストレージの利用開始設定をします。
※Cloud Storage のロケーションはus-centralを選択してください。  

<img src="https://t.gyazo.com/teams/diverta/97149c0bac93cd82a8e64fe324b766c4.png" class="img_capture">

## 9. Firebaseのアプリ追加設定をします。
※WEBタイプを選択して、アプリのニックネームは何でもOKです。  
※このアプリをFirebase Hostingでも利用するにチェックを入れてください。  

<img src="https://t.gyazo.com/teams/diverta/6d36cfbf534c650ac097247f5db4974f.png" class="img_capture">


## 10. Kurocoの管理画面のFirebase設定画面にセットするFirebaseConfigを取得する
※プロジェクト概要のプロジェクト設定の「全般」のタブの下部にあります。  

<img src="https://t.gyazo.com/teams/diverta/4b44062d276a94aa39f21dffca03fb4f.png" class="img_capture">

# Kurocoでの設定

## 11. Kurocoの管理画面のFirebase設定画面に上記の7と10で取得したCredentialsをセットする
※Credentialsの欄に7で取得したファイルをセットしてください。  
※App Configの欄に10で取得したFirebaseConfigを貼り付けてください。  

<img src="https://t.gyazo.com/teams/diverta/9ff7a8b4ec97d913f6c461b9474049ff.png" class="img_capture">

## 12. Kurocoの管理画面のFirebase設定画面でStorageをEnableにする
※10の接続後に更新をしてください。  

<img src="https://t.gyazo.com/teams/diverta/9ff7a8b4ec97d913f6c461b9474049ff.png" class="img_capture">

# Picolのフロントエンド

## 13. Picolのフロントエンドのソースをclone
git clone https://github.com/diverta/picol

## 14. KurocoのSDKのconfigをセット
※Kurocoの管理画面のサイト基本設定> API のkuroco.config.jsonをダウンロードして、picolのルートに配置。

cd ./picol
npx kuroco pull && npx kuroco generate -o ./src/kuroco_api

を実行して、SDKの設定を適用する
参考）<a href="https://github.com/diverta/kuroco-sdk">KurocoSDK</a>

## 15. フロントエンドのデプロイ
npm install && npm run build
npm i -g firebase-tools && firebase init
-> loggin
-> select firebase hosting
-> ? What do you want to use as your public directory? : type dist directry
-> ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) : y
-> ? File dist/index.html already exists. Overwrite? (y/N) N (optionally question)
firebase deploy

## 16. フロントエンドのドメインをKurocoにセットする
※Firebase Hostingで指定されているドメインを入力して更新

<img src="https://t.gyazo.com/teams/diverta/7130ca9df407e237dc5e5c0c292b99aa.png" class="img_capture">

## 17. フロントエンドのドメインをAPIのCORSにセットする
※Firebase Hostingで指定されているドメインを入力して更新

<img src="https://t.gyazo.com/teams/diverta/18c08f3705bed71ab12fffb3db260999.png" class="img_capture">

