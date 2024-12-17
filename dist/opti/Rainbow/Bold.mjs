var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, v, e) => v in a ? i(a, v, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[v] = e, l = (a, v) => {
  for (var e in v || (v = {}))
    p.call(v, e) && m(a, e, v[e]);
  if (o)
    for (var e of o(v))
      d.call(v, e) && m(a, e, v[e]);
  return a;
};
var c = (a, v) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && v.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      v.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var r = t, { children: a } = r, v = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, l({ ref: e }, v), a, /* @__PURE__ */ f.createElement("path", { d: "M256,172v8a12,12,0,0,1-24,0v-8a104,104,0,0,0-208,0v8a12,12,0,0,1-24,0v-8a128,128,0,0,1,256,0ZM128,140a36,36,0,0,0-36,36v4a12,12,0,0,0,24,0v-4a12,12,0,0,1,24,0v4a12,12,0,0,0,24,0v-4A36,36,0,0,0,128,140Zm0-48a84.09,84.09,0,0,0-84,84v4a12,12,0,0,0,24,0v-4a60,60,0,0,1,120,0v4a12,12,0,0,0,24,0v-4A84.09,84.09,0,0,0,128,92Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
