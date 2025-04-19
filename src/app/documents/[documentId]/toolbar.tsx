"use client";
import { cn } from "@/lib/utils";
import { LucideIcon, Undo2Icon } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
  label?: string;
}

const ToolBarButton = ({
  onClick,
  isActive,
  icon: Icon,
  label,
}: ToolbarButtonProps) => {
  return (
    <button
      className={cn(
        "text-sm h-7 min-w-7 flex `items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
      onClick={onClick}
    >
      {label}
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    {
      label: "Undo",
      icon: Undo2Icon,
      onclick: () => console.log("Undo click"),
    },
  ];
  return (
    <div className="py-0.5 bg-[#F1F4F9] min-h-[40px] px-2.5 rounded-[24px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0]?.map((item) => <ToolBarButton key={item.label} {...item} />)}
    </div>
  );
};
