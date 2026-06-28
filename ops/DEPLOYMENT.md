# YourSignals server deployment

Server source directory:

```bash
/root/YourSignals-zip-src
```

Public web root used by Nginx:

```bash
/var/www/yoursignals
```

Release directory:

```bash
/var/www/yoursignals-releases
```

Deploy after the server source directory is connected to GitHub:

```bash
deploy-yoursignals main
```

Rollback to the previous release:

```bash
rollback-yoursignals
```

Rollback to a specific release:

```bash
rollback-yoursignals /var/www/yoursignals-releases/20260626230309-initial
```

