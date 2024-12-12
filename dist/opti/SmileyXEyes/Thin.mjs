var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    L.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = n(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM186.83,98.83,173.66,112l13.17,13.17a4,4,0,0,1-5.66,5.66L168,117.66l-13.17,13.17a4,4,0,0,1-5.66-5.66L162.34,112,149.17,98.83a4,4,0,0,1,5.66-5.66L168,106.34l13.17-13.17a4,4,0,1,1,5.66,5.66Zm-80,0L93.66,112l13.17,13.17a4,4,0,0,1-5.66,5.66L88,117.66,74.83,130.83a4,4,0,0,1-5.66-5.66L82.34,112,69.17,98.83a4,4,0,0,1,5.66-5.66L88,106.34l13.17-13.17a4,4,0,0,1,5.66,5.66ZM136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
