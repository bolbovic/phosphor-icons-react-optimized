var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, t, c) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[t] = c, p = (e, t) => {
  for (var c in t || (t = {}))
    C.call(t, c) && o(e, c, t[c]);
  if (m)
    for (var c of m(t))
      i.call(t, c) && o(e, c, t[c]);
  return e;
};
var s = (e, t) => {
  var c = {};
  for (var a in e)
    C.call(e, a) && t.indexOf(a) < 0 && (c[a] = e[a]);
  if (e != null && m)
    for (var a of m(e))
      t.indexOf(a) < 0 && i.call(e, a) && (c[a] = e[a]);
  return c;
};
import Z, { forwardRef as f } from "react";
import v from "../../lib/OptiBase.mjs";
const M = f((a, c) => {
  var r = a, { children: e } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(v, p({ ref: c }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M205.79,67.42C185.9,57.48,158.27,52,128,52S70.1,57.48,50.21,67.42C31,77,20,90.35,20,104v48c0,13.65,11,27,30.21,36.58C70.1,198.52,97.73,204,128,204s57.9-5.48,77.79-15.42C225,179,236,165.65,236,152V104C236,90.35,225,77,205.79,67.42ZM128,60c61.77,0,100,22.84,100,44s-38.23,44-100,44S28,125.16,28,104,66.23,60,128,60ZM124,156v40c-22-.35-40.94-3.65-56-8.71V147.65C84.23,152.75,103.44,155.62,124,156Zm8,0c20.56-.33,39.77-3.2,56-8.3v39.59c-15.06,5.06-33.95,8.36-56,8.71ZM28,152V123.92c5.15,6.19,12.67,11.89,22.21,16.66,3.08,1.54,6.36,2.95,9.79,4.28v39.38C39.49,175.67,28,163.59,28,152Zm200,0c0,11.59-11.49,23.67-32,32.24V144.86c3.43-1.33,6.71-2.74,9.79-4.28,9.54-4.77,17.06-10.47,22.21-16.66Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
