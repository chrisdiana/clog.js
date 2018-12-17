var Clog = function() {
  this.container;
  this.handle;
  this.content;
  this.height;

  this.init();
  this.initDrag();
}

Clog.prototype.init = function() {
  this.container = document.createElement('div');
  this.container.style.cssText = 'font-family:monospace;overflow-y:scroll;color:#fff;background:#282822;position:absolute;bottom:0;left:0;height:100px;width:100%';
  this.container.setAttribute('id', 'clog');

  this.handle = document.createElement('div');
  this.handle.style.cssText = 'position:absolute;top:0;left:0;height:5px;background:#4b4b4b;width:100%';
  this.handle.setAttribute('id', 'clog-handle');

  this.content = document.createElement('pre');
  this.content.style.cssText = 'padding:5px 18px;';
  this.content.setAttribute('id', 'clog-content');

  this.container.appendChild(this.handle);
  this.container.appendChild(this.content);
  document.body.appendChild(this.container);
}
Clog.prototype.initDrag = function() {
  var startY, startHeight;
  var container = this.container;

  this.handle.addEventListener('mousedown', initDrag, false);

  function initDrag(e) {
    startY = e.clientY;
    document.documentElement.addEventListener('mousemove', startDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
    startHeight = parseInt(document.defaultView.getComputedStyle(container).height, 10);
  }

  function startDrag(e) {
    container.style.height = (document.documentElement.clientHeight - e.clientY) + 'px';
  }

  function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', startDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  }
}

Clog.prototype.log = function(...items) {

  var consoleItem = document.createElement('div');
  consoleItem.style.cssText = 'border-bottom:1px solid #fff';

  items.forEach((item,i)=>{
    items[i] = (typeof item === 'object' ? JSON.stringify(item,null,4) : item);
  });

  consoleItem.innerHTML = items.join(' ') + '<br />';
  this.content.innerHTML += consoleItem;

  /*
    try {
      console.log( eval( data ) );
    } catch (e) {
      console.log( e.stack );
    }
  */
}

