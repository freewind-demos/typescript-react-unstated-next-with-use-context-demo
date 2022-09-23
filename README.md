TypeScript React Hox with use-context Issue Demo
=================================

如果在hox里混用useContext，并且情况较复杂时，会出现bug，可能是哪里没处理好。

从代码上讲，使用到hox及useAppContext的地方都恰当的包装了`Provider`，但还是出现了下面的错误：

```
Uncaught Error: AppContext is not initialized
    at useAppContext (useAppContext.ts? [sm]:12:15)
    at useStore.ts? [sm]:11:20
    at create-global-store.js:16:31
    at renderWithHooks (react-dom.development.js:14985:18)
    at updateFunctionComponent (react-dom.development.js:17356:20)
    at updateSimpleMemoComponent (react-dom.development.js:17215:10)
    at updateMemoComponent (react-dom.development.js:17092:14)
    at beginWork (react-dom.development.js:19135:16)
    at HTMLUnknownElement.callCallback2 (react-dom.development.js:3945:14)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
```

```
npm install
npm start
```

It will open page on browser automatically.
