(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory)
    } else if (typeof exports !== "undefined") {
        factory(exports)
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.bodyScrollLock = mod.exports
    }
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i]
            }
            return arr2
        } else {
            return Array.from(arr)
        }
    }
    var hasPassiveEvents = false;
    if (typeof window !== "undefined") {
        var passiveTestOptions = {
            get passive() {
                hasPassiveEvents = true;
                return undefined
            }
        };
        window.addEventListener("testPassive", null, passiveTestOptions);
        window.removeEventListener("testPassive", null, passiveTestOptions)
    }
    var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
    var locks = [];
    var documentListenerAdded = false;
    var initialClientY = -1;
    var previousBodyOverflowSetting = void 0;
    var previousBodyPaddingRight = void 0;
    var allowTouchMove = function allowTouchMove(el) {
        return locks.some(function(lock) {
            if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
                return true
            }
            return false
        })
    };
    var preventDefault = function preventDefault(rawEvent) {
        var e = rawEvent || window.event;
        if (allowTouchMove(e.target)) {
            return true
        }
        if (e.touches.length > 1) return true;
        if (e.preventDefault) e.preventDefault();
        return false
    };
    var setOverflowHidden = function setOverflowHidden(options) {
        setTimeout(function() {
            if (previousBodyPaddingRight === undefined) {
                var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
                var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
                if (_reserveScrollBarGap && scrollBarGap > 0) {
                    previousBodyPaddingRight = document.body.style.paddingRight;
                    document.body.style.paddingRight = scrollBarGap + "px"
                }
            }
            if (previousBodyOverflowSetting === undefined) {
                previousBodyOverflowSetting = document.body.style.overflow;
                document.body.style.overflow = "hidden"
            }
        })
    };
    var restoreOverflowSetting = function restoreOverflowSetting() {
        setTimeout(function() {
            if (previousBodyPaddingRight !== undefined) {
                document.body.style.paddingRight = previousBodyPaddingRight;
                previousBodyPaddingRight = undefined
            }
            if (previousBodyOverflowSetting !== undefined) {
                document.body.style.overflow = previousBodyOverflowSetting;
                previousBodyOverflowSetting = undefined
            }
        })
    };
    var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
        return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false
    };
    var handleScroll = function handleScroll(event, targetElement) {
        var clientY = event.targetTouches[0].clientY - initialClientY;
        if (allowTouchMove(event.target)) {
            return false
        }
        if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
            return preventDefault(event)
        }
        if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
            return preventDefault(event)
        }
        event.stopPropagation();
        return true
    };
    var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {
        if (isIosDevice) {
            if (!targetElement) {
                console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                return
            }
            if (targetElement && !locks.some(function(lock) {
                    return lock.targetElement === targetElement
                })) {
                var lock = {
                    targetElement: targetElement,
                    options: options || {}
                };
                locks = [].concat(_toConsumableArray(locks), [lock]);
                targetElement.ontouchstart = function(event) {
                    if (event.targetTouches.length === 1) {
                        initialClientY = event.targetTouches[0].clientY
                    }
                };
                targetElement.ontouchmove = function(event) {
                    if (event.targetTouches.length === 1) {
                        handleScroll(event, targetElement)
                    }
                };
                if (!documentListenerAdded) {
                    document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                        passive: false
                    } : undefined);
                    documentListenerAdded = true
                }
            }
        } else {
            setOverflowHidden(options);
            var _lock = {
                targetElement: targetElement,
                options: options || {}
            };
            locks = [].concat(_toConsumableArray(locks), [_lock])
        }
    };
    var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
        if (isIosDevice) {
            locks.forEach(function(lock) {
                lock.targetElement.ontouchstart = null;
                lock.targetElement.ontouchmove = null
            });
            if (documentListenerAdded) {
                document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                    passive: false
                } : undefined);
                documentListenerAdded = false
            }
            locks = [];
            initialClientY = -1
        } else {
            restoreOverflowSetting();
            locks = []
        }
    };
    var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {
        if (isIosDevice) {
            if (!targetElement) {
                console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                return
            }
            targetElement.ontouchstart = null;
            targetElement.ontouchmove = null;
            locks = locks.filter(function(lock) {
                return lock.targetElement !== targetElement
            });
            if (documentListenerAdded && locks.length === 0) {
                document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? {
                    passive: false
                } : undefined);
                documentListenerAdded = false
            }
        } else if (locks.length === 1 && locks[0].targetElement === targetElement) {
            restoreOverflowSetting();
            locks = []
        } else {
            locks = locks.filter(function(lock) {
                return lock.targetElement !== targetElement
            })
        }
    }
});