(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84], {
        3279: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => h
            });
            var r = n(7605);
            let o = r.Ay.parseEase("power4.out"),
                l = r.Ay.parseEase("power2.out"),
                a = new Set(["SPAN", "B", "I", "EM", "STRONG", "A", "U", "MARK", "SMALL", "BR"]),
                i = "data-he-seg",
                s = e => {
                    let t = Array.from(e.childNodes),
                        n = [
                            []
                        ],
                        r = [];
                    t.forEach(e => {
                        e instanceof HTMLElement && "BR" === e.tagName ? (r.push(e), n.push([])) : n[n.length - 1].push(e)
                    });
                    let o = n.filter(e => e.some(e => {
                            var t;
                            return (null != (t = e.textContent) ? t : "").trim()
                        })),
                        l = t.filter(e => {
                            var t;
                            return e.nodeType === Node.TEXT_NODE && (null != (t = e.textContent) ? t : "").trim()
                        }).length,
                        a = Array.from(e.querySelectorAll(":scope > span"));
                    return 1 === o.length && 0 === l && a.length > 1 && (o = a.map(e => [e])), r.forEach(e => e.remove()), o.map(t => {
                        let n = document.createElement("span");
                        return n.style.display = "block", e.insertBefore(n, t[0]), t.forEach(e => n.appendChild(e)), n
                    })
                },
                d = e => {
                    if (!Array.from(e.querySelectorAll("*")).every(e => a.has(e.tagName))) return s(e);
                    let t = e.offsetHeight,
                        n = e.innerHTML,
                        r = (e => {
                            let t, n = [],
                                r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
                            for (; t = r.nextNode();) n.push(t);
                            let o = [],
                                l = "";
                            return n.forEach(e => {
                                var t, n, r;
                                let a = e.parentElement,
                                    s = a ? getComputedStyle(a).display : "",
                                    d = s.includes("flex") || s.includes("grid") ? [(null != (n = e.textContent) ? n : "").trim()].filter(Boolean) : (null != (r = e.textContent) ? r : "").split(/(\s+)/).filter(e => "" !== e);
                                if (!d.length) return;
                                let u = document.createDocumentFragment();
                                d.forEach(e => {
                                    if (!e.trim()) {
                                        l = e, u.appendChild(document.createTextNode(e));
                                        return
                                    }
                                    let t = document.createElement("span");
                                    t.setAttribute(i, ""), t.textContent = e, u.appendChild(t), o.push({
                                        el: t,
                                        space: l
                                    }), l = ""
                                }), null == (t = e.parentNode) || t.replaceChild(u, e)
                            }), o
                        })(e);
                    if (r.length) {
                        let n = ((e, t, n) => {
                            let r = [],
                                o = new Map,
                                l = -1,
                                a = null;
                            return t.forEach((t, s) => {
                                let d = n[s] !== l;
                                d && (l = n[s], (a = document.createElement("span")).style.display = "block", r.push(a), o.clear());
                                let u = [];
                                for (let n = t.el.parentElement; n && n !== e; n = n.parentElement) u.unshift(n);
                                let c = a,
                                    m = null,
                                    p = null;
                                if (u.forEach(e => {
                                        let t = o.get(e);
                                        t || (t = e.cloneNode(!1), o.set(e, t), m || (m = c, p = t), c.appendChild(t)), c = t
                                    }), t.space && !d) {
                                    let e = document.createTextNode(t.space);
                                    m && p ? m.insertBefore(e, p) : c.appendChild(e)
                                } else t.space && r.length > 1 && r[r.length - 2].appendChild(document.createTextNode(t.space));
                                t.el.removeAttribute(i), c.appendChild(t.el)
                            }), e.replaceChildren(...r), r
                        })(e, r, ((e, t) => {
                            let n = getComputedStyle(e),
                                r = .5 * (parseFloat(n.lineHeight) || 1.2 * parseFloat(n.fontSize)),
                                o = 0,
                                l = NaN;
                            return t.map(e => {
                                let t = (e => {
                                    let t = 0;
                                    for (let n = e; n; n = n.offsetParent) t += n.offsetTop;
                                    return t
                                })(e.el);
                                return Number.isNaN(l) ? l = t : t > l + r ? (o += 1, l = t) : t < l && (l = t), o
                            })
                        })(e, r));
                        if (n.length && 1 >= Math.abs(e.offsetHeight - t)) return n
                    }
                    return e.innerHTML = n, s(e)
                },
                u = [],
                c = 0,
                m = !1,
                p = 0,
                h = function(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if (document.documentElement.classList.contains("pt-return")) return null;
                    let i = e.innerHTML,
                        s = d(e);
                    if (!s.length) return null;
                    let h = e.classList.contains("email-link"),
                        f = () => .3 * (s.length - 1 + a) + 1,
                        y = () => {
                            let t = v.time();
                            if (s.forEach((e, n) => {
                                    let l = 1 - o(r.Ay.utils.clamp(0, 1, (t - (n + a) * .3) / 1)),
                                        i = 1.15 * e.offsetHeight * l;
                                    r.Ay.set(e, {
                                        y: i,
                                        opacity: 1 - l,
                                        skewY: 6 * l,
                                        transformOrigin: "0% 100%",
                                        clipPath: "inset(-0.3em -0.25em calc(".concat(i, "px - 0.3em) -0.25em)")
                                    })
                                }), h) {
                                let n = l(r.Ay.utils.clamp(0, 1, (t - f() - .05) / .5));
                                r.Ay.set(e, {
                                    "--email-ul": n
                                })
                            }
                        },
                        w = () => {
                            v.clear(), v.to({}, {
                                duration: f() + .55 * !!h
                            })
                        },
                        v = r.Ay.timeline({
                            paused: !0,
                            onUpdate: y
                        });
                    w(), v.eventCallback("onComplete", () => r.Ay.set(s, {
                        clipPath: "none"
                    }));
                    let E = () => {
                        if (v.isActive()) return;
                        let t = 1 === v.progress() || v.time() >= v.duration(),
                            n = v.time();
                        e.innerHTML = i, (s = d(e)).length && (w(), v.time(t ? v.duration() : Math.min(n, v.duration()), !0), y(), t && r.Ay.set(s, {
                            clipPath: "none"
                        }))
                    };
                    return null == (n = document.fonts) || null == (t = n.ready) || t.then(E), u.push({
                        h: e,
                        resplit: E
                    }), m || (m = !0, p = window.innerWidth, window.addEventListener("resize", () => {
                        window.innerWidth !== p && (p = window.innerWidth, window.clearTimeout(c), c = window.setTimeout(() => {
                            for (let e = u.length - 1; e >= 0; e--) u[e].h.isConnected ? u[e].resplit() : u.splice(e, 1)
                        }, 220))
                    })), y(), v
                }
        },
        4510: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => m
            });
            var r = n(2115),
                o = n(7605),
                l = n(5580),
                a = n(2691),
                i = n(6460),
                s = n(5771),
                d = n(3279),
                u = n(6513),
                c = n(1392);

            function m() {
                return (0, r.useEffect)(() => {
                    let e = [],
                        t = o.Ay.context(() => {
                            var t, n;
                            let r = /Macintosh|Mac OS X/i.test(navigator.userAgent),
                                m = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                            (r || m) && document.documentElement.classList.add("is-mac"), e.push((0, c.XT)());
                            let p = new Promise(e => {
                                if (!document.documentElement.classList.contains("pt-cover")) return void e();
                                window.addEventListener("pt:reveal", () => e(), {
                                    once: !0
                                }), window.setTimeout(e, 2500)
                            });
                            Promise.all([(0, u.U2)(), p]).then(() => {
                                requestAnimationFrame(() => {
                                    window.dispatchEvent(new CustomEvent("page:ready", {
                                        detail: {
                                            ts: performance.now()
                                        }
                                    })), document.documentElement.classList.add("is-ready"), document.documentElement.classList.add("dock-ready")
                                })
                            });
                            let h = new a.A({
                                duration: 1.5,
                                easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                                smoothWheel: !0,
                                wheelMultiplier: .4,
                                gestureOrientation: "vertical",
                                infinite: !1,
                                autoRaf: !0
                            });
                            e.push(() => h.destroy());
                            let f = (0, i.I)();
                            e.push(() => f.destroy());
                            let y = !1,
                                w = null,
                                v = !1,
                                E = e => {
                                    "Tab" === e.key && (v = !0)
                                },
                                g = () => {
                                    v = !1
                                };
                            document.addEventListener("keydown", E, !0), document.addEventListener("pointerdown", g, !0), e.push(() => {
                                document.removeEventListener("keydown", E, !0), document.removeEventListener("pointerdown", g, !0)
                            });
                            let A = e => {
                                    if (!e || y) return;
                                    y = !0, e.classList.remove("is-open"), e.setAttribute("aria-hidden", "true");
                                    let t = document.querySelector('[aria-controls="'.concat(e.id, '"]'));
                                    null == t || t.setAttribute("aria-expanded", "false"), setTimeout(() => {
                                        e.style.display = "none", v && (null == w || w.focus()), y = !1
                                    }, Number(e.dataset.modalDuration) || 300), window.dispatchEvent(new CustomEvent("modal:close", {
                                        detail: {
                                            modal: e
                                        }
                                    }))
                                },
                                b = e => {
                                    let t = e.target,
                                        n = t.closest("[data-open-modal]");
                                    if (n) return void((e, t) => {
                                        if (y) return;
                                        let n = document.getElementById(e);
                                        n && (y = !0, w = t || document.activeElement, n.style.display = n.classList.contains("discuss-wrapper") ? "flex" : "block", n.offsetHeight, setTimeout(() => {
                                            var e;
                                            n.classList.add("is-open"), n.setAttribute("aria-hidden", "false"), null == t || t.setAttribute("aria-expanded", "true"), null == (e = n.querySelector('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')) || e.focus(), y = !1
                                        }, 0), window.dispatchEvent(new CustomEvent("modal:open", {
                                            detail: {
                                                modal: n
                                            }
                                        })))
                                    })(n.dataset.openModal || "", n);
                                    let r = t.closest("[data-close-modal]");
                                    r && A(r.closest('[role="dialog"]'))
                                },
                                L = e => {
                                    "Escape" === e.key && A(document.querySelector("[aria-modal].is-open"))
                                };
                            document.addEventListener("click", b), document.addEventListener("keydown", L), e.push(() => {
                                document.removeEventListener("click", b), document.removeEventListener("keydown", L)
                            });
                            let k = () => {
                                    h.stop(), f.lock(!0)
                                },
                                N = () => {
                                    h.start(), f.lock(!1)
                                };
                            window.addEventListener("modal:open", k), window.addEventListener("modal:close", N), e.push(() => {
                                window.removeEventListener("modal:open", k), window.removeEventListener("modal:close", N)
                            });
                            let S = () => h.stop();
                            window.addEventListener("pt:enter", S), e.push(() => window.removeEventListener("pt:enter", S));
                            let T = e => {
                                e.persisted && (h.start(), h.scrollTo(window.scrollY, {
                                    immediate: !0,
                                    force: !0
                                }), l.u.refresh())
                            };
                            window.addEventListener("pageshow", T), e.push(() => window.removeEventListener("pageshow", T));
                            let C = () => {
                                document.querySelectorAll("[data-row]").forEach(e => {
                                    let t = e.querySelector(".row-inner"),
                                        n = e.querySelector(".row-block");
                                    if (!t || !n) return;
                                    t.querySelectorAll("[data-duplicate]").forEach(e => e.remove());
                                    let r = e.scrollWidth,
                                        o = n.scrollWidth;
                                    if (!o) return;
                                    let l = Math.ceil(1.5 * r / o);
                                    if (l <= 0) return;
                                    let a = document.createDocumentFragment();
                                    for (let e = 0; e < l; e++) {
                                        let e = n.cloneNode(!0);
                                        e.setAttribute("aria-hidden", "true"), e.setAttribute("inert", ""), e.setAttribute("tabindex", "-1"), e.setAttribute("role", "presentation"), e.setAttribute("data-duplicate", "true"), a.appendChild(e)
                                    }
                                    t.appendChild(a), e.setAttribute("data-scroll", String(o))
                                });
                                let e = document.querySelector(".row-wrapper.purple"),
                                    t = null == e ? void 0 : e.querySelector(".row-inner"),
                                    n = null == t ? void 0 : t.querySelector(".row-block");
                                if (t && n) {
                                    let e = getComputedStyle(t),
                                        r = parseFloat(e.columnGap) || parseFloat(e.gap) || 0,
                                        l = n.offsetWidth + r;
                                    o.Ay.killTweensOf(t), o.Ay.set(t, {
                                        x: 0
                                    }), o.Ay.to(t, {
                                        x: -l,
                                        duration: 8,
                                        ease: "linear",
                                        repeat: -1
                                    })
                                }
                            };
                            C(), null == (n = document.fonts) || null == (t = n.ready) || t.then(C), e.push((0, s.N)());
                            let x = document.querySelector(".menu-nav-list");
                            x && x.querySelectorAll(".menu-nav-item").forEach((e, t) => {
                                e.style.transitionDelay = "".concat(1200 + 100 * t, "ms")
                            });
                            let M = document.querySelector(".cursor-wrapper"),
                                q = document.querySelector(".cursor-block");
                            if (M) {
                                let t = e => {
                                    let t = e.target.closest('a, button, [role="button"], [onclick], .w-button, .w-nav-link');
                                    M.classList.toggle("pointer", !!t)
                                };
                                document.addEventListener("mouseover", t), e.push(() => document.removeEventListener("mouseover", t))
                            }
                            if (q) {
                                let t = o.Ay.quickTo(q, "x", {
                                        duration: .12,
                                        ease: "power2.out"
                                    }),
                                    n = o.Ay.quickTo(q, "y", {
                                        duration: .12,
                                        ease: "power2.out"
                                    }),
                                    r = e => {
                                        t(e.clientX), n(e.clientY)
                                    };
                                window.addEventListener("mousemove", r), e.push(() => window.removeEventListener("mousemove", r))
                            }
                            let H = [".services-hero-title", ".footer-title", ".footer .email-link"].flatMap(e => o.Ay.utils.toArray(e));
                            if (H.length) {
                                let t = new Map;
                                H.forEach(e => {
                                    let n = (0, d.V)(e);
                                    n && t.set(e, n)
                                });
                                let n = !1,
                                    r = H.find(e => e.classList.contains("services-hero-title"));
                                e.push((0, u.kc)(() => {
                                    n = !0;
                                    let e = r && t.get(r);
                                    e && e.restart()
                                }));
                                let o = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let r = t.get(e.target);
                                        if (r)
                                            if (e.isIntersecting) {
                                                if (e.target.classList.contains("services-hero-title") && !n) return;
                                                r.restart()
                                            } else r.pause(0, !1)
                                    })
                                }, {
                                    rootMargin: "0px"
                                });
                                H.forEach(e => o.observe(e)), e.push(() => {
                                    o.disconnect(), t.forEach(e => e.kill())
                                })
                            }
                            e.push((0, u.kc)(() => {
                                o.Ay.fromTo("[data-hero-dec]", {
                                    scale: 0,
                                    opacity: 0
                                }, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: .45,
                                    ease: "back.out(2)",
                                    stagger: .12,
                                    delay: .75
                                }), document.documentElement.classList.add("dock-ready")
                            })), o.Ay.to("[data-space-float]", {
                                y: -14,
                                duration: 2.4,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: !0,
                                stagger: {
                                    each: .35,
                                    from: "random"
                                }
                            }), document.querySelectorAll("[data-rotation]").forEach(e => {
                                let t = Number(e.dataset.rotationSpeed) || 20,
                                    n = Number(e.dataset.rotationDirection) || 1;
                                o.Ay.to(e, {
                                    rotation: 360 * n,
                                    duration: t,
                                    ease: "none",
                                    repeat: -1
                                })
                            }), document.querySelectorAll("[data-rotation-sway]").forEach(e => {
                                o.Ay.fromTo(e, {
                                    rotation: Number(e.dataset.swayFrom) || 0
                                }, {
                                    rotation: Number(e.dataset.swayTo) || 8,
                                    duration: Number(e.dataset.swayDuration) || 1,
                                    ease: "sine.inOut",
                                    repeat: -1,
                                    yoyo: !0
                                })
                            }), e.push((0, s.N)())
                        });
                    return () => {
                        e.forEach(e => e()), t.revert()
                    }
                }, []), null
            }
            o.Ay.registerPlugin(l.u), l.u.config({
                ignoreMobileResize: !0,
                autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
            }), (0, u.VL)(() => l.u.refresh())
        },
        7084: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 8283)), Promise.resolve().then(n.bind(n, 4510))
        }
    }
]);