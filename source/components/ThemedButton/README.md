```js
<ThemedButton
    onClick={() => {alert('Clicked!')}}
>
    Default
</ThemedButton>
{' '}
<ThemedButton
    onClick={() => {alert('Clicked!')}}
    style={{'--button-background': 'red', '--button-background-hover': 'blue'}}
>
    Themed button
</ThemedButton>
```
