(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [654], {
        7654: (e, t, s) => {
            "use strict";
            s.r(t);
            s.d(t, {
                OverlayScrollbars: () => OverlayScrollbars
            });
            function OverlayScrollbars(target, options) {
                return {
                    options: function(newOptions) {
                        if (newOptions && newOptions.overflow) {
                            if (target && target.style) {
                                if (newOptions.overflow.y === "hidden") {
                                    target.style.overflowY = "hidden";
                                } else if (newOptions.overflow.y) {
                                    target.style.overflowY = "";
                                }
                                if (newOptions.overflow.x === "hidden") {
                                    target.style.overflowX = "hidden";
                                } else if (newOptions.overflow.x) {
                                    target.style.overflowX = "";
                                }
                            }
                        }
                    },
                    destroy: function() {
                        if (target && target.style) {
                            target.style.overflowY = "";
                            target.style.overflowX = "";
                        }
                    }
                };
            }
        }
    }
]);
