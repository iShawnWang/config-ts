# Config-TS

Read `.ts` config file with ease :D

# Getting Started

Many node cli or bundler use `.json .js` as their config file, but it woule be better with `.ts`

This lib is `Designed` as a util to simplify this process.
It's simplely rely on `typescript compiler API`, just compile the `.ts` config file to the tmpDir then `require` it.

```
import getConf from 'config-ts'

const config = getConf(<your config file full path>) // return a js object
```
