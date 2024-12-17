var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var H = o, { children: a } = H, t = d(H, ["children"]);
  return /* @__PURE__ */ A.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M252,128a12,12,0,0,1-12,12H226.6A52.09,52.09,0,0,1,176,180H140v16h20a36,36,0,0,1,36,36,12,12,0,0,1-24,0,12,12,0,0,0-12-12H140v12a12,12,0,0,1-24,0V220H96a12,12,0,0,0-12,12,12,12,0,0,1-24,0,36,36,0,0,1,36-36h20V180H80a52.09,52.09,0,0,1-50.6-40H16a12,12,0,0,1,0-24H40a12,12,0,0,1,12,12,28,28,0,0,0,28,28h96a28,28,0,0,0,28-28,12,12,0,0,1,12-12h24A12,12,0,0,1,252,128ZM72.82,133a20,20,0,0,1-4.59-16L81.8,29a19.91,19.91,0,0,1,19.79-17h52.82A19.91,19.91,0,0,1,174.2,29l13.57,88A20,20,0,0,1,168,140H88A20,20,0,0,1,72.82,133Zm19.85-17h70.66L151,36H105Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
