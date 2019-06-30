// bundle all the exports (모든 파일들 모아서 export)
// index.js 만 import 해서 모두 사용할 수 있도록
// 나중에 action 이 많아지면 많이 유용하다.

export { addPlace, deletePlace, selectPlace, deselectPlace } from "./places";
