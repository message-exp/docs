---
sidebar_position: 2
---

# Data Flow

Client 與 Server 間的資料傳輸模式。

## Overview

訊息傳送主要分成兩種模式：

- 即焚模式（Ephemeral Mode）：伺服器只進行轉發
- 備份模式（Backup Mode）：伺服器除了轉發，亦同時進行備份

不論是何種模式，皆為加密傳輸及儲存。

## Mermaid test

下面這個圖表是 Mermaid 測試用圖表：

```mermaid
sequenceDiagram
    participant User A
    participant Server
    participant User B

    User A->>Server: Send public key (PubA)
    User B->>Server: Send public key (PubB)
    Server->>User A: Deliver public key (PubB)
    Server->>User B: Deliver public key (PubA)
    User A->>User A: Generate session key (KeyAB)
    User B->>User B: Generate session key (KeyAB)
```
