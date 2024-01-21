# Readme

## Setup

### Install Dependencies
`npm i`

### Install Postgres

You need to install postgres server with a password-less connection with the default username.

### Install `wrk`

`brew install wrk`

## Start Server

`./serve.sh`

## Run Benchmark

`./benchmark.sh`


## Benchmark Result for Pool of 20 connections

```
Running 10s test @ http://localhost:3050
  1 threads and 32 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.49s   489.10ms   2.00s    52.27%
    Req/Sec    49.29     65.60   190.00     78.57%
  200 requests in 10.09s, 48.24KB read
  Socket errors: connect 0, read 0, write 0, timeout 24
Requests/sec:     19.82
Transfer/sec:      4.78KB
```

**NOTE:** The req/s number will fluctuate, ±1 req/s
