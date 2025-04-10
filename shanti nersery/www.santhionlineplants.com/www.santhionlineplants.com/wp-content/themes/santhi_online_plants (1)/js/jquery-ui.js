/*! jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
! function(t, e) {
    var i, s, n = 0,
        a = /^ui-id-\d+$/;

    function o(e, i) {
        var s, n, a, o = e.nodeName.toLowerCase();
        return "area" === o ? (n = (s = e.parentNode).name, !!e.href && !!n && "map" === s.nodeName.toLowerCase() && !!(a = t("img[usemap=#" + n + "]")[0]) && r(a)) : (/input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o && e.href || i) && r(e)
    }

    function r(e) {
        return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, !t.ui.version && (t.extend(t.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        _focus: t.fn.focus,
        focus: function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var s = this;
                setTimeout(function() {
                    t(s).focus(), i && i.call(s)
                }, e)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var s, n, a = t(this[0]); a.length && a[0] !== document;) {
                    if (("absolute" === (s = a.css("position")) || "relative" === s || "fixed" === s) && (n = parseInt(a.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return o(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"),
                s = isNaN(i);
            return (s || i >= 0) && o(e, !s)
        }
    }), t(function() {
        var e = document.body,
            i = e.appendChild(i = document.createElement("div"));
        i.offsetHeight, t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            a = s.toLowerCase(),
            o = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };

        function r(e, i, s, a) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        t.fn["inner" + s] = function(i) {
            return i === e ? o["inner" + s].call(this) : this.each(function() {
                t(this).css(a, r(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? o["outer" + s].call(this, e) : this.each(function() {
                t(this).css(a, r(this, e, !0, i) + "px")
            })
        }
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (i = t.fn.removeData, function(e) {
        return arguments.length ? i.call(this, t.camelCase(e)) : i.call(this)
    })), s = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [], t.ui.ie = !!s.length, t.ui.ie6 = 6 === parseFloat(s[1], 10), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n, a = t.ui[e].prototype;
                for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; s < n.length; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        contains: t.contains,
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        isOverAxis: function(t, e, i) {
            return t > e && t < e + i
        },
        isOver: function(e, i, s, n, a, o) {
            return t.ui.isOverAxis(e, s, a) && t.ui.isOverAxis(i, n, o)
        }
    }))
}(jQuery),
function(t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (a) {}
        n(e)
    }, t.widget = function(e, i, s) {
        var n, a, o, r, h = e.split(".")[0];
        n = h + "-" + (e = e.split(".")[1]), s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
            return !!t.data(e, n)
        }, t[h] = t[h] || {}, a = t[h][e], o = t[h][e] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, t.extend(o, a, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (r = new i).options = t.widget.extend({}, r.options), t.each(s, function(e, n) {
            if (t.isFunction(n)) {
                var a, o;
                s[e] = (a = function() {
                    return i.prototype[e].apply(this, arguments)
                }, o = function(t) {
                    return i.prototype[e].apply(this, t)
                }, function() {
                    var t, e = this._super,
                        i = this._superApply;
                    return this._super = a, this._superApply = o, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
                })
            }
        }), o.prototype = t.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix : e
        }, s, {
            constructor: o,
            namespace: h,
            widgetName: e,
            widgetBaseClass: n,
            widgetFullName: n
        }), a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o)
    }, t.widget.extend = function(i) {
        for (var n, a, o = s.call(arguments, 1), r = 0, h = o.length; r < h; r++)
            for (n in o[r]) a = o[r][n], o[r].hasOwnProperty(n) && a !== e && (t.isPlainObject(a) ? i[n] = t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], a) : t.widget.extend({}, a) : i[n] = a);
        return i
    }, t.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        t.fn[i] = function(o) {
            var r = "string" == typeof o,
                h = s.call(arguments, 1),
                l = this;
            return o = !r && h.length ? t.widget.extend.apply(null, [o].concat(h)) : o, r ? this.each(function() {
                var s, n = t.data(this, a);
                return n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (s = n[o].apply(n, h)) !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : void 0 : t.error("no such method '" + o + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + o + "'")
            }) : this.each(function() {
                var e = t.data(this, a);
                e ? e.option(o || {})._init() : t.data(this, a, new n(o, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetName, this), t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, o, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i) {
                if (r = {}, i = (n = i.split(".")).shift(), n.length) {
                    for (o = 0, a = r[i] = t.widget.extend({}, this.options[i]); o < n.length - 1; o++) a[n[o]] = a[n[o]] || {}, a = a[n[o]];
                    if (i = n.pop(), s === e) return e === a[i] ? null : a[i];
                    a[i] = s
                } else {
                    if (s === e) return e === this.options[i] ? null : this.options[i];
                    r[i] = s
                }
            }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, s) {
            var n, a = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, o) {
                function r() {
                    if (!(!e && (!0 === a.options.disabled || t(this).hasClass("ui-state-disabled")))) return ("string" == typeof o ? a[o] : o).apply(a, arguments)
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                var h = s.match(/^(\w+)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    c = h[2];
                c ? n.delegate(c, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, a, o = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(t.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof(n = n || {}) && (n = {
                duration: n
            }), o = !t.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && t.effects && (t.effects.effect[r] || !1 !== t.uiBackCompat && t.effects[r]) ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                t(this)[e](), a && a.call(s[0]), i()
            })
        }
    }), !1 !== t.uiBackCompat && (t.Widget.prototype._getCreateOptions = function() {
        return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup(function(t) {
        i = !1
    }), t.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var s = this,
                    n = 1 === e.which,
                    a = "string" == typeof this.options.cancel && !!e.target.nodeName && t(e.target).closest(this.options.cancel).length;
                return !(n && !a && this._mouseCapture(e)) || ((this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted)) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0))
            }
        },
        _mouseMove: function(e) {
            return !t.ui.ie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(t) {
            return this.mouseDelayMet
        },
        _mouseStart: function(t) {},
        _mouseDrag: function(t) {},
        _mouseStop: function(t) {},
        _mouseCapture: function(t) {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(e), !!this.handle && (t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return (this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), !1 === this._trigger("start", e)) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
            for (var s = this.element[0], n = !1; s && (s = s.parentNode);) s == document && (n = !0);
            if (!n && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var a = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== a._trigger("stop", e) && a._clear()
                })
            } else !1 !== this._trigger("stop", e) && this._clear();
            return !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            var i = !this.options.handle || !t(this.options.handle, this.element).length;
            return t(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == e.target && (i = !0)
            }), i
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] == this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" != this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
            else {
                var i = t(e.containment),
                    s = i[0];
                if (!s) return;
                i.offset();
                var n = "hidden" != t(s).css("overflow");
                this.containment = [(parseInt(t(s).css("borderLeftWidth"), 10) || 0) + (parseInt(t(s).css("paddingLeft"), 10) || 0), (parseInt(t(s).css("borderTopWidth"), 10) || 0) + (parseInt(t(s).css("paddingTop"), 10) || 0), (n ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(t(s).css("borderLeftWidth"), 10) || 0) - (parseInt(t(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(t(s).css("borderTopWidth"), 10) || 0) - (parseInt(t(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1;
            this.options;
            var n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName),
                o = e.pageX,
                r = e.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        var h = this.relative_container.offset();
                        i = [this.containment[0] + h.left, this.containment[1] + h.top, this.containment[2] + h.left, this.containment[3] + h.top]
                    } else i = this.containment;
                    e.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (r = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (r = i[3] + this.offset.click.top)
                }
                if (s.grid) {
                    var l = s.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY;
                    r = i && (l - this.offset.click.top < i[1] || l - this.offset.click.top > i[3]) ? l - this.offset.click.top < i[1] ? l + s.grid[1] : l - s.grid[1] : l;
                    var c = s.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX;
                    o = i && (c - this.offset.click.left < i[0] || c - this.offset.click.left > i[2]) ? c - this.offset.click.left < i[0] ? c + s.grid[0] : c - s.grid[0] : c
                }
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function(t) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                a = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, a))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = this;
            t.each(s.sortables, function(a) {
                var o = !1,
                    r = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this != r && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(r.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i) {
            var s = t("body"),
                n = t(this).data("draggable").options;
            s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(e, i) {
            var s = t(this).data("draggable");
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName && (s.overflowOffset = s.scrollParent.offset())
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                a = !1;
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName ? ((!n.axis || "x" != n.axis) && (s.overflowOffset.top + s.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? s.scrollParent[0].scrollTop = a = s.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (s.scrollParent[0].scrollTop = a = s.scrollParent[0].scrollTop - n.scrollSpeed)), (!n.axis || "y" != n.axis) && (s.overflowOffset.left + s.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? s.scrollParent[0].scrollLeft = a = s.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (s.scrollParent[0].scrollLeft = a = s.scrollParent[0].scrollLeft - n.scrollSpeed))) : ((!n.axis || "x" != n.axis) && (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), (!n.axis || "y" != n.axis) && (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), !1 !== a && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options;
            s.snapElements = [], t(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this != s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i) {
            for (var s = t(this).data("draggable"), n = s.options, a = n.snapTolerance, o = i.offset.left, r = o + s.helperProportions.width, h = i.offset.top, l = h + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
                var u = s.snapElements[c].left,
                    d = u + s.snapElements[c].width,
                    p = s.snapElements[c].top,
                    f = p + s.snapElements[c].height;
                if (!(u - a < o && o < d + a && p - a < h && h < f + a || u - a < o && o < d + a && p - a < l && l < f + a || u - a < r && r < d + a && p - a < h && h < f + a || u - a < r && r < d + a && p - a < l && l < f + a)) {
                    s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = !1;
                    continue
                }
                if ("inner" != n.snapMode) {
                    var g = Math.abs(p - l) <= a,
                        m = Math.abs(f - h) <= a,
                        v = Math.abs(u - r) <= a,
                        b = Math.abs(d - o) <= a;
                    g && (i.position.top = s._convertPositionTo("relative", {
                        top: p - s.helperProportions.height,
                        left: 0
                    }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                        top: f,
                        left: 0
                    }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: u - s.helperProportions.width
                    }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: d
                    }).left - s.margins.left)
                }
                var $ = g || m || v || b;
                if ("outer" != n.snapMode) {
                    var g = Math.abs(p - h) <= a,
                        m = Math.abs(f - l) <= a,
                        v = Math.abs(u - o) <= a,
                        b = Math.abs(d - r) <= a;
                    g && (i.position.top = s._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                        top: f - s.helperProportions.height,
                        left: 0
                    }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: u
                    }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: d - s.helperProportions.width
                    }).left - s.margins.left)
                }!s.snapElements[c].snapping && (g || m || v || b || $) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = g || m || v || b || $
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i) {
            var s = t(this).data("draggable").options,
                n = t.makeArray(t(s.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            if (n.length) {
                var a = parseInt(n[0].style.zIndex) || 0;
                t(n).each(function(t) {
                    this.style.zIndex = a + t
                }), this[0].style.zIndex = a + n.length
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current;
            if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
            var n = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "droppable");
                if (e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance)) return n = !0, !1
            }), !n && !!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element)
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var n = (e.positionAbs || e.position.absolute).left,
            a = n + e.helperProportions.width,
            o = (e.positionAbs || e.position.absolute).top,
            r = o + e.helperProportions.height,
            h = i.offset.left,
            l = h + i.proportions.width,
            c = i.offset.top,
            u = c + i.proportions.height;
        switch (s) {
            case "fit":
                return h <= n && a <= l && c <= o && r <= u;
            case "intersect":
                return h < n + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < l && c < o + e.helperProportions.height / 2 && r - e.helperProportions.height / 2 < u;
            case "pointer":
                var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                    p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
                return t.ui.isOver(p, d, c, h, i.proportions.height, i.proportions.width);
            case "touch":
                return (o >= c && o <= u || r >= c && r <= u || o < c && r > u) && (n >= h && n <= l || a >= h && a <= l || n < h && a > l);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s = t.ui.ddmanager.droppables[e.options.scope] || [],
                n = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            droppablesLoop: for (var o = 0; o < s.length; o++)
                if (!s[o].options.disabled && (!e || s[o].accept.call(s[o].element[0], e.currentItem || e.element))) {
                    for (var r = 0; r < a.length; r++)
                        if (a[r] == s[o].element[0]) {
                            s[o].proportions.height = 0;
                            continue droppablesLoop
                        }
                    s[o].visible = "none" != s[o].element.css("display"), s[o].visible && ("mousedown" == n && s[o]._activate.call(s[o], i), s[o].offset = s[o].element.offset(), s[o].proportions = {
                        width: s[o].element[0].offsetWidth,
                        height: s[o].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n = t.ui.intersect(e, this, this.options.tolerance),
                        a = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                    if (a) {
                        if (this.options.greedy) {
                            var o = this.options.scope,
                                r = this.element.parents(":data(droppable)").filter(function() {
                                    return t.data(this, "droppable").options.scope === o
                                });
                            r.length && ((s = t.data(r[0], "droppable")).greedyChild = "isover" == a ? 1 : 0)
                        }
                        s && "isover" == a && (s.isover = 0, s.isout = 1, s._out.call(s, i)), this[a] = 1, this["isout" == a ? "isover" : "isout"] = 0, this["isover" == a ? "_over" : "_out"].call(this, i), s && "isout" == a && (s.isout = 0, s.isover = 1, s._over.call(s, i))
                    }
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var e = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var s = this.handles.split(",");
                this.handles = {};
                for (var n = 0; n < s.length; n++) {
                    var a = t.trim(s[n]),
                        o = t('<div class="ui-resizable-handle ui-resizable-' + a + '"></div>');
                    o.css({
                        zIndex: i.zIndex
                    }), "se" == a && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[a] = ".ui-resizable-" + a, this.element.append(o)
                }
            }
            this._renderAxis = function(e) {
                for (var i in e = e || this.element, this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var s = t(this.handles[i], this.element),
                            n = 0;
                        n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth();
                        var a = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        e.css(a, n), this._proportionallyResize()
                    }
                    if (!t(this.handles[i]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se"
                }
            }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
            }).mouseleave(function() {
                i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                }).insertAfter(i), i.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i = !1;
            for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(e) {
            var s = this.options,
                n = this.element.position(),
                a = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (a.is(".ui-draggable") || /absolute/.test(a.css("position"))) && a.css({
                position: "absolute",
                top: n.top,
                left: n.left
            }), this._renderProxy();
            var o = i(this.helper.css("left")),
                r = i(this.helper.css("top"));
            s.containment && (o += t(s.containment).scrollLeft() || 0, r += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: o,
                top: r
            }, this.size = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalPosition = {
                left: o,
                top: r
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var h = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == h ? this.axis + "-resize" : h), a.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(t) {
            var e = this.helper,
                i = (this.options, this.originalMousePosition),
                s = this.axis,
                n = t.pageX - i.left || 0,
                a = t.pageY - i.top || 0,
                o = this._change[s];
            if (!o) return !1;
            var r = o.apply(this, [t, n, a]);
            return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (r = this._updateRatio(r, t)), r = this._respectSize(r, t), this._propagate("resize", t), e.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(r), this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i = this.options,
                s = this;
            if (this._helper) {
                var n = this._proportionallyResizeElements,
                    a = n.length && /textarea/i.test(n[0].nodeName),
                    o = a && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height,
                    r = a ? 0 : s.sizeDiff.width,
                    h = {
                        width: s.helper.width() - r,
                        height: s.helper.height() - o
                    },
                    l = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                    c = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(h, {
                    top: c,
                    left: l
                })), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, a, o, r = this.options;
            o = {
                minWidth: s(r.minWidth) ? r.minWidth : 0,
                maxWidth: s(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: s(r.minHeight) ? r.minHeight : 0,
                maxHeight: s(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), a < o.maxHeight && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.options, this.offset = this.helper.offset(), s(t.left) && (this.position.left = t.left), s(t.top) && (this.position.top = t.top), s(t.height) && (this.size.height = t.height), s(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t, e) {
            this.options;
            var i = this.position,
                n = this.size,
                a = this.axis;
            return s(t.height) ? t.width = t.height * this.aspectRatio : s(t.width) && (t.height = t.width / this.aspectRatio), "sw" == a && (t.left = i.left + (n.width - t.width), t.top = null), "nw" == a && (t.top = i.top + (n.height - t.height), t.left = i.left + (n.width - t.width)), t
        },
        _respectSize: function(t, e) {
            this.helper;
            var i = this._vBoundaries,
                n = (this._aspectRatio || e.shiftKey, this.axis),
                a = s(t.width) && i.maxWidth && i.maxWidth < t.width,
                o = s(t.height) && i.maxHeight && i.maxHeight < t.height,
                r = s(t.width) && i.minWidth && i.minWidth > t.width,
                h = s(t.height) && i.minHeight && i.minHeight > t.height;
            r && (t.width = i.minWidth), h && (t.height = i.minHeight), a && (t.width = i.maxWidth), o && (t.height = i.maxHeight);
            var l = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n),
                d = /nw|ne|n/.test(n);
            r && u && (t.left = l - i.minWidth), a && u && (t.left = l - i.maxWidth), h && d && (t.top = c - i.minHeight), o && d && (t.top = c - i.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
        },
        _proportionallyResize: function() {
            if (this.options, this._proportionallyResizeElements.length)
                for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    var s = this._proportionallyResizeElements[i];
                    if (!this.borderDif) {
                        var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                            a = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
                        this.borderDif = t.map(n, function(t, e) {
                            var i = parseInt(t, 10) || 0,
                                s = parseInt(a[e], 10) || 0;
                            return i + s
                        })
                    }
                    s.css({
                        height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var s = t.ui.ie6 ? 1 : 0,
                    n = t.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + n,
                    height: this.element.outerHeight() + n,
                    position: "absolute",
                    left: this.elementOffset.left - s + "px",
                    top: this.elementOffset.top - s + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(t, e, i) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: s.width - e
                }
            },
            n: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function(e, i) {
            var s = t(this).data("resizable").options,
                n = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.parentNode ? n(s.alsoResize) : s.alsoResize.length ? (s.alsoResize = s.alsoResize[0], n(s.alsoResize)) : t.each(s.alsoResize, function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(o, function(t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (a[e] = i || null)
                        }), e.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },
        stop: function(e, i) {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = s._proportionallyResizeElements,
                o = a.length && /textarea/i.test(a[0].nodeName),
                r = o && t.ui.hasScroll(a[0], "left") ? 0 : s.sizeDiff.height,
                h = o ? 0 : s.sizeDiff.width,
                l = {
                    width: s.size.width - h,
                    height: s.size.height - r
                },
                c = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                u = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
            s.element.animate(t.extend(l, u && c ? {
                top: u,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(s.element.css("width"), 10),
                        height: parseInt(s.element.css("height"), 10),
                        top: parseInt(s.element.css("top"), 10),
                        left: parseInt(s.element.css("left"), 10)
                    };
                    a && a.length && t(a[0]).css({
                        width: i.width,
                        height: i.height
                    }), s._updateCache(i), s._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function(e, s) {
            var n = t(this).data("resizable"),
                a = n.options,
                o = n.element,
                r = a.containment,
                h = r instanceof t ? r.get(0) : /parent/.test(r) ? o.parent().get(0) : r;
            if (h) {
                if (n.containerElement = t(h), /document/.test(r) || r == document) n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var l = t(h),
                        c = [];
                    t(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                        c[t] = i(l.css("padding" + e))
                    }), n.containerOffset = l.offset(), n.containerPosition = l.position(), n.containerSize = {
                        height: l.innerHeight() - c[3],
                        width: l.innerWidth() - c[1]
                    };
                    var u = n.containerOffset,
                        d = n.containerSize.height,
                        p = n.containerSize.width,
                        f = t.ui.hasScroll(h, "left") ? h.scrollWidth : p,
                        g = t.ui.hasScroll(h) ? h.scrollHeight : d;
                    n.parentData = {
                        element: h,
                        left: u.left,
                        top: u.top,
                        width: f,
                        height: g
                    }
                }
            }
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = (s.containerSize, s.containerOffset),
                o = (s.size, s.position),
                r = s._aspectRatio || e.shiftKey,
                h = {
                    top: 0,
                    left: 0
                },
                l = s.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (h = a), o.left < (s._helper ? a.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - a.left : s.position.left - h.left), r && (s.size.height = s.size.width / s.aspectRatio), s.position.left = n.helper ? a.left : 0), o.top < (s._helper ? a.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - a.top : s.position.top), r && (s.size.width = s.size.height * s.aspectRatio), s.position.top = s._helper ? a.top : 0), s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top;
            var c = Math.abs((s._helper, s.offset.left - h.left + s.sizeDiff.width)),
                u = Math.abs((s._helper ? s.offset.top - h.top : s.offset.top - a.top) + s.sizeDiff.height),
                d = s.containerElement.get(0) == s.element.parent().get(0),
                p = /relative|absolute/.test(s.containerElement.css("position"));
            d && p && (c -= s.parentData.left), c + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - c, r && (s.size.height = s.size.width / s.aspectRatio)), u + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - u, r && (s.size.width = s.size.height * s.aspectRatio))
        },
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = (s.position, s.containerOffset),
                o = s.containerPosition,
                r = s.containerElement,
                h = t(s.helper),
                l = h.offset(),
                c = h.outerWidth() - s.sizeDiff.width,
                u = h.outerHeight() - s.sizeDiff.height;
            s._helper && !n.animate && /relative/.test(r.css("position")) && t(this).css({
                left: l.left - o.left - a.left,
                width: c,
                height: u
            }), s._helper && !n.animate && /static/.test(r.css("position")) && t(this).css({
                left: l.left - o.left - a.left,
                width: c,
                height: u
            })
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = s.size;
            s.ghost = s.originalElement.clone(), s.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: a.height,
                width: a.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), s.ghost.appendTo(s.helper)
        },
        resize: function(e, i) {
            var s = t(this).data("resizable");
            s.options, s.ghost && s.ghost.css({
                position: "relative",
                height: s.size.height,
                width: s.size.width
            })
        },
        stop: function(e, i) {
            var s = t(this).data("resizable");
            s.options, s.ghost && s.helper && s.helper.get(0).removeChild(s.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                a = s.size,
                o = s.originalSize,
                r = s.originalPosition,
                h = s.axis;
            n._aspectRatio || e.shiftKey, n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
            var l = Math.round((a.width - o.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                c = Math.round((a.height - o.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(h) ? (s.size.width = o.width + l, s.size.height = o.height + c) : /^(ne)$/.test(h) ? (s.size.width = o.width + l, s.size.height = o.height + c, s.position.top = r.top - c) : /^(sw)$/.test(h) ? (s.size.width = o.width + l, s.size.height = o.height + c, s.position.left = r.left - l) : (s.size.width = o.width + l, s.size.height = o.height + c, s.position.top = r.top - c, s.position.left = r.left - l)
        }
    });
    var i = function(t) {
            return parseInt(t, 10) || 0
        },
        s = function(t) {
            return !isNaN(parseInt(t, 10))
        }
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.9.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var s = this.options;
                this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: s.element
                    }))
                }), t(e.target).parents().andSelf().each(function() {
                    var s = t.data(this, "selectable-item");
                    if (s) {
                        var n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected");
                        return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function(e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                    n = this.opos[0],
                    a = this.opos[1],
                    o = e.pageX,
                    r = e.pageY;
                if (n > o) {
                    var h = o;
                    o = n, n = h
                }
                if (a > r) {
                    var h = r;
                    r = a, a = h
                }
                return this.helper.css({
                    left: n,
                    top: a,
                    width: o - n,
                    height: r - a
                }), this.selectees.each(function() {
                    var h = t.data(this, "selectable-item");
                    if (h && h.element != i.element[0]) {
                        var l = !1;
                        "touch" == s.tolerance ? l = !(h.left > o || h.right < n || h.top > r || h.bottom < a) : "fit" == s.tolerance && (l = h.left > n && h.right < o && h.top > a && h.bottom < r), l ? (h.selected && (h.$element.removeClass("ui-selected"), h.selected = !1), h.unselecting && (h.$element.removeClass("ui-unselecting"), h.unselecting = !1), h.selecting || (h.$element.addClass("ui-selecting"), h.selecting = !0, i._trigger("selecting", e, {
                            selecting: h.element
                        }))) : (h.selecting && ((e.metaKey || e.ctrlKey) && h.startselected ? (h.$element.removeClass("ui-selecting"), h.selecting = !1, h.$element.addClass("ui-selected"), h.selected = !0) : (h.$element.removeClass("ui-selecting"), h.selecting = !1, h.startselected && (h.$element.addClass("ui-unselecting"), h.unselecting = !0), i._trigger("unselecting", e, {
                            unselecting: h.element
                        }))), !h.selected || e.metaKey || e.ctrlKey || h.startselected || (h.$element.removeClass("ui-selected"), h.selected = !1, h.$element.addClass("ui-unselecting"), h.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: h.element
                        })))
                    }
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, this.options, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = this;
            if (this.reverting || this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var n = null;
            if (t(e.target).parents().each(function() {
                    if (t.data(this, s.widgetName + "-item") == s) return n = t(this), !1
                }), t.data(e.target, s.widgetName + "-item") == s && (n = t(e.target)), !n) return !1;
            if (this.options.handle && !i) {
                var a = !1;
                if (t(this.options.handle, n).find("*").andSelf().each(function() {
                        this == e.target && (a = !0)
                    }), !a) return !1
            }
            return this.currentItem = n, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(e, i, s) {
            var n = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (var a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), !1 !== s && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var n = this.items.length - 1; n >= 0; n--) {
                var a = this.items[n],
                    o = a.item[0],
                    r = this._intersectsWithPointer(a);
                if (r && a.instance === this.currentContainer && o != this.currentItem[0] && this.placeholder[1 == r ? "next" : "prev"]()[0] != o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" != this.options.type || !t.contains(this.element[0], o))) {
                    if (this.direction = 1 == r ? "down" : "up", "pointer" == this.options.tolerance || this._intersectsWithSides(a)) this._rearrange(e, a);
                    else break;
                    this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset();
                    this.reverting = !0, t(this.helper).animate({
                        left: n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                a = t.left,
                o = a + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = s + l > r && s + l < h && e + c > a && e + c < o;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : a < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                n = i && s,
                a = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return !!n && (this.floating ? o && "right" == o || "down" == a ? 2 : 1 : a && ("down" == a ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" == a && s || "left" == a && !s : n && ("down" == n && i || "up" == n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i = [],
                s = [],
                n = this._connectWith();
            if (n && e)
                for (var a = n.length - 1; a >= 0; a--)
                    for (var o = t(n[a]), r = o.length - 1; r >= 0; r--) {
                        var h = t.data(o[r], this.widgetName);
                        h && h != this && !h.options.disabled && s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element) : t(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var a = s.length - 1; a >= 0; a--) s[a][0].each(function() {
                i.push(this)
            });
            return t(i)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] == t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i = this.items,
                s = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                n = this._connectWith();
            if (n && this.ready)
                for (var a = n.length - 1; a >= 0; a--)
                    for (var o = t(n[a]), r = o.length - 1; r >= 0; r--) {
                        var h = t.data(o[r], this.widgetName);
                        h && h != this && !h.options.disabled && (s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element[0], e, {
                            item: this.currentItem
                        }) : t(h.options.items, h.element), h]), this.containers.push(h))
                    }
            for (var a = s.length - 1; a >= 0; a--)
                for (var l = s[a][1], c = s[a][0], r = 0, u = c.length; r < u; r++) {
                    var d = t(c[r]);
                    d.data(this.widgetName + "-item", l), i.push({
                        item: d,
                        instance: l,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i];
                if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
                    var n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
                    e || (s.width = n.outerWidth(), s.height = n.outerHeight());
                    var a = n.offset();
                    s.left = a.left, s.top = a.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    var a = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(e) {
            var i = (e = e || this).options;
            if (!i.placeholder || i.placeholder.constructor == String) {
                var s = i.placeholder;
                i.placeholder = {
                    element: function() {
                        var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(s || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return s || (i.style.visibility = "hidden"), i
                    },
                    update: function(t, n) {
                        s && !i.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(e) {
            for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0])) {
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (i && t.contains(this.containers[n].element[0], i.element[0])) continue;
                        i = this.containers[n], s = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0)
                }
            if (i) {
                if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1;
                else {
                    for (var a = 1e4, o = null, r = this.containers[s].floating ? "left" : "top", h = this.containers[s].floating ? "width" : "height", l = this.positionAbs[r] + this.offset.click[r], c = this.items.length - 1; c >= 0; c--)
                        if (t.contains(this.containers[s].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                            var u = this.items[c].item.offset()[r],
                                d = !1;
                            Math.abs(u - l) > Math.abs(u + this.items[c][h] - l) && (d = !0, u += this.items[c][h]), Math.abs(u - l) < a && (a = Math.abs(u - l), o = this.items[c], this.direction = d ? "up" : "down")
                        }
                    if (!o && !this.options.dropOnEmpty) return;
                    this.currentContainer = this.containers[s], o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1
                }
            }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" != this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.currentItem.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0],
                    s = t(e.containment).offset(),
                    n = "hidden" != t(i).css("overflow");
                this.containment = [s.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1;
            this.options;
            var n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var a = e.pageX,
                o = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid)) {
                var r = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1];
                o = this.containment && (r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3]) ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r;
                var h = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0];
                a = this.containment && (h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2]) ? h - this.offset.click.left < this.containment[0] ? h + i.grid[0] : h - i.grid[0] : h
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n == this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(e, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var n in this._storedCSS)("auto" == this._storedCSS[n] || "static" == this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !i && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this === this.currentContainer || i || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push((function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }).call(this, this.currentContainer)), s.push((function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }).call(this, this.currentContainer)));
            for (var n = this.containers.length - 1; n >= 0; n--) i || s.push((function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }).call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push((function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }).call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var n = 0; n < s.length; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var n = 0; n < s.length; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery), jQuery.effects || function(t, e) {
        var i, s = !1 !== t.uiBackCompat,
            n = "ui-effects-";
        t.effects = {
                effect: {}
            },
            /*!
             * jQuery Color Animations v2.0.0
             * http://jquery.com/
             *
             * Copyright 2012 jQuery Foundation and other contributors
             * Released under the MIT license.
             * http://jquery.org/license
             *
             * Date: Mon Aug 13 13:41:02 2012 -0500
             */
            function(e, i) {
                var s, n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                    a = /^([\-+])=\s*(\d+\.?\d*)/,
                    o = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    r = e.Color = function(t, i, s, n) {
                        return new e.Color.fn.parse(t, i, s, n)
                    },
                    h = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    l = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    c = r.support = {},
                    u = e("<p>")[0],
                    d = e.each;

                function p(t, e, i) {
                    var s = l[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : isNaN(t = s.floor ? ~~t : parseFloat(t)) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t
                }

                function f(t) {
                    var i = r(),
                        n = i._rgba = [];
                    return (t = t.toLowerCase(), d(o, function(e, s) {
                        var a, o = s.re.exec(t),
                            r = o && s.parse(o),
                            l = s.space || "rgba";
                        if (r) return a = i[l](r), i[h[l].cache] = a[h[l].cache], n = i._rgba = a._rgba, !1
                    }), n.length) ? ("0,0,0,0" === n.join() && e.extend(n, s.transparent), i) : s[t]
                }

                function g(t, e, i) {
                    return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                u.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = u.style.backgroundColor.indexOf("rgba") > -1, d(h, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), r.fn = e.extend(r.prototype, {
                    parse: function(n, a, o, l) {
                        if (n === i) return this._rgba = [null, null, null, null], this;
                        (n.jquery || n.nodeType) && (n = e(n).css(a), a = i);
                        var c = this,
                            u = e.type(n),
                            g = this._rgba = [];
                        return (a !== i && (n = [n, a, o, l], u = "array"), "string" === u) ? this.parse(f(n) || s._default) : "array" === u ? (d(h.rgba.props, function(t, e) {
                            g[e.idx] = p(n[e.idx], e)
                        }), this) : "object" === u ? (n instanceof r ? d(h, function(t, e) {
                            n[e.cache] && (c[e.cache] = n[e.cache].slice())
                        }) : d(h, function(e, i) {
                            var s = i.cache;
                            d(i.props, function(t, e) {
                                if (!c[s] && i.to) {
                                    if ("alpha" === t || null == n[t]) return;
                                    c[s] = i.to(c._rgba)
                                }
                                c[s][e.idx] = p(n[t], e, !0)
                            }), c[s] && 0 > t.inArray(null, c[s].slice(0, 3)) && (c[s][3] = 1, i.from && (c._rgba = i.from(c[s])))
                        }), this) : void 0
                    },
                    is: function(t) {
                        var e = r(t),
                            i = !0,
                            s = this;
                        return d(h, function(t, n) {
                            var a, o = e[n.cache];
                            return o && (a = s[n.cache] || n.to && n.to(s._rgba) || [], d(n.props, function(t, e) {
                                if (null != o[e.idx]) return i = o[e.idx] === a[e.idx]
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return d(h, function(i, s) {
                            e[s.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var i = r(t),
                            s = i._space(),
                            n = h[s],
                            a = 0 === this.alpha() ? r("transparent") : this,
                            o = a[n.cache] || n.to(a._rgba),
                            c = o.slice();
                        return i = i[n.cache], d(n.props, function(t, s) {
                            var n = s.idx,
                                a = o[n],
                                r = i[n],
                                h = l[s.type] || {};
                            null !== r && (null === a ? c[n] = r : (h.mod && (r - a > h.mod / 2 ? a += h.mod : a - r > h.mod / 2 && (a -= h.mod)), c[n] = p((r - a) * e + a, s)))
                        }), this[s](c)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            s = i.pop(),
                            n = r(t)._rgba;
                        return r(e.map(i, function(t, e) {
                            return (1 - s) * n[e] + s * t
                        }))
                    },
                    toRgbaString: function() {
                        var t = "rgba(",
                            i = e.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                    },
                    toHslaString: function() {
                        var t = "hsla(",
                            i = e.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                    },
                    toHexString: function(t) {
                        var i = this._rgba.slice(),
                            s = i.pop();
                        return t && i.push(~~(255 * s)), "#" + e.map(i, function(t) {
                            return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), r.fn.parse.prototype = r.fn, h.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, s = t[0] / 255,
                        n = t[1] / 255,
                        a = t[2] / 255,
                        o = t[3],
                        r = Math.max(s, n, a),
                        h = Math.min(s, n, a),
                        l = r - h,
                        c = r + h,
                        u = .5 * c;
                    return [Math.round(e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240) % 360, i = 0 === u || 1 === u ? u : u <= .5 ? l / c : l / (2 - c), u, null == o ? 1 : o]
                }, h.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        s = t[2],
                        n = t[3],
                        a = s <= .5 ? s * (1 + i) : s + i - s * i,
                        o = 2 * s - a;
                    return [Math.round(255 * g(o, a, e + 1 / 3)), Math.round(255 * g(o, a, e)), Math.round(255 * g(o, a, e - 1 / 3)), n]
                }, d(h, function(t, s) {
                    var n = s.props,
                        o = s.cache,
                        h = s.to,
                        l = s.from;
                    r.fn[t] = function(t) {
                        if (h && !this[o] && (this[o] = h(this._rgba)), t === i) return this[o].slice();
                        var s, a = e.type(t),
                            c = "array" === a || "object" === a ? t : arguments,
                            u = this[o].slice();
                        return (d(n, function(t, e) {
                            var i = c["object" === a ? t : e.idx];
                            null == i && (i = u[e.idx]), u[e.idx] = p(i, e)
                        }), l) ? ((s = r(l(u)))[o] = u, s) : r(u)
                    }, d(n, function(i, s) {
                        !r.fn[i] && (r.fn[i] = function(n) {
                            var o, r = e.type(n),
                                h = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                                l = this[h](),
                                c = l[s.idx];
                            return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = e.type(n)), null == n && s.empty) ? this : ("string" === r && (o = a.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), l[s.idx] = n, this[h](l))
                        })
                    })
                }), d(n, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, s) {
                            var n, a, o = "";
                            if ("string" !== e.type(s) || (n = f(s))) {
                                if (s = r(n || s), !c.rgba && 1 !== s._rgba[3]) {
                                    for (a = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === o || "transparent" === o) && a && a.style;) try {
                                        o = e.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (h) {}
                                    s = s.blend(o && "transparent" !== o ? o : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                t.style[i] = s
                            } catch (l) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = r(t.elem, i), t.end = r(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                }), e.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return d(["Top", "Right", "Bottom", "Left"], function(i, s) {
                            e["border" + s + "Color"] = t
                        }), e
                    }
                }, s = e.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                var i = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };

                function n() {
                    var e, i, s = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                        n = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (i = s.length; i--;) "string" == typeof s[e = s[i]] && (n[t.camelCase(e)] = s[e]);
                    else
                        for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
                    return n
                }

                function a(e, i) {
                    var n, a, o = {};
                    for (n in i) a = i[n], e[n] === a || s[n] || !t.fx.step[n] && isNaN(parseFloat(a)) || (o[n] = a);
                    return o
                }
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" === t.end || t.setAttr) && (1 !== t.pos || t.setAttr) || (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.effects.animateClass = function(e, s, o, r) {
                    var h = t.speed(s, o, r);
                    return this.queue(function() {
                        var s, o = t(this),
                            r = o.attr("class") || "",
                            l = h.children ? o.find("*").andSelf() : o;
                        l = l.map(function() {
                            return {
                                el: t(this),
                                start: n.call(this)
                            }
                        }), (s = function() {
                            t.each(i, function(t, i) {
                                e[i] && o[i + "Class"](e[i])
                            })
                        })(), l = l.map(function() {
                            return this.end = n.call(this.el[0]), this.diff = a(this.start, this.end), this
                        }), o.attr("class", r), l = l.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                s = jQuery.extend({}, h, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, s), i.promise()
                        }), t.when.apply(t, l.get()).done(function() {
                            s(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), h.complete.call(o[0])
                        })
                    })
                }, t.fn.extend({
                    _addClass: t.fn.addClass,
                    addClass: function(e, i, s, n) {
                        return i ? t.effects.animateClass.call(this, {
                            add: e
                        }, i, s, n) : this._addClass(e)
                    },
                    _removeClass: t.fn.removeClass,
                    removeClass: function(e, i, s, n) {
                        return i ? t.effects.animateClass.call(this, {
                            remove: e
                        }, i, s, n) : this._removeClass(e)
                    },
                    _toggleClass: t.fn.toggleClass,
                    toggleClass: function(i, s, n, a, o) {
                        return "boolean" != typeof s && s !== e ? t.effects.animateClass.call(this, {
                            toggle: i
                        }, s, n, a) : n ? t.effects.animateClass.call(this, s ? {
                            add: i
                        } : {
                            remove: i
                        }, n, a, o) : this._toggleClass(i, s)
                    },
                    switchClass: function(e, i, s, n, a) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, s, n, a)
                    }
                })
            }(),
            function() {
                function i(e, i, s, n) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
                }

                function a(e) {
                    return !e || "number" == typeof e || !!t.fx.speeds[e] || "string" == typeof e && !t.effects.effect[e] && (!s || !t.effects[e])
                }
                t.extend(t.effects, {
                    version: "1.9.2",
                    save: function(t, e) {
                        for (var i = 0; i < e.length; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, i) {
                        var s, a;
                        for (a = 0; a < i.length; a++) null !== i[a] && (e === (s = t.data(n + i[a])) && (s = ""), t.css(i[a], s))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, s;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                s = 0;
                                break;
                            case "center":
                                s = .5;
                                break;
                            case "right":
                                s = 1;
                                break;
                            default:
                                s = t[1] / e.width
                        }
                        return {
                            x: s,
                            y: i
                        }
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                float: e.css("float")
                            },
                            s = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            n = {
                                width: e.width(),
                                height: e.height()
                            },
                            a = document.activeElement;
                        try {
                            a.id
                        } catch (o) {
                            a = document.body
                        }
                        return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(n), s.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                    },
                    setTransition: function(e, i, s, n) {
                        return n = n || {}, t.each(i, function(t, i) {
                            var a = e.cssUnit(i);
                            a[0] > 0 && (n[i] = a[0] * s + a[1])
                        }), n
                    }
                }), t.fn.extend({
                    effect: function() {
                        var e = i.apply(this, arguments),
                            n = e.mode,
                            a = e.queue,
                            o = t.effects.effect[e.effect],
                            r = !o && s && t.effects[e.effect];
                        if (t.fx.off || !(o || r)) return n ? this[n](e.duration, e.complete) : this.each(function() {
                            e.complete && e.complete.call(this)
                        });

                        function h(i) {
                            var s = t(this),
                                n = e.complete,
                                a = e.mode;

                            function r() {
                                t.isFunction(n) && n.call(s[0]), t.isFunction(i) && i()
                            }(s.is(":hidden") ? "hide" === a : "show" === a) ? r(): o.call(s[0], e, r)
                        }
                        return o ? !1 === a ? this.each(h) : this.queue(a || "fx", h) : r.call(this, {
                            options: e,
                            duration: e.duration,
                            callback: e.complete,
                            mode: e.mode
                        })
                    },
                    _show: t.fn.show,
                    show: function(t) {
                        if (a(t)) return this._show.apply(this, arguments);
                        var e = i.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    },
                    _hide: t.fn.hide,
                    hide: function(t) {
                        if (a(t)) return this._hide.apply(this, arguments);
                        var e = i.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    },
                    __toggle: t.fn.toggle,
                    toggle: function(e) {
                        if (a(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                        var s = i.apply(this, arguments);
                        return s.mode = "toggle", this.effect.call(this, s)
                    },
                    cssUnit: function(e) {
                        var i = this.css(e),
                            s = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                        }), s
                    }
                })
            }(), i = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, e) {
                i[e] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(i, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((t - 1) * 80 - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(i, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
    }(jQuery),
    function(t, e) {
        var i, s, n, a = 0,
            o = {},
            r = {};
        o.height = o.paddingTop = o.paddingBottom = o.borderTopWidth = o.borderBottomWidth = "hide", r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "show", t.widget("ui.accordion", {
            version: "1.9.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var e = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++a),
                    i = this.options;
                this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), i.collapsible || !1 !== i.active && null != i.active || (i.active = 0), i.active < 0 && (i.active += this.headers.length), this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(i) {
                    var s = t(this),
                        n = s.attr("id"),
                        a = s.next(),
                        o = a.attr("id");
                    n || (n = e + "-header-" + i, s.attr("id", n)), o || (o = e + "-panel-" + i, a.attr("id", o)), s.attr("aria-controls", o), a.attr("aria-labelledby", n)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                    keydown: "_keydown"
                }), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._setupEvents(i.event)
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    content: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                if ("active" === t) {
                    this._activate(e);
                    return
                }
                "event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(e.target),
                        a = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            a = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            a = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            a = this.headers[0];
                            break;
                        case i.END:
                            a = this.headers[s - 1]
                    }
                    a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function() {
                var e, i, s = this.options.heightStyle,
                    n = this.element.parent();
                "fill" === s ? (t.support.minHeight || (i = n.css("overflow"), n.css("overflow", "hidden")), e = n.height(), this.element.siblings(":visible").each(function() {
                    var i = t(this),
                        s = i.css("position");
                    "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
                }), i && n.css("overflow", i), this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                    e = Math.max(e, t(this).css("height", "").height())
                }).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {};
                e && (t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._on(this.headers, i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    s = this.active,
                    n = t(e.currentTarget),
                    a = n[0] === s[0],
                    o = a && i.collapsible,
                    r = o ? t() : n.next(),
                    h = s.next(),
                    l = {
                        oldHeader: s,
                        oldPanel: h,
                        newHeader: o ? t() : n,
                        newPanel: r
                    };
                e.preventDefault(), (!a || i.collapsible) && !1 !== this._trigger("beforeActivate", e, l) && (i.active = !o && this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    s = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), i.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var s, n, a, h = this,
                    l = 0,
                    c = t.length && (!e.length || t.index() < e.index()),
                    u = this.options.animate || {},
                    d = c && u.down || u,
                    p = function() {
                        h._toggleComplete(i)
                    };
                return ("number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, e.length) ? t.length ? void(s = t.show().outerHeight(), e.animate(o, {
                    duration: a,
                    easing: n,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), t.hide().animate(r, {
                    duration: a,
                    easing: n,
                    complete: p,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - l), l = 0)
                    }
                })) : e.animate(o, a, n, p) : t.animate(r, a, n, p)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), !1 !== t.uiBackCompat && (function(t, e) {
            t.extend(e.options, {
                navigation: !1,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            });
            var i = e._create;
            e._create = function() {
                if (this.options.navigation) {
                    var e = this,
                        s = this.element.find(this.options.header),
                        n = s.next(),
                        a = s.add(n).find("a").filter(this.options.navigationFilter)[0];
                    a && s.add(n).each(function(i) {
                        if (t.contains(this, a)) return e.options.active = Math.floor(i / 2), !1
                    })
                }
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
            t.extend(e.options, {
                heightStyle: null,
                autoHeight: !0,
                clearStyle: !1,
                fillSpace: !1
            });
            var i = e._create,
                s = e._setOption;
            t.extend(e, {
                _create: function() {
                    this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
                },
                _setOption: function(t) {
                    ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()), s.apply(this, arguments)
                },
                _mergeHeightStyle: function() {
                    var t = this.options;
                    return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : void 0
                }
            })
        }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
            t.extend(e.options.icons, {
                activeHeader: null,
                headerSelected: "ui-icon-triangle-1-s"
            });
            var i = e._createIcons;
            e._createIcons = function() {
                this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), i = jQuery, (s = jQuery.ui.accordion.prototype).activate = s._activate, n = s._findActive, s._findActive = function(t) {
            return -1 === t && (t = !1), t && "number" != typeof t && -1 === (t = this.headers.index(this.headers.filter(t))) && (t = !1), n.call(this, t)
        }, jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(t, e) {
            t.extend(e.options, {
                change: null,
                changestart: null
            });
            var i = e._trigger;
            e._trigger = function(t, e, s) {
                var n = i.apply(this, arguments);
                return !!n && ("beforeActivate" === t ? n = i.call(this, "changestart", e, {
                    oldHeader: s.oldHeader,
                    oldContent: s.oldPanel,
                    newHeader: s.newHeader,
                    newContent: s.newPanel
                }) : "activate" === t && (n = i.call(this, "change", e, {
                    oldHeader: s.oldHeader,
                    oldContent: s.oldPanel,
                    newHeader: s.newHeader,
                    newContent: s.newPanel
                })), n)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function(t, e) {
            t.extend(e.options, {
                animate: null,
                animated: "slide"
            });
            var i = e._create;
            e._create = function() {
                var t = this.options;
                null === t.animate && (t.animated ? "slide" === t.animated ? t.animate = 300 : "bounceslide" === t.animated ? t.animate = {
                    duration: 200,
                    down: {
                        easing: "easeOutBounce",
                        duration: 1e3
                    }
                } : t.animate = t.animated : t.animate = !1), i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype))
    }(jQuery),
    function(t, e) {
        var i = 0;
        t.widget("ui.autocomplete", {
            version: "1.9.2",
            defaultElement: "<input>",
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function() {
                var e, i, s;
                this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) {
                            e = !0, s = !0, i = !0;
                            return
                        }
                        e = !1, s = !1, i = !1;
                        var a = t.ui.keyCode;
                        switch (n.keyCode) {
                            case a.PAGE_UP:
                                e = !0, this._move("previousPage", n);
                                break;
                            case a.PAGE_DOWN:
                                e = !0, this._move("nextPage", n);
                                break;
                            case a.UP:
                                e = !0, this._keyEvent("previous", n);
                                break;
                            case a.DOWN:
                                e = !0, this._keyEvent("next", n);
                                break;
                            case a.ENTER:
                            case a.NUMPAD_ENTER:
                                this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case a.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case a.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(s) {
                        if (e) {
                            e = !1, s.preventDefault();
                            return
                        }
                        if (!i) {
                            var n = t.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function(t) {
                        if (s) {
                            s = !1, t.preventDefault();
                            return
                        }
                        this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        if (this.cancelBlur) {
                            delete this.cancelBlur;
                            return
                        }
                        clearTimeout(this.searching), this.close(t), this._change(t)
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                    input: t(),
                    role: null
                }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                            var e = this;
                            this.document.one("mousedown", function(s) {
                                s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                            })
                        })
                    },
                    menufocus: function(e, i) {
                        if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) {
                            this.menu.blur(), this.document.one("mousemove", function() {
                                t(e.target).trigger(e.originalEvent)
                            });
                            return
                        }
                        var s = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                        !1 !== this._trigger("focus", e, {
                            item: s
                        }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"),
                            s = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                            this.previous = s, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), t.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isMultiLine: function() {
                return !!this.element.is("textarea") || !this.element.is("input") && this.element.prop("isContentEditable")
            },
            _initSource: function() {
                var e, i, s = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                    s(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                    s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            n(t)
                        },
                        error: function() {
                            n([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return (t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength) ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var t = this,
                    e = ++i;
                return function(s) {
                    e === i && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({
                        label: e.label || e.value,
                        value: e.value || e.label
                    }, e)
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, e), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var s = this;
                t.each(i, function(t, i) {
                    s._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
            },
            _move: function(t, e) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, e);
                    return
                }
                if (this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t)) {
                    this._value(this.term), this.menu.blur();
                    return
                }
                this.menu[t](e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return s.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), !this.options.disabled && !this.cancelSearch && (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
            }
        })
    }(jQuery),
    function(t, e) {
        var i, s, n, a, o = "ui-button ui-widget ui-state-default ui-corner-all",
            r = "ui-state-hover ui-state-active ",
            h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            l = function() {
                var e = t(this).find(":ui-button");
                setTimeout(function() {
                    e.button("refresh")
                }, 1)
            },
            c = function(e) {
                var i = e.name,
                    s = e.form,
                    n = t([]);
                return i && (n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                    return !this.form
                })), n
            };
        t.widget("ui.button", {
            version: "1.9.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    r = this.options,
                    h = "checkbox" === this.type || "radio" === this.type,
                    u = h ? "" : "ui-state-active",
                    d = "ui-state-focus";
                null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    !r.disabled && this === i && t(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    !r.disabled && t(this).removeClass(u)
                }).bind("click" + this.eventNamespace, function(t) {
                    r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function() {
                    e.buttonElement.addClass(d)
                }).bind("blur" + this.eventNamespace, function() {
                    e.buttonElement.removeClass(d)
                }), h && (this.element.bind("change" + this.eventNamespace, function() {
                    !a && e.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                    !r.disabled && (a = !1, s = t.pageX, n = t.pageY)
                }).bind("mouseup" + this.eventNamespace, function(t) {
                    !r.disabled && (s !== t.pageX || n !== t.pageY) && (a = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (r.disabled || a) return !1;
                    t(this).toggleClass("ui-state-active"), e.buttonElement.attr("aria-pressed", e.element[0].checked)
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (r.disabled || a) return !1;
                    t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                    var i = e.element[0];
                    c(i).not(i).map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    if (r.disabled) return !1;
                    t(this).addClass("ui-state-active"), i = this, e.document.one("mouseup", function() {
                        i = null
                    })
                }).bind("mouseup" + this.eventNamespace, function() {
                    if (r.disabled) return !1;
                    t(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(e) {
                    if (r.disabled) return !1;
                    (e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active")
                }).bind("keyup" + this.eventNamespace, function() {
                    t(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                })), this._setOption("disabled", r.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var t, e, i;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), (i = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + r + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(t, e) {
                if (this._super(t, e), "disabled" === t) {
                    e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                    return
                }
                this._resetButton()
            },
            refresh: function() {
                var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? c(this.element[0]).each(function() {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) {
                    this.options.label && this.element.val(this.options.label);
                    return
                }
                var e = this.buttonElement.removeClass(h),
                    i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    n = s.primary && s.secondary,
                    a = [];
                s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
            }
        }), t.widget("ui.buttonset", {
            version: "1.9.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, e) {
                "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
            },
            refresh: function() {
                var e = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery),
    function($, undefined) {
        $.extend($.ui, {
            datepicker: {
                version: "1.9.2"
            }
        });
        var instActive, PROP_NAME = "datepicker",
            dpuuid = new Date().getTime();

        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function() {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(e, "mouseover", function() {
                $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(t, e) {
            for (var i in $.extend(t, e), e)(null == e[i] || undefined == e[i]) && (t[i] = e[i]);
            return t
        }
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return extendRemove(this._defaults, t || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(t, e) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), !i.hasClass(this.markerClassName) && (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(t, i, s) {
                    e.settings[i] = s
                }).bind("getData.datepicker", function(t, i) {
                    return this._get(e, i)
                }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var i = this._get(e, "appendText"),
                    s = this._get(e, "isRTL");
                e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[s ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
                var n = this._get(e, "showOn");
                if (("focus" == n || "both" == n) && t.focus(this._showDatepicker), "button" == n || "both" == n) {
                    var a = this._get(e, "buttonText"),
                        o = this._get(e, "buttonImage");
                    e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: a,
                        title: a
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == o ? a : $("<img/>").attr({
                        src: o,
                        alt: a,
                        title: a
                    }))), t[s ? "before" : "after"](e.trigger), e.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] && $.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])), !1
                    })
                }
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e = new Date(2009, 11, 20),
                        i = this._get(t, "dateFormat");
                    if (i.match(/[DM]/)) {
                        var s = function(t) {
                            for (var e = 0, i = 0, s = 0; s < t.length; s++) t[s].length > e && (e = t[s].length, i = s);
                            return i
                        };
                        e.setMonth(s(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(s(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                    }
                    t.input.attr("size", this._formatDate(t, e).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function(t, i, s) {
                    e.settings[i] = s
                }).bind("getData.datepicker", function(t, i) {
                    return this._get(e, i)
                }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, i, s, n) {
                var a = this._dialogInst;
                if (!a) {
                    this.uuid += 1;
                    var o = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, a)
                }
                if (extendRemove(a.settings, s || {}), e = e && e.constructor == Date ? this._formatDate(a, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, !this._pos) {
                    var r = document.documentElement.clientWidth,
                        h = document.documentElement.clientHeight,
                        l = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [r / 2 - 100 + l, h / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, a), this
            },
            _destroyDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    $.removeData(t, PROP_NAME), "input" == s ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == s || "span" == s) && e.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    if ("input" == s) t.disabled = !1, i.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" == s || "span" == s) {
                        var n = e.children("." + this._inlineClass);
                        n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    })
                }
            },
            _disableDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    if ("input" == s) t.disabled = !0, i.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" == s || "span" == s) {
                        var n = e.children("." + this._inlineClass);
                        n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t
                }
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] == t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, i) {
                var s = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : s ? "all" == e ? $.extend({}, s.settings) : this._get(s, e) : null;
                var n = e || {};
                if ("string" == typeof e && ((n = {})[e] = i), s) {
                    this._curInst == s && this._hideDatepicker();
                    var a = this._getDateDatepicker(t, !0),
                        o = this._getMinMaxDate(s, "min"),
                        r = this._getMinMaxDate(s, "max");
                    extendRemove(s.settings, n), null !== o && undefined !== n.dateFormat && undefined === n.minDate && (s.settings.minDate = this._formatDate(s, o)), null !== r && undefined !== n.dateFormat && undefined === n.maxDate && (s.settings.maxDate = this._formatDate(s, r)), this._attachments($(t), s), this._autoSize(s), this._setDate(s, a), this._updateAlternate(s), this._updateDatepicker(s)
                }
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var e = $.datepicker._getInst(t.target),
                    i = !0,
                    s = e.dpDiv.is(".ui-datepicker-rtl");
                if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), i = !1;
                        break;
                    case 13:
                        var n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                        n[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, n[0]);
                        var a = $.datepicker._get(e, "onSelect");
                        if (a) {
                            var o = $.datepicker._formatDate(e);
                            a.apply(e.input ? e.input[0] : null, [o, e])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        i = !1
                } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                i && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e = $.datepicker._getInst(t.target);
                if ($.datepicker._get(e, "constrainInput")) {
                    var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                        s = String.fromCharCode(undefined == t.charCode ? t.keyCode : t.charCode);
                    return t.ctrlKey || t.metaKey || s < " " || !i || i.indexOf(s) > -1
                }
            },
            _doKeyUp: function(t) {
                var e = $.datepicker._getInst(t.target);
                if (e.input.val() != e.lastVal) try {
                    $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                } catch (i) {
                    $.datepicker.log(i)
                }
                return !0
            },
            _showDatepicker: function(t) {
                if ("input" != (t = t.target || t).nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                    var e = $.datepicker._getInst(t);
                    $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var i = $.datepicker._get(e, "beforeShow"),
                        s = i ? i.apply(t, [t, e]) : {};
                    if (!1 !== s) {
                        extendRemove(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                        var n = !1;
                        $(t).parents().each(function() {
                            return !(n |= "fixed" == $(this).css("position"))
                        });
                        var a = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(e), a = $.datepicker._checkOffset(e, a, n), e.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
                                display: "none",
                                left: a.left + "px",
                                top: a.top + "px"
                            }), !e.inline) {
                            var o = $.datepicker._get(e, "showAnim"),
                                r = $.datepicker._get(e, "duration"),
                                h = function() {
                                    var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (t.length) {
                                        var i = $.datepicker._getBorders(e.dpDiv);
                                        t.css({
                                            left: -i[0],
                                            top: -i[1],
                                            width: e.dpDiv.outerWidth(),
                                            height: e.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? e.dpDiv.show(o, $.datepicker._get(e, "showOptions"), r, h) : e.dpDiv[o || "show"](o ? r : null, h), o && r || h(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                        }
                    }
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4;
                var e = $.datepicker._getBorders(t.dpDiv);
                instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var i = t.dpDiv.find("iframe.ui-datepicker-cover");
                i.length && i.css({
                    left: -e[0],
                    top: -e[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var s = this._getNumberOfMonths(t),
                    n = s[1],
                    a = 17;
                if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 != s[0] || 1 != s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                    var o = t.yearshtml;
                    setTimeout(function() {
                        o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), o = t.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(t) {
                var e = function(t) {
                    return ({
                        thin: 1,
                        medium: 2,
                        thick: 3
                    })[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function(t, e, i) {
                var s = t.dpDiv.outerWidth(),
                    n = t.dpDiv.outerHeight(),
                    a = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? s - a : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + o ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > h && h > n ? Math.abs(n + o) : 0), e
            },
            _findPos: function(t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
                var s = $(t).offset();
                return [s.left, s.top]
            },
            _hideDatepicker: function(t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                    var i = this._get(e, "showAnim"),
                        s = this._get(e, "duration"),
                        n = function() {
                            $.datepicker._tidyDialog(e)
                        };
                    $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), s, n) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1;
                    var a = this._get(e, "onClose");
                    a && a.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                    (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, i) {
                var s = $(t),
                    n = this._getInst(s[0]);
                !this._isDisabledDatepicker(s[0]) && (this._adjustInstDate(n, e + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
            },
            _gotoToday: function(t) {
                var e = $(t),
                    i = this._getInst(e[0]);
                if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
                else {
                    var s = new Date;
                    i.selectedDay = s.getDate(), i.drawMonth = i.selectedMonth = s.getMonth(), i.drawYear = i.selectedYear = s.getFullYear()
                }
                this._notifyChange(i), this._adjustDate(e)
            },
            _selectMonthYear: function(t, e, i) {
                var s = $(t),
                    n = this._getInst(s[0]);
                n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
            },
            _selectDay: function(t, e, i, s) {
                var n = $(t);
                if (!($(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]))) {
                    var a = this._getInst(n[0]);
                    a.selectedDay = a.currentDay = $("a", s).html(), a.selectedMonth = a.currentMonth = e, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))
                }
            },
            _clearDate: function(t) {
                var e = $(t);
                this._getInst(e[0]), this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var i = $(t),
                    s = this._getInst(i[0]);
                e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s);
                var n = this._get(s, "onSelect");
                n ? n.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e = this._get(t, "altField");
                if (e) {
                    var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        s = this._getDate(t),
                        n = this.formatDate(i, s, this._getFormatConfig(t));
                    $(e).each(function() {
                        $(this).val(n)
                    })
                }
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e = new Date(t.getTime());
                e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var i = e.getTime();
                return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1
            },
            parseDate: function(t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if ("" == (e = "object" == typeof e ? e.toString() : e + "")) return null;
                var s = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                s = "string" != typeof s ? s : new Date().getFullYear() % 100 + parseInt(s, 10);
                for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = -1, l = -1, c = -1, u = -1, d = !1, p = function(e) {
                        var i = b + 1 < t.length && t.charAt(b + 1) == e;
                        return i && b++, i
                    }, f = function(t) {
                        var i = p(t),
                            s = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                            n = RegExp("^\\d{1," + s + "}"),
                            a = e.substring(v).match(n);
                        if (!a) throw "Missing number at position " + v;
                        return v += a[0].length, parseInt(a[0], 10)
                    }, g = function(t, i, s) {
                        var n = $.map(p(t) ? s : i, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            }),
                            a = -1;
                        if ($.each(n, function(t, i) {
                                var s = i[1];
                                if (e.substr(v, s.length).toLowerCase() == s.toLowerCase()) return a = i[0], v += s.length, !1
                            }), -1 != a) return a + 1;
                        throw "Unknown name at position " + v
                    }, m = function() {
                        if (e.charAt(v) != t.charAt(b)) throw "Unexpected literal at position " + v;
                        v++
                    }, v = 0, b = 0; b < t.length; b++)
                    if (d) "'" != t.charAt(b) || p("'") ? m() : d = !1;
                    else switch (t.charAt(b)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            g("D", n, a);
                            break;
                        case "o":
                            u = f("o");
                            break;
                        case "m":
                            l = f("m");
                            break;
                        case "M":
                            l = g("M", o, r);
                            break;
                        case "y":
                            h = f("y");
                            break;
                        case "@":
                            var y = new Date(f("@"));
                            h = y.getFullYear(), l = y.getMonth() + 1, c = y.getDate();
                            break;
                        case "!":
                            var y = new Date((f("!") - this._ticksTo1970) / 1e4);
                            h = y.getFullYear(), l = y.getMonth() + 1, c = y.getDate();
                            break;
                        case "'":
                            p("'") ? m() : d = !0;
                            break;
                        default:
                            m()
                    }
                if (v < e.length) {
                    var _ = e.substr(v);
                    if (!/^\s+/.test(_)) throw "Extra/unparsed characters found in date: " + _
                }
                if (-1 == h ? h = new Date().getFullYear() : h < 100 && (h += new Date().getFullYear() - new Date().getFullYear() % 100 + (h <= s ? 0 : -100)), u > -1)
                    for (l = 1, c = u;;) {
                        var w = this._getDaysInMonth(h, l - 1);
                        if (c <= w) break;
                        l++, c -= w
                    }
                var y = this._daylightSavingAdjust(new Date(h, l - 1, c));
                if (y.getFullYear() != h || y.getMonth() + 1 != l || y.getDate() != c) throw "Invalid date";
                return y
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    n = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (i ? i.monthNames : null) || this._defaults.monthNames,
                    r = function(e) {
                        var i = d + 1 < t.length && t.charAt(d + 1) == e;
                        return i && d++, i
                    },
                    h = function(t, e, i) {
                        var s = "" + e;
                        if (r(t))
                            for (; s.length < i;) s = "0" + s;
                        return s
                    },
                    l = function(t, e, i, s) {
                        return r(t) ? s[e] : i[e]
                    },
                    c = "",
                    u = !1;
                if (e)
                    for (var d = 0; d < t.length; d++)
                        if (u) "'" != t.charAt(d) || r("'") ? c += t.charAt(d) : u = !1;
                        else switch (t.charAt(d)) {
                            case "d":
                                c += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                c += l("D", e.getDay(), s, n);
                                break;
                            case "o":
                                c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += l("M", e.getMonth(), a, o);
                                break;
                            case "y":
                                c += r("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                c += e.getTime();
                                break;
                            case "!":
                                c += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                r("'") ? c += "'" : u = !0;
                                break;
                            default:
                                c += t.charAt(d)
                        }
                return c
            },
            _possibleChars: function(t) {
                for (var e = "", i = !1, s = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) == e;
                        return i && n++, i
                    }, n = 0; n < t.length; n++)
                    if (i) "'" != t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            e += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? e += "'" : i = !0;
                            break;
                        default:
                            e += t.charAt(n)
                    }
                return e
            },
            _get: function(t, e) {
                return undefined !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() != t.lastVal) {
                    var i, s, n = this._get(t, "dateFormat"),
                        a = t.lastVal = t.input ? t.input.val() : null;
                    i = s = this._getDefaultDate(t);
                    var o = this._getFormatConfig(t);
                    try {
                        i = this.parseDate(n, a, o) || s
                    } catch (r) {
                        this.log(r), a = e ? "" : a
                    }
                    t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), t.currentDay = a ? i.getDate() : 0, t.currentMonth = a ? i.getMonth() : 0, t.currentYear = a ? i.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(t, e, i) {
                var s = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    n = function(e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var s = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), a = s.getMonth(), o = s.getDate(), r = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = r.exec(e); h;) {
                            switch (h[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(h[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(h[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(h[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(n, a));
                                    break;
                                case "y":
                                case "Y":
                                    n += parseInt(h[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(n, a))
                            }
                            h = r.exec(e)
                        }
                        return new Date(n, a, o)
                    },
                    a = null == e || "" === e ? i : "string" == typeof e ? n(e) : "number" == typeof e ? isNaN(e) ? i : s(e) : new Date(e.getTime());
                return (a = a && "Invalid Date" == a.toString() ? i : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var s = !e,
                    n = t.selectedMonth,
                    a = t.selectedYear,
                    o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), n == t.selectedMonth && a == t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e = new Date;
                e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                var i = this._get(t, "isRTL"),
                    s = this._get(t, "showButtonPanel"),
                    n = this._get(t, "hideIfNoPrevNext"),
                    a = this._get(t, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(t),
                    r = this._get(t, "showCurrentAtPos"),
                    h = this._get(t, "stepMonths"),
                    l = 1 != o[0] || 1 != o[1],
                    c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    u = this._getMinMaxDate(t, "min"),
                    d = this._getMinMaxDate(t, "max"),
                    p = t.drawMonth - r,
                    f = t.drawYear;
                if (p < 0 && (p += 12, f--), d) {
                    var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - o[0] * o[1] + 1, d.getDate()));
                    for (g = u && g < u ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) --p < 0 && (p = 11, f--)
                }
                t.drawMonth = p, t.drawYear = f;
                var m = this._get(t, "prevText");
                m = a ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - h, 1)), this._getFormatConfig(t)) : m;
                var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                    b = this._get(t, "nextText");
                b = a ? this.formatDate(b, this._daylightSavingAdjust(new Date(f, p + h, 1)), this._getFormatConfig(t)) : b;
                var y = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>",
                    _ = this._get(t, "currentText"),
                    w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                _ = a ? this.formatDate(_, w, this._getFormatConfig(t)) : _;
                var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                    k = s ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + _ + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                    C = parseInt(this._get(t, "firstDay"), 10);
                C = isNaN(C) ? 0 : C;
                var D = this._get(t, "showWeek"),
                    P = this._get(t, "dayNames");
                this._get(t, "dayNamesShort");
                var T = this._get(t, "dayNamesMin"),
                    I = this._get(t, "monthNames"),
                    S = this._get(t, "monthNamesShort"),
                    z = this._get(t, "beforeShowDay"),
                    A = this._get(t, "showOtherMonths"),
                    M = this._get(t, "selectOtherMonths");
                this._get(t, "calculateWeek") || this.iso8601Week;
                for (var H = this._getDefaultDate(t), W = "", E = 0; E < o[0]; E++) {
                    var N = "";
                    this.maxRows = 4;
                    for (var O = 0; O < o[1]; O++) {
                        var F = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                            R = " ui-corner-all",
                            L = "";
                        if (l) {
                            if (L += '<div class="ui-datepicker-group', o[1] > 1) switch (O) {
                                case 0:
                                    L += " ui-datepicker-group-first", R = " ui-corner-" + (i ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    L += " ui-datepicker-group-last", R = " ui-corner-" + (i ? "left" : "right");
                                    break;
                                default:
                                    L += " ui-datepicker-group-middle", R = ""
                            }
                            L += '">'
                        }
                        L += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == E ? i ? y : v : "") + (/all|right/.test(R) && 0 == E ? i ? v : y : "") + this._generateMonthYearHeader(t, p, f, u, d, E > 0 || O > 0, I, S) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        for (var Y = D ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", j = 0; j < 7; j++) {
                            var B = (j + C) % 7;
                            Y += "<th" + ((j + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + P[B] + '">' + T[B] + "</span></th>"
                        }
                        L += Y + "</tr></thead><tbody>";
                        var K = this._getDaysInMonth(f, p);
                        f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, K));
                        var q = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                            U = Math.ceil((q + K) / 7),
                            V = l && this.maxRows > U ? this.maxRows : U;
                        this.maxRows = V;
                        for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - q)), G = 0; G < V; G++) {
                            L += "<tr>";
                            for (var Z = D ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(X) + "</td>" : "", j = 0; j < 7; j++) {
                                var Q = z ? z.apply(t.input ? t.input[0] : null, [X]) : [!0, ""],
                                    J = X.getMonth() != p,
                                    tt = J && !M || !Q[0] || u && X < u || d && X > d;
                                Z += '<td class="' + ((j + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (J ? " ui-datepicker-other-month" : "") + (X.getTime() == F.getTime() && p == t.selectedMonth && t._keyEvent || H.getTime() == X.getTime() && H.getTime() == F.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (J && !A ? "" : " " + Q[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!J || A) && Q[2] ? ' title="' + Q[2] + '"' : "") + (tt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (J && !A ? "&#xa0;" : tt ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == e.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (J ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
                            }
                            L += Z + "</tr>"
                        }++p > 11 && (p = 0, f++), L += "</tbody></table>" + (l ? "</div>" + (o[0] > 0 && O == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), N += L
                    }
                    W += N
                }
                return W += k + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, W
            },
            _generateMonthYearHeader: function(t, e, i, s, n, a, o, r) {
                var h = this._get(t, "changeMonth"),
                    l = this._get(t, "changeYear"),
                    c = this._get(t, "showMonthAfterYear"),
                    u = '<div class="ui-datepicker-title">',
                    d = "";
                if (a || !h) d += '<span class="ui-datepicker-month">' + o[e] + "</span>";
                else {
                    var p = s && s.getFullYear() == i,
                        f = n && n.getFullYear() == i;
                    d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var g = 0; g < 12; g++)(!p || g >= s.getMonth()) && (!f || g <= n.getMonth()) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + r[g] + "</option>");
                    d += "</select>"
                }
                if (c || (u += d + (a || !(h && l) ? "&#xa0;" : "")), !t.yearshtml) {
                    if (t.yearshtml = "", a || !l) u += '<span class="ui-datepicker-year">' + i + "</span>";
                    else {
                        var m = this._get(t, "yearRange").split(":"),
                            v = new Date().getFullYear(),
                            b = function(t) {
                                var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? v : e
                            },
                            $ = b(m[0]),
                            y = Math.max($, b(m[1] || ""));
                        for ($ = s ? Math.max($, s.getFullYear()) : $, y = n ? Math.min(y, n.getFullYear()) : y, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; $ <= y; $++) t.yearshtml += '<option value="' + $ + '"' + ($ == i ? ' selected="selected"' : "") + ">" + $ + "</option>";
                        t.yearshtml += "</select>", u += t.yearshtml, t.yearshtml = null
                    }
                }
                return u += this._get(t, "yearSuffix"), c && (u += (a || !(h && l) ? "&#xa0;" : "") + d), u += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var s = t.drawYear + ("Y" == i ? e : 0),
                    n = t.drawMonth + ("M" == i ? e : 0),
                    a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" == i ? e : 0),
                    o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max"),
                    n = i && e < i ? i : e;
                return s && n > s ? s : n
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, s) {
                var n = this._getNumberOfMonths(t),
                    a = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                return e < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
            },
            _isInRange: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max");
                return (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime())
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, s) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function(t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" == typeof t && ("isDisabled" == t || "getDate" == t || "widget" == t) || "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            })
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = new Date().getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function(t, e) {
        var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            s = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            n = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        t.widget("ui.dialog", {
            version: "1.9.2",
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function() {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.options.title = this.options.title || this.originalTitle;
                var e, s, n, a, o, r = this,
                    h = this.options,
                    l = h.title || "&#160;";
                e = (this.uiDialog = t("<div>")).addClass(i + h.dialogClass).css({
                    display: "none",
                    outline: 0,
                    zIndex: h.zIndex
                }).attr("tabIndex", -1).keydown(function(e) {
                    h.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (r.close(e), e.preventDefault())
                }).mousedown(function(t) {
                    r.moveToTop(!1, t)
                }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e), s = (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                    e.focus()
                }).prependTo(e), n = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(t) {
                    t.preventDefault(), r.close(t)
                }).appendTo(s), (this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(h.closeText).appendTo(n), a = t("<span>").uniqueId().addClass("ui-dialog-title").html(l).prependTo(s), o = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(o), e.attr({
                    role: "dialog",
                    "aria-labelledby": a.attr("id")
                }), s.find("*").add(s).disableSelection(), this._hoverable(n), this._focusable(n), h.draggable && t.fn.draggable && this._makeDraggable(), h.resizable && t.fn.resizable && this._makeResizable(), this._createButtons(h.buttons), this._isOpen = !1, t.fn.bgiframe && e.bgiframe(), this._on(e, {
                    keydown: function(i) {
                        if (h.modal && i.keyCode === t.ui.keyCode.TAB) {
                            var s = t(":tabbable", e),
                                n = s.filter(":first"),
                                a = s.filter(":last");
                            return i.target !== a[0] || i.shiftKey ? i.target === n[0] && i.shiftKey ? (a.focus(1), !1) : void 0 : (n.focus(1), !1)
                        }
                    }
                })
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _destroy: function() {
                var t, e = this.oldPosition;
                this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            close: function(e) {
                var i, s, n = this;
                if (this._isOpen && !1 !== this._trigger("beforeClose", e)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                    n._trigger("close", e)
                }) : (this.uiDialog.hide(), this._trigger("close", e)), t.ui.dialog.overlay.resize(), this.options.modal && (i = 0, t(".ui-dialog").each(function() {
                    this === n.uiDialog[0] || isNaN(s = t(this).css("z-index")) || (i = Math.max(i, s))
                }), t.ui.dialog.maxZ = i), this
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function(e, i) {
                var s, n = this.options;
                return (!n.modal || e) && (n.stack || n.modal) ? (n.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = n.zIndex), this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), s = {
                    scrollTop: this.element.scrollTop(),
                    scrollLeft: this.element.scrollLeft()
                }, t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(s), this._trigger("focus", i), this) : this._trigger("focus", i)
            },
            open: function() {
                if (!this._isOpen) {
                    var e, i = this.options,
                        s = this.uiDialog;
                    return this._size(), this._position(i.position), s.show(i.show), this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null, this.moveToTop(!0), (e = this.element.find(":tabbable")).length || (e = this.uiDialogButtonPane.find(":tabbable")).length || (e = s), e.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
                }
            },
            _createButtons: function(e) {
                var i = this,
                    s = !1;
                this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof e && null !== e && t.each(e, function() {
                    return s = !0, !1
                }), s ? (t.each(e, function(e, s) {
                    var n, a;
                    s = t.isFunction(s) ? {
                        click: s,
                        text: e
                    } : s, a = (s = t.extend({
                        type: "button"
                    }, s)).click, s.click = function() {
                        a.apply(i.element[0], arguments)
                    }, n = t("<button></button>", s).appendTo(i.uiButtonSet), t.fn.button && n.button()
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
            },
            _makeDraggable: function() {
                var e = this,
                    i = this.options;

                function s(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(i, n) {
                        t(this).addClass("ui-dialog-dragging"), e._trigger("dragStart", i, s(n))
                    },
                    drag: function(t, i) {
                        e._trigger("drag", t, s(i))
                    },
                    stop: function(n, a) {
                        i.position = [a.position.left - e.document.scrollLeft(), a.position.top - e.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), e._trigger("dragStop", n, s(a)), t.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function(e) {
                e = void 0 === e ? this.options.resizable : e;
                var i = this,
                    s = this.options,
                    n = this.uiDialog.css("position"),
                    a = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";

                function o(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: s.maxWidth,
                    maxHeight: s.maxHeight,
                    minWidth: s.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function(e, s) {
                        t(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", e, o(s))
                    },
                    resize: function(t, e) {
                        i._trigger("resize", t, o(e))
                    },
                    stop: function(e, n) {
                        t(this).removeClass("ui-dialog-resizing"), s.height = t(this).height(), s.width = t(this).width(), i._trigger("resizeStop", e, o(n)), t.ui.dialog.overlay.resize()
                    }
                }).css("position", n).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function(e) {
                var i, s = [],
                    n = [0, 0];
                e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (1 === (s = e.split ? e.split(" ") : [e[0], e[1]]).length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
                    +s[t] === s[t] && (n[t] = s[t], s[t] = e)
                }), e = {
                    my: s[0] + (n[0] < 0 ? n[0] : "+" + n[0]) + " " + s[1] + (n[1] < 0 ? n[1] : "+" + n[1]),
                    at: s.join(" ")
                }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.position(e), i || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    a = {},
                    o = !1;
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in s && (o = !0), t in n && (a[t] = e)
                }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", a)
            },
            _setOption: function(e, s) {
                var n, a, o = this.uiDialog;
                switch (e) {
                    case "buttons":
                        this._createButtons(s);
                        break;
                    case "closeText":
                        this.uiDialogTitlebarCloseText.text("" + s);
                        break;
                    case "dialogClass":
                        o.removeClass(this.options.dialogClass).addClass(i + s);
                        break;
                    case "disabled":
                        s ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        (n = o.is(":data(draggable)")) && !s && o.draggable("destroy"), !n && s && this._makeDraggable();
                        break;
                    case "position":
                        this._position(s);
                        break;
                    case "resizable":
                        (a = o.is(":data(resizable)")) && !s && o.resizable("destroy"), a && "string" == typeof s && o.resizable("option", "handles", s), a || !1 === s || this._makeResizable(s);
                        break;
                    case "title":
                        t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (s || "&#160;"))
                }
                this._super(e, s)
            },
            _size: function() {
                var e, i, s, n = this.options,
                    a = this.uiDialog.is(":visible");
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), e = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), i = Math.max(0, n.minHeight - e), "auto" === n.height ? t.support.minHeight ? this.element.css({
                    minHeight: i,
                    height: "auto"
                }) : (this.uiDialog.show(), s = this.element.css("height", "auto").height(), a || this.uiDialog.hide(), this.element.height(Math.max(s, i))) : this.element.height(Math.max(n.height - e, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), t.extend(t.ui.dialog, {
            uuid: 0,
            maxZ: 0,
            getTitleId: function(t) {
                var e = t.attr("id");
                return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
            },
            overlay: function(e) {
                this.$el = t.ui.dialog.overlay.create(e)
            }
        }), t.extend(t.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(t) {
                return t + ".dialog-overlay"
            }).join(" "),
            create: function(e) {
                0 === this.instances.length && (setTimeout(function() {
                    t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function(e) {
                        if (t(e.target).zIndex() < t.ui.dialog.overlay.maxZ) return !1
                    })
                }, 1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
                var i = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
                return t(document).bind("keydown.dialog-overlay", function(s) {
                    var n = t.ui.dialog.overlay.instances;
                    0 !== n.length && n[n.length - 1] === i && e.options.closeOnEscape && !s.isDefaultPrevented() && s.keyCode && s.keyCode === t.ui.keyCode.ESCAPE && (e.close(s), s.preventDefault())
                }), i.appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                }), t.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
            },
            destroy: function(e) {
                var i = t.inArray(e, this.instances),
                    s = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.height(0).width(0).remove(), t.each(this.instances, function() {
                    s = Math.max(s, this.css("z-index"))
                }), this.maxZ = s
            },
            height: function() {
                var e, i;
                return t.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) < (i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight)) ? t(window).height() + "px" : e + "px" : t(document).height() + "px"
            },
            width: function() {
                var e, i;
                return t.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)) < (i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth)) ? t(window).width() + "px" : e + "px" : t(document).width() + "px"
            },
            resize: function() {
                var e = t([]);
                t.each(t.ui.dialog.overlay.instances, function() {
                    e = e.add(this)
                }), e.css({
                    width: 0,
                    height: 0
                }).css({
                    width: t.ui.dialog.overlay.width(),
                    height: t.ui.dialog.overlay.height()
                })
            }
        }), t.extend(t.ui.dialog.overlay.prototype, {
            destroy: function() {
                t.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function(t, e) {
        var i = /up|down|vertical/,
            s = /up|left|vertical|horizontal/;
        t.effects.effect.blind = function(e, n) {
            var a, o, r, h = t(this),
                l = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(h, e.mode || "hide"),
                u = e.direction || "up",
                d = i.test(u),
                p = d ? "height" : "width",
                f = d ? "top" : "left",
                g = s.test(u),
                m = {},
                v = "show" === c;
            h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), o = (a = t.effects.createWrapper(h).css({
                overflow: "hidden"
            }))[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                position: "absolute"
            }), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
                duration: e.duration,
                easing: e.easing,
                queue: !1,
                complete: function() {
                    "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.bounce = function(e, i) {
            var s, n, a, o = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = t.effects.setMode(o, e.mode || "effect"),
                l = "hide" === h,
                c = "show" === h,
                u = e.direction || "up",
                d = e.distance,
                p = e.times || 5,
                f = 2 * p + (c || l ? 1 : 0),
                g = e.duration / f,
                m = e.easing,
                v = "up" === u || "down" === u ? "top" : "left",
                b = "up" === u || "left" === u,
                $ = o.queue(),
                y = $.length;
            for ((c || l) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && ((a = {
                    opacity: 1
                })[v] = 0, o.css("opacity", 0).css(v, b ? -(2 * d) : 2 * d).animate(a, g, m)), l && (d /= Math.pow(2, p - 1)), (a = {})[v] = 0, s = 0; s < p; s++)(n = {})[v] = (b ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = l ? 2 * d : d / 2;
            l && ((n = {
                opacity: 0
            })[v] = (b ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function() {
                l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }), y > 1 && $.splice.apply($, [1, 0].concat($.splice(y, f + 1))), o.dequeue()
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.clip = function(e, i) {
            var s, n, a, o = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = "show" === t.effects.setMode(o, e.mode || "hide"),
                l = "vertical" === (e.direction || "vertical"),
                c = l ? "height" : "width",
                u = l ? "top" : "left",
                d = {};
            t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }), a = (n = "IMG" === o[0].tagName ? s : o)[c](), h && (n.css(c, 0), n.css(u, a / 2)), d[c] = h ? a : 0, d[u] = h ? 0 : a / 2, n.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.drop = function(e, i) {
            var s, n = t(this),
                a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = t.effects.setMode(n, e.mode || "hide"),
                r = "show" === o,
                h = e.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                c = "up" === h || "left" === h ? "pos" : "neg",
                u = {
                    opacity: r ? 1 : 0
                };
            t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.explode = function(e, i) {
            var s, n, a, o, r, h, l = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                c = l,
                u = t(this),
                d = "show" === t.effects.setMode(u, e.mode || "hide"),
                p = u.show().css("visibility", "hidden").offset(),
                f = Math.ceil(u.outerWidth() / c),
                g = Math.ceil(u.outerHeight() / l),
                m = [];

            function v() {
                m.push(this), m.length === l * c && b()
            }
            for (s = 0; s < l; s++)
                for (n = 0, o = p.top + s * g, h = s - (l - 1) / 2; n < c; n++) a = p.left + n * f, r = n - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -n * f,
                    top: -s * g
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: f,
                    height: g,
                    left: a + (d ? r * f : 0),
                    top: o + (d ? h * g : 0),
                    opacity: d ? 0 : 1
                }).animate({
                    left: a + (d ? 0 : r * f),
                    top: o + (d ? 0 : h * g),
                    opacity: d ? 1 : 0
                }, e.duration || 500, e.easing, v);

            function b() {
                u.css({
                    visibility: "visible"
                }), t(m).remove(), d || u.hide(), i()
            }
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.fade = function(e, i) {
            var s = t(this),
                n = t.effects.setMode(s, e.mode || "toggle");
            s.animate({
                opacity: n
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.fold = function(e, i) {
            var s, n, a = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                r = t.effects.setMode(a, e.mode || "hide"),
                h = "show" === r,
                l = "hide" === r,
                c = e.size || 15,
                u = /([0-9]+)%/.exec(c),
                d = !!e.horizFirst,
                p = h !== d,
                f = p ? ["width", "height"] : ["height", "width"],
                g = e.duration / 2,
                m = {},
                v = {};
            t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
                overflow: "hidden"
            }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
                height: 0,
                width: c
            } : {
                height: c,
                width: 0
            }), m[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
                l && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.highlight = function(e, i) {
            var s = t(this),
                n = ["backgroundImage", "backgroundColor", "opacity"],
                a = t.effects.setMode(s, e.mode || "show"),
                o = {
                    backgroundColor: s.css("backgroundColor")
                };
            "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === a && s.hide(), t.effects.restore(s, n), i()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.pulsate = function(e, i) {
            var s, n = t(this),
                a = t.effects.setMode(n, e.mode || "show"),
                o = "show" === a,
                r = "hide" === a,
                h = o || "hide" === a,
                l = 2 * (e.times || 5) + (h ? 1 : 0),
                c = e.duration / l,
                u = 0,
                d = n.queue(),
                p = d.length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; s < l; s++) n.animate({
                opacity: u
            }, c, e.easing), u = 1 - u;
            n.animate({
                opacity: u
            }, c, e.easing), n.queue(function() {
                r && n.hide(), i()
            }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.puff = function(e, i) {
            var s = t(this),
                n = t.effects.setMode(s, e.mode || "hide"),
                a = "hide" === n,
                o = parseInt(e.percent, 10) || 150,
                r = o / 100,
                h = {
                    height: s.height(),
                    width: s.width(),
                    outerHeight: s.outerHeight(),
                    outerWidth: s.outerWidth()
                };
            t.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: n,
                complete: i,
                percent: a ? o : 100,
                from: a ? h : {
                    height: h.height * r,
                    width: h.width * r,
                    outerHeight: h.outerHeight * r,
                    outerWidth: h.outerWidth * r
                }
            }), s.effect(e)
        }, t.effects.effect.scale = function(e, i) {
            var s = t(this),
                n = t.extend(!0, {}, e),
                a = t.effects.setMode(s, e.mode || "effect"),
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
                r = e.direction || "both",
                h = e.origin,
                l = {
                    height: s.height(),
                    width: s.width(),
                    outerHeight: s.outerHeight(),
                    outerWidth: s.outerWidth()
                },
                c = {
                    y: "horizontal" !== r ? o / 100 : 1,
                    x: "vertical" !== r ? o / 100 : 1
                };
            n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : l), n.to = {
                height: l.height * c.y,
                width: l.width * c.x,
                outerHeight: l.outerHeight * c.y,
                outerWidth: l.outerWidth * c.x
            }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
        }, t.effects.effect.size = function(e, i) {
            var s, n, a, o = t(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                l = ["width", "height", "overflow"],
                c = ["fontSize"],
                u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = t.effects.setMode(o, e.mode || "effect"),
                f = e.restore || "effect" !== p,
                g = e.scale || "both",
                m = e.origin || ["middle", "center"],
                v = o.css("position"),
                b = f ? r : h,
                $ = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && o.show(), s = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === e.mode && "show" === p ? (o.from = e.to || $, o.to = e.from || s) : (o.from = e.from || ("show" === p ? $ : s), o.to = e.to || ("hide" === p ? $ : s)), a = {
                from: {
                    y: o.from.height / s.height,
                    x: o.from.width / s.width
                },
                to: {
                    y: o.to.height / s.height,
                    x: o.to.width / s.width
                }
            }, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (b = b.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (b = b.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (b = b.concat(c).concat(l), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, b), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), o.find("*[width]").each(function() {
                var i = t(this),
                    s = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                f && t.effects.save(i, l), i.from = {
                    height: s.height * a.from.y,
                    width: s.width * a.from.x,
                    outerHeight: s.outerHeight * a.from.y,
                    outerWidth: s.outerWidth * a.from.x
                }, i.to = {
                    height: s.height * a.to.y,
                    width: s.width * a.to.x,
                    outerHeight: s.height * a.to.y,
                    outerWidth: s.width * a.to.x
                }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                    f && t.effects.restore(i, l)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, b), f || ("static" === v ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : t.each(["top", "left"], function(t, e) {
                        o.css(e, function(e, i) {
                            var s = parseInt(i, 10),
                                n = t ? o.to.left : o.to.top;
                            return "auto" === i ? n + "px" : s + n + "px"
                        })
                    })), t.effects.removeWrapper(o), i()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.shake = function(e, i) {
            var s, n = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = t.effects.setMode(n, e.mode || "effect"),
                r = e.direction || "left",
                h = e.distance || 20,
                l = e.times || 3,
                c = 2 * l + 1,
                u = Math.round(e.duration / c),
                d = "up" === r || "down" === r ? "top" : "left",
                p = "up" === r || "left" === r,
                f = {},
                g = {},
                m = {},
                v = n.queue(),
                b = v.length;
            for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; s < l; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
            n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }), b > 1 && v.splice.apply(v, [1, 0].concat(v.splice(b, c + 1))), n.dequeue()
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.slide = function(e, i) {
            var s, n = t(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = t.effects.setMode(n, e.mode || "show"),
                r = "show" === o,
                h = e.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                c = "up" === h || "left" === h,
                u = {};
            t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
                overflow: "hidden"
            }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
                }
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.effect.transfer = function(e, i) {
            var s = t(this),
                n = t(e.to),
                a = "fixed" === n.css("position"),
                o = t("body"),
                r = a ? o.scrollTop() : 0,
                h = a ? o.scrollLeft() : 0,
                l = n.offset(),
                c = {
                    top: l.top - r,
                    left: l.left - h,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                },
                u = s.offset(),
                d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - h,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: a ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(), i()
                })
        }
    }(jQuery),
    function(t, e) {
        var i = !1;
        t.widget("ui.menu", {
            version: "1.9.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                    this.options.disabled && t.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(e) {
                        var s = t(e.target).closest(".ui-menu-item");
                        !i && s.not(".ui-state-disabled").length && (i = !0, this.select(e), s.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        var i = t(e.currentTarget);
                        i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.children(".ui-menu-item").eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        t(e.target).closest(".ui-menu").length || this.collapseAll(e), i = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(e) {
                var i, s, n, a, o, r = !0;

                function h(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        r = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, o = RegExp("^" + h(n), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(t(this).children("a").text())
                        }), (i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (o = RegExp("^" + h(n = String.fromCharCode(e.keyCode)), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(t(this).children("a").text())
                        })), i.length ? (this.focus(e, i), i.length > 1 ? (this.previousFilter = n, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                r && e.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i = this.options.icons.submenu,
                    s = this.element.find(this.options.menus);
                s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        s = e.prev("a"),
                        n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                    s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
                }), (e = s.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), e.children(":not(.ui-menu-item)").each(function() {
                    var e = t(this);
                    /[^\-—–\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return ({
                    menu: "menuitem",
                    listbox: "option"
                })[this.options.role]
            },
            focus: function(t, e) {
                var i, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = e.children(".ui-menu")).length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, s, n, a, o, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), n < 0 ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var i = t.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var s;
                this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
            },
            nextPage: function(e) {
                var i, s, n;
                if (!this.active) {
                    this.next(e);
                    return
                }!this.isLastItem() && (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - s - n < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))
            },
            previousPage: function(e) {
                var i, s, n;
                if (!this.active) {
                    this.next(e);
                    return
                }!this.isFirstItem() && (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - s + n > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            }
        })
    }(jQuery),
    function(t, e) {
        t.ui = t.ui || {};
        var i, s, n, a = Math.max,
            o = Math.abs,
            r = Math.round,
            h = /left|center|right/,
            l = /top|center|bottom/,
            c = /[\+\-]\d+%?/,
            u = /^\w+/,
            d = /%$/,
            p = t.fn.position;

        function f(t, e, i) {
            return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
        }

        function g(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        t.position = {
                scrollbarWidth: function() {
                    if (n !== e) return n;
                    var i, s, a = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = a.children()[0];
                    return t("body").append(a), i = o.offsetWidth, a.css("overflow", "scroll"), i === (s = o.offsetWidth) && (s = a[0].clientWidth), a.remove(), n = i - s
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow ? "" : e.element.css("overflow-x"),
                        s = e.isWindow ? "" : e.element.css("overflow-y"),
                        n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                    return {
                        width: n ? t.position.scrollbarWidth() : 0,
                        height: a ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        s = t.isWindow(i[0]);
                    return {
                        element: i,
                        isWindow: s,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: s ? i.width() : i.outerWidth(),
                        height: s ? i.height() : i.outerHeight()
                    }
                }
            }, t.fn.position = function(e) {
                if (!e || !e.of) return p.apply(this, arguments);
                e = t.extend({}, e);
                var i, s, n, d, m, v = t(e.of),
                    b = t.position.getWithinInfo(e.within),
                    $ = t.position.getScrollInfo(b),
                    y = v[0],
                    _ = (e.collision || "flip").split(" "),
                    w = {};
                return 9 === y.nodeType ? (s = v.width(), n = v.height(), d = {
                    top: 0,
                    left: 0
                }) : t.isWindow(y) ? (s = v.width(), n = v.height(), d = {
                    top: v.scrollTop(),
                    left: v.scrollLeft()
                }) : y.preventDefault ? (e.at = "left top", s = n = 0, d = {
                    top: y.pageY,
                    left: y.pageX
                }) : (s = v.outerWidth(), n = v.outerHeight(), d = v.offset()), m = t.extend({}, d), t.each(["my", "at"], function() {
                    var t, i, s = (e[this] || "").split(" ");
                    1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : l.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = l.test(s[1]) ? s[1] : "center", t = c.exec(s[0]), i = c.exec(s[1]), w[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [u.exec(s[0])[0], u.exec(s[1])[0]]
                }), 1 === _.length && (_[1] = _[0]), "right" === e.at[0] ? m.left += s : "center" === e.at[0] && (m.left += s / 2), "bottom" === e.at[1] ? m.top += n : "center" === e.at[1] && (m.top += n / 2), i = f(w.at, s, n), m.left += i[0], m.top += i[1], this.each(function() {
                    var h, l, c = t(this),
                        u = c.outerWidth(),
                        p = c.outerHeight(),
                        y = g(this, "marginLeft"),
                        x = g(this, "marginTop"),
                        k = u + y + g(this, "marginRight") + $.width,
                        C = p + x + g(this, "marginBottom") + $.height,
                        D = t.extend({}, m),
                        P = f(w.my, c.outerWidth(), c.outerHeight());
                    "right" === e.my[0] ? D.left -= u : "center" === e.my[0] && (D.left -= u / 2), "bottom" === e.my[1] ? D.top -= p : "center" === e.my[1] && (D.top -= p / 2), D.left += P[0], D.top += P[1], t.support.offsetFractions || (D.left = r(D.left), D.top = r(D.top)), h = {
                        marginLeft: y,
                        marginTop: x
                    }, t.each(["left", "top"], function(a, o) {
                        t.ui.position[_[a]] && t.ui.position[_[a]][o](D, {
                            targetWidth: s,
                            targetHeight: n,
                            elemWidth: u,
                            elemHeight: p,
                            collisionPosition: h,
                            collisionWidth: k,
                            collisionHeight: C,
                            offset: [i[0] + P[0], i[1] + P[1]],
                            my: e.my,
                            at: e.at,
                            within: b,
                            elem: c
                        })
                    }), t.fn.bgiframe && c.bgiframe(), e.using && (l = function(t) {
                        var i = d.left - D.left,
                            r = i + s - u,
                            h = d.top - D.top,
                            l = h + n - p,
                            f = {
                                target: {
                                    element: v,
                                    left: d.left,
                                    top: d.top,
                                    width: s,
                                    height: n
                                },
                                element: {
                                    element: c,
                                    left: D.left,
                                    top: D.top,
                                    width: u,
                                    height: p
                                },
                                horizontal: r < 0 ? "left" : i > 0 ? "right" : "center",
                                vertical: l < 0 ? "top" : h > 0 ? "bottom" : "middle"
                            };
                        s < u && o(i + r) < s && (f.horizontal = "center"), n < p && o(h + l) < n && (f.vertical = "middle"), a(o(i), o(r)) > a(o(h), o(l)) ? f.important = "horizontal" : f.important = "vertical", e.using.call(this, t, f)
                    }), c.offset(t.extend(D, {
                        using: l
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, s = e.within,
                            n = s.isWindow ? s.scrollLeft : s.offset.left,
                            o = s.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            h = n - r,
                            l = r + e.collisionWidth - o - n;
                        e.collisionWidth > o ? h > 0 && l <= 0 ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : l > 0 && h <= 0 ? t.left = n : h > l ? t.left = n + o - e.collisionWidth : t.left = n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
                    },
                    top: function(t, e) {
                        var i, s = e.within,
                            n = s.isWindow ? s.scrollTop : s.offset.top,
                            o = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            h = n - r,
                            l = r + e.collisionHeight - o - n;
                        e.collisionHeight > o ? h > 0 && l <= 0 ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : l > 0 && h <= 0 ? t.top = n : h > l ? t.top = n + o - e.collisionHeight : t.top = n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, s, n = e.within,
                            a = n.offset.left + n.scrollLeft,
                            r = n.width,
                            h = n.isWindow ? n.scrollLeft : n.offset.left,
                            l = t.left - e.collisionPosition.marginLeft,
                            c = l - h,
                            u = l + e.collisionWidth - r - h,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - a) < 0 || i < o(c)) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || o(s) < u) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, s, n = e.within,
                            a = n.offset.top + n.scrollTop,
                            r = n.height,
                            h = n.isWindow ? n.scrollTop : n.offset.top,
                            l = t.top - e.collisionPosition.marginTop,
                            c = l - h,
                            u = l + e.collisionHeight - r - h,
                            d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            f = -2 * e.offset[1];
                        c < 0 ? (s = t.top + d + p + f + e.collisionHeight - r - a, t.top + d + p + f > c && (s < 0 || s < o(c)) && (t.top += d + p + f)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + d + p + f - h, t.top + d + p + f > u && (i > 0 || o(i) < u) && (t.top += d + p + f))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                    r = document.createElement("div");
                for (a in e = document.createElement(o ? "div" : "body"), s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, o && t.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), s) e.style[a] = s[a];
                e.appendChild(r), (i = o || document.documentElement).insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && n < 11, e.innerHTML = "", i.removeChild(e)
            }(), !1 !== t.uiBackCompat && (s = (i = jQuery).fn.position, i.fn.position = function(t) {
                if (!t || !t.offset) return s.call(this, t);
                var n = t.offset.split(" "),
                    a = t.at.split(" ");
                return 1 === n.length && (n[1] = n[0]), /^\d/.test(n[0]) && (n[0] = "+" + n[0]), /^\d/.test(n[1]) && (n[1] = "+" + n[1]), 1 === a.length && (/left|center|right/.test(a[0]) ? a[1] = "center" : (a[1] = a[0], a[0] = "center")), s.call(this, i.extend(t, {
                    at: a[0] + n[0] + " " + a[1] + n[1],
                    offset: e
                }))
            })
    }(jQuery),
    function(t, e) {
        t.widget("ui.progressbar", {
            version: "1.9.2",
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this._value() : (this._setOption("value", t), this)
            },
            _setOption: function(t, e) {
                "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(t, e)
            },
            _value: function() {
                var t = this.options.value;
                return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var t = this.value(),
                    e = this._percentage();
                this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
            }
        })
    }(jQuery),
    function(t, e) {
        var i = 5;
        t.widget("ui.slider", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var e, s, n = this.options,
                    a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    r = [];
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), n.range && (!0 === n.range && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && 2 !== n.values.length && (n.values = [n.values[0], n.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : ""))), s = n.values && n.values.length || 1, e = a.length; e < s; e++) r.push(o);
                this.handles = a.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(t) {
                    t.preventDefault()
                }).mouseenter(function() {
                    n.disabled || t(this).addClass("ui-state-hover")
                }).mouseleave(function() {
                    t(this).removeClass("ui-state-hover")
                }).focus(function() {
                    n.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
                }).blur(function() {
                    t(this).removeClass("ui-state-focus")
                }), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e)
                }), this._on(this.handles, {
                    keydown: function(e) {
                        var s, n, a, o, r = t(e.target).data("ui-slider-handle-index");
                        switch (e.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), !1 === (s = this._start(e, r)))) return
                        }
                        switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), e.keyCode) {
                            case t.ui.keyCode.HOME:
                                a = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                a = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / i);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / i);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (n === this._valueMax()) return;
                                a = this._trimAlignValue(n + o);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (n === this._valueMin()) return;
                                a = this._trimAlignValue(n - o)
                        }
                        this._slide(e, r, a)
                    },
                    keyup: function(e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                    }
                }), this._refreshValue(), this._animateOff = !1
            },
            _destroy: function() {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, s, n, a, o, r, h, l, c = this,
                    u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(s - c.values(e));
                    n > i && (n = i, a = t(this), o = e)
                }), !0 === u.range && this.values(1) === u.min && (o += 1, a = t(this.handles[o])), !1 !== (r = this._start(e, o)) && (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - h.left - a.width() / 2,
                    top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, a;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, a = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: n
                }), s = this.values(e ? 0 : 1), !1 !== a && this.values(e, i, !0))) : i !== this.value() && !1 !== (a = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                })) && this.value(i)
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
                }
            },
            value: function(t) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0);
                    return
                }
                return this._value()
            },
            values: function(e, i) {
                var s, n, a;
                if (arguments.length > 1) {
                    this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e);
                    return
                }
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (a = 0, s = this.options.values, n = arguments[0]; a < s.length; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch (t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; s < n; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                for (s = 0, i = this.options.values.slice(); s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var e, i, s, n, a, o = this.options.range,
                    r = this.options,
                    h = this,
                    l = !this._animateOff && r.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function(s) {
                    i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (s = this.value(), n = this._valueMin(), i = (a = this._valueMax()) !== n ? (s - n) / (a - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))
            }
        })
    }(jQuery),
    function(t) {
        function e(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.widget("ui.spinner", {
            version: "1.9.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var e = {},
                    i = this.element;
                return t.each(["min", "max", "step"], function(t, s) {
                    var n = i.attr(s);
                    void 0 !== n && n.length && (e[s] = n)
                }), e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    var i;

                    function s() {
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), s.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, s.call(this)
                    }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    if (t(e.currentTarget).hasClass("ui-state-active")) {
                        if (!1 === this._start(e)) return !1;
                        this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                    }
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
            },
            _keydown: function(e) {
                var i = this.options,
                    s = t.ui.keyCode;
                switch (e.keyCode) {
                    case s.UP:
                        return this._repeat(null, 1, e), !0;
                    case s.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case s.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case s.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(t) {
                return (!!this.spinning || !1 !== this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), (!this.spinning || !1 !== this._trigger("spin", e, {
                    value: i
                })) && (this._value(i), this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, s = this.options;
                return (i = Math.round((i = t - (e = null !== s.min ? s.min : 0)) / s.step) * s.step, t = parseFloat((t = e + i).toFixed(this._precision())), null !== s.max && t > s.max) ? s.max : null !== s.min && t < s.min ? s.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var i = this._parse(this.element.val());
                    this.options[t] = e, this.element.val(this._format(i));
                    return
                }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: e(function(t) {
                this._super(t), this._value(this.element.val())
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._spin((t || 1) * this.options.step)
            },
            stepDown: e(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._spin(-((t || 1) * this.options.step))
            },
            pageUp: e(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                if (!arguments.length) return this._parse(this.element.val());
                e(this._value).call(this, t)
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function(t, e) {
        var i, s = 0,
            n = /#.*$/;

        function a() {
            return ++s
        }

        function o(t) {
            return t.hash.length > 1 && t.href.replace(n, "") === location.href.replace(n, "").replace(/\s/g, "%20")
        }
        t.widget("ui.tabs", {
            version: "1.9.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var e = this,
                    i = this.options,
                    s = i.active,
                    n = location.hash.substring(1);
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), null === s && (n && this.tabs.each(function(e, i) {
                    if (t(i).attr("aria-controls") === n) return s = e, !1
                }), null === s && (s = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === s || -1 === s) && (s = !!this.tabs.length && 0)), !1 !== s && -1 === (s = this.tabs.index(this.tabs.eq(s))) && (s = !i.collapsible && 0), i.active = s, !i.collapsible && !1 === i.active && this.anchors.length && (i.active = 0), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    s = this.tabs.index(i),
                    n = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            s++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            n = !1, s--;
                            break;
                        case t.ui.keyCode.END:
                            s = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            s = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            e.preventDefault(), clearTimeout(this.activating), this._activate(s);
                            return;
                        case t.ui.keyCode.ENTER:
                            e.preventDefault(), clearTimeout(this.activating), this._activate(s !== this.options.active && s);
                            return;
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", s)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                !this._handlePageNav(e) && e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                var s = this.tabs.length - 1;

                function n() {
                    return e > s && (e = 0), e < 0 && (e = s), e
                }
                for (; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function(t, e) {
                if ("active" === t) {
                    this._activate(e);
                    return
                }
                if ("disabled" === t) {
                    this._setupDisabled(e);
                    return
                }
                this._super(t, e), "collapsible" !== t || (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)
            },
            _tabId: function(t) {
                return t.attr("aria-controls") || "ui-tabs-" + a()
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function(i, s) {
                    var n, a, r, h = t(s).uniqueId().attr("id"),
                        l = t(s).closest("li"),
                        c = l.attr("aria-controls");
                    o(s) ? (n = s.hash, a = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (r = e._tabId(l)), (a = e.element.find(n)).length || (a = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                        "aria-controls": n.substring(1),
                        "aria-labelledby": h
                    }), a.attr("aria-labelledby", h)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, s = 0; i = this.tabs[s]; s++) !0 === e || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function(e) {
                var i = {
                    click: function(t) {
                        t.preventDefault()
                    }
                };
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, s, n = this.element.parent();
                "fill" === e ? (t.support.minHeight || (s = n.css("overflow"), n.css("overflow", "hidden")), i = n.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        s = e.css("position");
                    "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
                }), s && n.css("overflow", s), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    s = this.active,
                    n = t(e.currentTarget).closest("li"),
                    a = n[0] === s[0],
                    o = a && i.collapsible,
                    r = o ? t() : this._getPanelForTab(n),
                    h = s.length ? this._getPanelForTab(s) : t(),
                    l = {
                        oldTab: s,
                        oldPanel: h,
                        newTab: o ? t() : n,
                        newPanel: r
                    };
                e.preventDefault(), !(n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading")) && !this.running && (!a || i.collapsible) && !1 !== this._trigger("beforeActivate", e, l) && (i.active = !o && this.tabs.index(n), this.active = a ? t() : n, this.xhr && this.xhr.abort(), h.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), e), this._toggle(e, l))
            },
            _toggle: function(e, i) {
                var s = this,
                    n = i.newPanel,
                    a = i.oldPanel;

                function o() {
                    s.running = !1, s._trigger("activate", e, i)
                }

                function r() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), n.length && s.options.show ? s._show(n, s.options.show, o) : (n.show(), o())
                }
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), r()), a.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.oldTab.attr("aria-selected", "false"), n.length && a.length ? i.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), n.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), i.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, s = this._findActive(e);
                s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(i) {
                var s = this.options.disabled;
                !1 !== s && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
                    return t !== i ? t : null
                }) : t.map(this.tabs, function(t, e) {
                    return e !== i ? e : null
                })), this._setupDisabled(s))
            },
            disable: function(i) {
                var s = this.options.disabled;
                if (!0 !== s) {
                    if (i === e) s = !0;
                    else {
                        if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                        s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                    }
                    this._setupDisabled(s)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var s = this,
                    n = this.tabs.eq(e),
                    a = n.find(".ui-tabs-anchor"),
                    r = this._getPanelForTab(n),
                    h = {
                        tab: n,
                        panel: r
                    };
                !o(a[0]) && (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                    setTimeout(function() {
                        r.html(t), s._trigger("load", i, h)
                    }, 1)
                }).complete(function(t, e) {
                    setTimeout(function() {
                        "abort" === e && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, s) {
                var n = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, a) {
                        return n._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: a
                        }, s))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && (t.ui.tabs.prototype._ui = function(t, e) {
            return {
                tab: t,
                panel: e,
                index: this.anchors.index(t)
            }
        }, t.widget("ui.tabs", t.ui.tabs, {
            url: function(t, e) {
                this.anchors.eq(t).attr("href", e)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                ajaxOptions: null,
                cache: !1
            },
            _create: function() {
                this._super();
                var e = this;
                this._on({
                    tabsbeforeload: function(i, s) {
                        if (t.data(s.tab[0], "cache.tabs")) {
                            i.preventDefault();
                            return
                        }
                        s.jqXHR.success(function() {
                            e.options.cache && t.data(s.tab[0], "cache.tabs", !0)
                        })
                    }
                })
            },
            _ajaxSettings: function(e, i, s) {
                var n = this.options.ajaxOptions;
                return t.extend({}, n, {
                    error: function(t, e) {
                        try {
                            n.error(t, e, s.tab.closest("li").index(), s.tab[0])
                        } catch (i) {}
                    }
                }, this._superApply(arguments))
            },
            _setOption: function(t, e) {
                "cache" === t && !1 === e && this.anchors.removeData("cache.tabs"), this._super(t, e)
            },
            _destroy: function() {
                this.anchors.removeData("cache.tabs"), this._super()
            },
            url: function(t) {
                this.anchors.eq(t).removeData("cache.tabs"), this._superApply(arguments)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            abort: function() {
                this.xhr && this.xhr.abort()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                spinner: "<em>Loading&#8230;</em>"
            },
            _create: function() {
                this._super(), this._on({
                    tabsbeforeload: function(t, e) {
                        if (t.target === this.element[0] && this.options.spinner) {
                            var i = e.tab.find("span"),
                                s = i.html();
                            i.html(this.options.spinner), e.jqXHR.complete(function() {
                                i.html(s)
                            })
                        }
                    }
                })
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                enable: null,
                disable: null
            },
            enable: function(e) {
                var i, s = this.options;
                (e && !0 === s.disabled || t.isArray(s.disabled) && -1 !== t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
            },
            disable: function(e) {
                var i, s = this.options;
                (e && !1 === s.disabled || t.isArray(s.disabled) && -1 === t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                add: null,
                remove: null,
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            add: function(i, s, n) {
                n === e && (n = this.anchors.length);
                var a, o, r = this.options,
                    h = t(r.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, s)),
                    l = i.indexOf("#") ? this._tabId(h) : i.replace("#", "");
                return h.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), h.attr("aria-controls", l), a = n >= this.tabs.length, (o = this.element.find("#" + l)).length || (o = this._createPanel(l), a ? n > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[n])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), a ? h.appendTo(this.tablist) : h.insertBefore(this.tabs[n]), r.disabled = t.map(r.disabled, function(t) {
                    return t >= n ? ++t : t
                }), this.refresh(), 1 === this.tabs.length && !1 === r.active && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
            },
            remove: function(e) {
                e = this._getIndex(e);
                var i = this.options,
                    s = this.tabs.eq(e).remove(),
                    n = this._getPanelForTab(s).remove();
                return s.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (e + 1 < this.anchors.length ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, function(t) {
                    return t !== e
                }), function(t) {
                    return t >= e ? --t : t
                }), this.refresh(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            length: function() {
                return this.anchors.length
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                idPrefix: "ui-tabs-"
            },
            _tabId: function(e) {
                var i = e.is("li") ? e.find("a[href]") : e;
                return t(i = i[0]).closest("li").attr("aria-controls") || i.title && i.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + a()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                panelTemplate: "<div></div>"
            },
            _createPanel: function(e) {
                return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            _create: function() {
                var t = this.options;
                null === t.active && e !== t.selected && (t.active = -1 !== t.selected && t.selected), this._super(), t.selected = t.active, !1 === t.selected && (t.selected = -1)
            },
            _setOption: function(t, e) {
                if ("selected" !== t) return this._super(t, e);
                var i = this.options;
                this._super("active", -1 !== e && e), i.selected = i.active, !1 === i.selected && (i.selected = -1)
            },
            _eventHandler: function() {
                this._superApply(arguments), this.options.selected = this.options.active, !1 === this.options.selected && (this.options.selected = -1)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                show: null,
                select: null
            },
            _create: function() {
                this._super(), !1 !== this.options.active && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
            },
            _trigger: function(t, e, i) {
                var s, n, a = this._superApply(arguments);
                return !!a && ("beforeActivate" === t ? (s = i.newTab.length ? i.newTab : i.oldTab, n = i.newPanel.length ? i.newPanel : i.oldPanel, a = this._super("select", e, {
                    tab: s.find(".ui-tabs-anchor")[0],
                    panel: n[0],
                    index: s.closest("li").index()
                })) : "activate" === t && i.newTab.length && (a = this._super("show", e, {
                    tab: i.newTab.find(".ui-tabs-anchor")[0],
                    panel: i.newPanel[0],
                    index: i.newTab.closest("li").index()
                })), a)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            select: function(t) {
                if (-1 === (t = this._getIndex(t))) {
                    if (!this.options.collapsible || -1 === this.options.selected) return;
                    t = this.options.selected
                }
                this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
            }
        }), i = 0, t.widget("ui.tabs", t.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function() {
                var t, e = this.options;
                null == e.active && e.cookie && (-1 === (t = parseInt(this._cookie(), 10)) && (t = !1), e.active = t), this._super()
            },
            _cookie: function(e) {
                var s = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++i)];
                return arguments.length && (s.push(!1 === e ? -1 : e), s.push(this.options.cookie)), t.cookie.apply(null, s)
            },
            _refresh: function() {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _eventHandler: function() {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _destroy: function() {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            _trigger: function(e, i, s) {
                var n = t.extend({}, s);
                return "load" === e && (n.panel = n.panel[0], n.tab = n.tab.find(".ui-tabs-anchor")[0]), this._super(e, i, n)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                fx: null
            },
            _getFx: function() {
                var e, i, s = this.options.fx;
                return s && (t.isArray(s) ? (e = s[0], i = s[1]) : e = i = s), s ? {
                    show: i,
                    hide: e
                } : null
            },
            _toggle: function(t, e) {
                var i = this,
                    s = e.newPanel,
                    n = e.oldPanel,
                    a = this._getFx();
                if (!a) return this._super(t, e);

                function o() {
                    i.running = !1, i._trigger("activate", t, e)
                }

                function r() {
                    e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && a.show ? s.animate(a.show, a.show.duration, function() {
                        o()
                    }) : (s.show(), o())
                }
                i.running = !0, n.length && a.hide ? n.animate(a.hide, a.hide.duration, function() {
                    e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
                }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n.hide(), r())
            }
        }))
    }(jQuery),
    function(t) {
        var e = 0;

        function i(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        }

        function s(e) {
            var i = e.data("ui-tooltip-id"),
                s = (e.attr("aria-describedby") || "").split(/\s+/),
                n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        }
        t.widget("ui.tooltip", {
            version: "1.9.2",
            options: {
                content: function() {
                    return t(this).attr("title")
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function(e, i) {
                var s = this;
                if ("disabled" === e) {
                    this[i ? "_disable" : "_enable"](), this.options[e] = i;
                    return
                }
                this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                    s._updateContent(e)
                })
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, s) {
                    var n = t.Event("blur");
                    n.target = n.currentTarget = s[0], e.close(n, !0)
                }), this.element.find(this.options.items).andSelf().each(function() {
                    var e = t(this);
                    e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).andSelf().each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })
            },
            open: function(e) {
                var i = this,
                    s = t(e ? e.target : this.element).closest(this.options.items);
                !(!s.length || s.data("ui-tooltip-id")) && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                    var e, s = t(this);
                    s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: s.attr("title")
                    }, s.attr("title", ""))
                }), this._updateContent(s, e))
            },
            _updateContent: function(t, e) {
                var i, s = this.options.content,
                    n = this,
                    a = e ? e.type : null;
                if ("string" == typeof s) return this._open(e, t, s);
                (i = s.call(t[0], function(i) {
                    t.data("ui-tooltip-open") && n._delay(function() {
                        e && (e.type = a), this._open(e, t, i)
                    })
                })) && this._open(e, t, i)
            },
            _open: function(e, s, n) {
                var a, o, r, h = t.extend({}, this.options.position);
                if (n) {
                    if ((a = this._find(s)).length) {
                        a.find(".ui-tooltip-content").html(n);
                        return
                    }
                    s.is("[title]") && (e && "mouseover" === e.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), i(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: l
                    }), l(e)) : a.position(t.extend({ of: s
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (r = setInterval(function() {
                        a.is(":visible") && (l(h.of), clearInterval(r))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    }), o = {
                        keyup: function(e) {
                            if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                var i = t.Event(e);
                                i.currentTarget = s[0], this.close(i, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(a)
                        }
                    }, e && "mouseover" !== e.type || (o.mouseleave = "close"), e && "focusin" !== e.type || (o.focusout = "close"), this._on(!0, s, o)
                }

                function l(t) {
                    h.of = t, !a.is(":hidden") && a.position(h)
                }
            },
            close: function(e) {
                var i = this,
                    n = t(e ? e.currentTarget : this.element),
                    a = this._find(n);
                !this.closing && (n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), s(n), a.stop(!0), this._hide(a, this.options.hide, function() {
                    i._removeTooltip(t(this))
                }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, s) {
                    t(s.element).attr("title", s.title), delete i.parents[e]
                }), this.closing = !0, this._trigger("close", e, {
                    tooltip: a
                }), this.closing = !1)
            },
            _tooltip: function(i) {
                var s = "ui-tooltip-" + e++,
                    n = t("<div>").attr({
                        id: s,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), t.fn.bgiframe && n.bgiframe(), this.tooltips[s] = i, n
            },
            _find: function(e) {
                var i = e.data("ui-tooltip-id");
                return i ? t("#" + i) : t()
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, s) {
                    var n = t.Event("blur");
                    n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery);