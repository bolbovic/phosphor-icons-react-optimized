var v = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, h, e) => h in a ? v(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, p = (a, h) => {
  for (var e in h || (h = {}))
    o.call(h, e) && m(a, e, h[e]);
  if (l)
    for (var e of l(h))
      i.call(h, e) && m(a, e, h[e]);
  return a;
};
var A = (a, h) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      h.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((t, e) => {
  var r = t, { children: a } = r, h = A(r, ["children"]);
  return /* @__PURE__ */ V.createElement(c, p({ ref: e }, h), a, /* @__PURE__ */ V.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H92a4,4,0,0,0,4-4V208H88.27A8.17,8.17,0,0,1,80,200.53,8,8,0,0,1,88,192h8V176H88.27A8.17,8.17,0,0,1,80,168.53,8,8,0,0,1,88,160h8V144H88.27A8.17,8.17,0,0,1,80,136.53,8,8,0,0,1,88,128h8v-7.73a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v20a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};
