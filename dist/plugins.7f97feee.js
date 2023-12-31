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
})({"node_modules/embla-carousel/embla-carousel.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmblaCarousel;
function isNumber(subject) {
  return typeof subject === 'number';
}
function isString(subject) {
  return typeof subject === 'string';
}
function isBoolean(subject) {
  return typeof subject === 'boolean';
}
function isObject(subject) {
  return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function arrayKeys(array) {
  return objectKeys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}
function objectKeys(object) {
  return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
  return [objectA, objectB].reduce((mergedObjects, currentObject) => {
    objectKeys(currentObject).forEach(key => {
      const valueA = mergedObjects[key];
      const valueB = currentObject[key];
      const areObjects = isObject(valueA) && isObject(valueB);
      mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
    });
    return mergedObjects;
  }, {});
}
function isMouseEvent(evt, ownerWindow) {
  return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
  const predefined = {
    start,
    center,
    end
  };
  function start() {
    return 0;
  }
  function center(n) {
    return end(n) / 2;
  }
  function end(n) {
    return viewSize - n;
  }
  function percent() {
    return viewSize * Number(align);
  }
  function measure(n) {
    if (isNumber(align)) return percent();
    return predefined[align](n);
  }
  const self = {
    measure
  };
  return self;
}
function Axis(axis, direction) {
  const scroll = axis === 'y' ? 'y' : 'x';
  const cross = axis === 'y' ? 'x' : 'y';
  const startEdge = getStartEdge();
  const endEdge = getEndEdge();
  function measureSize(rect) {
    const {
      width,
      height
    } = rect;
    return scroll === 'x' ? width : height;
  }
  function getStartEdge() {
    if (scroll === 'y') return 'top';
    return direction === 'rtl' ? 'right' : 'left';
  }
  function getEndEdge() {
    if (scroll === 'y') return 'bottom';
    return direction === 'rtl' ? 'left' : 'right';
  }
  const self = {
    scroll,
    cross,
    startEdge,
    endEdge,
    measureSize
  };
  return self;
}
function Limit(min, max) {
  const length = mathAbs(min - max);
  function reachedMin(n) {
    return n < min;
  }
  function reachedMax(n) {
    return n > max;
  }
  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }
  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }
  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }
  const self = {
    length,
    max,
    min,
    constrain,
    reachedAny,
    reachedMax,
    reachedMin,
    removeOffset
  };
  return self;
}
function Counter(max, start, loop) {
  const {
    constrain
  } = Limit(0, max);
  const loopEnd = max + 1;
  let counter = withinLimit(start);
  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }
  function get() {
    return counter;
  }
  function set(n) {
    counter = withinLimit(n);
    return self;
  }
  function add(n) {
    return clone().set(get() + n);
  }
  function clone() {
    return Counter(max, get(), loop);
  }
  const self = {
    get,
    set,
    add,
    clone
  };
  return self;
}
function Direction(direction) {
  const sign = direction === 'rtl' ? -1 : 1;
  function apply(n) {
    return n * sign;
  }
  const self = {
    apply
  };
  return self;
}
function EventStore() {
  let listeners = [];
  function add(node, type, handler, options = {
    passive: true
  }) {
    node.addEventListener(type, handler, options);
    listeners.push(() => node.removeEventListener(type, handler, options));
    return self;
  }
  function clear() {
    listeners = listeners.filter(remove => remove());
  }
  const self = {
    add,
    clear
  };
  return self;
}
function DragHandler(axis, direction, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction) {
  const {
    cross: crossAxis
  } = axis;
  const focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  const nonPassiveEvent = {
    passive: false
  };
  const initEvents = EventStore();
  const dragEvents = EventStore();
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
  const snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  const freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  const baseSpeed = dragFree ? 43 : 25;
  let isMoving = false;
  let startScroll = 0;
  let startCross = 0;
  let pointerIsDown = false;
  let preventScroll = false;
  let preventClick = false;
  let isMouse = false;
  function init(emblaApi, watchDrag) {
    if (!watchDrag) return;
    function downIfAllowed(evt) {
      if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
    }
    const node = rootNode;
    initEvents.add(node, 'dragstart', evt => evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', () => undefined, nonPassiveEvent).add(node, 'touchend', () => undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
  }
  function destroy() {
    initEvents.clear();
    dragEvents.clear();
  }
  function addDragEvents() {
    const node = isMouse ? ownerDocument : rootNode;
    dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
  }
  function isFocusNode(node) {
    const nodeName = node.nodeName || '';
    return focusNodes.includes(nodeName);
  }
  function forceBoost() {
    const boost = dragFree ? freeForceBoost : snapForceBoost;
    const type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }
  function allowedForce(force, targetChanged) {
    const next = index.add(mathSign(force) * -1);
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }
  function down(evt) {
    const isMouseEvt = isMouseEvent(evt, ownerWindow);
    isMouse = isMouseEvt;
    if (isMouseEvt && evt.button !== 0) return;
    if (isFocusNode(evt.target)) return;
    preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
    isMoving = deltaAbs(target.get(), location.get()) >= 2;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    scrollBody.useFriction(0).useDuration(0);
    target.set(location);
    addDragEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    eventHandler.emit('pointerDown');
  }
  function move(evt) {
    const lastScroll = dragTracker.readPoint(evt);
    const lastCross = dragTracker.readPoint(evt, crossAxis);
    const diffScroll = deltaAbs(lastScroll, startScroll);
    const diffCross = deltaAbs(lastCross, startCross);
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll) return up(evt);
    }
    const diff = dragTracker.pointerMove(evt);
    if (diffScroll > dragThreshold) preventClick = true;
    scrollBody.useFriction(0.3).useDuration(1);
    animation.start();
    target.add(direction.apply(diff));
    evt.preventDefault();
  }
  function up(evt) {
    const currentLocation = scrollTarget.byDistance(0, false);
    const targetChanged = currentLocation.index !== index.get();
    const rawForce = dragTracker.pointerUp(evt) * forceBoost();
    const force = allowedForce(direction.apply(rawForce), targetChanged);
    const forceFactor = factorAbs(rawForce, force);
    const speed = baseSpeed - 10 * forceFactor;
    const friction = baseFriction + forceFactor / 50;
    preventScroll = false;
    pointerIsDown = false;
    dragEvents.clear();
    scrollBody.useDuration(speed).useFriction(friction);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    eventHandler.emit('pointerUp');
  }
  function click(evt) {
    if (preventClick) {
      evt.stopPropagation();
      evt.preventDefault();
    }
  }
  function pointerDown() {
    return pointerIsDown;
  }
  const self = {
    init,
    pointerDown,
    destroy
  };
  return self;
}
function DragTracker(axis, ownerWindow) {
  const logInterval = 170;
  let startEvent;
  let lastEvent;
  function readTime(evt) {
    return evt.timeStamp;
  }
  function readPoint(evt, evtAxis) {
    const property = evtAxis || axis.scroll;
    const coord = `client${property === 'x' ? 'X' : 'Y'}`;
    return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
  }
  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return readPoint(evt);
  }
  function pointerMove(evt) {
    const diff = readPoint(evt) - readPoint(lastEvent);
    const expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return diff;
  }
  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    const diffTime = readTime(evt) - readTime(startEvent);
    const expired = readTime(evt) - readTime(lastEvent) > logInterval;
    const force = diffDrag / diffTime;
    const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? force : 0;
  }
  const self = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint
  };
  return self;
}
function PercentOfView(viewSize) {
  function measure(n) {
    return viewSize * (n / 100);
  }
  const self = {
    measure
  };
  return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis) {
  let resizeObserver;
  let containerSize;
  let slideSizes = [];
  let destroyed = false;
  function readSize(node) {
    return axis.measureSize(node.getBoundingClientRect());
  }
  function init(emblaApi, watchResize) {
    if (!watchResize) return;
    containerSize = readSize(container);
    slideSizes = slides.map(readSize);
    function defaultCallback(entries) {
      for (const entry of entries) {
        const isContainer = entry.target === container;
        const slideIndex = slides.indexOf(entry.target);
        const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
        const newSize = readSize(isContainer ? container : slides[slideIndex]);
        if (lastSize !== newSize) {
          ownerWindow.requestAnimationFrame(() => {
            emblaApi.reInit();
            eventHandler.emit('resize');
          });
          break;
        }
      }
    }
    resizeObserver = new ResizeObserver(entries => {
      if (destroyed) return;
      if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
        defaultCallback(entries);
      }
    });
    const observeNodes = [container].concat(slides);
    observeNodes.forEach(node => resizeObserver.observe(node));
  }
  function destroy() {
    if (resizeObserver) resizeObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function ScrollBody(location, target, baseDuration, baseFriction) {
  let hasSettled = true;
  let bodyVelocity = 0;
  let scrollDirection = 0;
  let scrollDuration = baseDuration;
  let scrollFriction = baseFriction;
  let rawLocation = location.get();
  let rawLocationPrevious = 0;
  function seek() {
    const diff = target.get() - location.get();
    const isInstant = !scrollDuration;
    let directionDiff = 0;
    if (isInstant) {
      bodyVelocity = 0;
      location.set(target);
      directionDiff = diff;
    } else {
      bodyVelocity += diff / scrollDuration;
      bodyVelocity *= scrollFriction;
      rawLocation += bodyVelocity;
      location.add(bodyVelocity);
      directionDiff = rawLocation - rawLocationPrevious;
    }
    scrollDirection = mathSign(directionDiff);
    rawLocationPrevious = rawLocation;
    hasSettled = mathAbs(diff) < 0.001;
    return self;
  }
  function settled() {
    return hasSettled;
  }
  function duration() {
    return scrollDuration;
  }
  function direction() {
    return scrollDirection;
  }
  function velocity() {
    return bodyVelocity;
  }
  function useBaseDuration() {
    return useDuration(baseDuration);
  }
  function useBaseFriction() {
    return useFriction(baseFriction);
  }
  function useDuration(n) {
    scrollDuration = n;
    return self;
  }
  function useFriction(n) {
    scrollFriction = n;
    return self;
  }
  const self = {
    direction,
    duration,
    velocity,
    seek,
    settled,
    useBaseFriction,
    useBaseDuration,
    useFriction,
    useDuration
  };
  return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
  const pullBackThreshold = percentOfView.measure(10);
  const edgeOffsetTolerance = percentOfView.measure(50);
  const frictionLimit = Limit(0.1, 0.99);
  let disabled = false;
  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }
  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
    const diffToEdge = mathAbs(limit[edge] - location.get());
    const diffToTarget = target.get() - location.get();
    const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
    target.subtract(diffToTarget * friction);
    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useDuration(25).useBaseFriction();
    }
  }
  function toggleActive(active) {
    disabled = !active;
  }
  const self = {
    constrain,
    toggleActive
  };
  return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll) {
  const scrollBounds = Limit(-contentSize + viewSize, snapsAligned[0]);
  const snapsBounded = measureBounded();
  const snapsContained = measureContained();
  function findDuplicates() {
    const startSnap = snapsBounded[0];
    const endSnap = arrayLast(snapsBounded);
    const min = snapsBounded.lastIndexOf(startSnap);
    const max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }
  function measureBounded() {
    return snapsAligned.map(scrollBounds.constrain).map(scrollBound => parseFloat(scrollBound.toFixed(3)));
  }
  function measureContained() {
    if (contentSize <= viewSize) return [scrollBounds.max];
    if (containScroll === 'keepSnaps') return snapsBounded;
    const {
      min,
      max
    } = findDuplicates();
    return snapsBounded.slice(min, max);
  }
  const self = {
    snapsContained
  };
  return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
  const max = scrollSnaps[0];
  const min = loop ? max - contentSize : arrayLast(scrollSnaps);
  const limit = Limit(min, max);
  const self = {
    limit
  };
  return self;
}
function ScrollLooper(contentSize, limit, offsetLocation, vectors) {
  const jointSafety = 0.1;
  const min = limit.min + jointSafety;
  const max = limit.max + jointSafety;
  const {
    reachedMin,
    reachedMax
  } = Limit(min, max);
  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(offsetLocation.get());
    if (direction === -1) return reachedMin(offsetLocation.get());
    return false;
  }
  function loop(direction) {
    if (!shouldLoop(direction)) return;
    const loopDistance = contentSize * (direction * -1);
    vectors.forEach(v => v.add(loopDistance));
  }
  const self = {
    loop
  };
  return self;
}
function ScrollProgress(limit) {
  const {
    max,
    length: scrollLength
  } = limit;
  function get(n) {
    const currentLocation = n - max;
    return currentLocation / -scrollLength;
  }
  const self = {
    get
  };
  return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slideSizesWithGaps, slidesToScroll, containScroll) {
  const {
    startEdge,
    endEdge
  } = axis;
  const {
    groupSlides
  } = slidesToScroll;
  const alignments = measureSizes().map(alignment.measure);
  const snaps = measureUnaligned();
  const snapsAligned = measureAligned();
  function measureSizes() {
    return groupSlides(slideRects).map(rects => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
  }
  function measureUnaligned() {
    return slideRects.map(rect => containerRect[startEdge] - rect[startEdge]).map(snap => -mathAbs(snap));
  }
  function measureAligned() {
    const containedStartSnap = 0;
    const containedEndSnap = arrayLast(snaps) - arrayLast(slideSizesWithGaps);
    return groupSlides(snaps).map(g => g[0]).map((snap, index, groupedSnaps) => {
      const isFirst = !index;
      const isLast = index === arrayLastIndex(groupedSnaps);
      if (containScroll && isFirst) return containedStartSnap;
      if (containScroll && isLast) return containedEndSnap;
      return snap + alignments[index];
    });
  }
  const self = {
    snaps,
    snapsAligned
  };
  return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  const {
    reachedAny,
    removeOffset,
    constrain
  } = limit;
  function minDistance(distances) {
    return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
  }
  function findTargetSnap(target) {
    const distance = loop ? removeOffset(target) : constrain(target);
    const ascDiffsToSnaps = scrollSnaps.map(scrollSnap => scrollSnap - distance).map(diffToSnap => shortcut(diffToSnap, 0)).map((diff, i) => ({
      diff,
      index: i
    })).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff));
    const {
      index
    } = ascDiffsToSnaps[0];
    return {
      index,
      distance
    };
  }
  function shortcut(target, direction) {
    const targets = [target, target + contentSize, target - contentSize];
    if (!loop) return targets[0];
    if (!direction) return minDistance(targets);
    const matchingTargets = targets.filter(t => mathSign(t) === direction);
    return minDistance(matchingTargets);
  }
  function byIndex(index, direction) {
    const diffToSnap = scrollSnaps[index] - targetVector.get();
    const distance = shortcut(diffToSnap, direction);
    return {
      index,
      distance
    };
  }
  function byDistance(distance, snap) {
    const target = targetVector.get() + distance;
    const {
      index,
      distance: targetSnapDistance
    } = findTargetSnap(target);
    const reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index,
      distance
    };
    const diffToSnap = scrollSnaps[index] - targetSnapDistance;
    const snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index,
      distance: snapDistance
    };
  }
  const self = {
    byDistance,
    byIndex,
    shortcut
  };
  return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollTarget, scrollBody, targetVector, eventHandler) {
  function scrollTo(target) {
    const distanceDiff = target.distance;
    const indexDiff = target.index !== indexCurrent.get();
    targetVector.add(distanceDiff);
    if (distanceDiff) {
      if (scrollBody.duration()) {
        animation.start();
      } else {
        animation.update();
        animation.render(1);
        animation.update();
      }
    }
    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      eventHandler.emit('select');
    }
  }
  function distance(n, snap) {
    const target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }
  function index(n, direction) {
    const targetIndex = indexCurrent.clone().set(n);
    const target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }
  const self = {
    distance,
    index
  };
  return self;
}
function Vector1D(initialValue) {
  let value = initialValue;
  function get() {
    return value;
  }
  function set(n) {
    value = normalizeInput(n);
  }
  function add(n) {
    value += normalizeInput(n);
  }
  function subtract(n) {
    value -= normalizeInput(n);
  }
  function normalizeInput(n) {
    return isNumber(n) ? n : n.get();
  }
  const self = {
    get,
    set,
    add,
    subtract
  };
  return self;
}
function Translate(axis, direction, container) {
  const translate = axis.scroll === 'x' ? x : y;
  const containerStyle = container.style;
  let disabled = false;
  function x(n) {
    return `translate3d(${n}px,0px,0px)`;
  }
  function y(n) {
    return `translate3d(0px,${n}px,0px)`;
  }
  function to(target) {
    if (disabled) return;
    containerStyle.transform = translate(direction.apply(target));
  }
  function toggleActive(active) {
    disabled = !active;
  }
  function clear() {
    if (disabled) return;
    containerStyle.transform = '';
    if (!container.getAttribute('style')) container.removeAttribute('style');
  }
  const self = {
    clear,
    to,
    toggleActive
  };
  return self;
}
function SlideLooper(axis, direction, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, offsetLocation, slides) {
  const ascItems = arrayKeys(slideSizesWithGaps);
  const descItems = arrayKeys(slideSizesWithGaps).reverse();
  const loopPoints = startPoints().concat(endPoints());
  function removeSlideSizes(indexes, from) {
    return indexes.reduce((a, i) => {
      return a - slideSizesWithGaps[i];
    }, from);
  }
  function slidesInGap(indexes, gap) {
    return indexes.reduce((a, i) => {
      const remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }
  function findLoopPoints(indexes, edge) {
    const isStartEdge = edge === 'start';
    const offset = isStartEdge ? -contentSize : contentSize;
    const slideBounds = slidesInView.findSlideBounds([offset]);
    return indexes.map(index => {
      const initial = isStartEdge ? 0 : -contentSize;
      const altered = isStartEdge ? contentSize : 0;
      const bounds = slideBounds.filter(b => b.index === index)[0];
      const loopPoint = bounds[isStartEdge ? 'end' : 'start'];
      return {
        index,
        slideLocation: Vector1D(-1),
        translate: Translate(axis, direction, slides[index]),
        target: () => offsetLocation.get() > loopPoint ? initial : altered
      };
    });
  }
  function startPoints() {
    const gap = scrollSnaps[0] - 1;
    const indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, 'end');
  }
  function endPoints() {
    const gap = viewSize - scrollSnaps[0] - 1;
    const indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, 'start');
  }
  function canLoop() {
    return loopPoints.every(({
      index
    }) => {
      const otherIndexes = ascItems.filter(i => i !== index);
      return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
    });
  }
  function loop() {
    loopPoints.forEach(loopPoint => {
      const {
        target,
        translate,
        slideLocation
      } = loopPoint;
      const shiftLocation = target();
      if (shiftLocation === slideLocation.get()) return;
      translate.to(shiftLocation);
      slideLocation.set(shiftLocation);
    });
  }
  function clear() {
    loopPoints.forEach(loopPoint => loopPoint.translate.clear());
  }
  const self = {
    canLoop,
    clear,
    loop,
    loopPoints
  };
  return self;
}
function SlidesHandler(container, eventHandler) {
  let mutationObserver;
  let destroyed = false;
  function init(emblaApi, watchSlides) {
    if (!watchSlides) return;
    function defaultCallback(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          emblaApi.reInit();
          eventHandler.emit('slidesChanged');
          break;
        }
      }
    }
    mutationObserver = new MutationObserver(mutations => {
      if (destroyed) return;
      if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
        defaultCallback(mutations);
      }
    });
    mutationObserver.observe(container, {
      childList: true
    });
  }
  function destroy() {
    if (mutationObserver) mutationObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold) {
  const {
    removeOffset,
    constrain
  } = limit;
  const roundingSafety = 0.5;
  const cachedOffsets = loop ? [0, contentSize, -contentSize] : [0];
  const cachedBounds = findSlideBounds(cachedOffsets, inViewThreshold);
  function findSlideThresholds(threshold) {
    const slideThreshold = threshold || 0;
    return slideSizes.map(slideSize => {
      const thresholdLimit = Limit(roundingSafety, slideSize - roundingSafety);
      return thresholdLimit.constrain(slideSize * slideThreshold);
    });
  }
  function findSlideBounds(offsets, threshold) {
    const slideOffsets = offsets || cachedOffsets;
    const slideThresholds = findSlideThresholds(threshold);
    return slideOffsets.reduce((list, offset) => {
      const bounds = snaps.map((snap, index) => ({
        start: snap - slideSizes[index] + slideThresholds[index] + offset,
        end: snap + viewSize - slideThresholds[index] + offset,
        index
      }));
      return list.concat(bounds);
    }, []);
  }
  function check(location, bounds) {
    const limitedLocation = loop ? removeOffset(location) : constrain(location);
    const slideBounds = bounds || cachedBounds;
    return slideBounds.reduce((list, slideBound) => {
      const {
        index,
        start,
        end
      } = slideBound;
      const inList = list.includes(index);
      const inView = start < limitedLocation && end > limitedLocation;
      return !inList && inView ? list.concat([index]) : list;
    }, []);
  }
  const self = {
    check,
    findSlideBounds
  };
  return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
  const {
    measureSize,
    startEdge,
    endEdge
  } = axis;
  const withEdgeGap = slideRects[0] && readEdgeGap;
  const startGap = measureStartGap();
  const endGap = measureEndGap();
  const slideSizes = slideRects.map(measureSize);
  const slideSizesWithGaps = measureWithGaps();
  function measureStartGap() {
    if (!withEdgeGap) return 0;
    const slideRect = slideRects[0];
    return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
  }
  function measureEndGap() {
    if (!withEdgeGap) return 0;
    const style = ownerWindow.getComputedStyle(arrayLast(slides));
    return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
  }
  function measureWithGaps() {
    return slideRects.map((rect, index, rects) => {
      const isFirst = !index;
      const isLast = index === arrayLastIndex(rects);
      if (isFirst) return slideSizes[index] + startGap;
      if (isLast) return slideSizes[index] + endGap;
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(mathAbs);
  }
  const self = {
    slideSizes,
    slideSizesWithGaps
  };
  return self;
}
function SlidesToScroll(viewSize, slideSizesWithGaps, slidesToScroll) {
  const groupByNumber = isNumber(slidesToScroll);
  function byNumber(array, groupSize) {
    return arrayKeys(array).filter(i => i % groupSize === 0).map(i => array.slice(i, i + groupSize));
  }
  function bySize(array) {
    return arrayKeys(array).reduce((groupSizes, i) => {
      const chunk = slideSizesWithGaps.slice(arrayLast(groupSizes), i + 1);
      const chunkSize = chunk.reduce((a, s) => a + s, 0);
      return !i || chunkSize > viewSize ? groupSizes.concat(i) : groupSizes;
    }, []).map((start, i, groupSizes) => array.slice(start, groupSizes[i + 1]));
  }
  function groupSlides(array) {
    return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
  }
  const self = {
    groupSlides
  };
  return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler, animations) {
  // Options
  const {
    align,
    axis: scrollAxis,
    direction: contentDirection,
    startIndex,
    inViewThreshold,
    loop,
    duration,
    dragFree,
    dragThreshold,
    slidesToScroll: groupSlides,
    skipSnaps,
    containScroll
  } = options;
  // Measurements
  const containerRect = container.getBoundingClientRect();
  const slideRects = slides.map(slide => slide.getBoundingClientRect());
  const direction = Direction(contentDirection);
  const axis = Axis(scrollAxis, contentDirection);
  const viewSize = axis.measureSize(containerRect);
  const percentOfView = PercentOfView(viewSize);
  const alignment = Alignment(align, viewSize);
  const containSnaps = !loop && !!containScroll;
  const readEdgeGap = loop || !!containScroll;
  const {
    slideSizes,
    slideSizesWithGaps
  } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
  const slidesToScroll = SlidesToScroll(viewSize, slideSizesWithGaps, groupSlides);
  const {
    snaps,
    snapsAligned
  } = ScrollSnaps(axis, alignment, containerRect, slideRects, slideSizesWithGaps, slidesToScroll, containSnaps);
  const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  const {
    snapsContained
  } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll);
  const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
  const {
    limit
  } = ScrollLimit(contentSize, scrollSnaps, loop);
  // Indexes
  const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  const indexPrevious = index.clone();
  const slideIndexes = arrayKeys(slides);
  // Animation
  const update = ({
    dragHandler,
    scrollBody,
    scrollBounds,
    eventHandler,
    animation,
    options: {
      loop
    }
  }) => {
    const pointerDown = dragHandler.pointerDown();
    if (!loop) scrollBounds.constrain(pointerDown);
    const hasSettled = scrollBody.seek().settled();
    if (hasSettled && !pointerDown) {
      animation.stop();
      eventHandler.emit('settle');
    }
    if (!hasSettled) eventHandler.emit('scroll');
  };
  const render = ({
    scrollBody,
    translate,
    location,
    offsetLocation,
    scrollLooper,
    slideLooper,
    options: {
      loop
    }
  }, lagOffset) => {
    const velocity = scrollBody.velocity();
    offsetLocation.set(location.get() - velocity + velocity * lagOffset);
    if (loop) {
      scrollLooper.loop(scrollBody.direction());
      slideLooper.loop();
    }
    translate.to(offsetLocation.get());
  };
  const animation = {
    start: () => animations.start(engine),
    stop: () => animations.stop(engine),
    update: () => update(engine),
    render: lagOffset => render(engine, lagOffset)
  };
  // Shared
  const friction = 0.68;
  const startLocation = scrollSnaps[index.get()];
  const location = Vector1D(startLocation);
  const offsetLocation = Vector1D(startLocation);
  const target = Vector1D(startLocation);
  const scrollBody = ScrollBody(location, target, duration, friction);
  const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  const scrollTo = ScrollTo(animation, index, indexPrevious, scrollTarget, scrollBody, target, eventHandler);
  const slidesInView = SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold);
  // Engine
  const engine = {
    ownerDocument,
    ownerWindow,
    eventHandler,
    containerRect,
    slideRects,
    animation,
    axis,
    direction,
    dragHandler: DragHandler(axis, direction, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction),
    eventStore: EventStore(),
    percentOfView,
    index,
    indexPrevious,
    limit,
    location,
    offsetLocation,
    options,
    resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis),
    scrollBody,
    scrollBounds: ScrollBounds(limit, location, target, scrollBody, percentOfView),
    scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location, offsetLocation, target]),
    scrollProgress: ScrollProgress(limit),
    scrollSnaps,
    scrollTarget,
    scrollTo,
    slideLooper: SlideLooper(axis, direction, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, offsetLocation, slides),
    slidesHandler: SlidesHandler(container, eventHandler),
    slidesInView,
    slideIndexes,
    slidesToScroll,
    target,
    translate: Translate(axis, direction, container)
  };
  return engine;
}
function Animations(ownerWindow) {
  const timeStep = 1000 / 60;
  let engines = [];
  let lastTimeStamp = null;
  let lag = 0;
  let animationFrame = 0;
  function animate(timeStamp) {
    if (!lastTimeStamp) lastTimeStamp = timeStamp;
    const elapsed = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;
    lag += elapsed;
    while (lag >= timeStep) {
      engines.forEach(({
        animation
      }) => animation.update());
      lag -= timeStep;
    }
    const lagOffset = mathAbs(lag / timeStep);
    engines.forEach(({
      animation
    }) => animation.render(lagOffset));
    if (animationFrame) ownerWindow.requestAnimationFrame(animate);
  }
  function start(engine) {
    if (!engines.includes(engine)) engines.push(engine);
    if (animationFrame) return;
    animationFrame = ownerWindow.requestAnimationFrame(animate);
  }
  function stop(engine) {
    engines = engines.filter(e => e !== engine);
    if (engines.length) return;
    ownerWindow.cancelAnimationFrame(animationFrame);
    lastTimeStamp = null;
    lag = 0;
    animationFrame = 0;
  }
  function reset() {
    lastTimeStamp = null;
    lag = 0;
  }
  const self = {
    start,
    stop,
    reset,
    window: ownerWindow
  };
  return self;
}
function EventHandler() {
  const listeners = {};
  let api;
  function init(emblaApi) {
    api = emblaApi;
  }
  function getListeners(evt) {
    return listeners[evt] || [];
  }
  function emit(evt) {
    getListeners(evt).forEach(e => e(api, evt));
    return self;
  }
  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }
  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter(e => e !== cb);
    return self;
  }
  const self = {
    init,
    emit,
    off,
    on
  };
  return self;
}
const defaultOptions = {
  align: 'center',
  axis: 'x',
  container: null,
  slides: null,
  containScroll: 'trimSnaps',
  direction: 'ltr',
  slidesToScroll: 1,
  breakpoints: {},
  dragFree: false,
  dragThreshold: 10,
  inViewThreshold: 0,
  loop: false,
  skipSnaps: false,
  duration: 25,
  startIndex: 0,
  active: true,
  watchDrag: true,
  watchResize: true,
  watchSlides: true
};
function OptionsHandler(ownerWindow) {
  function mergeOptions(optionsA, optionsB) {
    return objectsMergeDeep(optionsA, optionsB || {});
  }
  function optionsAtMedia(options) {
    const optionsAtMedia = options.breakpoints || {};
    const matchedMediaOptions = objectKeys(optionsAtMedia).filter(media => ownerWindow.matchMedia(media).matches).map(media => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {});
    return mergeOptions(options, matchedMediaOptions);
  }
  function optionsMediaQueries(optionsList) {
    return optionsList.map(options => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
  }
  const self = {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  };
  return self;
}
function PluginsHandler(optionsHandler) {
  let activePlugins = [];
  function init(plugins, emblaApi) {
    activePlugins = plugins.filter(({
      options
    }) => optionsHandler.optionsAtMedia(options).active !== false);
    activePlugins.forEach(plugin => plugin.init(emblaApi, optionsHandler));
    return plugins.reduce((map, plugin) => Object.assign(map, {
      [plugin.name]: plugin
    }), {});
  }
  function destroy() {
    activePlugins = activePlugins.filter(plugin => plugin.destroy());
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
  const ownerDocument = root.ownerDocument;
  const ownerWindow = ownerDocument.defaultView;
  const optionsHandler = OptionsHandler(ownerWindow);
  const pluginsHandler = PluginsHandler(optionsHandler);
  const mediaHandlers = EventStore();
  const documentVisibleHandler = EventStore();
  const eventHandler = EventHandler();
  const {
    animationRealms
  } = EmblaCarousel;
  const {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  } = optionsHandler;
  const {
    on,
    off,
    emit
  } = eventHandler;
  const reInit = reActivate;
  let destroyed = false;
  let engine;
  let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
  let options = mergeOptions(optionsBase);
  let pluginList = [];
  let pluginApis;
  let container;
  let slides;
  function storeElements() {
    const {
      container: userContainer,
      slides: userSlides
    } = options;
    const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
    container = customContainer || root.children[0];
    const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
    slides = [].slice.call(customSlides || container.children);
  }
  function createEngine(options, animations) {
    const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler, animations);
    if (options.loop && !engine.slideLooper.canLoop()) {
      const optionsWithoutLoop = Object.assign({}, options, {
        loop: false
      });
      return createEngine(optionsWithoutLoop, animations);
    }
    return engine;
  }
  function activate(withOptions, withPlugins) {
    if (destroyed) return;
    const animationRealm = animationRealms.find(a => a.window === ownerWindow);
    const animations = animationRealm || Animations(ownerWindow);
    if (!animationRealm) animationRealms.push(animations);
    optionsBase = mergeOptions(optionsBase, withOptions);
    options = optionsAtMedia(optionsBase);
    pluginList = withPlugins || pluginList;
    storeElements();
    engine = createEngine(options, animations);
    optionsMediaQueries([optionsBase, ...pluginList.map(({
      options
    }) => options)]).forEach(query => mediaHandlers.add(query, 'change', reActivate));
    if (!options.active) return;
    engine.translate.to(engine.location.get());
    engine.eventHandler.init(self);
    engine.resizeHandler.init(self, options.watchResize);
    engine.slidesHandler.init(self, options.watchSlides);
    documentVisibleHandler.add(ownerDocument, 'visibilitychange', () => {
      if (ownerDocument.hidden) animations.reset();
    });
    if (engine.options.loop) engine.slideLooper.loop();
    if (container.offsetParent && slides.length) {
      engine.dragHandler.init(self, options.watchDrag);
    }
    pluginApis = pluginsHandler.init(pluginList, self);
  }
  function reActivate(withOptions, withPlugins) {
    const startIndex = selectedScrollSnap();
    deActivate();
    activate(mergeOptions({
      startIndex
    }, withOptions), withPlugins);
    eventHandler.emit('reInit');
  }
  function deActivate() {
    engine.dragHandler.destroy();
    engine.animation.stop();
    engine.eventStore.clear();
    engine.translate.clear();
    engine.slideLooper.clear();
    engine.resizeHandler.destroy();
    engine.slidesHandler.destroy();
    pluginsHandler.destroy();
    mediaHandlers.clear();
    documentVisibleHandler.clear();
  }
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    mediaHandlers.clear();
    deActivate();
    eventHandler.emit('destroy');
  }
  function slidesInView(target) {
    const location = engine[target ? 'target' : 'location'].get();
    const type = options.loop ? 'removeOffset' : 'constrain';
    return engine.slidesInView.check(engine.limit[type](location));
  }
  function slidesNotInView(target) {
    const inView = slidesInView(target);
    return engine.slideIndexes.filter(index => !inView.includes(index));
  }
  function scrollTo(index, jump, direction) {
    if (!options.active || destroyed) return;
    engine.scrollBody.useBaseFriction().useDuration(jump ? 0 : options.duration);
    engine.scrollTo.index(index, direction || 0);
  }
  function scrollNext(jump) {
    const next = engine.index.add(1).get();
    scrollTo(next, jump === true, -1);
  }
  function scrollPrev(jump) {
    const prev = engine.index.add(-1).get();
    scrollTo(prev, jump === true, 1);
  }
  function canScrollNext() {
    const next = engine.index.add(1).get();
    return next !== selectedScrollSnap();
  }
  function canScrollPrev() {
    const prev = engine.index.add(-1).get();
    return prev !== selectedScrollSnap();
  }
  function scrollSnapList() {
    return engine.scrollSnaps.map(engine.scrollProgress.get);
  }
  function scrollProgress() {
    return engine.scrollProgress.get(engine.location.get());
  }
  function selectedScrollSnap() {
    return engine.index.get();
  }
  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }
  function plugins() {
    return pluginApis;
  }
  function internalEngine() {
    return engine;
  }
  function rootNode() {
    return root;
  }
  function containerNode() {
    return container;
  }
  function slideNodes() {
    return slides;
  }
  const self = {
    canScrollNext,
    canScrollPrev,
    containerNode,
    internalEngine,
    destroy,
    off,
    on,
    emit,
    plugins,
    previousScrollSnap,
    reInit,
    rootNode,
    scrollNext,
    scrollPrev,
    scrollProgress,
    scrollSnapList,
    scrollTo,
    selectedScrollSnap,
    slideNodes,
    slidesInView,
    slidesNotInView
  };
  activate(userOptions, userPlugins);
  setTimeout(() => eventHandler.emit('init'), 0);
  return self;
}
EmblaCarousel.animationRealms = [];
EmblaCarousel.globalOptions = undefined;
},{}],"js/plugins.js":[function(require,module,exports) {
"use strict";

var _emblaCarousel = _interopRequireDefault(require("embla-carousel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function noop() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};
  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();
var emblaNoe = document.querySelector('.embla');
var options = {
  loop: false
};
var emblaApi = (0, _emblaCarousel.default)(emblaNode, options);
console.log(emblaApi.slideNodes()); // Access API
},{"embla-carousel":"node_modules/embla-carousel/embla-carousel.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/plugins.js"], null)
//# sourceMappingURL=/plugins.7f97feee.js.map