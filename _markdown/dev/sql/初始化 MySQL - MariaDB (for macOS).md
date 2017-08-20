[slug]: init-mysql-mariadb-for-macos
[date]: 2016-07-04T02:16:26

# 初始化 MySQL / MariaDB (for macOS)

今天用 brew 执行了一下 update，结果发现 mariaDB 从 5.5 升级成了 5.6，导致启动的时候出现很多 warning。

网上说是 table mysql 没有很好的做向下兼容导致了一些问题。

还好我 mysql 本地开发环境的用户权限并不多，只有默认的 root 和 后来新建的 admin，所以决定把 table mysql 的所有文件清除掉，然后重建，那么开始吧。


1.首先删掉 `my.cnf` 里 `datadir` 指定目录下 的 `mysql` 目录。

备份 `datadir` 所有**非目录**文件，特别注意备份好 `ibdata1` 和 `ib_logfile0`，`ib_logfile1` 等，因为后面需要用到覆盖恢复。

删除 `datadir` 所有**非目录**文件。

2.初始化 `mysql_install_db`。

3.启动 mysql 服务 `mysql.server start`。

4.然后设定新密码 `mysqladmin' -u root password '新密码'`，当然，也可以用工具设定
`mysql_secure_installation`。

5.把 `ibdata1` 和 `ib_logfile0`，`ib_logfile1` 等文件放回 `datadir`（覆盖）。

6.最后重启一下 mysql 服务 `mysql.server restart`。



重启之后终端这样的：

```bash
# mysql.server restart
Shutting down MySQL
.. SUCCESS!

Starting MySQL

.170207 10:53:36 mysqld_safe Logging to '/Users/SolidZORO/Files/databases/logs/error.log'.

170207 10:53:36 mysqld_safe Starting mysqld daemon with databases from /Users/SolidZORO/Files/databases/data
 SUCCESS!
```

由此可见 `error.log` 文件还是有东西写入，不过不再有 Warning，都是一些 Note 了。


问题就此解决。

