var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, H = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      A.call(l, e) && m(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var r = t, { children: a } = r, l = d(r, ["children"]);
  return /* @__PURE__ */ M.createElement(f, H({ ref: e }, l), a, /* @__PURE__ */ M.createElement("path", { d: "M227.58,116.84l-22.4-82.1A20,20,0,0,0,185.89,20H70.11A20,20,0,0,0,50.82,34.74l-22.4,82.1a12.1,12.1,0,0,0,0,6.32l22.4,82.1A20,20,0,0,0,70.11,220H72l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h1.89a20,20,0,0,0,19.29-14.74l22.4-82.1A12.1,12.1,0,0,0,227.58,116.84ZM73.17,44H182.83L201,110.53,128,123.8,55,110.53ZM56.59,135.21,116,146v50H73.17ZM182.83,196H140V146l59.41-10.8ZM84,88A12,12,0,0,1,96,76h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,88Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
