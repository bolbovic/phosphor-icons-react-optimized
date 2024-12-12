var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import d, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ d.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M236,198.65V240a12,12,0,0,1-24,0V198.65A70.66,70.66,0,0,0,196,154v48.27a12,12,0,0,1-22,6.57l-10.67-16.3c-.13-.19-.25-.38-.36-.58a8,8,0,0,0-14,7.77l22,33.66a12,12,0,1,1-20.08,13.14l-22.26-34c-.12-.19-.24-.38-.35-.58A32,32,0,0,1,172,168.3V68h-8a12,12,0,0,1,0-24h12a20,20,0,0,1,20,20v57.52A94.91,94.91,0,0,1,236,198.65ZM88,56A12,12,0,0,0,76,44H64A20,20,0,0,0,44,64V200a12,12,0,0,0,24,0V68h8A12,12,0,0,0,88,56Zm68.49,60.48a12,12,0,0,0-17-17L132,107V16a12,12,0,0,0-24,0v91l-7.51-7.52a12,12,0,0,0-17,17l28,28a12,12,0,0,0,17,0Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
