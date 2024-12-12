var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, a) => {
  var r = l, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M203.63,62.65l13.25-14.58a12,12,0,0,0-17.76-16.14L185.88,46.49A100,100,0,0,0,52.37,193.35L39.12,207.93a12,12,0,1,0,17.76,16.14l13.24-14.56A100,100,0,0,0,203.63,62.65ZM52,128A75.94,75.94,0,0,1,169.58,64.43l-100.91,111A75.6,75.6,0,0,1,52,128Zm76,76a75.52,75.52,0,0,1-41.58-12.43l100.91-111A75.94,75.94,0,0,1,128,204Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
