var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var V in a)
    o.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && i.call(a, V) && (e[V] = a[V]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((V, e) => {
  var r = V, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M227.09,146.86,190,124.6V104a6,6,0,0,0-3-5.21L134,68.52V46h18a6,6,0,0,0,0-12H134V16a6,6,0,0,0-12,0V34H104a6,6,0,0,0,0,12h18V68.52L69,98.79A6,6,0,0,0,66,104v20.6L28.91,146.86A6,6,0,0,0,26,152v64a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V168a10,10,0,0,1,20,0v48a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V152A6,6,0,0,0,227.09,146.86ZM38,155.4l28-16.8V210H38Zm90-9.4a22,22,0,0,0-22,22v42H78V107.48l50-28.57,50,28.57V210H150V168A22,22,0,0,0,128,146Zm90,64H190V138.6l28,16.8Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
