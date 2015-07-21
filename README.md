##CLog.js

Use this simple library to render `console.log` messages to the front-end by.
"Why?! We have DevTools!", you ask. This can come in handy if you are debugging on an
online code playground (like JSFiddle, CodePen).

###How to use it

Include clog.js in your HTML page (or copy and paste the simple function into
your source)

```
<script src="clog.min.js"></script>
```

Now call `clog()` when you want to `console.log()` something and have it render
to HTML. The console message will appear at the bottom of the window.

```
clog('Here I am');
```

![Screenshot](https://raw.githubusercontent.com/cdmedia/clog.js/master/demo/clogjs-screen.png)
