var s = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, h, e) => h in a ? s(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, l = (a, h) => {
  for (var e in h || (h = {}))
    m.call(h, e) && r(a, e, h[e]);
  if (v)
    for (var e of v(h))
      c.call(h, e) && r(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && v)
    for (var t of v(a))
      h.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const i = Z((t, e) => {
  var o = t, { children: a } = o, h = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, l({ ref: e }, h), a, /* @__PURE__ */ d.createElement("path", { d: "M48,180c0,8.67,5.5,16,12,16a10.23,10.23,0,0,0,7.33-3.43,12,12,0,1,1,17.34,16.6A34,34,0,0,1,60,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,1,1-17.34,16.6A10.27,10.27,0,0,0,60,164C53.5,164,48,171.33,48,180ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,57V80h23ZM148,168h-8v-8a12,12,0,0,0-24,0v8h-8a12,12,0,0,0,0,24h8v8a12,12,0,0,0,24,0v-8h8a12,12,0,0,0,0-24Zm72,0h-8v-8a12,12,0,0,0-24,0v8h-8a12,12,0,0,0,0,24h8v8a12,12,0,0,0,24,0v-8h8a12,12,0,0,0,0-24Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
