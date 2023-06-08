import { LANGUAJES, TOPICS } from "@/constants";
import { z } from "zod";

export const RoomSchema = z.object({
  title: z.string().nonempty("Title is required"),
  language: z
    .string()
    .refine((value) => LANGUAJES.some((lang) => lang.id === value), {
      message: "Invalid language selected",
    }),
  level: z.string().nonempty("Level is required"),
  is_public: z.boolean(),
  max_participants: z
    .number()
    .int()
    .min(1, "Minimum participants is 1")
    .max(5, "Maximum participants is 5"),
  topic: z
    .string()
    .refine((value) => TOPICS.some((topic) => topic.id === value), {
      message: "Invalid topic selected",
    }),
});

export type Room = z.infer<typeof RoomSchema>;
