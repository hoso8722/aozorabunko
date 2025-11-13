# aozorabunko

著作権切れの書籍を閲覧できるウェブサイトです。

## 📚 プロジェクト概要

青空文庫は、著作権が切れた文学作品を無料で閲覧できるWebアプリケーションです。Next.jsをベースに、ドメイン駆動設計（DDD）アーキテクチャを採用し、Cloudflare Pagesにデプロイ可能な構成になっています。

## 🛠 技術スタック

- **フレームワーク**: Next.js 14.x
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: PostgreSQL
- **ORM**: Prisma
- **デプロイ**: Cloudflare Pages
- **テスト**: Jest + ts-jest

## 🚀 セットアップ方法

### 1. 前提条件

以下がインストールされている必要があります：
- Node.js（推奨: v20以上）
- npm または yarn
- PostgreSQL

### 2. リポジトリのクローン

```bash
git clone <repository-url>
cd aozorabunko
```

### 3. 依存関係のインストール

```bash
npm install
```

### 4. 環境変数の設定

`.env`ファイルを作成し、データベース接続情報を設定します：

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/aozorabunko?schema=public"
```

### 5. データベースのセットアップ

```bash
# Prismaマイグレーションを実行
npx prisma migrate dev

# Prisma Clientを生成
npx prisma generate
```

## 💻 開発方法

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用にビルド |
| `npm run start` | 本番モードでサーバーを起動 |
| `npm run lint` | ESLintでコードをチェック |
| `npm run pages:build` | Cloudflare Pages用にビルド |
| `npm run preview` | Cloudflare Pagesのプレビュー |
| `npm run deploy` | Cloudflare Pagesにデプロイ |

## 🧪 テストの実行

```bash
# 全てのテストを実行
npm test

# 特定のテストファイルを実行
npm test -- Domain/models/BookTest/BookId/BookId.test.ts
```

## 📁 プロジェクト構成

```
aozorabunko/
├── Domain/              # ドメインモデル（DDD）
│   └── models/
│       ├── Book/        # 書籍関連のドメインモデル
│       ├── User/        # ユーザー関連のドメインモデル
│       ├── Bookshelf/   # 本棚関連のドメインモデル
│       ├── BookTest/    # テストファイル
│       └── shared/      # 共有のValue Object/Entity
├── app/                 # Next.js App Router
│   ├── api/            # APIルート
│   ├── page.tsx        # メインページ
│   └── layout.tsx      # レイアウト
├── infrastructures/     # インフラストラクチャ層
├── prisma/             # Prismaスキーマ
│   └── schema.prisma
├── public/             # 静的ファイル
└── wrangler.toml       # Cloudflare設定
```

## 🏗 アーキテクチャ

このプロジェクトはドメイン駆動設計（DDD）の原則に従っています：

- **Domain層**: ビジネスロジックとドメインモデル
  - Entity: 識別子を持つオブジェクト
  - Value Object: 不変の値オブジェクト
  - Repository Interface: データアクセスの抽象化

- **Infrastructure層**: データベースアクセス、外部API連携など

- **Application層**: Next.js App Router（app/ディレクトリ）

## 🚢 デプロイ方法

### Cloudflare Pagesへのデプロイ

```bash
# 1. ビルド
npm run pages:build

# 2. デプロイ
npm run deploy
```

または、Cloudflare Pagesのダッシュボードからリポジトリを接続して自動デプロイを設定できます。

### 環境変数の設定

Cloudflare Pagesのダッシュボードで以下の環境変数を設定してください：
- `DATABASE_URL`: PostgreSQLの接続文字列

## 📝 開発ガイドライン

### 新しいドメインモデルの追加

1. `Domain/models/`に新しいディレクトリを作成
2. Value ObjectまたはEntityを定義
3. テストファイルを`Domain/models/BookTest/`に作成
4. 必要に応じてRepository Interfaceを定義

### コーディング規約

- TypeScriptの型定義を必ず使用
- DDD原則に従ったモデル設計
- テストカバレッジを維持

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはプライベートプロジェクトです。