---
title: 1. Kurucoの管理画面でSP設定を追加
menu: リファレンス
tags: 
  - sp設定
weight: 1
---
@[toc](目次)




# 1. Kurucoの管理画面でSP設定を追加

## 1. メンバー管理 > 登録・招待設定 > SSO SAML SP設定　の画面へ遷移してください。

<img src="https://t.gyazo.com/teams/diverta/7afad72745019ad053887295059ce3ff.png" class="img_capture">

## 2. SPの設定を追加してください。

・ログインSAML SP Name: お好きな名前
・エンティティID:半角英数字でお好きなID
・有効:チェックを外す
・(API用) Grantトークン生成:チェックする
・自動ユーザ登録：チェックする

<img src="https://t.gyazo.com/teams/diverta/36bdc875a5a3175e0b00742eac8a90c8.png" class="img_capture">

## 3. SPの設定を確認してください。

次のGSuiteの管理画面の設定で、
・ログインSAML SP ACS URI
・エンティティID
を利用します。

<img src="https://t.gyazo.com/teams/diverta/8ad305f1c33fdff4de9e64fba7e2e431.png" class="img_capture">


# 2. GSuiteの管理画面の設定

以下のリンクからGSuiteの管理画面でSAML連携の設定を行ってください。必ずGSuiteの管理者の権限でログインをお願いします。
  
GSuiteの管理画面
https://admin.google.com/


## 1. GSuiteの管理画面からAppsの設定画面へ

<img src="https://t.gyazo.com/teams/diverta/2b052ff63071845ff1622b36e202cc79.png" class="img_capture">

## 2. SAML appsの設定画面へ

<img src="https://t.gyazo.com/teams/diverta/c53fcd37f1238cda4190436e30afe903.png" class="img_capture">

## 3. SAML appsの設定画面へ

<img src="https://t.gyazo.com/teams/diverta/c53fcd37f1238cda4190436e30afe903.png" class="img_capture">

## 4. SAML appsを追加します

<img src="https://t.gyazo.com/teams/diverta/2115c6fca064510b7832e821fbc7df0c.png" class="img_capture">

## 5. カスタムアプリの作成をします

<img src="https://t.gyazo.com/teams/diverta/6062b7980167cf8dac45be91589f4766.png" class="img_capture">

## 6. IdP情報をダウンロードします。

<img src="https://t.gyazo.com/teams/diverta/3de967aeb65df9056fc7a0cff2a047d7.png" class="img_capture">

## 7. 分かりやすいアプリケーション名をセットします。

<img src="https://t.gyazo.com/teams/diverta/0a95fa13a17e6d456a8c61cf78038e03.png" class="img_capture">

## 8. SP情報をセットします。
ACS URL: Kurocoの管理画面で確認した「ログインSAML SP ACS URI」をセット
Entity ID: Kurocoの管理画面で確認した「エンティティID」をセット
Start URL: / など、ログイン後のページURLをセット
Signed Response： チェックする
Name ID: Basic Information / Primary Email
Name ID Format: EMAIL

<img src="https://t.gyazo.com/teams/diverta/72ff6f809677f366bce79f5c09c3b3f8.png" class="img_capture">

## 9. マッピング情報をセットします。
以下をセットしてください。
name1 : Basic Information / Last name
name2 : Basic Information / First name

<img src="https://t.gyazo.com/teams/diverta/d69164be752f234fe09d133d07e05262.png" class="img_capture">


# 3. Kurucoの管理画面でSP設定にIdP情報をセット
先ほどダウンロードしたIdP情報のXMLファイルをこちらにアップロードして、有効にチェックを入れてください。

<img src="https://t.gyazo.com/teams/diverta/b52e121b2a0cfe77214a891675a294eb.png" class="img_capture">


# 4. 利用方法
以下のようなURLにアクセスするようなボタンを配置してただくとSAMLログインできるようになります。

[APIのURL]/direct/login/saml_login/?spid=[ログインSAML SP ID]
例）
https://picol.kuroco.app/direct/login/saml_login/?spid=1
