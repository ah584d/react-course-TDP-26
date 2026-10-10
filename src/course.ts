import type { ComponentType } from "react";

export type CourseTargetKind = "demo" | "exercise";
export type CourseTargetVariant = "demo" | "starter" | "solution";

export interface CourseTargetMeta {
  id: string;
  title: string;
  description?: string;
  dayOrder: number;
  dayLabel: string;
  kind: CourseTargetKind;
  variant: CourseTargetVariant;
  order: number;
}

export interface CourseTargetModule {
  default: ComponentType;
  meta: CourseTargetMeta;
}

export interface CourseTarget {
  component: ComponentType;
  meta: CourseTargetMeta;
}

export interface CourseDay {
  dayId: string;
  dayOrder: number;
  dayLabel: string;
  folderName: string;
  presentationHref?: string;
}

export const courseDays: CourseDay[] = [
  {
    dayId: "day-1",
    dayOrder: 1,
    dayLabel: "Day 1",
    folderName: "Day 1",
    presentationHref: "/presentation/Day%201/index.html",
  },
  {
    dayId: "day-2",
    dayOrder: 2,
    dayLabel: "Day 2",
    folderName: "Day 2",
    presentationHref: "/presentation/Day%202/index.html",
  },
  {
    dayId: "day-3",
    dayOrder: 3,
    dayLabel: "Day 3",
    folderName: "Day 3",
    presentationHref: "/presentation/Day%203/index.html",
  },
  {
    dayId: "day-4",
    dayOrder: 4,
    dayLabel: "Day 4",
    folderName: "Day 4",
    presentationHref: "/presentation/Day%204/index.html",
  },
  {
    dayId: "day-5",
    dayOrder: 5,
    dayLabel: "Day 5",
    folderName: "Day 5",
    presentationHref: "/presentation/Day%205/index.html",
  },
  {
    dayId: "day-6",
    dayOrder: 6,
    dayLabel: "Day 6",
    folderName: "Day 6",
    presentationHref: "/presentation/Day%206/index.html",
  },
];

const demoModules = import.meta.glob<CourseTargetModule>(
  "../demo/**/entry.tsx",
  { eager: true },
);

const starterModules = import.meta.glob<CourseTargetModule>(
  "../exercises/**/starter/entry.tsx",
  { eager: true },
);

const solutionModules = import.meta.glob<CourseTargetModule>(
  "../exercises/**/solution/entry.tsx",
  { eager: true },
);

const variantRank: Record<CourseTargetVariant, number> = {
  demo: 0,
  starter: 1,
  solution: 2,
};

const kindRank: Record<CourseTargetKind, number> = {
  demo: 0,
  exercise: 1,
};

function normalizeTargets(
  modules: Record<string, CourseTargetModule>,
): CourseTarget[] {
  return Object.values(modules).map((module) => ({
    component: module.default,
    meta: module.meta,
  }));
}

export const courseTargets = [
  ...normalizeTargets(demoModules),
  ...normalizeTargets(starterModules),
  ...normalizeTargets(solutionModules),
].sort((left, right) => {
  if (left.meta.dayOrder !== right.meta.dayOrder) {
    return left.meta.dayOrder - right.meta.dayOrder;
  }

  if (left.meta.order !== right.meta.order) {
    return left.meta.order - right.meta.order;
  }

  if (kindRank[left.meta.kind] !== kindRank[right.meta.kind]) {
    return kindRank[left.meta.kind] - kindRank[right.meta.kind];
  }

  if (variantRank[left.meta.variant] !== variantRank[right.meta.variant]) {
    return variantRank[left.meta.variant] - variantRank[right.meta.variant];
  }

  return left.meta.title.localeCompare(right.meta.title);
});

export function resolveRequestedTarget() {
  const params = new URLSearchParams(window.location.search);

  if (params.has("target")) {
    const queryTarget = params.get("target")?.trim();
    return queryTarget && queryTarget !== "launcher" ? queryTarget : undefined;
  }

  const envTarget = import.meta.env.VITE_COURSE_TARGET?.trim();
  return envTarget ? envTarget : undefined;
}

export function resolveRequestedDay() {
  const params = new URLSearchParams(window.location.search);
  const queryDay = params.get("day")?.trim();
  return queryDay ? queryDay : undefined;
}

export function getCourseDay(dayIdOrLabel: string) {
  return courseDays.find(
    (day) => day.dayId === dayIdOrLabel || day.dayLabel === dayIdOrLabel,
  );
}

export function getDayHref(day: CourseDay) {
  return `/?day=${encodeURIComponent(day.dayId)}`;
}

export function groupTargetsByDay(targets: CourseTarget[]) {
  return targets.reduce<CourseTarget[][]>((groups, target) => {
    const lastGroup = groups.at(-1);

    if (!lastGroup || lastGroup[0].meta.dayLabel !== target.meta.dayLabel) {
      groups.push([target]);
      return groups;
    }

    lastGroup.push(target);
    return groups;
  }, []);
}

export function getVariantLabel(variant: CourseTargetVariant) {
  switch (variant) {
    case "demo":
      return "Demo";
    case "starter":
      return "Starter";
    case "solution":
      return "Solution";
  }
}

export function getDayTargets(dayLabel: string, kind?: CourseTargetKind) {
  return courseTargets.filter((target) => {
    if (target.meta.dayLabel !== dayLabel) {
      return false;
    }

    return kind ? target.meta.kind === kind : true;
  });
}
