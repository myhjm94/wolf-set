# 狼集 Wolf Set

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=0000cd_wolf-set&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=0000cd_wolf-set)

宇宙总需要些航天器，“📀各位都好吧？” 让我们路过些互联网小行星。

![镀金铝板](/assets/img/镀金铝板.png)

## 安装

### 快速上手

本教程基于“无需修改代码”的难度，几乎无需付费，在[狼集](https://ws.0000cd.com/)内容的基础上有一个属于自己的网址导航。

#### 步骤0：准备

1. 确保你已注册 Github 与 Cloudflare 账号，我们将用此存储与发布网页。
2. （可选但推荐）准备一个你自己的域名，有助于提高国内的访问速度。

#### 步骤1：复制仓库到你的 Github

1. 点击[本页面](https://github.com/0000cd/wolf-set)右上角的 fork 按钮，复制项目到你的 Github 仓库。
2. 记住你复制时的仓库名。（稍后会用到）

#### 步骤2：修改网站的基础配置

1. 在你刚 fork 的仓库首页，点开 `hugo.toml` 文件（根目录）。
2. 根据文件中的注释，编辑文件，修改以下内容：
     - 网址、网站名称、首页标题、SEO信息、统计信息等。
     - 注意：如你还不确定网址，可先跳过，稍后记得修改。
     - 注意：toml 格式，不要丢失两侧的英文引号`"`。

```toml
# hugo.toml 文件部分示例:
baseURL = "https://ws.0000cd.com/" #你的网址
languageCode = "zh-CN"
title = "狼牌网址导航 - 狼集 Wolf Set" #网站名称
theme = "bluf"
#……
```

#### 步骤3：使用 Cloudflare Pages 发布网页

1. 打开 [Cloudflare Pages](https://pages.cloudflare.com/)，点击创建 - Pages - 连接到 Git - Github，选择你刚记住仓库名的项目。
2. 点击开始设置，修改以下内容：
    - 项目名称（注意：若没有你自己的域名，这将是你默认域名的一部分）
    - 预设框架，选择 `Hugo` （无需修改其他默认设置）。
3. 点击保存并部署，通常会在一分钟内会完成，**但首次部署你还需再等2~3分钟**，才能点开预览链接在网上看到你的网页，请坐和放宽。
4. 修改并绑定域名：
    - 如果你有自己的域名，请在项目内找到自定义域，按提示绑定域名。
    - 如果你没有自己的域名，请记住 Cloudflare 提供的默认域名（如 xxx.pages.dev）。
    - 确认之前 `hugo.toml` 的网址已完成修改。

#### 常见问题

- 访问异常：如你无法访问 Cloudflare 默认提供的域名，或访问速度过慢，请绑定你自己的域名。
- 部署失败：
  - 如你部署失败，看一下部署日志，并检查你选对了仓库，以及 `hugo.toml` 内的格式。
  - 如你用的不是 Cloudflare Pages ，而是 Vercel 或 Netlify 等平台部署失败，你可能需要在选择预设框架时，配置环境变量 hugo 版本为较新版本，如 `HUGO_VERSION = v0.117.0`。

### Hugo 开始

如果你对 Hugo 有一定了解，可直接用我们自写的 Bluf 主题来构建你的网站。只需先复制 themes/bluf 到你的项目，并在 hugo 中设置 `theme = "bluf"`。

Bluf 主题代码已经过多次测试，可稳定上线使用，但部分代码仍在清理中，因此暂不提供详细教程。如有任何问题或建议，欢迎通过 Issues 提交反馈！我们期待你的参与。

---

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

- `content` 与 `data` 目录下的内容遵循 **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)** 许可协议共享。
- **Bluf** 主题因集成 **[Isotope](https://isotope.metafizzy.co/license)**，遵守 **GPLv3** 许可协议。
