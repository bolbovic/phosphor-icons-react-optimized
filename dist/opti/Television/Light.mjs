var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((m, e) => {
  var o = m, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,66H142.48l37.76-37.76a6,6,0,0,0-8.48-8.48L128,63.51,84.24,19.76a6,6,0,1,0-8.48,8.48L113.52,66H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM38,200V80a2,2,0,0,1,2-2H146V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H158V78h58a2,2,0,0,1,2,2Zm-20-84a10,10,0,1,1-10-10A10,10,0,0,1,198,116Zm0,48a10,10,0,1,1-10-10A10,10,0,0,1,198,164Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
