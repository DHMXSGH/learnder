# 七彩炫光

在你使用一些地图的时候，地图上可能会有一些七彩的光斑无法去除。

这是地图 Cubemap 问题，要不就重新 build 要不就使用控制台关闭反射，~~Source Filmmaker 程序员日常临时工系列~~。

## 解决方法

### 一劳永逸

把地图和地图用到的素材全部移动到 **异形丛生(Alien Swarm)** 这个游戏里去，用map命令加载进地图，再输入 ```buildcubemap``` 再将build好的地图移动回 Source Filmmaker。

### 临时解决方法（不一定起效）

在控制台输入 ```Mat_Specular 0``` 关闭反射。

