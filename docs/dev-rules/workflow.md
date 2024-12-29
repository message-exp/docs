---
sidebar_position: 1
---

# Workflow

團隊開發的開發工作流程

## 1. Issue 建立

Message-exp team 使用 Linear 進行專案管理。內部人員請直接於 Linear 團隊內建立 issue。（即便在 GitHub 建立的 issue 應該會被自動同步到 Linear）

Issue 標題請使用英文，並避免特殊符號；description 及 comment 等則無限制。

## 2. Branch 建立

在團隊內多數 repositories 中，main branch 必須是可以正常執行的版本，且透過 GitHub ruleset 保護。請不要強制忽略或破壞這項規則。

進行開發前，請先從 main 或 dev branch 中擇一（視 repo 狀況而定），在那之上建立新分支。Branch name 請採用以下格式：

```
username/identifier-title
```

- **username**: Your GitHub username
- **identifier**: Issue 代碼（例如：MES-12，若無 issue 則可忽略）
- **title**: Issue title 或是摘要，英文字母全部使用小寫，並使用 `-` 取代空格 ` ` 、斜線 `/` 等特殊符號

若為現有 issue 的工作內容，可直接複製 Linear 所提供的 branch name。（可參考 [Linear 文件](https://linear.app/docs/github#link-using-pull-requests)）

## 3. Pull Request

於開發完成後，請建立 Pull Request。

於完成要求後（可能為團隊成員 review 或通過檢查測試等），才可 merge 至 dev 或 main 分支。請盡量不要強制略過或破壞設定好的規則。

在 merge 時，請考慮使用 **Squash and merge**，將所有 commit 濃縮成一個 commit，讓 main 及 dev branch 的 commit history 保持乾淨。

Merge 時的 commit message，請符合 [約定式提交](https://www.conventionalcommits.org/zh-hant/v1.0.0/) 格式。

於 merge 後，請記得將原本開發中的 branch 刪除。
