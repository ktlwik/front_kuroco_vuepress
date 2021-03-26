---
title: 記事アップロード
category: コンテンツ定義
weight: 50
---

## 記事アップロードの確認方法
コンテンツ定義のグループ一覧画面にある［アップロード］をクリックすると、記事アップロード画面へ遷移します。
[![Image from Gyazo](https://t.gyazo.com/teams/diverta/7fc14496f5e36e48d0fb1da477428fce.png)](https://diverta.gyazo.com/7fc14496f5e36e48d0fb1da477428fce)

## 記事アップロード
[![Image from Gyazo](https://t.gyazo.com/teams/diverta/a6d574524a5b562e59775e081b68ca54.png)](https://diverta.gyazo.com/a6d574524a5b562e59775e081b68ca54)
|項目   |説明  |
| :--- | :--- |
|CSVファイル|アップロードするCSVファイルを登録します。CSVファイルの雛形は記事ダウンロードからダウンロードできます。|
|画像zipファイル|使用する画像をzipファイルにまとめて一括アップロードします。画像ファイル名は、CSVファイルに記載しておく必要があります。|
|文字コード|文字コードを選択します。|
|値がない場合の動作|値がないときの動作を選択します。|
|［送信する］ボタン|CSVをアップロードします。|
|［入力チェックする］ボタン|アップロード前に、エラーの有無を事前に確認できます。|

## CSVアップロードの注意点
### 画像容量について
CSVアップロード時に添付できる画像容量は、S3はAmazon Web Services(以下AWS)の、Google Cloud Storage(以下GCS)はGCSの仕様に準じます。それぞれの使用は下記リンクをご参照ください。
- S3の仕様について[Amazon Simple Storage Service (S3)](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/dev/UploadingObjects.html)
- GCSの仕様について[割り当てと上限](https://cloud.google.com/storage/quotas)

### サンプルCSVについて
サンプルCSVは記事グループの[ダウンロード]メニューよりダウンロードできます。 
[![Image from Gyazo](https://t.gyazo.com/teams/diverta/5b5894ae61c45b19373af541d8d36e27.png)](https://diverta.gyazo.com/5b5894ae61c45b19373af541d8d36e27)
