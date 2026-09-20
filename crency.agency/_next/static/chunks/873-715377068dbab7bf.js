"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [873], {
        1392: (e, t, s) => {
            let n, a;
            s.d(t, {
                XT: () => d,
                aJ: () => o,
                fW: () => i
            });
            var r = s(5580),
                l = s(6513);

            function i() {
                if (window.__forceZoomQuirk) return !0;
                if (void 0 !== n) return n;
                let e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 1,
                    t = document.createElement("div");
                t.style.cssText = "position:absolute;left:-9999px;top:0;width:100rem;height:2px;zoom:0.5;", document.body.appendChild(t);
                let s = t.getBoundingClientRect().width;
                return t.remove(), n = s > 75 * e
            }

            function o(e, t, s) {
                if (i()) {
                    if (e.style.zoom = "1", 1 === t) {
                        e.style.transform = "", e.style.transformOrigin = "", e.style.width = "", e.style.flex = "", e.style.marginBottom = "";
                        return
                    }
                    if (void 0 !== s) {
                        e.style.transform = "", e.style.width = "".concat(s / t, "px"), e.style.flex = "none", e.style.transformOrigin = "0 0";
                        let n = e.parentElement,
                            a = 0;
                        if (n) {
                            let t = getComputedStyle(n);
                            a = n.getBoundingClientRect().left + n.clientLeft + parseFloat(t.paddingLeft) - e.getBoundingClientRect().left
                        }
                        e.style.transform = "translate(".concat(a, "px, 0) scale(").concat(t, ")"), e.style.marginBottom = "".concat(-((1 - t) * e.offsetHeight), "px")
                    } else e.style.transform = "scale(".concat(t, ")"), e.style.transformOrigin = "50% 0"
                } else e.style.zoom = String(t)
            }
            let c = ".main > *, .services-wrapper, .about-boards, .blog-card.floating,.blog-topic, .blog-grid, .blog-load-more";

            function d() {
                var e, t;
                let s;
                if (!i()) return () => {};
                document.documentElement.classList.add("zoom-quirk");
                let n = new Set,
                    d = new Set,
                    u = new Map,
                    m = window.innerWidth,
                    f = 0,
                    p = () => {
                        let e;
                        try {
                            e = document.querySelectorAll(function() {
                                if (void 0 !== a) return a;
                                let e = new Set,
                                    t = s => {
                                        for (let n of Array.from(s))
                                            if (n instanceof CSSStyleRule) n.style.getPropertyValue("zoom") && e.add(n.selectorText);
                                            else if ("cssRules" in n) try {
                                            t(n.cssRules)
                                        } catch (e) {}
                                    };
                                for (let e of Array.from(document.styleSheets)) try {
                                    t(e.cssRules)
                                } catch (e) {}
                                return a = e.size ? [...e].join(",") : c
                            }())
                        } catch (t) {
                            e = [...document.querySelectorAll(c)]
                        }
                        let t = window.innerWidth !== m;
                        m = window.innerWidth;
                        let i = !1;
                        e.forEach(e => {
                            if (e.closest(".case-swiper") || d.has(e) && !t) return;
                            n.has(e) && (e.style.zoom = "", e.style.transform = "", e.style.transformOrigin = "", e.style.marginBottom = "", e.style.width = "", e.style.flex = "", e.style.left = "", e.style.top = "");
                            let a = getComputedStyle(e),
                                r = parseFloat(a.zoom) || 1;
                            if (.001 > Math.abs(r - 1) || !e.offsetWidth && !e.offsetHeight) {
                                n.delete(e), d.delete(e), u.delete(e), null == s || s.unobserve(e);
                                return
                            }
                            let l = "absolute" === a.position || "fixed" === a.position;
                            e.style.zoom = "1";
                            let c = !1,
                                m = e.parentElement;
                            if (!l && m) {
                                let t = getComputedStyle(m),
                                    s = m.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight);
                                c = 2 > Math.abs(e.offsetWidth - s) || 2 > Math.abs(e.offsetWidth * r - s)
                            }
                            if (c && m) {
                                let t = getComputedStyle(m);
                                o(e, r, m.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight))
                            } else if (l) {
                                let t = parseFloat(a.left),
                                    s = parseFloat(a.top);
                                Number.isFinite(t) && Number.isFinite(s) ? (e.style.left = "".concat(r * e.offsetLeft, "px"), e.style.top = "".concat(r * e.offsetTop, "px"), e.style.transform = "scale(".concat(r, ")")) : e.style.transform = "translate(".concat(-(1 - r) * e.offsetLeft, "px, ").concat(-(1 - r) * e.offsetTop, "px) scale(").concat(r, ")"), e.style.transformOrigin = "0 0", d.add(e)
                            } else e.style.transform = "scale(".concat(r, ")"), e.style.transformOrigin = "50% 0";
                            l || c || (e.style.marginBottom = "".concat(-((1 - r) * e.offsetHeight), "px")), n.add(e), l || null == s || s.observe(e);
                            let f = "".concat(r, "|").concat(e.style.width, "|").concat(e.style.marginBottom, "|").concat(e.style.transform, "|").concat(e.style.left, "|").concat(e.style.top);
                            u.get(e) !== f && (u.set(e, f), i = !0)
                        }), i && (0, l.V3)(() => r.u.refresh())
                    },
                    h = () => {
                        cancelAnimationFrame(f), f = requestAnimationFrame(p)
                    },
                    v = () => {
                        window.innerWidth !== m && h()
                    };
                return "function" == typeof ResizeObserver && (s = new ResizeObserver(() => h())), p(), null == (t = document.fonts) || null == (e = t.ready) || e.then(h), window.addEventListener("load", h), window.addEventListener("resize", v), window.addEventListener("orientationchange", h), () => {
                    cancelAnimationFrame(f), null == s || s.disconnect(), window.removeEventListener("load", h), window.removeEventListener("resize", v), window.removeEventListener("orientationchange", h)
                }
            }
        },
        1895: (e, t, s) => {
            function n() {
                return window.dataLayer = window.dataLayer || [], window.dataLayer
            }

            function a() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                n().push(arguments)
            }
            s.d(t, {
                Cl: () => v,
                El: () => c,
                NB: () => u,
                _N: () => p,
                eQ: () => d,
                p_: () => f,
                wL: () => h
            });
            let r = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH"],
                l = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage", "functionality_storage", "personalization_storage"],
                i = e => Object.fromEntries(l.map(t => [t, e])),
                o = "crency:consent";

            function c() {
                try {
                    let e = window.localStorage.getItem(o);
                    return "granted" === e || "denied" === e ? e : null
                } catch (e) {
                    return null
                }
            }

            function d(e) {
                try {
                    window.localStorage.setItem(o, e)
                } catch (e) {}
            }

            function u(e) {
                a("consent", "update", { ...i(e),
                    security_storage: "granted"
                })
            }
            let m = !1;

            function f() {
                if (m) return;
                m = !0, a("consent", "default", { ...i("denied"),
                    security_storage: "granted",
                    region: r,
                    wait_for_update: 500
                }), a("consent", "default", { ...i("granted"),
                    security_storage: "granted"
                }), a("set", "ads_data_redaction", !0), a("set", "url_passthrough", !0);
                let e = c();
                e && u(e)
            }

            function p(e) {
                n().push({
                    event: "generate_lead",
                    ...e
                })
            }

            function h(e) {
                n().push({
                    event: "lead_form_open",
                    ...e
                })
            }

            function v(e) {
                n().push({
                    event: "lead_form_error",
                    ...e
                })
            }
        },
        2396: (e, t, s) => {
            s.d(t, {
                Y: () => l
            });
            let n = "field-warn",
                a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            function r(e) {
                var t;
                return (null == (t = e.closest(".discuss-dd")) ? void 0 : t.querySelector(".discuss-dd-btn")) || e
            }

            function l(e, t) {
                var s, l;
                for (let i of (e.querySelectorAll(".".concat(n)).forEach(e => e.remove()), e.querySelectorAll(".has-warn").forEach(e => e.classList.remove("has-warn")), e.querySelectorAll("[aria-invalid]").forEach(e => e.removeAttribute("aria-invalid")), t)) {
                    let t = e.querySelector('[name="'.concat(i.name, '"]'));
                    if (!t) continue;
                    let o = (t.value || "").trim(),
                        c = "";
                    if (o ? i.email && !a.test(o) && (c = "Enter a valid email address.") : c = "Please fill in this field.", !c) continue;
                    ! function(e, t) {
                        var s;
                        let a = e.closest(".discuss-dd") || e.closest(".discuss-field, .field-wrap") || e;
                        a.classList.add("has-warn");
                        let l = r(e);
                        l.setAttribute("aria-invalid", "true");
                        let i = document.createElement("div");
                        i.className = n, i.setAttribute("role", "alert");
                        let o = document.createElement("span");
                        o.className = "field-warn__badge", o.setAttribute("aria-hidden", "true"), o.textContent = "!";
                        let c = document.createElement("span");
                        c.className = "field-warn__text", c.textContent = t, i.append(o, c), a.appendChild(i);
                        let d = () => {
                            a.classList.remove("has-warn"), a.querySelectorAll(".".concat(n)).forEach(e => e.remove()), l.removeAttribute("aria-invalid")
                        };
                        (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && e.addEventListener("input", d, {
                            once: !0
                        }), null == (s = e.closest(".discuss-dd")) || s.addEventListener("click", d, {
                            once: !0
                        })
                    }(t, c);
                    let d = r(t);
                    return null == (s = d.focus) || s.call(d, {
                        preventScroll: !0
                    }), null == (l = d.scrollIntoView) || l.call(d, {
                        block: "nearest",
                        behavior: "smooth"
                    }), !1
                }
                return !0
            }
        },
        5550: (e, t, s) => {
            s.d(t, {
                default: () => l
            });
            var n = s(5155),
                a = s(2115);
            let r = () => (0, n.jsx)("svg", {
                viewBox: "0 0 19 11",
                fill: "none",
                "aria-hidden": "true",
                className: "discuss-chevron",
                children: (0, n.jsx)("path", {
                    d: "M9.5 10.5L0.7 0.5H18.3L9.5 10.5Z",
                    fill: "#150734"
                })
            });

            function l(e) {
                let {
                    name: t,
                    placeholder: s,
                    ariaLabel: l,
                    options: i,
                    id: o,
                    required: c = !1
                } = e, [d, u] = (0, a.useState)(!1), [m, f] = (0, a.useState)(""), [p, h] = (0, a.useState)(0), v = (0, a.useRef)(null), w = i.find(e => e.value === m);
                (0, a.useEffect)(() => {
                    if (!d) return;
                    let e = e => {
                        v.current && !v.current.contains(e.target) && u(!1)
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, [d]);
                let y = e => {
                    f(i[e].value), h(e), u(!1)
                };
                return (0, n.jsxs)("div", {
                    className: "discuss-dd".concat(d ? " is-open" : ""),
                    ref: v,
                    id: o,
                    children: [(0, n.jsx)("input", {
                        className: "discuss-dd-native",
                        name: t,
                        value: m,
                        required: c,
                        onChange: () => {},
                        tabIndex: -1,
                        "aria-hidden": "true"
                    }), (0, n.jsxs)("button", {
                        type: "button",
                        className: "discuss-input discuss-dd-btn".concat(w ? "" : " is-placeholder"),
                        "aria-haspopup": "listbox",
                        "aria-expanded": d,
                        "aria-label": l,
                        onClick: () => u(e => !e),
                        onKeyDown: e => {
                            if ("Escape" === e.key) return u(!1);
                            if ("Enter" === e.key || " " === e.key) {
                                e.preventDefault(), d ? y(p) : u(!0);
                                return
                            }
                            if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                                if (e.preventDefault(), !d) return u(!0);
                                h(t => (t + ("ArrowDown" === e.key ? 1 : i.length - 1)) % i.length)
                            }
                        },
                        children: [(0, n.jsx)("span", {
                            className: "discuss-dd-label",
                            children: w ? w.label : s
                        }), (0, n.jsx)(r, {})]
                    }), (0, n.jsx)("div", {
                        className: "discuss-dd-menu",
                        "aria-hidden": !d,
                        children: (0, n.jsx)("ul", {
                            className: "discuss-dd-list",
                            role: "listbox",
                            "aria-label": l,
                            children: i.map((e, t) => (0, n.jsx)("li", {
                                role: "option",
                                "aria-selected": e.value === m,
                                className: "discuss-dd-opt".concat(e.value === m ? " is-selected" : "").concat(t === p ? " is-active" : ""),
                                onMouseEnter: () => h(t),
                                onClick: () => y(t),
                                children: e.label
                            }, e.value))
                        })
                    })]
                })
            }
        },
        5771: (e, t, s) => {
            s.d(t, {
                N: () => o
            });
            let n = new WeakMap,
                a = e => {
                    var t;
                    return null != (t = e.querySelector(".social-flood")) ? t : e.querySelector(".btn-bubble__circle")
                },
                r = e => {
                    let t = a(e);
                    if (!t) return;
                    let s = [t, ...Array.from(t.querySelectorAll("svg"))];
                    s.forEach(e => e.style.transition = "none"), t.style.clipPath = "", e.classList.add("resetting"), e.classList.remove("out"), t.offsetHeight, requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            s.forEach(e => e.style.transition = ""), e.classList.remove("resetting")
                        })
                    })
                },
                l = (e, t) => {
                    let s = e.relatedTarget;
                    return !s || !t.contains(s)
                },
                i = e => {
                    var t, s;
                    let n = e.target;
                    return null != (s = null == n || null == (t = n.closest) ? void 0 : t.call(n, ".btn-bubble")) ? s : null
                },
                o = () => {
                    let e = e => {
                            let t = i(e);
                            t && l(e, t) && t.classList.contains("out") && (window.clearTimeout(n.get(t)), r(t))
                        },
                        t = e => {
                            let t = i(e);
                            if (!t || !l(e, t)) return;
                            let s = a(t);
                            if (s) {
                                if (s.classList.contains("social-flood")) {
                                    let e = getComputedStyle(s).clipPath;
                                    s.style.clipPath = e && "none" !== e ? e : "inset(0% 0% 0% 0%)", s.offsetHeight
                                }
                                t.classList.add("out"), window.clearTimeout(n.get(t)), n.set(t, window.setTimeout(() => r(t), 420))
                            }
                        };
                    return document.addEventListener("mouseover", e), document.addEventListener("mouseout", t), () => {
                        document.removeEventListener("mouseover", e), document.removeEventListener("mouseout", t)
                    }
                }
        },
        6460: (e, t, s) => {
            s.d(t, {
                I: () => n
            });
            let n = () => {
                let e = window.matchMedia("(hover: none), (pointer: coarse)").matches,
                    t = null,
                    n = !1,
                    a = !1,
                    r = () => {
                        document.documentElement.style.overflow = a ? "hidden" : ""
                    },
                    l = () => {
                        null == t || t.options({
                            overflow: {
                                y: a ? "hidden" : "scroll",
                                x: a ? "hidden" : "scroll"
                            }
                        })
                    };
                return e || s.e(654).then(s.bind(s, 7654)).then(e => {
                    let {
                        OverlayScrollbars: s
                    } = e;
                    !n && (t = s(document.body, {
                        scrollbars: {
                            autoHide: "scroll"
                        }
                    }), a && l())
                }), {
                    lock: e => {
                        a = e, t ? l() : r()
                    },
                    destroy: () => {
                        n = !0, null == t || t.destroy(), t = null, a && (a = !1, r())
                    }
                }
            }
        },
        6513: (e, t, s) => {
            function n(e) {
                if (document.documentElement.classList.contains("is-ready")) {
                    let t = requestAnimationFrame(e);
                    return () => cancelAnimationFrame(t)
                }
                let t = () => e();
                return window.addEventListener("page:ready", t, {
                    once: !0
                }), () => window.removeEventListener("page:ready", t)
            }

            function a() {
                var e;
                let t = null == (e = document.fonts) ? void 0 : e.ready;
                return t ? Promise.race([t, new Promise(e => window.setTimeout(e, 2e3))]) : Promise.resolve()
            }
            s.d(t, {
                U2: () => a,
                V3: () => c,
                VL: () => l,
                kc: () => n
            });
            let r = !1;

            function l(e) {
                if (r) return;
                r = !0;
                let t = window.innerWidth,
                    s = 0;
                window.addEventListener("resize", () => {
                    window.innerWidth !== t && (t = window.innerWidth, window.clearTimeout(s), s = window.setTimeout(e, 200))
                })
            }
            let i = 0,
                o = !1;

            function c(e) {
                o || (o = !0, window.addEventListener("scroll", () => {
                    i = performance.now()
                }, {
                    passive: !0
                }));
                let t = () => {
                    if (performance.now() - i < 400) return void window.setTimeout(t, 450);
                    let s = window.scrollY;
                    e(), Math.abs(window.scrollY - s) > 1 && window.scrollTo(0, s)
                };
                t()
            }
        },
        8283: (e, t, s) => {
            s.d(t, {
                default: () => p
            });
            var n = s(5155),
                a = s(2115),
                r = s(5550),
                l = s(2396),
                i = s(1895);
            let o = [{
                name: "name"
            }, {
                name: "email",
                email: !0
            }, {
                name: "company"
            }, {
                name: "budget"
            }, {
                name: "service"
            }];

            function c(e) {
                let {
                    variant: t
                } = e;
                return (0, n.jsxs)("div", {
                    "aria-hidden": "true",
                    className: "discuss-layer discuss-layer--".concat(t),
                    children: [(0, n.jsx)("svg", {
                        viewBox: "0 0 1758 919",
                        fill: "none",
                        className: "discuss-layer-face discuss-layer-face--wide",
                        children: (0, n.jsx)("path", {
                            d: "M 0 142 Q 0 94 48 94 L 194 94 Q 220 94 239.77 77.11 L 304.15 22.09 Q 330 0 364 0 L 867 0 Q 901 0 928.7 19.72 L 1011.82 78.92 Q 1033 94 1059 94 L 1710 94 Q 1758 94 1758 142 L 1758 775 Q 1758 823 1710 823 L 1564 823 Q 1538 823 1518.41 840.1 L 1453.62 896.64 Q 1428 919 1394 919 L 891 919 Q 857 919 829.5 899 L 746.03 838.29 Q 725 823 699 823 L 48 823 Q 0 823 0 775 Z"
                        })
                    }), (0, n.jsx)("svg", {
                        viewBox: "0 0 919 1758",
                        preserveAspectRatio: "none",
                        fill: "none",
                        className: "discuss-layer-face discuss-layer-face--tall",
                        children: (0, n.jsx)("path", {
                            d: "M 777 0 Q 825 0 825 48 L 825 194 Q 825 220 841.89 239.77 L 896.91 304.15 Q 919 330 919 364 L 919 867 Q 919 901 899.28 928.7 L 840.08 1011.82 Q 825 1033 825 1059 L 825 1710 Q 825 1758 777 1758 L 144 1758 Q 96 1758 96 1710 L 96 1564 Q 96 1538 78.9 1518.41 L 22.36 1453.62 Q 0 1428 0 1394 L 0 891 Q 0 857 20 829.5 L 80.71 746.03 Q 96 725 96 699 L 96 48 Q 96 0 144 0 Z"
                        })
                    })]
                })
            }
            let d = [{
                    value: "1-3k",
                    label: "$1k – $3k"
                }, {
                    value: "3-7k",
                    label: "$3k – $7k"
                }, {
                    value: "7-15k",
                    label: "$7k – $15k"
                }, {
                    value: "15k+",
                    label: "$15k+"
                }],
                u = [{
                    value: "website",
                    label: "Website"
                }, {
                    value: "brand",
                    label: "Brand identity"
                }, {
                    value: "product",
                    label: "Product design (UI/UX)"
                }, {
                    value: "platform",
                    label: "Web app / platform"
                }, {
                    value: "unsure",
                    label: "Not sure yet"
                }],
                m = e => e.replace(/\s+/g, " ").trim(),
                f = {
                    "free-audit": "get my free audit",
                    website: "get my website",
                    service: "get my proposal",
                    later: "send my message",
                    general: "get my website"
                };

            function p() {
                let e = (0, a.useRef)({
                        intent: "general",
                        source: "",
                        page: "",
                        pageTitle: ""
                    }),
                    [t, s] = (0, a.useState)("idle"),
                    [p, h] = (0, a.useState)(""),
                    [v, w] = (0, a.useState)(f.general),
                    [y, g] = (0, a.useState)(0),
                    x = (0, a.useRef)(null);
                async function b(n) {
                    if (n.preventDefault(), "sending" === t) return;
                    let a = n.currentTarget;
                    if (!(0, l.Y)(a, o)) return void(0, i.Cl)({
                        form: "popup",
                        ...e.current,
                        reason: "validation"
                    });
                    let r = new FormData(a),
                        c = { ...Object.fromEntries(r.entries()),
                            ...e.current
                        };
                    s("sending"), h("");
                    try {
                        let t = await fetch("/api/contact", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(c)
                            }),
                            n = await t.json().catch(() => ({}));
                        if (t.ok && n.ok) {
                            var d, u;
                            s("success"), (0, i._N)({
                                form: "popup",
                                intent: e.current.intent,
                                source: e.current.source,
                                service: String(null != (d = r.get("service")) ? d : ""),
                                budget: String(null != (u = r.get("budget")) ? u : ""),
                                page: e.current.page
                            })
                        } else(0, i.Cl)({
                            form: "popup",
                            ...e.current,
                            reason: "validation" === n.error ? "validation" : "server"
                        }), s("error"), h("validation" === n.error ? "Please check the highlighted fields." : "Couldn’t send just now. Please try again in a moment.")
                    } catch (t) {
                        (0, i.Cl)({
                            form: "popup",
                            ...e.current,
                            reason: "network"
                        }), s("error"), h("Network hiccup. Please try again in a moment.")
                    }
                }
                return (0, a.useEffect)(() => {
                    let t = t => {
                        var s, n, a, r, l, o, c;
                        let d, u = t.target.closest('[data-open-modal="discuss"]');
                        if (!u) return;
                        "A" === u.tagName && t.preventDefault(), window.setTimeout(() => {
                            let e = document.querySelector("#discuss .discuss-card");
                            if (!e || !e.offsetWidth) return;
                            let t = u.getBoundingClientRect(),
                                s = e.offsetWidth,
                                n = e.offsetHeight,
                                a = (t.left + t.width / 2 - (window.innerWidth - s) / 2) / s * 100,
                                r = (t.top + t.height / 2 - (window.innerHeight - n) / 2) / n * 100,
                                l = e => Math.max(-40, Math.min(140, e));
                            e.style.transformOrigin = "".concat(l(a).toFixed(1), "% ").concat(l(r).toFixed(1), "%")
                        }, 0);
                        let p = u.dataset.leadIntent || "general",
                            h = null == (n = u.closest("form")) || null == (s = n.querySelector('input[name="trust-goal"]:checked')) ? void 0 : s.value;
                        if (h && (p = h), h) d = null != (a = f[h]) ? a : f.general;
                        else if (u.dataset.leadSource) d = u.dataset.leadSource;
                        else {
                            let e = m((null == (l = u.closest(".service-slide")) || null == (r = l.querySelector(".service-first-card-title")) ? void 0 : r.textContent) || "").replace(/\s*\(.*?\)\s*/g, " ").trim();
                            d = e ? "get my ".concat(e.toLowerCase()) : null != (o = f[p]) ? o : f.general
                        }
                        w(d || f.general);
                        let v = u.dataset.leadSource || "";
                        if (!v) {
                            let e = u.closest(".service-slide");
                            v = m((null == e || null == (c = e.querySelector(".service-first-card-title")) ? void 0 : c.textContent) || "") || m(u.textContent || "")
                        }
                        e.current = {
                            intent: p,
                            source: v.slice(0, 80),
                            page: window.location.pathname,
                            pageTitle: document.title
                        }, (0, i.wL)({
                            form: "popup",
                            intent: p,
                            source: v.slice(0, 80),
                            page: window.location.pathname
                        })
                    };
                    document.addEventListener("click", t, !0);
                    let n = e => {
                        var t;
                        let n = null == (t = e.detail) ? void 0 : t.modal;
                        (null == n ? void 0 : n.id) === "discuss" && window.setTimeout(() => {
                            s("idle"), h(""), g(e => e + 1)
                        }, 700)
                    };
                    window.addEventListener("modal:close", n);
                    let a = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        r = {
                            tx: 0,
                            ty: 0,
                            x: 0,
                            y: 0,
                            raf: 0
                        },
                        l = () => {
                            let e = document.querySelector("#discuss .discuss-close-x");
                            if (!e) {
                                r.raf = 0;
                                return
                            }
                            if (r.x += (r.tx - r.x) * .05, r.y += (r.ty - r.y) * .05, .05 > Math.abs(r.tx - r.x) && .05 > Math.abs(r.ty - r.y) && 0 === r.tx && 0 === r.ty) {
                                r.x = 0, r.y = 0, e.style.translate = "0 0", r.raf = 0;
                                return
                            }
                            e.style.translate = "".concat(r.x.toFixed(2), "px ").concat(r.y.toFixed(2), "px"), r.raf = requestAnimationFrame(l)
                        },
                        o = e => {
                            if (a) return;
                            let t = document.getElementById("discuss"),
                                s = null == t ? void 0 : t.querySelector(".discuss-close");
                            if (!t || !s || !t.classList.contains("is-open")) return;
                            let n = s.getBoundingClientRect();
                            if (e.clientX >= n.left && e.clientX <= n.right && e.clientY >= n.top && e.clientY <= n.bottom) {
                                let t = parseFloat(getComputedStyle(document.documentElement).fontSize) || 1;
                                r.tx = ((e.clientX - n.left) / n.width - .5) * 32 * t, r.ty = ((e.clientY - n.top) / n.height - .5) * 32 * t
                            } else r.tx = 0, r.ty = 0;
                            r.raf || (r.raf = requestAnimationFrame(l))
                        };
                    document.addEventListener("mousemove", o);
                    let c = () => {
                        r.tx = 0, r.ty = 0, r.raf || (r.raf = requestAnimationFrame(l))
                    };
                    window.addEventListener("modal:close", c);
                    let d = {
                            raf: 0,
                            rotation: 0,
                            timeout: 0,
                            last: 0
                        },
                        u = () => document.querySelector("#discuss .discuss-close-x"),
                        p = () => {
                            if (!d.raf) return;
                            cancelAnimationFrame(d.raf), d.raf = 0;
                            let e = u();
                            d.rotation = 0, e && (e.style.transition = "transform 900ms ease-in-out", e.style.transform = "rotate(360deg)", d.timeout = window.setTimeout(() => {
                                e.style.transition = ""
                            }, 950))
                        },
                        v = e => {
                            var t, s, n, r;
                            let l = null == (s = e.target) || null == (t = s.closest) ? void 0 : t.call(s, ".discuss-close"),
                                i = null == (r = e.relatedTarget) || null == (n = r.closest) ? void 0 : n.call(r, ".discuss-close");
                            l && !i ? (() => {
                                if (a || d.raf) return;
                                let e = u();
                                if (!e) return;
                                window.clearTimeout(d.timeout);
                                try {
                                    let t = new DOMMatrixReadOnly(getComputedStyle(e).transform);
                                    d.rotation = (Math.atan2(t.b, t.a) * (180 / Math.PI) + 360) % 360
                                } catch (e) {}
                                e.style.transition = "none", d.last = 0;
                                let t = s => {
                                    d.last && (d.rotation = (d.rotation + (s - d.last) / 1e3 * 120) % 360), d.last = s, e.style.transform = "rotate(".concat(d.rotation.toFixed(2), "deg)"), d.raf = requestAnimationFrame(t)
                                };
                                d.raf = requestAnimationFrame(t)
                            })() : !l && i && p()
                        };
                    return document.addEventListener("mouseover", v), window.addEventListener("modal:close", p), () => {
                        document.removeEventListener("click", t, !0), window.removeEventListener("modal:close", n), document.removeEventListener("mousemove", o), window.removeEventListener("modal:close", c), r.raf && cancelAnimationFrame(r.raf), document.removeEventListener("mouseover", v), window.removeEventListener("modal:close", p), d.raf && cancelAnimationFrame(d.raf), window.clearTimeout(d.timeout)
                    }
                }, []), (0, n.jsxs)("div", {
                    id: "discuss",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": "Let’s discuss",
                    "data-modal-duration": "420",
                    "data-lenis-prevent": "",
                    className: "discuss-wrapper",
                    children: [(0, n.jsx)("div", {
                        className: "modal-backdrop discuss-backdrop",
                        "data-close-modal": "discuss",
                        "aria-hidden": "true"
                    }), (0, n.jsxs)("div", {
                        className: "discuss-card",
                        children: [(0, n.jsx)(c, {
                            variant: "white"
                        }), (0, n.jsx)(c, {
                            variant: "lime"
                        }), (0, n.jsx)(c, {
                            variant: "pink"
                        }), (0, n.jsxs)("div", {
                            className: "discuss-inner",
                            children: [(0, n.jsx)("button", {
                                type: "button",
                                "aria-label": "Close",
                                "data-close-modal": "discuss",
                                className: "discuss-close",
                                onMouseMove: e => {
                                    var t;
                                    let s = e.currentTarget.getBoundingClientRect(),
                                        n = (e.clientX - (s.left + s.width / 2)) * .42,
                                        a = (e.clientY - (s.top + s.height / 2)) * .42,
                                        r = .2 * s.width,
                                        l = Math.hypot(n, a);
                                    l > r && (n = n / l * r, a = a / l * r), null == (t = x.current) || t.style.setProperty("transform", "translate(".concat(n, "px, ").concat(a, "px)"))
                                },
                                onMouseLeave: () => {
                                    var e;
                                    return null == (e = x.current) ? void 0 : e.style.removeProperty("transform")
                                },
                                children: (0, n.jsx)("svg", {
                                    ref: x,
                                    viewBox: "0 0 44 44",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    className: "discuss-close-x",
                                    children: (0, n.jsx)("path", {
                                        d: "M13 13L31 31M31 13L13 31",
                                        stroke: "#C2EC40",
                                        strokeWidth: "4.6",
                                        strokeLinecap: "round"
                                    })
                                })
                            }), "success" !== t && (0, n.jsxs)("h2", {
                                className: "discuss-title",
                                children: ["L", (0, n.jsx)("span", {
                                    className: "additional-font",
                                    children: "e"
                                }), "t’s discuss"]
                            }), "success" === t ? (0, n.jsxs)("div", {
                                className: "discuss-success",
                                role: "status",
                                children: [(0, n.jsxs)("div", {
                                    className: "discuss-success-col",
                                    children: [(0, n.jsxs)("h2", {
                                        className: "discuss-success-head",
                                        children: ["G", (0, n.jsx)("span", {
                                            className: "additional-font",
                                            children: "o"
                                        }), "t it!"]
                                    }), (0, n.jsxs)("p", {
                                        className: "discuss-success-text",
                                        children: ["A real person is reading your brief right now.", (0, n.jsx)("br", {}), "No bots, no ticket queue. You’ll hear from us within the hour."]
                                    }), (0, n.jsxs)("a", {
                                        href: "/cases",
                                        className: "discuss-success-link",
                                        children: [(0, n.jsx)("span", {
                                            className: "success-link-text",
                                            children: "meanwhile, see the websites we’ve shipped"
                                        }), (0, n.jsx)("span", {
                                            "aria-hidden": "true",
                                            className: "success-link-arrow",
                                            children: (0, n.jsxs)("span", {
                                                className: "success-arrow-stack",
                                                children: [(0, n.jsx)("svg", {
                                                    viewBox: "0 0 82 82",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M54.6798 49.8355L25.2726 20.4283L20.4414 25.2594L49.8452 54.6667H23.9298V61.5H61.5131V23.9167H54.6798V49.8355Z"
                                                    })
                                                }), (0, n.jsx)("svg", {
                                                    viewBox: "0 0 82 82",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M54.6798 49.8355L25.2726 20.4283L20.4414 25.2594L49.8452 54.6667H23.9298V61.5H61.5131V23.9167H54.6798V49.8355Z"
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)("img", {
                                    src: "/wf/about-character.svg",
                                    alt: "",
                                    className: "discuss-success-mascot"
                                })]
                            }) : (0, n.jsxs)("form", {
                                className: "discuss-form",
                                onSubmit: b,
                                noValidate: !0,
                                children: [(0, n.jsx)("input", {
                                    type: "text",
                                    name: "subject_ref",
                                    tabIndex: -1,
                                    autoComplete: "off",
                                    "aria-hidden": "true",
                                    className: "discuss-honeypot"
                                }), (0, n.jsxs)("div", {
                                    className: "discuss-row",
                                    children: [(0, n.jsx)("label", {
                                        className: "discuss-field",
                                        children: (0, n.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            required: !0,
                                            maxLength: 100,
                                            placeholder: "Your name",
                                            autoComplete: "name",
                                            className: "discuss-input"
                                        })
                                    }), (0, n.jsx)("label", {
                                        className: "discuss-field",
                                        children: (0, n.jsx)("input", {
                                            type: "email",
                                            name: "email",
                                            required: !0,
                                            maxLength: 200,
                                            placeholder: "Your email",
                                            autoComplete: "email",
                                            className: "discuss-input"
                                        })
                                    }), (0, n.jsx)("label", {
                                        className: "discuss-field",
                                        children: (0, n.jsx)("input", {
                                            type: "text",
                                            name: "company",
                                            required: !0,
                                            maxLength: 200,
                                            placeholder: "Company website name",
                                            className: "discuss-input"
                                        })
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "discuss-grid",
                                    children: [(0, n.jsx)("label", {
                                        className: "discuss-field discuss-field--message",
                                        children: (0, n.jsx)("textarea", {
                                            name: "message",
                                            maxLength: 4e3,
                                            placeholder: "Message",
                                            className: "discuss-input discuss-textarea"
                                        })
                                    }), (0, n.jsx)(r.default, {
                                        name: "budget",
                                        placeholder: "Choose a budget",
                                        ariaLabel: "Choose a budget",
                                        options: d,
                                        required: !0
                                    }), (0, n.jsx)(r.default, {
                                        name: "service",
                                        placeholder: "Service are you looking for",
                                        ariaLabel: "Service are you looking for",
                                        options: u,
                                        required: !0
                                    }), (0, n.jsxs)("div", {
                                        className: "submit-wrap btn-bubble",
                                        children: [(0, n.jsx)("input", {
                                            type: "submit",
                                            "data-wait": "sending…",
                                            className: "form-submit w-button",
                                            value: "sending" === t ? "sending…" : v,
                                            disabled: "sending" === t,
                                            readOnly: !0
                                        }), (0, n.jsx)("span", {
                                            className: "btn-bubble__circle",
                                            "aria-hidden": "true"
                                        })]
                                    })]
                                }), (0, n.jsx)("p", {
                                    className: "discuss-error".concat("error" === t ? " is-shown" : ""),
                                    role: "alert",
                                    children: p
                                })]
                            }, y)]
                        })]
                    })]
                })
            }
        }
    }
]);