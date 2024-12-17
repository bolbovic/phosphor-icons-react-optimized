var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M100,72a4,4,0,0,1,4-4A100.11,100.11,0,0,1,204,168a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92A4,4,0,0,1,100,72ZM240,196H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68V200a4,4,0,0,0,4,4H240a4,4,0,0,0,0-8Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
