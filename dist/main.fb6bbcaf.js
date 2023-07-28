// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var _0x54541f = _0x52b9;
(function (_0x42e648, _0x49b6eb) {
  var _0x4354a5 = _0x52b9,
    _0x471a8b = _0x42e648();
  while (!![]) {
    try {
      var _0x2a6ca5 = parseInt(_0x4354a5(0x10d)) / 0x1 * (parseInt(_0x4354a5('0x102')) / 0x2) + parseInt(_0x4354a5(0xeb)) / 0x3 * (-parseInt(_0x4354a5(0x108)) / 0x4) + parseInt(_0x4354a5(0xfa)) / 0x5 * (parseInt(_0x4354a5(0xfe)) / 0x6) + parseInt(_0x4354a5(0xe9)) / 0x7 + -parseInt(_0x4354a5(0xff)) / 0x8 * (parseInt(_0x4354a5(0xf7)) / 0x9) + parseInt(_0x4354a5(0x107)) / 0xa * (-parseInt(_0x4354a5(0xf6)) / 0xb) + -parseInt(_0x4354a5(0xfb)) / 0xc * (-parseInt(_0x4354a5('0x109')) / 0xd);
      if (_0x2a6ca5 === _0x49b6eb) break;else _0x471a8b['push'](_0x471a8b['shift']());
    } catch (_0x5c7ee7) {
      _0x471a8b['push'](_0x471a8b['shift']());
    }
  }
})(_0x5116, 0x74bb7);
var _0x40a8c8 = function () {
    var _0x4e9d1c = !![];
    return function (_0x210aca, _0x33ed56) {
      var _0x41db6a = _0x4e9d1c ? function () {
        if (_0x33ed56) {
          var _0x13af8c = _0x33ed56['apply'](_0x210aca, arguments);
          return _0x33ed56 = null, _0x13af8c;
        }
      } : function () {};
      return _0x4e9d1c = ![], _0x41db6a;
    };
  }(),
  _0x1d0b34 = _0x40a8c8(this, function () {
    var _0x2e0328 = _0x52b9,
      _0x23b45d = function _0x23b45d() {
        var _0x22cf09 = _0x52b9;
        var _0x552041;
        try {
          _0x552041 = Function(_0x22cf09('0x10c') + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0x10e020) {
          _0x552041 = window;
        }
        return _0x552041;
      },
      _0x33a12e = _0x23b45d(),
      _0x28942d = _0x33a12e[_0x2e0328(0xea)] = _0x33a12e[_0x2e0328('0xea')] || {},
      _0x4e976a = ['log', _0x2e0328(0xf9), 'info', _0x2e0328('0xfd'), _0x2e0328(0x104), _0x2e0328(0xf4), _0x2e0328(0xf3)];
    for (var _0x3c228e = 0x0; _0x3c228e < _0x4e976a['length']; _0x3c228e++) {
      var _0x5368e6 = _0x40a8c8[_0x2e0328('0xef')][_0x2e0328(0xf0)]['bind'](_0x40a8c8),
        _0x38161b = _0x4e976a[_0x3c228e],
        _0x3cd391 = _0x28942d[_0x38161b] || _0x5368e6;
      _0x5368e6[_0x2e0328('0xfc')] = _0x40a8c8[_0x2e0328(0xf2)](_0x40a8c8), _0x5368e6[_0x2e0328(0xec)] = _0x3cd391[_0x2e0328(0xec)][_0x2e0328(0xf2)](_0x3cd391), _0x28942d[_0x38161b] = _0x5368e6;
    }
  });
_0x1d0b34();
function _0x52b9(_0x39ceba, _0xef7afb) {
  var _0x2821a5 = _0x5116();
  return _0x52b9 = function _0x52b9(_0x1d0b34, _0x40a8c8) {
    _0x1d0b34 = _0x1d0b34 - 0xe9;
    var _0x30d450 = _0x2821a5[_0x1d0b34];
    return _0x30d450;
  }, _0x52b9(_0x39ceba, _0xef7afb);
}
function setTime() {
  var _0x4997bd = _0x52b9,
    _0x569658 = [{
      'pin': _0x4997bd('0x103'),
      'location': 'subpages/work.html'
    }],
    _0x5bd4db = document[_0x4997bd('0xed')](_0x4997bd(0xf5)),
    _0x409036 = document[_0x4997bd('0xed')](_0x4997bd('0xf1')),
    _0x1ad8ff = document[_0x4997bd('0xed')]('minutes');
  _0x5bd4db[_0x4997bd(0xee)]('click', function () {
    var _0x50afe1 = _0x4997bd,
      _0x39e334 = _0x409036['value'],
      _0x1ec7b4 = _0x1ad8ff[_0x50afe1(0x105)],
      _0x9ecd45 = '' + _0x39e334 + _0x1ec7b4,
      _0x30900a = checkCode(_0x9ecd45, _0x569658);
    _0x30900a[_0x50afe1('0x100')] > 0x0 && _0x30900a[0x0] !== undefined && window[_0x50afe1('0xf8')](_0x30900a[0x0][_0x50afe1(0x101)], _0x50afe1(0x10a));
  });
}
function checkCode(_0x409c5b, _0x49d367) {
  var _0x79f9f1 = _0x52b9;
  return _0x49d367[_0x79f9f1('0x10b')](function (_0x17d23d) {
    if (_0x409c5b === _0x17d23d['pin']) return _0x17d23d;
  });
}
function _0x5116() {
  var _0xce148c = ['1697BFoVba', '487235xkmfDr', 'console', '3xHcnAn', 'toString', 'getElementById', 'addEventListener', 'constructor', 'prototype', 'hours', 'bind', 'trace', 'table', 'set', '20042WtiHsP', '41913TDwpLp', 'open', 'warn', '3162505MhouON', '4108260fINsMS', '__proto__', 'error', '6wWHnst', '432pCTLbY', 'length', 'location', '716GCOhFg', '0305', 'exception', 'value', 'onload', '3260YHlAAv', '1313608SsCrpi', '13cCNBAY', '_self', 'map', 'return\x20(function()\x20'];
  _0x5116 = function _0x5116() {
    return _0xce148c;
  };
  return _0x5116();
}
window[_0x54541f(0x106)] = function () {
  setTime();
};
var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".clock-settings .ast a");
var original = document.querySelector(".full-img");
var caption = document.querySelector("modal-caption");
previews.forEach(function (preview) {
  preview.addEventListener("click", function () {
    modal.classList.add("open");
    var originalSrc = preview.getAttribute("data-original");
    original.src = "./".concat(originalSrc);
  });
});
modal.addEventListener("click", function (e) {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56626" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map