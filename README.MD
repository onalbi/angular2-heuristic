# angular2-heuristic

## Installation

To install this library, run:

```bash
$ npm install angular2-heuristic --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular2-heuristic
```

and then from your Angular `AppModule`:

```typescript
import {Heuristic}  from 'angular2-heuristic';

Heuristic.similarity('test', 'test');
```


## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To test all `*.spec.ts` files:

```bash
$ tsd install mocha chai sinon -s
$ npm run test
```

## License

MIT © [Albion Liçi](lici.albion@gmail.com)
