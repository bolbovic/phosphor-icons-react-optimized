import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODcuMzcsMzJjLTE4Ljc5LTcuNjgtNDEuMTQtOS45Mi02Mi45My02LjMtMjMuNDQsMy45LTQzLjczLDE0LTU4LjY4LDI5LjItMTEuMTIsMTEuMzItMjQuNjIsMzMuMzUtMjUuNyw3NC0uNywyNi40OSw0LjM5LDU1LjQ0LDEzLjYxLDc3LjQ1Uzc0LjYxLDI0MCw4Ny41MiwyNDBjMjIuOTQsMCwzMy4yMy0yMC4wOCw0My4xNy0zOS41LDctMTMuNiwxNC4xNi0yNy42NiwyNS41NS0zNS4zOGgwYzUuODYtNCwxMy44LTcsMjIuMjEtMTAuMjgsMjMuODYtOS4yLDUzLjU1LTIwLjY2LDUzLjU1LTYxLjY3QzIzMiw2NS45LDIxNS43Myw0My42LDE4Ny4zNywzMlpNMTcyLjY5LDEzOS45MWMtOS4yOCwzLjU4LTE4LjA1LDctMjUuNDMsMTItMTQuNzgsMTAtMjMuMywyNi42Ni0zMC44MSw0MS4zM0MxMDYuNjcsMjEyLjMsMTAwLjA1LDIyNCw4Ny41MiwyMjRjLTQuNTIsMC0xMi4xOC03LjM3LTE5LjA5LTIzLjg1LTguMzktMjAtMTMtNDYuNDktMTIuMzctNzAuODMuNzMtMjcuNjYsOC4yMy01MC4xMSwyMS4xMS02My4yMUM5NS4yMyw0Ny43NCwxMjAuNzksNDAsMTQ0LjU3LDQwYTk4LjQ4LDk4LjQ4LDAsMCwxLDM2Ljc0LDYuNzZjMTMsNS4zLDM0LjY5LDE4LjM4LDM0LjY5LDQ2LjM3QzIxNiwxMjMuMjEsMTk1LjkzLDEzMSwxNzIuNjksMTM5LjkxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODUuODUsMzUuN2MtMTguMTEtNy40MS0zOS42OC05LjU2LTYwLjc2LTYuMDZDMTAyLjUsMzMuNCw4Myw0My4xLDY4LjYyLDU3LjcsNTgsNjguNSw0NS4xMSw4OS42NSw0NC4wNiwxMjljLS42OSwyNS45NSw0LjI5LDU0LjI5LDEzLjMsNzUuNzlDNjUuOCwyMjQuOTIsNzYuNTEsMjM2LDg3LjUyLDIzNmMyMC41LDAsMjkuNzgtMTguMTMsMzkuNjEtMzcuMzIsNy4xOS0xNC4wNSwxNC42My0yOC41NywyNi44Ni0zNi44Nyw2LjI1LTQuMjMsMTQuMzktNy4zNywyMy0xMC43LDIyLjcyLTguNzYsNTEtMTkuNjcsNTEtNTcuOTRDMjI4LDY3LjYsMjEyLjY0LDQ2LjY2LDE4NS44NSwzNS43Wk0xNzQuMTMsMTQzLjY0Yy05LjA2LDMuNS0xNy42Myw2LjgtMjQuNjMsMTEuNTUtMTMuOTMsOS40NS0yMi4yLDI1LjYtMjkuNDksMzkuODQtOS4wNiwxNy42OS0xNi44OCwzMy0zMi40OSwzMy03LjM2LDAtMTUuODgtOS44My0yMi43OC0yNi4zLTguNi0yMC41MS0xMy4zNC00Ny42MS0xMi42OC03Mi40OSwxLTM2Ljc1LDEyLjY0LTU2LjEyLDIyLjI2LTY1LjksMTguODYtMTkuMTksNDUuNTMtMjcuMjMsNzAuMzMtMjcuMjMsMTMuODgsMCwyNy4xOCwyLjUyLDM4LjE3LDdDMjE1LjE3LDU2LjM0LDIyMCw4MC4xNSwyMjAsOTMuMTcsMjIwLDEyNiwxOTYuNjgsMTM1LDE3NC4xMywxNDMuNjRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODYuNjEsMzMuODRjLTE4LjQ1LTcuNTQtNDAuNDEtOS43NC02MS44NC02LjE3LTIzLDMuODItNDIuOTMsMTMuNzItNTcuNTgsMjguNjJDNTYuMzEsNjcuMzYsNDMuMTMsODguOTQsNDIuMDYsMTI4Ljk0Yy0uNjksMjYuMjMsNC4zNCw1NC44NywxMy40Niw3Ni42Miw4Ljc3LDIwLjkyLDIwLjEzLDMyLjQ0LDMyLDMyLjQ0LDIxLjcyLDAsMzEuNzItMTkuNTMsNDEuMzktMzguNDEsNy4wOC0xMy44MiwxNC40LTI4LjExLDI2LjIxLTM2LjEyaDBjNi00LjExLDE0LjA5LTcuMjEsMjIuNjEtMTAuNUMyMDEsMTQ0LDIzMCwxMzIuODEsMjMwLDkzLjE3LDIzMCw2Ni43NSwyMTQuMTksNDUuMTMsMTg2LjYxLDMzLjg0Wm0tMTMuMiwxMDcuOTRjLTkuMTcsMy41NC0xNy44NCw2Ljg4LTI1LDExLjc2LTE0LjM2LDkuNzMtMjIuNzUsMjYuMTItMzAuMTUsNDAuNThDMTA5LjQ3LDIxMS4yMywxMDEuOSwyMjYsODcuNTIsMjI2Yy01LDAtMTMuMTgtNi41OS0yMC45NC0yNS4wOC04LjQ5LTIwLjI2LTEzLjE3LTQ3LTEyLjUyLTcxLjY2Ljc1LTI4LjE2LDguNDUtNTEuMDksMjEuNjktNjQuNTUsMTguNDUtMTguNzgsNDQuNTctMjYuNjUsNjguODYtMjYuNjVBMTAwLjMyLDEwMC4zMiwwLDAsMSwxODIuMDcsNDVDMjEzLjMzLDU3Ljc0LDIxOCw4MC42NSwyMTgsOTMuMTcsMjE4LDEyNC41OCwxOTYuMzQsMTMyLjkzLDE3My40MSwxNDEuNzhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODguODgsMjguMjljLTE5LjQ3LTgtNDIuNTktMTAuMjktNjUuMTEtNi41NC0yNC4yOCw0LTQ1LjMzLDE0LjUzLTYwLjg4LDMwLjM0QzI1LjQ3LDkwLjE1LDMzLjA1LDE2Ny41Niw1MCwyMDcuODgsNTYuODcsMjI0LjM2LDY5LDI0NCw4Ny41MSwyNDRjMjUuMzgsMCwzNi43Mi0yMi4xNCw0Ni43My00MS42OCw2LjczLTEzLjE0LDEzLjY5LTI2Ljc0LDI0LjIzLTMzLjg5aDBjNS40OS0zLjcyLDEzLjIyLTYuNywyMS40MS05Ljg2LDIzLjY5LTkuMTMsNTYuMTItMjEuNjQsNTYuMTItNjUuNEMyMzYsNjQuMTksMjE4LjgyLDQwLjU0LDE4OC44OCwyOC4yOVpNMTcxLjI0LDEzNi4xOGMtOS4wOCwzLjUtMTguNDgsNy4xMy0yNi4yNCwxMi4zOS0xNS42MywxMC42LTI0LjM5LDI3LjcxLTMyLjEzLDQyLjgxQzEwMy43OSwyMDkuMTMsOTcuNywyMjAsODcuNTEsMjIwYy0xLjI4LDAtOC0zLjgxLTE1LjQxLTIxLjRDNTcuNDgsMTYzLjc1LDUxLjg5LDk3LjUxLDgwLDY4LjkxYzExLjc5LTEyLDI4LjczLTIwLjM0LDQ3LjY5LTIzLjQ5YTEwNC4zNywxMDQuMzcsMCwwLDEsMTctMS4zOSw5NCw5NCwwLDAsMSwzNS4wOCw2LjQ3YzEyLDQuOTIsMzIuMjEsMTcsMzIuMjEsNDIuNjdDMjEyLDExOS4xNCwxOTYuNTEsMTI2LjQzLDE3MS4yNCwxMzYuMThaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTMuMTdjMCw0MS0yOS42OSw1Mi40Ny01My41NSw2MS42Ny04LjQxLDMuMjQtMTYuMzUsNi4zLTIyLjIxLDEwLjI4LTExLjM5LDcuNzItMTguNTksMjEuNzgtMjUuNTUsMzUuMzgtOS45NCwxOS40Mi0yMC4yMywzOS41LTQzLjE3LDM5LjUtMTIuOTEsMC0yNC42MS0xMS42NC0zMy44NS0zMy42NnMtMTQuMzEtNTEtMTMuNjEtNzcuNDVjMS4wOC00MC42NSwxNC41OC02Mi42OCwyNS43LTc0LDE0Ljk1LTE1LjIsMzUuMjQtMjUuMyw1OC42OC0yOS4yLDIxLjc5LTMuNjIsNDQuMTQtMS4zOCw2Mi45Myw2LjNDMjE1LjczLDQzLjYsMjMyLDY1LjksMjMyLDkzLjE3WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOTMuMTZjMCw0OS00OC4xNyw0OS03Mi4yNSw2NS4zNEMxMjEuODgsMTc4Ljc2LDExOS42NCwyMzIsODcuNTIsMjMycy02MS43NC0xMjUtMTYtMTcxLjUxQzExOS42NCwxMS40OSwyMjQsMjcuODIsMjI0LDkzLjE2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4Ny4zNywzMmMtMTguNzktNy42OC00MS4xNC05LjkyLTYyLjkzLTYuMy0yMy40NCwzLjktNDMuNzMsMTQtNTguNjgsMjkuMi0xMS4xMiwxMS4zMi0yNC42MiwzMy4zNS0yNS43LDc0LS43LDI2LjQ5LDQuMzksNTUuNDQsMTMuNjEsNzcuNDVTNzQuNjEsMjQwLDg3LjUyLDI0MGMyMi45NCwwLDMzLjIzLTIwLjA4LDQzLjE3LTM5LjUsNy0xMy42LDE0LjE2LTI3LjY2LDI1LjU1LTM1LjM4LDUuODYtNCwxMy44LTcsMjIuMjEtMTAuMjgsMjMuODYtOS4yLDUzLjU1LTIwLjY2LDUzLjU1LTYxLjY3QzIzMiw2NS45LDIxNS43Myw0My42LDE4Ny4zNywzMlpNMTcyLjY5LDEzOS45MWMtOS4yOCwzLjU4LTE4LjA1LDctMjUuNDMsMTItMTQuNzgsMTAtMjMuMywyNi42Ni0zMC44MSw0MS4zM0MxMDYuNjcsMjEyLjMsMTAwLjA1LDIyNCw4Ny41MiwyMjRjLTQuNTIsMC0xMi4xOC03LjM3LTE5LjA5LTIzLjg1LTguMzktMjAtMTMtNDYuNDktMTIuMzctNzAuODMuNzMtMjcuNjYsOC4yMy01MC4xMSwyMS4xMS02My4yMUM5NS4yMyw0Ny43NCwxMjAuNzksNDAsMTQ0LjU3LDQwYTk4LjQ4LDk4LjQ4LDAsMCwxLDM2Ljc0LDYuNzZjMTMsNS4zLDM0LjY5LDE4LjM4LDM0LjY5LDQ2LjM3QzIxNiwxMjMuMjEsMTk1LjkzLDEzMSwxNzIuNjksMTM5LjkxWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as PatreonLogo };