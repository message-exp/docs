---
sidebar_position: 2
---

# Authorization

Nori 授權的機制，主要使用 2 種不同的 token：Refresh token 及 Access token。

**Refresh token**：效期較長，於登入期間皆有效。當 refresh token 失效時，該裝置即為登出狀態。

**Access token**：效期較短，只有約 30 分鐘左右（非準確值）。當 access token 失效時，可以使用 refresh token 向伺服器取得新的 access token。

於 Nori 的設計中，我們使用 JWT 作為 Access token 的格式。
