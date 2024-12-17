var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && V(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M197.16,20c-.47,0-.93,0-1.39,0H72A28,28,0,0,0,44,48V216a20,20,0,0,0,20,20H168a20,20,0,0,0,20-20V52A8,8,0,0,1,196,44h.35a8.33,8.33,0,0,1,7.7,8.48V148a12,12,0,0,0,24,0V52.48A32.13,32.13,0,0,0,197.16,20ZM72,44h93a32.24,32.24,0,0,0-1,8V172H68V48A4,4,0,0,1,72,44ZM68,212V196h96v16Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
