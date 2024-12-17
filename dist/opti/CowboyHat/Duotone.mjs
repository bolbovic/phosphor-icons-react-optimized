var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (l)
    for (var e of l(t))
      n.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((o, e) => {
  var r = o, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(H, L({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M190.53,160.18C158.13,192,128,192,128,192s-30.13,0-62.53-31.82L70.06,136H185.94Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM93.41,56,117.88,76.4l.12.1a15.92,15.92,0,0,0,20,0l.12-.1L162.59,56l13.68,72H79.73ZM40,184a24,24,0,0,1-4.14-47.64C51.28,159.83,67.73,174.65,82.4,184Zm88,0c-.33,0-25.49-.4-53.86-26.6L76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184Zm88,0H173.6c14.67-9.35,31.12-24.17,46.54-47.64A24,24,0,0,1,216,184Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
