import React from "react";

export interface FieldConfig<V = unknown> {
  label?: string;
  name: string;
  value?: V;
}

export type FieldProps<V = unknown> = FieldConfig<V> & {
  onChange: (key: string, val: V) => void;
};

export interface FieldMap<T = unknown> {
  [key: string]: React.FC<FieldProps<T>>;
}

type FieldValue<FMap extends FieldMap = FieldMap> =
  FMap[keyof FMap]["defaultProps"]["value"];

export type FieldComponent<FMap extends FieldMap = FieldMap> = React.FC<
  FieldProps<FieldValue<FMap>>
>;
