var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var L = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    m.call(l, e) && L(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && L(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    m.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M240.49,63.51l-48-48a12,12,0,0,0-17,17L191,48,168,71,136.49,39.51a12,12,0,1,0-17,17L123,60,41.86,141.17A19.86,19.86,0,0,0,36,155.31V203L15.51,223.51a12,12,0,0,0,17,17L53,220h47.72a19.86,19.86,0,0,0,14.14-5.86L196,133l3.51,3.52a12,12,0,0,0,17-17L185,88l23-23,15.51,15.52a12,12,0,1,0,17-17ZM99,196H60V157l14-14,17.51,17.52a12,12,0,0,0,17-17L91,126l11-11,17.51,17.52a12,12,0,0,0,17-17L119,98l21-21,39,39Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
