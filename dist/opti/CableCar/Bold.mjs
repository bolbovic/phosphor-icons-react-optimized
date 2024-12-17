var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && H(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M251.81,29.89a12,12,0,0,0-13.92-9.7l-224,40A12,12,0,0,0,16,84a11.77,11.77,0,0,0,2.12-.19L116,66.33V92H64a36,36,0,0,0-36,36v64a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V128a36,36,0,0,0-36-36H140V62.05L242.11,43.81A12,12,0,0,0,251.81,29.89ZM108,156V116h40v40ZM64,116H84v40H52V128A12,12,0,0,1,64,116Zm128,88H64a12,12,0,0,1-12-12V180H204v12A12,12,0,0,1,192,204Zm12-76v28H172V116h20A12,12,0,0,1,204,128Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
