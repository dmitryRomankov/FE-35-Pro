import { OPEN_PREVIEW } from "./action-types";
export const openPreviewAction = (isOpen: string | boolean) => ({
  type: OPEN_PREVIEW,
  payload: isOpen,
});
