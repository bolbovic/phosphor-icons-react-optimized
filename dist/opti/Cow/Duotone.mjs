var n = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      r.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && A)
    for (var m of A(a))
      t.indexOf(m) < 0 && r.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as i } from "react";
import v from "../../lib/OptiBase.mjs";
const M = i((m, e) => {
  var H = m, { children: a } = H, t = c(H, ["children"]);
  return /* @__PURE__ */ h.createElement(v, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement(
    "path",
    {
      d: "M208,192h0a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32h0a32,32,0,0,1,32-32h96A32,32,0,0,1,208,192ZM64,104A32,32,0,0,1,96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64Zm175.85,6.53A48,48,0,0,0,192.78,72H160a32,32,0,0,1,32,32v16h40A8,8,0,0,0,239.85,110.53Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ h.createElement("path", { d: "M104,192a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16H96A8,8,0,0,1,104,192Zm72-8H160a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Zm-76-72a12,12,0,1,0,12,12A12,12,0,0,0,100,112Zm56,0a12,12,0,1,0,12,12A12,12,0,0,0,156,112Zm88.39,10.12A16,16,0,0,1,232,128H200v32a40,40,0,0,1-24,72H80a40,40,0,0,1-24-72V128H24A16,16,0,0,1,8.31,109,56.13,56.13,0,0,1,63.22,64h1.64A55.83,55.83,0,0,1,48,24a8,8,0,0,1,16,0,40,40,0,0,0,40,40h48a40,40,0,0,0,40-40,8,8,0,0,1,16,0,55.83,55.83,0,0,1-16.86,40h1.64a56.13,56.13,0,0,1,54.91,45A15.82,15.82,0,0,1,244.39,122.12ZM56,112v-8a39.81,39.81,0,0,1,8-24h-.8A40.09,40.09,0,0,0,24,112Zm144,80a24,24,0,0,0-24-24H80a24,24,0,0,0,0,48h96A24,24,0,0,0,200,192Zm-16-39.2V104a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v48.8a40.57,40.57,0,0,1,8-.8h96A40.57,40.57,0,0,1,184,152.8ZM232,112a40.08,40.08,0,0,0-39.2-32H192a39.81,39.81,0,0,1,8,24v8Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
