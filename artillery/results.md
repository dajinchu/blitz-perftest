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
artillery quick https://perftest.dajinchu.now.sh/api/test -r 20 -d 30

  Summary report @ 23:46:34(-0400) 2020-05-12
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.41
  Response time (msec):
    min: 298.3
    max: 4133.6
    median: 329.5
    p95: 2383
    p99: 3518.5
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 499
    500: 101
```

Why are 1/6 of them throwing 500's?
`FATAL: remaining connection slots are reserved for non-replication superuser connections`

I believe this is because prisma database conneciton pooling fails on a serverless environment.

## w/DigitalOcean's Connection Pool (pgBouncer)
```
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  Mean response/sec: 19.41
  Response time (msec):
    min: 226.6
    max: 1401.2
    median: 318.9
    p95: 376.5
    p99: 949
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 564
    500: 36
```
Better, but still failing. # of 500s varies from each time I run it.
