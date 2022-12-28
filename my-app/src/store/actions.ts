import { OPEN_PREVIEW } from "./action-types";
export const openPreviewAction = (isOpen: boolean) => ({
  type: OPEN_PREVIEW,
  payload: isOpen,
});
