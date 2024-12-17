var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    s.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as H } from "react";
import f from "../../lib/OptiBase.mjs";
const h = H((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M48,140H32a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12H48a40,40,0,0,0,0-80Zm0,56H44V164h4a16,16,0,0,1,0,32Zm180.3-3.8a12,12,0,0,1,.37,17A34,34,0,0,1,204,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,0,1-17.34,16.6A10.27,10.27,0,0,0,204,164c-6.5,0-12,7.33-12,16s5.5,16,12,16a10.27,10.27,0,0,0,7.33-3.43A12,12,0,0,1,228.3,192.2ZM128,140c-19.85,0-36,17.94-36,40s16.15,40,36,40,36-17.94,36-40S147.85,140,128,140Zm0,56c-6.5,0-12-7.33-12-16s5.5-16,12-16,12,7.33,12,16S134.5,196,128,196ZM48,120a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.48l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68A12,12,0,0,0,48,120ZM160,57l23,23H160Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
