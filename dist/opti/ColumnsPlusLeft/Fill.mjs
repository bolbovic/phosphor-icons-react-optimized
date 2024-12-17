var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var l = r, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M144,48V208a16,16,0,0,1-16,16H104a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h24A16,16,0,0,1,144,48Zm56-16H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32ZM64,120H48V104a8,8,0,0,0-16,0v16H16a8,8,0,0,0,0,16H32v16a8,8,0,0,0,16,0V136H64a8,8,0,0,0,0-16Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
