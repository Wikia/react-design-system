By default its rendered without close button:
```js
<IconSprite />{ /* add sprite so we can see icons in this example */ }
<BannerNotification type={'message'} text={'lorem ipsum - messge'} />
```

But it can be rendered with close buttton:
```js
<IconSprite />{ /* add sprite so we can see icons in this example */ }
<BannerNotification type={'alert'} text={'lorem ipsum - alert'} onClose={() => alert('Click')} />
```