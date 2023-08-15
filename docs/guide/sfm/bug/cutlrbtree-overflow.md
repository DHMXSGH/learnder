# CUtlRBTree overflow

当你载入模型或在使用过程中出现 **Engine Error** > **CUtlRBTree overflow**

![](https://pic.imgdb.cn/item/64db47321ddac507cc8c1b60.png)

已知的是，这是一个跟模型相关的问题，可能会出现在载入模型、移动模型和修改模型元素导致。

来自 Bilibili UP主 [鳥取鹿子Mizuchi](https://space.bilibili.com/946324/video) 的排查，可能是因为创意工坊下载的模型达到了单个仓库存储的上限所导致的，即 workshop 目录下的模型过多。

你可以通过 [新增模型仓库](/guide/sfm/trivia/sdk#新增模型仓库) 并转移模型，以修复载入模型就报错的问题。

::: info 相关讨论

- [what the hell is a "CUtlRBTree overflow"](https://steamcommunity.com/app/1840/discussions/0/618459405709574793/)（Steam 社区）
- ["CUtIRBTree overflow!" Crashes](https://steamcommunity.com/app/1840/discussions/0/611696927915836470/)（Steam社区）