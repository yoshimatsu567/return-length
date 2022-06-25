# return-length
## packageを作ってみたかった。使えるようなものではない。

## installできるまで
1 Personal Access Token発行する。
2 プロジェクトルートに.npmrc作成して、下記の情報書く

```zsh
@yoshimatsu567:registry="https://npm.pkg.github.com"
//npm.pkg.github.com/:_authToken={発行したPersonal Access Token}
```

書けば

```zsh
npm i @yoshimatsu567/return-length
```

でinstallできて使える。
