import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...cls: ClassValue[]) {
	return twMerge(clsx(cls));
}

export function toTitleCase(str: string) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
