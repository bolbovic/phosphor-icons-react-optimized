var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M222,232a6,6,0,0,1-6,6H112a6,6,0,1,1,0-12H216A6,6,0,0,1,222,232Zm0-72v32a14,14,0,0,1-14,14H114.11a13.94,13.94,0,0,1-12.53-7.74l-58.11-116a14.06,14.06,0,0,1,0-12.52l22.12-44a14,14,0,0,1,18.58-6.35l33.74,14.24.34.17a14,14,0,0,1,6.27,18.78l-.09.16L110.18,79.16a2,2,0,0,0,0,1.73l31.78,64a2,2,0,0,0,1.78,1.09H208A14,14,0,0,1,222,160Zm-12,0a2,2,0,0,0-2-2H143.77a13.94,13.94,0,0,1-12.52-7.74l-31.78-64a14,14,0,0,1,0-12.5l.09-.17,14.25-26.42a2,2,0,0,0,.08-1.47,2,2,0,0,0-.89-1.1L79.35,30.37,79,30.21a2,2,0,0,0-.89-.21,2,2,0,0,0-1.79,1.1l-22.12,44a2,2,0,0,0,0,1.78l58.12,116a2,2,0,0,0,1.79,1.11H208a2,2,0,0,0,2-2Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
