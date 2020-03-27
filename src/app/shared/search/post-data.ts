/**
 * 具体详情参考 PostData.md
 */
export interface PostData {
  searchWord?: string, // 搜索关键文本
  searchType: "0" | "1", // 查询类型(0：根据code查询，1：根据名称。)。
  needSubInfo: "true" | "false", // 是否需要下一级信息。
  needAll: "true" | "false", // 是否需要所有子节点(包括孙子节点..)。
  needPolygon: "true" | "false", // 是否需要行政区划范围。
  needPre: "true" | "false" // 是否需要上一级所有信息。
}
