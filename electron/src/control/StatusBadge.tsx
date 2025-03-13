import { Icon, IconName } from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import { useClassNameBuilder } from "@/helpers/style";
import React from "react";

type Props = {
  variant: "error" | "success";
};

export function StatusBadge({ variant }: Props) {
  const badgeStyle = useClassNameBuilder({
    base: "text-md",
    variables: {
      variant: {
        error: "bg-red-500",
        success: "bg-green-600",
      },
    },
  });
  const icon: IconName = variant === "error" ? "lu:TriangleAlert" : "lu:Check";
  return (
    <Badge
      className={badgeStyle({
        variant,
      })}
    >
      <Icon name={icon} />
      {variant}
    </Badge>
  );
}
