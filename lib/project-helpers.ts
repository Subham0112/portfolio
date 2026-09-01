import type { ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";

export function projectCategoryLabel(category: ProjectCategory): string {
  const found = projectCategories.find((entry) => entry.value === category);
  return found?.label ?? category;
}