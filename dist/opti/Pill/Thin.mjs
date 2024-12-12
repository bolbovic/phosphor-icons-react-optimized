var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M186.84,85.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,1,1-5.66-5.66l24-24A4,4,0,0,1,186.84,85.17Zm26.75,26.91L112.08,213.57a49.26,49.26,0,0,1-69.67-69.65L143.92,42.43a49.26,49.26,0,0,1,69.67,69.65ZM154.35,160,96,101.66,48.06,149.57a41.26,41.26,0,0,0,58.36,58.35ZM207.94,48.08a41.28,41.28,0,0,0-58.36,0L101.65,96,160,154.34l47.93-47.91A41.32,41.32,0,0,0,207.94,48.08Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
