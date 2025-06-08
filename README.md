## 模擬案件４

## Features

- Astrooコンポーネントを使ったHTMLマークアップ
- ページメタデータ外部ファイル（JSON）読み込み
- ページテンプレートに対応したJSON-LD構造化データの設定
- Sass（SCSS記法）のコンパイル
- StyleLint、ESLint、Markuplintの各種リンター
- Prettierのコードフォーマット
- Autoprefixerを使ったベンダープレフィックスの自動付与
- TypeScriptのコンパイル
- Vue.js（Piniaプラグイン対応）・React・jQuery・TailwindCSSの各種ライブラリ
- ソースコードのminify対応
- 開発用ローカルサーバーの起動と自動リロード
- Markdownファイルでのコンテンツ管理と動的ルーティング
- ビルドHTMLファイル内の相対パス置換

## Requirement

Node.js >= 18.x.x

npm >= 10.x.x

## Installation

### 各種パッケージのインストール

プロジェクトディレクトリにフォルダー内のファイル一式を入れて、package.jsonがあるディレクトリまで移動し、必要なパッケージをインストールします。

```bash
$ npm install
```

## Usage

### 各種コマンド

#### 1. 開発環境用ローカルサーバー起動

```bash
$ npm run dev
```

#### 2. 本番環境用ビルドファイルの作成

```bash
$ npm run build
```

#### 4. 本番環境用ビルドファイルのプレビュー

```bash
$ npm run preview
```

#### 5. リンターの実行

```bash
$ npm run lint
```

#### 6. コード整形

```bash
$ npm run format
```

#### 7. ビルドHTMLファイル内の相対パス置換

```bash
$ npm run path
```

## Note

- タイトル、ディスクリプション、OGPなどページ固有のmeta要素はsiteData.mjsのファイルで一括管理
- 初期設定では開発用ローカルサーバーのポート番号は2000となっています。
- 初期設定ではビルドファイルはdistディレクトリ配下に格納されるようになっています。

## Author

aoi miyake

## License
