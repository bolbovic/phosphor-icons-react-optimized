import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuODksMTk4LjEybC0xNC4yNi0xMjBhMTYsMTYsMCwwLDAtMTYtMTQuMTJIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBINDYuMzNhMTYsMTYsMCwwLDAtMTYsMTQuMTJsLTE0LjI2LDEyMEExNiwxNiwwLDAsMCwyMCwyMTAuNmExNi4xMywxNi4xMywwLDAsMCwxMiw1LjRIMjIzLjkyQTE2LjEzLDE2LjEzLDAsMCwwLDIzNiwyMTAuNiwxNiwxNiwwLDAsMCwyMzkuODksMTk4LjEyWk0xMjgsMzJhMzIsMzIsMCwwLDEsMzIsMzJIOTZBMzIsMzIsMCwwLDEsMTI4LDMyWk0zMiwyMDAsNDYuMzMsODBIODB2MjRhOCw4LDAsMCwwLDE2LDBWODBoNjR2MjRhOCw4LDAsMCwwLDE2LDBWODBoMzMuNzVsMTQuMTcsMTIwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuOTIsMTk4LjU5bC0xNC4yNi0xMjBhMTIsMTIsMCwwLDAtMTItMTAuNTlIMTcyVjY0YTQ0LDQ0LDAsMCwwLTg4LDB2NEg0Ni4zM2ExMiwxMiwwLDAsMC0xMiwxMC41OWwtMTQuMjYsMTIwQTEyLDEyLDAsMCwwLDIzLDIwNy45NCwxMi4xMSwxMi4xMSwwLDAsMCwzMi4wOCwyMTJIMjIzLjkyYTEyLjExLDEyLjExLDAsMCwwLDkuMDYtNC4wNkExMiwxMiwwLDAsMCwyMzUuOTIsMTk4LjU5Wk05Miw2NGEzNiwzNiwwLDAsMSw3MiwwdjRIOTJaTTIyNywyMDIuNjNhNC4wOCw0LjA4LDAsMCwxLTMuMDgsMS4zN0gzMi4wOEE0LjA4LDQuMDgsMCwwLDEsMjksMjAyLjYzYTMuOSwzLjksMCwwLDEtMS0zLjA5bDE0LjI1LTEyMGE0LDQsMCwwLDEsNC0zLjU0SDg0djI4YTQsNCwwLDAsMCw4LDBWNzZoNzJ2MjhhNCw0LDAsMCwwLDgsMFY3NmgzNy42N2E0LDQsMCwwLDEsNC4wNSwzLjU0bDE0LjI1LDEyMEEzLjksMy45LDAsMCwxLDIyNywyMDIuNjNaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuOSwxOTguMzZsLTE0LjI1LTEyMGExNC4wNiwxNC4wNiwwLDAsMC0xNC0xMi4zNkgxNzRWNjRhNDYsNDYsMCwwLDAtOTIsMHYySDQ2LjMzYTE0LjA2LDE0LjA2LDAsMCwwLTE0LDEyLjM2bC0xNC4yNSwxMjBhMTQsMTQsMCwwLDAsMTQsMTUuNjRIMjIzLjkyYTE0LDE0LDAsMCwwLDE0LTE1LjY0Wk05NCw2NGEzNCwzNCwwLDAsMSw2OCwwdjJIOTRaTTIyNS41LDIwMS4zYTIuMDcsMi4wNywwLDAsMS0xLjU4LjdIMzIuMDhhMi4wNywyLjA3LDAsMCwxLTEuNTgtLjcsMS45MiwxLjkyLDAsMCwxLS40OS0xLjUzbDE0LjI2LTEyMEEyLDIsMCwwLDEsNDYuMzMsNzhIODJ2MjZhNiw2LDAsMCwwLDEyLDBWNzhoNjh2MjZhNiw2LDAsMCwwLDEyLDBWNzhoMzUuNjdhMiwyLDAsMCwxLDIuMDYsMS43N2wxNC4yNiwxMjBBMS45MiwxLjkyLDAsMCwxLDIyNS41LDIwMS4zWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuODYsMTk3LjY1bC0xNC4yNS0xMjBBMjAuMDYsMjAuMDYsMCwwLDAsMjA5LjY3LDYwSDE3OS44M0E1Miw1MiwwLDAsMCw3Ni4xNyw2MEg0Ni4zM0EyMC4wNiwyMC4wNiwwLDAsMCwyNi4zOSw3Ny42NWwtMTQuMjUsMTIwQTIwLDIwLDAsMCwwLDMyLjA4LDIyMEgyMjMuOTJhMjAsMjAsMCwwLDAsMTkuOTQtMjIuMzVaTTEyOCwzNmEyOCwyOCwwLDAsMSwyNy43MSwyNEgxMDAuMjlBMjgsMjgsMCwwLDEsMTI4LDM2Wk0zNi41LDE5Niw0OS44MSw4NEg3NnYyMGExMiwxMiwwLDAsMCwyNCwwVjg0aDU2djIwYTEyLDEyLDAsMCwwLDI0LDBWODRoMjYuMTlMMjE5LjUsMTk2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuODksMTk4LjEybC0xNC4yNi0xMjBhMTYsMTYsMCwwLDAtMTYtMTQuMTJIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBINDYuMzNhMTYsMTYsMCwwLDAtMTYsMTQuMTJsLTE0LjI2LDEyMEExNiwxNiwwLDAsMCwyMCwyMTAuNmExNi4xMywxNi4xMywwLDAsMCwxMiw1LjRIMjIzLjkyQTE2LjEzLDE2LjEzLDAsMCwwLDIzNiwyMTAuNiwxNiwxNiwwLDAsMCwyMzkuODksMTk4LjEyWk05NiwxMDRhOCw4LDAsMCwxLTE2LDBWODhhOCw4LDAsMCwxLDE2LDBabTMyLTcyYTMyLDMyLDAsMCwxLDMyLDMySDk2QTMyLDMyLDAsMCwxLDEyOCwzMlptNDgsNzJhOCw4LDAsMCwxLTE2LDBWODhhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuOTIsMjA4SDMyLjA4YTgsOCwwLDAsMS04LTguOTNsMTQuMjUtMTIwYTguMDYsOC4wNiwwLDAsMSw4LTcuMDdIMjA5LjY3YTguMDYsOC4wNiwwLDAsMSw4LDcuMDdsMTQuMjUsMTIwQTgsOCwwLDAsMSwyMjMuOTIsMjA4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzOS44OSwxOTguMTJsLTE0LjI2LTEyMGExNiwxNiwwLDAsMC0xNi0xNC4xMkgxNzZhNDgsNDgsMCwwLDAtOTYsMEg0Ni4zM2ExNiwxNiwwLDAsMC0xNiwxNC4xMmwtMTQuMjYsMTIwQTE2LDE2LDAsMCwwLDIwLDIxMC42YTE2LjEzLDE2LjEzLDAsMCwwLDEyLDUuNEgyMjMuOTJBMTYuMTMsMTYuMTMsMCwwLDAsMjM2LDIxMC42LDE2LDE2LDAsMCwwLDIzOS44OSwxOTguMTJaTTEyOCwzMmEzMiwzMiwwLDAsMSwzMiwzMkg5NkEzMiwzMiwwLDAsMSwxMjgsMzJaTTMyLDIwMCw0Ni4zMyw4MEg4MHYyNGE4LDgsMCwwLDAsMTYsMFY4MGg2NHYyNGE4LDgsMCwwLDAsMTYsMFY4MGgzMy43NWwxNC4xNywxMjBaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Handbag };