User:
```js
<GlobalNavigation api={() => Promise.resolve({data: require('./mockedData').user})}/>
```

Anon:
```js
<GlobalNavigation api={() => Promise.resolve({data: require('./mockedData').anon})}/>
```

Anon with Partner Slot:
```js
<GlobalNavigation api={() => Promise.resolve({data: require('./mockedData').anonPartner})}/>
```
