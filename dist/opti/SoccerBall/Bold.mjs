var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (e, t, l) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, p = (e, t) => {
  for (var l in t || (t = {}))
    L.call(t, l) && r(e, l, t[l]);
  if (m)
    for (var l of m(t))
      Z.call(t, l) && r(e, l, t[l]);
  return e;
};
var d = (e, t) => {
  var l = {};
  for (var a in e)
    L.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
  if (e != null && m)
    for (var a of m(e))
      t.indexOf(a) < 0 && Z.call(e, a) && (l[a] = e[a]);
  return l;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((a, l) => {
  var o = a, { children: e } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ A.createElement(h, p({ ref: l }, t), e, /* @__PURE__ */ A.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm71.88,151.42h-24L166.1,158l11.3-32.94L193.15,120l18.6,14.26A83.42,83.42,0,0,1,199.88,171.42ZM44.25,134.21,62.85,120l15.75,5.11L89.9,158l-9.75,13.42h-24A83.42,83.42,0,0,1,44.25,134.21ZM111.85,148l-9.54-27.77L128,102.56l25.69,17.67L144.15,148Zm80.66-73.73-6.78,22.85-15.81,5.14L140,81.69V65.46l21.22-14.59A84.27,84.27,0,0,1,192.51,74.27ZM94.78,50.87,116,65.46V81.69L86.08,102.26,70.27,97.12,63.49,74.27A84.27,84.27,0,0,1,94.78,50.87Zm13.58,158.79-8.62-24.37L109.39,172h37.22l9.65,13.29-8.62,24.37a83.59,83.59,0,0,1-39.28,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};