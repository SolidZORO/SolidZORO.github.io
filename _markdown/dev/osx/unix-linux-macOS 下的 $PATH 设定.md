[slug]: unix-linux-macos-path-setting
[date]: 2016-01-04T02:16:26

# unix/linux/macOS 下的 $PATH 设定

今天在全局安装 `cnmp`（npm 中国镜像）的时候遇到了一个问题，就是装好后无法全局调用，输入 `cnpm` 的时候出现 `zsh: command not found: cnpm`，我猜想可能是 PATH 的问题。

网上做了下功课，PATH 的读取顺序大概这样：

```bash
/etc/profile (所有用户／for all users)
~/.bash_profile (当前用户／for actual user)
~/.bash_login (当前用户／for actual user)
~/.profile (当前用户for actual user)
```


理论上不建议修改系统的这些 PATH，要改就改自己使用的 bash 对应的配置文件。可以输入 `echo $SHELL` 查看自己用什么 bash。

如果你没切换过 bash，那么肯定是默认的 `bash`（/bin/zsh），配置文件就是上面的 `~/.bash_profile`。如果你和我一样用了 `zsh`（/bin/zsh）那么置文件是 `~/.zshrc`。

```bash
# PATH  ----------------------------------------
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
```


以 `bash` 为例（zsh 用户请自行脑补），输入 `vi ~/.bash_profile` 可以看到 `PATH=` 的那行，其格式为：`export PATH=~/bin1:~/bin2:~/bin3:**$PATH**`

可以看到每写一个 `path`（路径）都要用 `:` 隔开，只有最后一个 path 后面不需要加 `:`。

特别需要留意的是最后那个 `**$PATH**`，这是什么呢？这是**系统默认**以及**各种软件**比如 Xcode 的追加 `path`，所以 `**$PATH**` 我们一定要把他放在最后，不然某些软件启动就会找不到路径了。

修改完成后是不会马上生效的，只有输入了 `source ~/.bash_profile` 才会刷新，最后可以通过  `echo $PATH` 查看是否修改成功。

