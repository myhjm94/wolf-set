# 狼集 Wolf Set

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=0000cd_wolf-set&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=0000cd_wolf-set)

宇宙总需要些航天器，“📀各位都好吧？” 让我们路过些互联网小行星。

![镀金铝板](static/img/镀金铝板.png)

## Bluf theme

Bluf 是一款简明扼要的**瀑布流**卡片式 Hugo 主题，非常适合脑暴、作品集、链接导航、等需要**简单分享**的场景。部分代码由 GPT-4-Tubro 与 Claude-3-Opus AI 协助。

### 用法

Bluf 是一款单页 Hugo 主题，这意味着你应该将数据放置在 data 目录中，而**不**是按照传统方式在 content 目录下编写文章。你需要在 data 目录下准备以下三个配置文件（以下示例为 yaml）：

#### cards.yaml

包含主页瀑布流所有卡片的核心数据。

#### navbar.yaml

包括顶部导航栏的标签筛选和外链数据。

#### tag_classes.yaml

配置标签和标签样式之间的映射关系。

#### 名称

Blue + Wolf = Bluf

> BLUF (bottom line up front) is the practice of beginning a message with its key information (the "bottom line"). This provides the reader with the most important information first.
> BLUF（先行底行）是一种沟通方式，即在信息的开始部分先给出关键信息（即“底行”）。这样做可以让读者首先了解到最重要的信息。

## License

本项目基于 **[Hugo](https://gohugo.io/)** 框架，并采用自建的 **Bluf** 主题：

- `content` 与 `data` 目录下的内容遵循 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)** 许可协议共享。
- **Bluf** 主题因集成 **[Isotope](https://isotope.metafizzy.co/license)**，遵守 **GPLv3** 许可协议。