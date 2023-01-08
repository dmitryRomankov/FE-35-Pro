import { PayloadAction } from "@reduxjs/toolkit";
import { OPEN_PREVIEW } from "./action-types";

// interface IPreview {
//   isOpen: boolean;
// }

// const PreviewInitialState: IPreview = {
//   isOpen: false,
// };

// export const viewPictureReducer = (
//   state: IPreview = PreviewInitialState,
//   action: PayloadAction<boolean>
// ) => {
//   switch (action.type) {
//     case OPEN_PREVIEW:
//       return {
//         ...state,
//         isOpen: action.payload,
//       };
//     default:
//       return state;
//   }
// };
