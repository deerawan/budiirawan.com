---
title: "MySQL Error 2006: MySQL Server Has Gone Away"
date: 2014-07-18
---

I got MySQL error 2006: MySQL server has gone away when I was importing my big database. This error is caused by low default setting of max\_allowed\_packet. The solution is raising this value in mysql configuration file.

- If you use xampp in windows, the configuration file is `/xampp/mysql/bin/my.ini`
- If you use linux, the configuration file is `/etc/mysql/my.cnf`

Then find `[mysqld]` section and change max\_allowed\_packet to bigger value.

\[mysqld\]
max\_allowed\_packet = 256M

After you change the value, restart your mysql. It must work now.

Good luck!
