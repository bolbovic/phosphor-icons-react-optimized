var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var r = (a, c, e) => c in a ? M(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, p = (a, c) => {
  for (var e in c || (c = {}))
    l.call(c, e) && r(a, e, c[e]);
  if (A)
    for (var e of A(c))
      m.call(c, e) && r(a, e, c[e]);
  return a;
};
var s = (a, c) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      c.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const h = Z((t, e) => {
  var o = t, { children: a } = o, c = s(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, c), a, /* @__PURE__ */ d.createElement("path", { d: "M48,120a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,1,0,24,0V88a12,12,0,0,0-3.51-8.48l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68A12,12,0,0,0,48,120ZM183,80H160V57ZM87.78,196.8a24.72,24.72,0,0,1-10.94,18c-6,4-13.27,5.15-19.74,5.15a63.75,63.75,0,0,1-16.23-2.21,12,12,0,1,1,6.46-23.11c6.82,1.85,15,1.61,16.39.06a2.48,2.48,0,0,0,.21-.71c-1.94-1.23-6.82-2.64-9.88-3.53-5.39-1.56-11-3.17-15.75-6.26-7.62-4.92-11.21-12.45-10.1-21.19a24.44,24.44,0,0,1,10.68-17.76c6.07-4.09,14.17-5.82,24.1-5.17A69,69,0,0,1,75,142a12,12,0,0,1-6.1,23.21c-6.35-1.63-13.61-1.51-16.07-.33a79.69,79.69,0,0,0,7.92,2.59c5.47,1.58,11.67,3.37,16.8,6.82C85.33,179.53,89,187.53,87.78,196.8ZM155.3,156l-20,56a12,12,0,0,1-22.6,0l-20-56A12,12,0,1,1,115.3,148L124,172.3,132.7,148A12,12,0,1,1,155.3,156ZM224,188v12.87a12,12,0,0,1-3.33,8.3A34,34,0,0,1,196,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a33.39,33.39,0,0,1,18.71,5.8,12,12,0,1,1-13.42,19.89A9.39,9.39,0,0,0,196,164c-6.5,0-12,7.33-12,16s5.5,16,12,16a9,9,0,0,0,2.7-.42A12,12,0,0,1,208,176h4A12,12,0,0,1,224,188Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};