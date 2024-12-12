var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    L.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      Z.call(t, a) && r(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var l in e)
    L.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && m)
    for (var l of m(e))
      t.indexOf(l) < 0 && Z.call(e, l) && (a[l] = e[l]);
  return a;
};
import d, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((l, a) => {
  var o = l, { children: e } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ d.createElement(c, p({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M205.82,128l28.6-50A12,12,0,0,0,224,60H167l-28.55-50A12,12,0,0,0,128,4h0a12,12,0,0,0-10.42,6.05L89,60H32A12,12,0,0,0,21.58,78l28.58,50L21.58,178A12,12,0,0,0,32,196H89l28.57,50a12,12,0,0,0,20.84,0L167,196h57a12,12,0,0,0,10.42-17.95Zm-2.5-44L192,103.81,180.68,84Zm-25.14,44L153,172h-50.1L77.81,128l25.13-44H153ZM128,40.18,139.33,60H116.66ZM52.68,84H75.29L64,103.82Zm0,87.92L64,152.18,75.29,172ZM128,215.82,116.66,196h22.67ZM180.68,172,192,152.19,203.32,172Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
