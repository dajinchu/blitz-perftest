# Localhost + Digital Ocean

```
artillery quick http://localhost:3000/api/test -r 20 -d 30

  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.72
  Response time (msec):
    min: 24.1
    max: 52
    median: 27.3
    p95: 32.6
    p99: 42
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

## w/DigitalOcean's Connection Pool (pgBouncer)

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 12.39
  Response time (msec):
    min: 62.9
    max: 30374.8
    median: 130.9
    p95: 29358.6
    p99: 30307.8
  Scenario counts:
    0: 600 (100%)
  Codes:
    500: 600
```

# Vercel + Digital Ocean

```
artillery quick https://perftest.now.sh/api/test -r 20 -d 30

  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.73
  Response time (msec):
    min: 108.8
    max: 1213.5
    median: 125.1
    p95: 145.6
    p99: 293.7
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

Why are 1/2 of them throwing 500's?
`FATAL: remaining connection slots are reserved for non-replication superuser connections`

This is because prisma database conneciton pooling fails on a serverless environment.

## w/DigitalOcean's Connection Pool (pgBouncer)

PrismaClient has to set `forceTransactions` or it wil 500 a ton https://github.com/prisma/prisma-client-js/issues/503.

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.72
  Response time (msec):
    min: 110.9
    max: 1413.9
    median: 128.1
    p95: 252.6
    p99: 1175.7
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 575
    500: 25
```

Better, but still failing. # of 500s varies from each time I run it.

# DigitalOcean Droplet + DB

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.72
  Response time (msec):
    min: 25.8
    max: 1094.7
    median: 33.2
    p95: 82.2
    p99: 110.6
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

# Localhost + AWS RDS

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.72
  Response time (msec):
    min: 37.9
    max: 1293.9
    median: 43.8
    p95: 312.2
    p99: 873
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

# Vercel + AWS RDS

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.1
  Response time (msec):
    min: 94.7
    max: 1205.7
    median: 109.7
    p95: 153.7
    p99: 714.5
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

Can still 500 under enough load/redeploys. Need RDS proxy.

# DigitalOcean + AWS RDS

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.72
  Response time (msec):
    min: 61.3
    max: 1138.6
    median: 67
    p95: 87.2
    p99: 123.1
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```

# EC2 + AWS RDS

```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.1
  Response time (msec):
    min: 41
    max: 1131.7
    median: 45.6
    p95: 55.4
    p99: 154.4
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600
```
