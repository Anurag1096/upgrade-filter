import * as z from "zod";
export const textInputSchema = z.object({
  value: z.string(),
});

export const numberInputSchema = z.object({
  value: z.number().min(0),
});
export const numberRangeSchema = z.object({
  value: {
    min: z.number().min(0),
    max: z.number().max(100000),
  },
});
export const dateSingleSchema = z.object({
  value: z.date(),
});

export const dateRangeSchema = z.object({
  value: z
    .object({
      start: z.date(),
      end: z.date(),
    })
    .refine((data) => data.start < data.end, {
      message: "The start date cannot be greater than end date",
    }),
});
