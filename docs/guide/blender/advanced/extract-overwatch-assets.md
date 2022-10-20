---
title: 提取守望先锋资产
lang: zh-CN
---

# {{ $frontmatter.title }}

不用 328，不用 198，只需通过战网登录，就能免费获得守望先锋，即可跟着本指南提取游戏资产。

守望先锋 和 守望先锋归来 并没有特别大的区别，在文件储存和提取上基本一致。

::: info 参考资料

你可以查阅以下补充资料：

 - DataTool 提取资产（前往 [owdev](https://owdev.wiki/Tutorial/Extracting_with_DataTool) 查阅）
 
:::

## 所需工具

- DataTool （Discord 频道 [DataWatch🧱](https://discord.gg/XM93ZdB)）（仓库地址 [OWLib](https://github.com/overtools/OWLib)） (Discord [直链下载🧱](https://cdn.discordapp.com/attachments/588240088513642526/1032355202818379856/toolchain-release.zip))
- OWM Import （仓库地址 [io_scene_owm](https://github.com/overtools/io_scene_owm)）（镜像下载 [io_scene_owm](https://download.fastgit.org/overtools/io_scene_owm/archive/refs/heads/main.zip)）

前者用于资产提取，后者用于 Blender 资产导入，DataTool 最新版需要通过开发者的 Discord 频道里的 tool-release 子频道获取。

![](https://pic1.imgdb.cn/item/6350d8b516f2c2beb1ca9e66.jpg)

## 提取角色模型

快速进入正题，毕竟大家都想着提取老婆。

打开你下载的 DataTool 目录，在地址栏输入 `cmd`，回车，以当前路径打开命令行。

![](https://pic1.imgdb.cn/item/6350db4716f2c2beb1d10714.jpg)

示例角色模型提取命令：

```cmd
datatool -L=zhCN <守望先锋目录> extract-unlocks "<输出目录>" "<参数>"
```
- `-L` 指定语言，如果不添加，默认英文。
- `<守望先锋目录>` 指定守望先锋安装目录。
- `extract-unlocks` 提取模式，可以提取 `skin`, `icon`, `spray`, `victorypose`, `highlight` `intro` 和 `voiceline` 等参数。
- `<输出目录>` 指定输出目录。
- `<参数>` 指定输出的角色和内容

一键提取 **雾子** 初始模型：

```cmd
datatool -L=zhCN E:/Overwatch extract-unlocks "E:/OW Extract" "雾子|skin=守望先锋归来"
```

![](https://pic1.imgdb.cn/item/6350de5f16f2c2beb1d839df.jpg)

提取 **士兵：76** 所有模型：

```cmd
datatool -L=zhCN E:/Overwatch extract-unlocks "E:/OW Extract" "士兵：76|skin=*"
```

提取 **末日铁拳** 所有资产（包含模型，喷漆，姿势，语音等）：

```cmd
datatool -L=zhCN E:/Overwatch extract-unlocks "E:/OW Extract" "末日铁拳"
```

电脑没电了，上课先，后面再补充进入 Blender 的操作，还有提取音效，地图之类的，不过聪明的你应该能解决。