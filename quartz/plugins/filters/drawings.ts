import { QuartzFilterPlugin } from "../types"

export const RemoveDrawings: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const drawingFlag: boolean = vfile.data.frontmatter?.tags?.includes("excalidraw") ?? false
    return !drawingFlag
  },
})
