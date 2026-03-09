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
export const  booleanSchema=z.object({
  value:z.boolean(),
})

export const singleSelectSchema=z.object({
  value:z.string()
})

export const multiSelectSchema=z.object({
  value:z.array(z.string())
})
export const dateRangeSchema = z.object({
  value: z
    .object({
      start: z.date(),
      end: z.date(),
    })
    .refine((data) => data.start < data.end, {
      message: "The Start date cannot be greater than End date",
    }),
});


export const validationSchemaMapper={
  text:textInputSchema,
  number:numberInputSchema,
  date:dateSingleSchema,
  singleSelect:singleSelectSchema,
  multiSelect:multiSelectSchema,
  boolean:booleanSchema
}
export const rangeValidationMapper={
  date:dateRangeSchema,
  number:numberRangeSchema
}
