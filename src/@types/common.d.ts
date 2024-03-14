export interface LabelValueType<T = string> {
  label: string;
  value: T;
}

export type LabelValueWithNumberType = LabelValueType<string | number>;
